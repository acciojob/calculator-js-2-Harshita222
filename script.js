//your JS code here. If required.
const display= documnet.getElementById('display')
const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            display.value = "";
        } else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    });
});
