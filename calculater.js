// Function to append a value to the input field
function appendToResult(value) {
    var resultField = document.getElementById('result');
    resultField.value += value;
  }
  
  // Function to calculate the result
  function calculateResult() {
    var resultField = document.getElementById('result');
    var result = eval(resultField.value);
    resultField.value = result;
  }
  
  // Function to clear the input field
  function clearResult() {
    var resultField = document.getElementById('result');
    resultField.value = '';
  }
  
  // Get all the number buttons
  var numberButtons = document.querySelectorAll('.number');
  numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var value = button.textContent;
      appendToResult(value);
    });
  });
  
//   // Get all the operator buttons
//   var operatorButtons = document.querySelectorAll('.operator');
//   operatorButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       var value = button.textContent;
//       appendToResult(value);
//     });
//   });
  
  // Get the equal button
  var equalButton = document.querySelector('.equal');
  equalButton.addEventListener('click', function() {
    calculateResult();
  });
  
  // Get the clear button
  var clearButton = document.querySelector('.clear');
  clearButton.addEventListener('click', function() {
    clearResult();
  });
  