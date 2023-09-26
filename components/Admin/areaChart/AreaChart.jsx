import React , {useEffect , useRef} from 'react'
import Chart from 'chart.js/auto';

const AreaChart = ({data}) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
        useEffect(() => {
            if (data && chartRef.current) {
              const ctx = chartRef.current.getContext('2d');
        
              if (chartInstance.current) {
                chartInstance.current.destroy();
              }
      





              chartInstance.current = new Chart(ctx, {
                type: 'line',
                data: {
                  labels: data.labels,
                  datasets: [
                    {
                      label: 'come to site',
                      data: data.values2,
                      borderColor: '#ffffff',
                      borderWidth: 2,
                      backgroundColor : 'rgb(255, 0, 0)',
                      fill: {
                        target: 'origin',
                        above: 'rgb(255, 0, 0)',   // Area will be red above the origin
                        below: 'rgb(0, 0, 255)'    // And blue below the origin
                      }
                    },
                    {
                      label: 'go for a purchase',
                      data: data.values1,
                      borderColor: '#ffffff',
                      backgroundColor : '#1d5422',
                      borderWidth: 2,
                      fill: {
                        target: 'origin',   // Area will be red above the origin
                        below: '#1d5422'    // And blue below the origin
                      }
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
  return <canvas id = "worldwide-sales" ref={chartRef} width={400} height={200}></canvas>
}

export default AreaChart