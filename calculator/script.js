// Insert a value into the calculator display
function insert(value) {
    document.getElementById('result').value += value;
}

// Clear the entire calculator screen
function clearScreen() {
    document.getElementById('result').value = '';
}

// Delete the last character from the screen
function deleteLast() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

// Calculate the result
function calculate() {
    let currentValue = document.getElementById('result').value;
    try {
        // Evaluate the expression safely
        document.getElementById('result').value = eval(currentValue.replace(/Math.sqrt\(([^)]+)\)/g, 'Math.sqrt($1)') // Handle square root
            .replace(/Math.pow\(([^,]+), ([^)]+)\)/g, 'Math.pow($1, $2)') // Handle power
            .replace(/Math.sin\(([^)]+)\)/g, 'Math.sin($1 * Math.PI / 180)') // Convert degrees to radians
            .replace(/Math.cos\(([^)]+)\)/g, 'Math.cos($1 * Math.PI / 180)') // Convert degrees to radians
            .replace(/Math.tan\(([^)]+)\)/g, 'Math.tan($1 * Math.PI / 180)')); // Convert degrees to radians
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
