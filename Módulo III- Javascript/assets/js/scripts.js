var currentNumber = document.getElementById('current-number') = 0;
var currentNumberWrapper = document.getElementById;

function increment() {
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement() {
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
}