// Date pentru graficul timpului mediu de reparare
var repairTimeData = {
    labels: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie"],
    datasets: [{
        label: 'Timp Mediu de Reparare (ore)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [10, 8, 12, 9, 11, 7] // Datele reale ar trebui să fie aici
    }]
};

// Opțiuni pentru graficul timpului mediu de reparare
var repairTimeOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Inițializare grafic timpul mediu de reparare
var repairTimeChart = new Chart(document.getElementById('repairTimeChart'), {
    type: 'bar',
    data: repairTimeData,
    options: repairTimeOptions
});

// Date pentru graficul randamentului muncii
var workEfficiencyData = {
    labels: ["Curățare carenă", "Vopsitorie", "Debitare", "Sudare"],
    datasets: [{
        label: 'Randamentul Muncii (lucrări pe lună)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [15, 18, 14, 16] // Datele reale ar trebui să fie aici
    }]
};

// Opțiuni pentru graficul randamentului muncii
var workEfficiencyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Inițializare grafic randamentul muncii
var workEfficiencyChart = new Chart(document.getElementById('workEfficiencyChart'), {
    type: 'bar',
    data: workEfficiencyData,
    options: workEfficiencyOptions
});

// Date pentru graficul productivitatii muncii
var labourProductivityData = {
    labels: ["Generare Rapoarte", "Reparatii Sarcini", "Mentenanta", "Sudare"],
    datasets: [{
        label: 'Productivitatea Muncii (ore lucrate)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        data: [120, 130, 110, 125] // Datele reale ar trebui să fie aici
    }]
};

// Opțiuni pentru graficul productivitatii muncii
var labourProductivityOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Inițializare grafic productivitatea muncii
var labourProductivityChart = new Chart(document.getElementById('labourProductivityChart'), {
    type: 'bar',
    data: labourProductivityData,
    options: labourProductivityOptions
});

// Date pentru graficul respectării termenelor de livrare
var deliveryOnTimeRateData = {
    labels: ["Lună 1", "Lună 2", "Lună 3", "Lună 4", "Lună 5", "Lună 6"],
    datasets: [{
        label: 'Respectarea termenelor de livrare (%)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [75, 80, 85, 78, 82, 79] // Datele reale ar trebui să fie aici
    }]
};

// Opțiuni pentru graficul respectării termenelor de livrare
var deliveryOnTimeRateOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Inițializare grafic respectarea termenelor de livrare
var deliveryOnTimeRateChart = new Chart(document.getElementById('deliveryOnTimeRateChart'), {
    type: 'bar',
    data: deliveryOnTimeRateData,
    options: deliveryOnTimeRateOptions
});

// Date pentru graficul ratei de utilizare a capacității
var utilizationRateData = {
    labels: ["Dock 1", "Dock 2", "Dock 3", "Dock 4"],
    datasets: [{
        label: 'Rata de Utilizare a Capacității (%)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        data: [85, 90, 88, 82] // Datele reale ar trebui să fie aici
    }]
};

// Opțiuni pentru graficul ratei de utilizare a capacității
var utilizationRateOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Inițializare grafic pentru rata de utilizare a capacității
var utilizationRateChart = new Chart(document.getElementById('utilizationRateChart'), {
    type: 'bar',
    data: utilizationRateData,
    options: utilizationRateOptions
});

// Date pentru graficul ratei de reparații repetate
var repeatRepairRateData = {
    labels: ["Carenă", "Vopsitorie", "Debitare", "Sudură"],
    datasets: [{
        label: 'Rata de Reparații Repetate (%)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        data: [5, 8, 7, 6] // Datele reale ar trebui să fie aici
    }]
};

// Opțiuni pentru graficul ratei de reparații repetate
var repeatRepairRateOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Inițializare grafic pentru rata de reparații repetate
var repeatRepairRateChart = new Chart(document.getElementById('repeatRepairRateChart'), {
    type: 'bar',
    data: repeatRepairRateData,
    options: repeatRepairRateOptions
});

  // Funcția care deschide manualul de utilizare într-o fereastră nouă
function openManual() {
    window.open('ManualUtilizareTechNav.pdf', '_blank');
}

// Atașați funcția la evenimentul click al butonului
document.getElementById('vertical-text').addEventListener('click', openManual);