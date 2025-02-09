let display = document.getElementById("display");

function toDisplay(input) {
   display.value += input;
}

function toDelete(input) {
   display.value = display.value.slice(0, -1);
}

function clearDisplay() {
   display.value = "";
}

function calculate() {
   display.value = eval(display.value).toFixed(2);
}
