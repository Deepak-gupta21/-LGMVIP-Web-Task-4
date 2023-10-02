Explanation of the JavaScript functions used in the simple calculator:

1. `let result = "";`: This initializes a variable called `result` to an empty string. This variable is used to store the user's input and the calculation result.

2. `function appendToResult(value)`: This function is called when a user clicks a number or operator button on the calculator. It takes a `value` as an argument, which represents the button pressed. It appends the `value` to the `result` variable and updates the value displayed in the calculator's input field (`document.getElementById("result").value`) with the updated `result`.

3. `function calculateResult()`: This function is called when the user clicks the "=" button to calculate the result of the expression entered in the calculator. It uses the `eval()` function to evaluate the `result` string as a JavaScript expression. If the evaluation is successful, the result is displayed in the input field, and if there's an error in the expression, it displays "Error."

4. `function clearResult()`: This function is called when the user clicks the "C" button to clear the calculator's input field and reset the `result` variable to an empty string. This effectively clears the calculator's memory and allows the user to start a new calculation.

In summary, these functions handle user input, perform calculations using the `eval()` function, and display the results or errors in the calculator's input field. It's a simple implementation suitable for basic arithmetic calculations.