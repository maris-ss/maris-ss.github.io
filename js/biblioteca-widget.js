let canvasPieColor = document.getElementById('pieChartColors');
let ctxColors = canvasPieColor.getContext('2d');

let pieChartColors = new Chart(ctxColors, {
    type: 'doughnut',
    data: {
            labels: ['Crédito A', 'Crédito B', 'Crédito C'],
            datasets: [{
                data: [25, 35, 20, 20],
                    backgroundColor: ['#0263F7', '#E32FF0', '#EFBE0F'],
                    hoverBackgroundColor: ['#0263F7', '#E32FF0', '#EFBE0F'],
                    borderWidth: 0
                }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'right',
                    align: 'bottom',
                    labels: {
                        color: '#A9A9A9',
                        font: {
                          size: 10
                        },
                        boxWidth: 15
                      }
                }
            }
        }
});

let canvasBiblioteca = document.getElementById('bibliotecaCharts');
let ctxBiblioteca = canvasBiblioteca.getContext('2d');

canvasBiblioteca.width = 200;
canvasBiblioteca.height = 100;

let bibliotecaCharts = new Chart(ctxBiblioteca, {
    type: 'bar',
    data: {
        labels: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
        datasets: [{
            label: 'Product 1',
            data: [45, 20, 80, 40, 50, 75],
            backgroundColor: '#E32FF0',
            borderRadius: 4
        }, {
            label: 'Product 2',
            data: [10, 40, 5, 10, 30, 15],
            backgroundColor: '#0263F7',
            borderRadius: 4
        }, {
            label: 'Product 3',
            data: [-25, -50, -25, -45, -10, -2],
            backgroundColor: '#4dffdf',
            borderRadius: 4
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
                grid: {
                    color: '#425166'
                },
                ticks: {
                    color: '#A9A9A9'
                }
            },
            y: {
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

let canvasBiblioteca2 = document.getElementById('bibliotecaCharts2');
let ctxBiblioteca2 = canvasBiblioteca2.getContext('2d');

canvasBiblioteca2.width = 200;
canvasBiblioteca2.height = 100;

let bibliotecaCharts2 = new Chart(ctxBiblioteca2, {
    type: 'line',
    data: {
        labels: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
        datasets: [{
            label: 'Product 1',
            data: [45, 20, 80, 40, 50, 75],
            backgroundColor: 'rgba(227, 47, 240, 0.2)',
            borderColor: '#E32FF0',
            borderWidth: 2,
        }, {
            label: 'Product 2',
            data: [10, 40, 5, 10, 30, 15],
            backgroundColor: 'rgba(2, 99, 247, 0.2)',
            borderColor: '#0263F7',
            borderWidth: 2,
        }, {
            label: 'Product 3',
            data: [-25, -50, -25, -45, -10, -2],
            backgroundColor: 'rgba(77, 255, 223, 0.2)',
            borderColor: '#4dffdf',
            borderWidth: 2,
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
                    color: '#A9A9A9',
                },
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#425166'
                },
                ticks: {
                    color: '#A9A9A9'
                }
            },
            y: {
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




