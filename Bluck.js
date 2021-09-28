var dob = document.querySelector("#b-date");
var luckyNo = document.querySelector("#lucky-no");
var calcBtn = document.querySelector(".calc-btn");
var outputDiv = document.querySelector(".output-div");
var Gif = document.getElementById("gif");
var info = document.getElementById("info");
var privNotice = document.getElementById("pri-note");
var cross = document.getElementById("cross");

Gif.style.display = "none";

info.addEventListener("click", () => {
  privNotice.style.display = "inline";
});
cross.addEventListener("click", () => {
  privNotice.style.display = "none";
});

calcBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const inputs = inputVal();

  if (inputValidation(inputs)) {
    let dateSum = bdayluckCalculator(inputs);
    output(dateSum);
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
  const dobVals = inputs.dobVal.replaceAll("-", "");
  console.log(dobVals);
  var sum = 0;
  for (i = 0; i < dobVals.length; i++) {
    sum += parseFloat(dobVals[i]);
  }
  console.log(sum);
  return { sum, inputs };
}

function output(dateSum) {
  outputDiv.innerText = null;

  Gif.style.display = "block";
  console.log(Gif.style.display);
  setTimeout(() => {
    Gif.style.display = "none";

    if (dateSum.sum % dateSum.inputs.luckyNoVal == 0) {
      console.log("true");
      outputDiv.innerText = "YAYYY Your Birthday is LUCKY!";
    } else {
      console.log("false");
      outputDiv.innerText = "OOOPS Your Birthday is UNLUCKY!";
    }
  }, 5000);
}
