let labels1 = ['YES', 'YES BUT IN GREEN'];
let data1 = [69, 31];
let colors1 = ['#49A9EA', '#36CAAB'];

let myChart1 = document.getElementById("myChart").getContext('2d'); //getting the id myChart from index.html line 11

let chart1 = new Chart(myChart1, {
    type: doughnut,
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgrounColor: colors1
        }]
    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    }
});