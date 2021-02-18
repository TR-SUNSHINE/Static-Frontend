var myChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            data: [1, 2, 3, 4, 5, 3, 2, 4, 4, 4, 5, 3],
            label: "Star Rating",
            borderColor: "#296EB4",
            fill: true
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 5,
                    stepSize: 1,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Stars'
                }
            }]
        }
    }
});

