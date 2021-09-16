var dob = document.querySelector("#b-date");
var luckyNo = document.querySelector("#lucky-no");
var calcBtn = document.querySelector(".calc-btn");
var outputDiv = document.querySelector(".output-div");

calcBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const inputs = inputVal();
  //   inputValidation(inputs);
  //   validationAlert();
  //   BdayluckCalculator();
  //   output();

  console.log(inputs.dobVal, inputs.luckyNoVal);
}

function inputVal() {
  return {
    dobVal: dob.val,
    luckyNoVal: luckyNo.val,
  };
}
