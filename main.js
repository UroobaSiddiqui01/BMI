// Function to calculate BMI
function calculateBMI() {
    // Get height and weight from input fields
    var heightInput = document.getElementById('height');
    var weightInput = document.getElementById('weight');
    var resultDiv = document.getElementById('result');
    // Parse input values
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = 'Please enter valid numbers for height and weight. 🛑';
        return;
    }
    // Convert height from cm to meters
    var heightInMeters = height / 100;
    // Calculate BMI
    var bmi = weight / (heightInMeters * heightInMeters);
    // Determine BMI category
    var category;
    var emoji;
    if (bmi < 18.6) {
        category = 'Underweight';
        emoji = '😟';
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        category = 'Normal range';
        emoji = '😊';
    }
    else {
        category = 'Overweight';
        emoji = '⚠️';
    }
    // Display result with emoji
    resultDiv.innerHTML = "Your BMI is ".concat(bmi.toFixed(2), " (").concat(category, ") ").concat(emoji);
    // Reset the form immediately
    var form = document.querySelector('form');
    form.reset();
}
// Add event listener to the button
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('button');
    button.addEventListener('click', calculateBMI);
});