let ctx = document.getElementById('analiseCharts').getContext('2d');
let analiseCharts = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
        datasets: [{
            label: 'Créditos',
            data: [45, 20, 80, 40, 50, 75],
            backgroundColor: '#E32FF0',
            borderWidth: 0
        }, {
            label: 'Débitos',
            data: [10, 40, 5, 10, 30, 15],
            backgroundColor: '#0263F7',
            borderWidth: 0
        }]
    },
    options: {
        responsive: true, 
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                align: 'start',
                labels: {
                    color: '#A9A9A9' 
                },
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    color: '#425166' 
                },
                ticks: {
                    color: '#A9A9A9' 
                }
            },
            y: {
                stacked: true,
                grid: {
                    color: '#425166' 
                },
                ticks: {
                    color: '#A9A9A9'
                }
            }
        }
    }
});