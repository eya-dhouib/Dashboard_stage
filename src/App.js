import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as Chartjs, LineElement, CategoryScale, LinearScale, PointElement, BarElement } from 'chart.js';
import './style.module.css'; // Import des styles

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement, BarElement);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderDash: [0],
      },
    },
  },
};

function App() {
  const [xAxis, setXAxis] = useState('jour');
  const [yAxis, setYAxis] = useState('F');
  const [graphType, setGraphType] = useState('line');
  const [chartData, setChartData] = useState(null);
  const [combinedData, setCombinedData] = useState(null);

  const handleGraphTypeChange = (e) => {
    setGraphType(e.target.value);
  };

  useEffect(() => {
    const lineDataF = {
      labels: ['1 jan', '2 jan', '3 jan', '4 jan', '5'],
      datasets: [
        {
          label: 'Line Chart Femme',
          data: [200, 150, 100, 100, 250],
          fill: false,
          borderColor: 'blue',
          backgroundColor: 'red',
        },
      ],
    };
  
    const lineDataH = {
      labels: ['1 jan', '2 jan', '3 jan', '4 jan', '5'],
      datasets: [
        {
          label: 'Line Chart Homme',
          data: [100, 20, 200, 70, 250],
          fill: false,
          borderColor: 'blue',
          backgroundColor: 'red',
        },
      ],
    };

    const barDataF = {
      labels: ['1 jan', '2 jan', '3 jan', '4 jan', '5 jan'],
      datasets: [
        {
          label: 'Bar Chart',
          data: [200, 150, 100, 100, 230],
          backgroundColor: 'orange',
        },
      ],
    };
    const barDataH = {
      labels: ['1 jan', '2 jan', '3 jan', '4 jan', '5 jan'],
      datasets: [
        {
          label: 'Bar Chart',
          data: [100, 20, 200, 70, 250],
          backgroundColor: 'orange',
        },
      ],
    };

    if (graphType === 'line' && xAxis === 'jour' && yAxis === 'F') {
      setChartData(lineDataF);
    } else if (graphType === 'line' && xAxis === 'jour' && yAxis === 'H') {
      setChartData(lineDataH);
    } else if (graphType === 'line' && xAxis === 'jour' && yAxis === 'all') {
      const combinedDataPoints = lineDataF.datasets[0].data.map((value, index) => {
        return value + lineDataH.datasets[0].data[index];
      });

      
     // setChartData(null);
    //  setCombinedData(combinedData);
    } else if (graphType === 'histogram' && xAxis === 'jour' && yAxis === 'F') {
      setChartData(barDataF);
    } else if (graphType === 'histogram' && xAxis === 'jour' && yAxis === 'H') {
      setChartData(barDataH);
    } else if (graphType === 'histogram' && xAxis === 'jour' && yAxis === 'all') {
      const combinedDataPoints = barDataF.datasets[0].data.map((value, index) => {
        return value + barDataH.datasets[0].data[index];
      });

      const combinedData = {
        labels: barDataF.labels,
        datasets: [
          {
            label: 'Combined Chart',
            data: combinedDataPoints,
            fill: false,
            borderColor: 'green',
            backgroundColor: 'yellow',
          },
        ],
      };
    //  setChartData(null);
     // setCombinedData(combinedData);
     const resultData = {
      labels: barDataF.labels,
      datasets: [
        {
          label: 'result Chart',
          data: combinedDataPoints,
          fill: false,
          borderColor: 'green',
          backgroundColor: 'yellow',
        },
      ],
    };
    }
  }, [graphType, xAxis, yAxis]);
  return (
    <div style={{ width: '500px', height: '500px', marginLeft: '20px', display: 'flex', flexDirection: 'column' }}>
    <div class="div1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <h1 style={{marginRight : '50px',textAlign:'center'}}> Entreprise name </h1>
    
 <h4>year:
        <select name="year" id="year">
          <option value="1">2023</option>
          <option value="2">2024</option>
        </select>
      </h4>
      <h4>month:
        <select name="month" id="month">
          <option value="m1">janvier</option>
          <option value="m2">fevrier</option>
          <option value="m3">mars</option>
          <option value="m4">avril</option>
          <option value="m5">mai</option>
          <option value="m6">juin</option>
        </select>
      </h4>
      <h4>day number:
        <select name="num" id="num">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
        </select>
      </h4>
      <h4>day name:
        <select name="x" id="x">
          <option value="lundi">lundi</option>
          <option value="mardi">mardi</option>
          <option value="mercredi">mercredi</option>
          <option value="jeudi">jeudi</option>
          <option value="vendredi">vendredi</option>
          <option value="samedi">samedi</option>
          <option value="dimanche">dimanche</option>
        </select>
      </h4>
      <h4>week:
        <select name="x" id="x" value={xAxis} onChange={(e) => setXAxis(e.target.value)}>
          <option value="w1">week 1</option>
          <option value="w2">week 2</option>
          <option value="w3">week 3</option>
          <option value="w4">week 4</option>
        </select>
      </h4>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div class="div2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <h4>Area:</h4>
        <select name="y" id="y"  >
          <option value="Area1">Area1</option>
          <option value="Area2">Area2</option>
          <option value="Area3">Area3</option>
        </select>
        <h4>zone</h4>
        <select name="y" id="y"  >
          <option value="zone1"> zone1</option>
          <option value="zone2"> zone1</option>
          <option value="zone3">zone3</option>
        </select> <h4>session</h4>
        <select name="y" id="y"  >
          <option value="session1">matin</option>
          <option value="session2">midi</option>
          <option value="session3">nuit</option>
        </select>
        <h4>L'axe y:</h4>
        <select name="y" id="y" value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
          <option value="F">Nombre visiteurs femmes</option>
          <option value="H">Nombre visiteurs hommes</option>
          <option value="all">Nombre de tous les visiteurs</option>
        </select>
        <h4>Type de graphe:</h4>
        <select name="graphe" id="graphe" value={graphType} onChange={handleGraphTypeChange}>
          <option value="line">Line</option>
          <option value="histogram">Histogram</option>
        </select>
      </div>
      <div style={{ marginLeft:'10px', flex: 1 }}>
        {chartData && (
          <div>
            {graphType === 'line' && (
              <div>
        <h4>{graphType === 'line' && yAxis === 'F' ? ' woman Visitor line ' : 'Man Visitor line '}</h4>
                <Line data={chartData} options={options} />
                <button onClick={() => setChartData(null)}>Supprimer</button>
              </div>
            )}
            {graphType === 'histogram' && (
              <div>
        <h4>{graphType === 'histogram' && yAxis === 'F' ? 'women Visitor histogram ' : ' Man Visitor histogram '}</h4>
                <Bar data={chartData} options={options} />
                <button onClick={() => setChartData(null)}>Supprimer</button>

              </div>
            )}
          </div>
        )}
        {combinedData && (
          <div>
            {graphType === 'line' && (
              <div>
        <h4>{ yAxis === 'all' ? 'All Visitor line ' : 'All Visitor line '}</h4>
                <Line data={combinedData} options={options} />
                <button onClick={() => setCombinedData(null)}>Supprimer</button>

              </div>
            )}
            {graphType === 'histogram' && (
              <div>
        <h4>{ yAxis === 'all' ? 'All Visitor histogram ' : 'All Visitor histogram '}</h4>
                <Bar data={combinedData} options={options} />
                <button onClick={() => setCombinedData(null)}>Supprimer</button>

              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
  
  
  
  );
}export default App;
