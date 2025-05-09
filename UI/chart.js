let data_temp = [];
let data_humi = [];
let data_light = [];
let data_time_temp = [];
let data_time_humi = [];
let data_time_light = [];
let data_value_temp = [];
let data_value_humi = [];
let data_value_light = [];

// Function to create and update the charts

// Configuration for the chart
const config_temp = {
    type: "line",
    data: {
        labels: data_time_temp,
        datasets: [
            {
                label: "Nhiệt độ",
                data: data_value_temp,
                fill: true,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    },
    options: {
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        pointStyle: "line",
    },
};
const config_humi = {
    type: "line",
    data: {
        labels: data_time_humi,
        datasets: [
            {
                label: "Nhiệt độ",
                data: data_value_humi,
                fill: true,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    },
    options: {
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        pointStyle: "line",
    },
};
const config_light = {
    type: "line",
    data: {
        labels: data_time_light,
        datasets: [
            {
                label: "Nhiệt độ",
                data: data_value_light,
                fill: true,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    },
    options: {
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        pointStyle: "line",
    },
};
const ctx1 = document.getElementById("myChart1").getContext("2d");
const ctx2 = document.getElementById("myChart2").getContext("2d");
const ctx3 = document.getElementById("myChart3").getContext("2d");

// Create the charts
const chart_temp = new Chart(ctx1, config_temp);
const chart_humi = new Chart(ctx2, config_humi);
const chart_light = new Chart(ctx3, config_light);

// Function to update data_time and data_value arrays
function updateChartTemp(temp_chart) {
    if (data_temp.length == 0) {
        let n = 101;
        for (let i = 1; i <= n; i++) {
            data_temp.push(temp_chart.data[temp_chart.data.length - n + i]);
        }
    }
    console.log("data_temp length:", data_temp.length); // Check the length of data_chart
    for (let i = 0; i < 99; i++) {
        console.log(data_temp[i][0]);
        console.log(data_temp[i][1]);
        data_time_temp[i] = data_temp[i][0].slice(11, 16); // Corrected index to 0 for timestamp
        data_value_temp[i] = data_temp[i][1];
    }
    // config.data.label = data_time_temp;
    // config.data.datasets[0].data = data_value_temp;
    chart_temp.update();
    // console.log(data_time_temp);
    // console.log(data_value_temp);
    // Create and update the charts
}
function updateChartHumi(humi_chart) {
    if (data_humi.length == 0) {
        let n = 101;
        for (let i = 1; i <= n; i++) {
            data_humi.push(humi_chart.data[humi_chart.data.length - n + i]);
        }
    }
    console.log("data_humi length:", data_humi.length); // Check the length of data_chart
    for (let i = 0; i < 99; i++) {
        console.log(data_humi[i][0]);
        console.log(data_humi[i][1]);
        data_time_humi[i] = data_humi[i][0].slice(11, 16); // Corrected index to 0 for timestamp
        data_value_humi[i] = data_humi[i][1];
    }
    // config.data.label = data_time_humi;
    // config.data.datasets[0].data = data_value_humi;
    chart_humi.update();
    // console.log(data_time_humi);
    // console.log(data_value_humi);
    // Create and update the charts
}
function updateChartLight(light_chart) {
    if (data_light.length == 0) {
        let n = 101;
        for (let i = 1; i <= n; i++) {
            data_light.push(light_chart.data[light_chart.data.length - n + i]);
        }
    }
    console.log("data_light length:", data_light.length); // Check the length of data_chart
    for (let i = 0; i < 99; i++) {
        console.log(data_light[i][0]);
        console.log(data_light[i][1]);
        data_time_light[i] = data_light[i][0].slice(11, 16); // Corrected index to 0 for timestamp
        data_value_light[i] = data_light[i][1];
    }
    // config.data.label = data_time_light;
    // config.data.datasets[0].data = data_value_light;
    chart_light.update();
    // console.log(data_time_light);
    // console.log(data_value_light);
    // Create and update the charts
}
// Fetch data from Adafruit API
setInterval(function () {
    $.getJSON(
        "https://io.adafruit.com/api/v2/ThanhLe1403/feeds/cambien3/data/chart",
        updateChartTemp
    );
}, 5000);
setInterval(function () {
    $.getJSON(
        "https://io.adafruit.com/api/v2/ThanhLe1403/feeds/cambien4/data/chart",
        updateChartHumi
    );
}, 5000);
setInterval(function () {
    $.getJSON(
        "https://io.adafruit.com/api/v2/ThanhLe1403/feeds/cambien2/data/chart",
        updateChartLight
    );
}, 5000);
