
let ctxWidget = document.getElementById('widgetChart').getContext('2d');

document.getElementById('widgetChart').width = 200; 
document.getElementById('widgetChart').height = 100;

let widgetChart = new Chart(ctxWidget, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Product 1',
      data: [15, 15, 35, 40, 70, 10],
      backgroundColor: 'cornflowerblue',
      borderWidth: 0
    }, {
      label: 'Product 2',
      data: [35, 90, 90, 55, 35, 110],
      backgroundColor: 'orchid',
      borderWidth: 0,
    }, {
      label: 'Product 3',
      data: [25, 90, 25, 55, 10, 0],
      backgroundColor: '#dcd6ab',
      borderWidth: 0
    }]
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false, 
    indexAxis: 'y',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'start',
        labels: {
          color: '#fff', 
          font: {
            size: 8 
          },
          boxWidth: 20
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: '#425166' 
        },
        ticks: {
          color: '#A9A9A9', 
          font: {
            size: 8 
          }
        }
      },
      y: {
        grid: {
          color: '#425166' 
        },
        ticks: {
          color: '#A9A9A9', 
          font: {
            size: 8 
          }
        }
      }
    }
  }
});

