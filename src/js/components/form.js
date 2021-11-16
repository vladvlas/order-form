const button = document.querySelector('.info__btn');
button.addEventListener('click', function () {
  console.log('Button clicked');
  let productCard = document.querySelector('.product-card');
  let formBlock = document.querySelector('.form-block');
  let overView = document.querySelector('.overview');

  formBlock.style.display = "block";
  productCard.style.display = "none";
  overView.style.display = "none";
});



let currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  fixStepIndicator(n)
}

function nextPrev(n) {
  let x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    let productCard = document.querySelector('.product-card');
    let pag = document.querySelector('.pagination');
    let overView = document.querySelector('.overview');

    productCard.style.display = "block";
    overView.style.display = "block";
    pag.style.display = "none";
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  let x, valid = true;
  x = document.getElementsByClassName("tab");
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  let i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}