
import React , {useEffect , useRef} from 'react'
import Chart from 'chart.js';
const PieChart = ({data}) => {
    const chartRef = useRef(null);
const chartInstance = useRef(null);
    useEffect(() => {
        if (data && chartRef.current) {
          const ctx = chartRef.current.getContext('2d');
    
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }
    
          chartInstance.current = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: data.labels,
              datasets: [
                {
                  label: 'Sample Data',
                  data: data.values,
                  backgroundColor: [
                    '#de9d26',
                    '#77bfa5',
                    '#cc0e0e',
                    '#1d5422',
                  ],
                  borderColor: '#ffffff',
                  borderWidth: 2,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }
      }, [data]);
    
  return     <canvas id = "worldwide-sales" ref={chartRef} width={400} height={200}></canvas>
  
}

export default PieChart