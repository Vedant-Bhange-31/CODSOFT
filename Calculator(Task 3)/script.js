let display = document.getElementById("display");

// Event Listener for all buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function () {
        let value = this.innerText;

        if (value === "C") {
            display.value = "";
        } 
        else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === "=") {
            calculate();
        } 
        else {
            display.value += value;
        }
    });
});

// Calculation logic using if-else
function calculate() {
    let exp = display.value;

    try {
        if (exp.includes('+') || exp.includes('-') || exp.includes('*') || exp.includes('/')) {
            display.value = eval(exp);
        } else {
            display.value = "Invalid";
        }
    } catch {
        display.value = "Error";
    }
}