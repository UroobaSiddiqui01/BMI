// Function to calculate BMI
function calculateBMI(): void {
    // Get height and weight from input fields
    const heightInput = document.getElementById('height') as HTMLInputElement;
    const weightInput = document.getElementById('weight') as HTMLInputElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;

    // Parse input values
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = 'Please enter valid numbers for height and weight. 🛑';
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Determine BMI category
    let category: string;
    let emoji: string;
    if (bmi < 18.6) {
        category = 'Underweight';
        emoji = '😟';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = 'Normal range';
        emoji = '😊';
    } else {
        category = 'Overweight';
        emoji = '⚠️';
    }

    // Display result with emoji
    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category}) ${emoji}`;

    // Reset the form immediately
    const form = document.querySelector('form') as HTMLFormElement;
    form.reset();
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button') as HTMLButtonElement;
    button.addEventListener('click', calculateBMI);
});