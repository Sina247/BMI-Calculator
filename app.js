function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  const resultDiv = document.getElementById("result");

  if (!weight || !height || height <= 0) {
    resultDiv.innerText = "Please enter valid weight and height.";
    return;
  }

  if (height > 3) {
    height = height / 100;
  }

  const bmi = weight / (height * height);
  const bmiRounded = bmi.toFixed(2);
  let message = "";

  if (bmi < 18.5) {
    message = "Underweight 😟";
  }

  else if (bmi < 24.9) {
    message = "Normal weight ✅";
  }

  else if (bmi < 29.9) {
    message = "Overweight ⚠️";
  }

  else {
    message = "Obesity ❌";
  }

  resultDiv.innerHTML = `💡 Your BMI: <strong>${bmiRounded}</strong><br>${message}`;
}
