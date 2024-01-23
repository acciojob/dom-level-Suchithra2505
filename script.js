//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  // Get the element with id 'level'
  const targetElement = document.getElementById('level');

  // Initialize a variable to count the DOM level
  let domLevel = 0;

  // Loop through parent elements until reaching the root HTML element
  while (targetElement.parentElement) {
    targetElement = targetElement.parentElement;
    domLevel++;
  }

  // Display the result using alert()
  alert('The level of the element is: ' + domLevel);
});
