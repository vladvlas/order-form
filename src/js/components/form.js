const button = document.querySelector('.info__btn');
button.addEventListener('click', function () {
  console.log('Button clicked');
  let productCard = document.querySelector('.product-card');
  let formBlock = document.querySelector('.form-block');

  formBlock.style.display = "block";
  productCard.style.display = "none";
});












let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  let x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    let productCard = document.querySelector('.product-card');
    let pag = document.querySelector('.pagination');

    productCard.style.display = "block";
    pag.style.display = "none";
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  let x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  //y = x[currentTab].getElementsByTagName("input");
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
//   else {
//       document.getElementsByClassName('.pagination').className += " dnone"
//   }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}