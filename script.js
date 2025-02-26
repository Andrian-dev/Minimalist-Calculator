// Developed by Andrian-dev

// Get the display element
const display = document.getElementById('display');

// Append value to the display
function appendValue(value) {
  const lastChar = display.value.slice(-1);

  // Prevent multiple operators in a row
  if (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(lastChar)) {
    return;
  }
  
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the result
function calculate() {
  try {
    // Evaluate the expression only if it's valid
    if (display.value.trim() !== "") {
      display.value = eval(display.value);
    }
  } catch (error) {
    alert('Invalid Expression');
    clearDisplay();
  }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
  if (!isNaN(event.key) || ["+", "-", "*", "/", "."].includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});
