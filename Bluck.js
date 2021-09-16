var dob = document.querySelector("#b-date");
var luckyNo = document.querySelector("#lucky-no");
var calcBtn = document.querySelector(".calc-btn");
var outputDiv = document.querySelector(".output-div");

calcBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const inputs = inputVal();

  if (inputValidation(inputs)) {
    bdayluckCalculator(inputs);
  } else {
    validationAlert();
  }

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

function bdayluckCalculator(inputs) {
  const dobVal = inputs.dobVal.replaceAll("-", "");
  console.log(dobVal[0]);
  var sum = 0;
  for (i = 0; i < dobVal.length; i++) {
    sum += parseFloat(dobVal[i]);
  }
  console.log("sum", sum);

  output(sum, inputs);
}

function output(sum, inputs) {
  if (sum % inputs.luckyNoVal == 0) {
    outputDiv.innerText = "Your Birthday is LUCKY";
  } else {
    outputDiv.innerText = "Your Birthday is UNLUCKY";
  }
}
