let totalSkips = Number(localStorage.getItem("totalSkips")) || 0;

updateDashboard();

function addSkips(){

    let skips = Number(document.getElementById("skips").value);

    if(skips <= 0){
        alert("Enter valid skips");
        return;
    }

    totalSkips += skips;

    localStorage.setItem("totalSkips", totalSkips);

    updateDashboard();

    document.getElementById("skips").value = "";
}

function updateDashboard(){

    document.getElementById("totalSkips").innerText = totalSkips;

    document.getElementById("calories").innerText =
        Math.round(totalSkips * 0.14);

    document.getElementById("goalPercent").innerText =
        ((totalSkips / 1000000) * 100).toFixed(2);
}

function calculateBMI(){

    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value)/100;

    if(weight <= 0 || height <= 0){
        document.getElementById("bmiResult").innerText =
        "Enter valid values";
        return;
    }

    let bmi = weight / (height * height);

    let category = "";

    if(bmi < 18.5)
        category = "Underweight";
    else if(bmi < 25)
        category = "Normal";
    else if(bmi < 30)
        category = "Overweight";
    else
        category = "Obese";

    document.getElementById("bmiResult").innerHTML =
        "BMI: " + bmi.toFixed(1) + " (" + category + ")";
}

function toggleDarkMode(){
    document.body.classList.toggle("dark");
}