var dob = document.querySelector("#b-date");
var luckyNo = document.querySelector("#lucky-no");
var calcBtn = document.querySelector(".calc-btn");
var outputDiv = document.querySelector(".output-div");

calcBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const inputs = inputVal();

  console.log(inputs.dobVal, inputs.luckyNoVal);
}

function inputVal() {
  return {
    dobVal: dob.value,
    luckyNoVal: parseFloat(luckyNo.value),
  };
}

function inputValidation(inputs) {
  if (isNaN(inputs.luckyNoVal) || inputs.dobVal == "") return false;
  if (inputs.luckyNoVal <= 0) return false;
  return true;
}

function validationAlert() {
  outputDiv.innerText = "Enter appropriate inputs";
}
