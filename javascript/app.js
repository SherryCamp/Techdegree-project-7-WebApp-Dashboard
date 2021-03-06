/* Notfications Dropdown Menu */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

/* Alert Banner */

const alertBanner = document.getElementById("alert");

// create the html for the banner
alertBanner.innerHTML =
    `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have  unread messages</p>
        <p class="alert-banner-close">x</p>
    </div>
    `
;
    alertBanner.addEventListener('click', e => {
        const element = e.target;
        if (element.classList.contains("alert-banner-close")) {
            alertBanner.style.display = "none";
        }
    });

/* Chart Widgets */

// traffic widget

const chartData = [
    {"points": [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 1750],
    "labels": ["12-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12"]},
    {"points": [650, 950, 2150, 650, 2350, 500, 1700],
    "labels": ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]},
    {"points": [500, 850, 2050, 250, 1500, 300, 2100, 1000],
    "labels": ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"]},
    {"points": [200, 1450, 750, 2250, 500, 800, 2250, 950, 1650, 800, 1700, 750],
    "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]},
];

const trafficCanvas = document.getElementById("traffic-chart");

// data for traffic line chart
let trafficData = {
    labels: chartData[0].labels,
    datasets: [{
        data: chartData[0].points,
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderColor: '#A9ACE5',
        borderWidth: 2,
        lineTension: 0,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#7477BF',
        pointBorderWidth: 2,
        pointRadius: 4
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 1000
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

function addData(chart, label, data) {
    chart.data.labels = [];
    chart.data.datasets.data = [];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = data;
    });
    label.forEach((lab) => {
        chart.data.labels.push(lab);
    });
    chart.update();
}

const listItems = document.querySelectorAll(".traffic-nav li");

for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('click', function (event) {
        const active = document.querySelector(".active");
        active.className = event.target.className.replace(" active", "");
        this.className += " active";
        addData(trafficChart, chartData[i].labels, chartData[i].points);
    });
}

// daily widget

const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
    const dailyOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
        }
    };

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// mobile widget

const mobileCanvas = document.getElementById("mobile-chart");

// data for mobile chart
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

/* Messaging Section */

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

/* This event listener listens for any click events in the username and message input fields and diplays the relevant message based on the value. */

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    if (user.value !== "" && message.value !== "") {
        user.value === "" && message.value === "";
    }
});

/* Settings Section */

const emailToggle = document.getElementById('email-toggle');
const profileToggle = document.getElementById('profile-toggle');
const timeZone = document.getElementById('timezone');

/* These event listeners listen for any click events in the settings section and save the settings to local storage. */

document.getElementById('save').addEventListener('click', () => {
    localStorage.setItem('email', emailToggle.checked);
    localStorage.setItem('profile', profileToggle.checked);
    localStorage.setItem('time', timeZone.selectedIndex);
});

document.getElementById('cancel').addEventListener('click', () => {
    if (emailToggle.checked = true) {
        emailToggle.checked = false;
    }
    if (profileToggle.checked = true) {
        profileToggle.checked = false;
    }
    if (timeZone.selectedIndex != 0) {
        timeZone.selectedIndex = 0;
    }

    localStorage.removeItem('email');
    localStorage.removeItem('profile');
    localStorage.removeItem('time');
});

emailToggle.checked = JSON.parse(localStorage.getItem('email'));
profileToggle.checked = JSON.parse(localStorage.getItem('profile'));
timeZone.selectedIndex = localStorage.getItem('time');

