/* function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    const bmi = weight / ((height / 100) * (height / 100));

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
}
function calculateCalories() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const activityLevel = parseFloat(document.getElementById("activityLevel").value);
  
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    const tdee = bmr * activityLevel;
  
    document.getElementById("result").innerText = `Your Basal Metabolic Rate (BMR) is ${bmr.toFixed(2)} calories/day. Your Total Daily Energy Expenditure (TDEE) is ${tdee.toFixed(2)} calories/day.`;
  }
  const form = document.getElementById('uploadForm');
const fileInput = document.getElementById('file');
const progressBar = document.getElementById('progress');
const messageBox = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'upload.php');

    xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
            const percentComplete = (e.loaded / e.total) * 100;
            progressBar.innerHTML = `Progress: ${Math.round(percentComplete)}%`;
        }
    };

    xhr.onload = function() {
        if (xhr.status === 200) {
            messageBox.innerHTML = xhr.responseText;
        } else {
            messageBox.innerHTML = 'An error occurred while uploading the file.';
        }
    };

    xhr.send(formData);
});
function calculateRisk() {
    const age = parseInt(document.getElementById("age").value);
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const familyHistory = parseInt(document.getElementById("familyHistory").value);
    const physicalActivity = parseInt(document.getElementById("physicalActivity").value);
  
    // Calculate BMI
    const bmi = weight / ((height / 100) * (height / 100));
  
    // Assess risk based on BMI, age, family history, and physical activity
    let risk = 0;
    if (bmi >= 25) risk += 3;
    if (age >= 45) risk += 4;
    if (familyHistory === 1) risk += 3;
    if (physicalActivity === 1) risk += 3;
  
    let riskCategory;
    if (risk <= 3) riskCategory = "Low";
    else if (risk <= 6) riskCategory = "Moderate";
    else riskCategory = "High";
  
    document.getElementById("result").innerText = `Your diabetes risk category is ${riskCategory}.`;
  }
   */
  function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    const bmi = weight / ((height / 100) * (height / 100));

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Set result in BMI calculator's result div
    document.getElementById("bmiResult").innerText = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
}

function calculateRisk() {
    const age = parseInt(document.getElementById("age").value);
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const familyHistory = parseInt(document.getElementById("familyHistory").value);
    const physicalActivity = parseInt(document.getElementById("physicalActivity").value);
  
    // Calculate BMI
    const bmi = weight / ((height / 100) * (height / 100));
  
    // Assess risk based on BMI, age, family history, and physical activity
    let risk = 0;
    if (bmi >= 25) risk += 3;
    if (age >= 45) risk += 4;
    if (familyHistory === 1) risk += 3;
    if (physicalActivity === 1) risk += 3;
  
    let riskCategory;
    if (risk <= 3) riskCategory = "Low";
    else if (risk <= 6) riskCategory = "Moderate";
    else riskCategory = "High";
  
    // Set result in Diabetes Risk calculator's result div
    document.getElementById("diabetesResult").innerText = `Your diabetes risk category is ${riskCategory}.`;
}

function calculateCalories() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const activityLevel = parseFloat(document.getElementById("activityLevel").value);
  
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    const tdee = bmr * activityLevel;
  
    // Set result in Calorie calculator's result div
    document.getElementById("caloriesResult").innerText = `Your Basal Metabolic Rate (BMR) is ${bmr.toFixed(2)} calories/day. Your Total Daily Energy Expenditure (TDEE) is ${tdee.toFixed(2)} calories/day.`;
}

/* ----------------------------medicines--------------------------------------------- */
document.getElementById('add-to-cart').addEventListener('click', function() {
	// Add to cart logic
});

document.getElementById('submit-review').addEventListener('click', function() {
	// Submit review logic
});




