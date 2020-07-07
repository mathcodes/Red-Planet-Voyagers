window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};


var barChartData = {
    labels: [],

    datasets: [{
        label: 'Min',
        backgroundColor: [
            window.chartColors.blue,
            window.chartColors.blue,
            window.chartColors.blue,
            window.chartColors.blue,
            window.chartColors.blue
        ],
        yAxisID: 'Min',

        data: []
    }, {
        label: 'Max',
        backgroundColor: [
            window.chartColors.orange,
            window.chartColors.orange,
            window.chartColors.orange,
            window.chartColors.orange,
            window.chartColors.orange
        ],
        yAxisID: 'Max',

        data: []
    }]
};

//put the chart in a function so we can get the data from the API as opposed it being global becuase there would be no data. global runs when you first run the page so we wouldn't have run the API yet.
function createBarChart(data) {
    var ctx = document.getElementById('canvas').getContext('2d');

    // POPULATE CHART DATA WITH API CALL
    barChartData.labels = data.labels;
    barChartData.datasets[0].data = data.min;
    barChartData.datasets[1].data = data.max;

    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Mars 5-Day Min/Max Temperatures',
                fontColor: '#ee5f00',
                fontSize: 30
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            legend: {
                labels: {
                    fontColor: '#ee5f00',
                    boxWidth: 80
                }
            },
            // legend: {
            //     display: true,
            //     labels: {
            //         fontColor: 'rgb(255, 99, 132)'
            //     }
            // },

            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Sol Day",
                        fontColor: '#ee5f00',
                        fontSize: 20
                    }
                }],
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'Min',
                    scaleLabel: {
                        display: true,
                        labelString: "Min Temp (°F)",
                        fontColor: 'rgb(54, 162, 235)',
                        fontSize: 20
                    }
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'Max',
                    scaleLabel: {
                        display: true,
                        labelString: "Max Temp (°F)",
                        fontColor: 'rgb(255, 159, 64)',
                        fontSize: 20
                    },
                    gridLines: {
                        drawOnChartArea: true,
                        color: '#ee5f00'
                    }
                }],
            }
        }
    });
};