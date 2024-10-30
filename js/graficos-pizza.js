let ctxGreen = document.getElementById('pieChartGreen').getContext('2d');
let pieChartGreen = new Chart(ctxGreen, {
    type: 'pie',
    data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D'],
            datasets: [{
                data: [25, 35, 20, 20],
                    backgroundColor: ['#09BC8A', '#3AD98A', '#A3EEC8', '#0E7558'],
                    hoverBackgroundColor: ['#09BC8A', '#3AD98A', '#A3EEC8', '#0E7558'],
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
                          size: 6
                        },
                        boxWidth: 15
                      }
                }
            }
        }
});

let ctxBlue = document.getElementById('pieChartBlue').getContext('2d');
let pieChartBlue = new Chart(ctxBlue, {
    type: 'pie',
    data: {
            labels: ['Débito A', 'Débito B', 'Débito C', 'Débito D'],
            datasets: [{
                data: [25, 35, 20, 20],
                    backgroundColor: ['#0263F7', '#134797', '#143261', '#93B7EF'],
                    hoverBackgroundColor: ['#0263F7', '#134797', '#143261', '#93B7EF'],
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
                          size: 12
                        },
                        boxWidth: 30
                      }
                }
            }
        }
});

let ctxPurple = document.getElementById('pieChartPurple').getContext('2d');
let pieChartPurple = new Chart(ctxPurple, {
    type: 'pie',
    data: {
            labels: ['Crédito 1', 'Crédito 2', 'Crédito 3', 'Crédito 4'],
            datasets: [{
                data: [20, 40, 15, 25],
                    backgroundColor: ['#E32FF0', '#E5A9E9', '#8E0F97', '#501554'],
                    hoverBackgroundColor: ['#E32FF0', '#E5A9E9', '#8E0F97', '#501554'],
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
                          size: 12
                        },
                        boxWidth: 30
                      }
                }
            }
        }
});