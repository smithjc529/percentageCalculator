let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let resultField = document.getElementById('resultField');
const form = document.getElementById('calculator');

form.addEventListener('submit', function(event) {
    let x = parseFloat(num1.value);
    let y = parseFloat(num2.value);

        if (!num1.value || !num2.value) {
            alert("Please enter numeric values in both fields.");
        } else {
            let input = x / y;
            let percent = input * 100;
            
            resultField.innerText = x + " is " + percent + "% of " + y;
            event.preventDefault();
        }
});