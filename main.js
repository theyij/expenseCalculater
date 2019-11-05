function basic() {
  // Select input data and operator
  var jWage = parseInt(document.querySelector("#mWage").value);
  var jBouns = parseInt(document.querySelector("#bouns").value);
  var jTrain = parseInt(document.querySelector("#train").value);
  var jRent = parseInt(document.querySelector("#rent").value);
  // var op = document.querySelector("#operator").value;
  var wage = (jWage * 12) + jBouns;
  var benifit = (jTrain + jRent) * 12;
  var income = wage + benifit;

  // print
  document.querySelector("#yWage").innerHTML = "&#165;" + wage;
  document.querySelector("#yBenifit").innerHTML = "&#165;" + benifit;
  document.querySelector("#yIncome").innerHTML = "&#165;" + income;
}

function fixExpense() {
  var jWage = parseInt(document.querySelector("#mWage").value);
  var jBouns = parseInt(document.querySelector("#bouns").value);
  var jempIns = jWage * 3 / 1000;
  var jempPen = jWage * 18.3 / 100 / 12;
  var jhealthIns = jWage * 9.9 / 100;
  var jresidentTax = jWage / 10 / 12;
  var jincomeTax;

  var jfixExpense = jempIns + jempPen + jhealthIns;
  // cal jincomeTax
  if (jWage / 1000 < 195) {
    jincomeTax = jWage * 5 / 100 / 12;
  } else if (jWage / 1000 < 330) {
    jincomeTax = jWage * 10 / 100 / 12;
  } else if (jWage / 1000 < 695) {
    jincomeTax = jWage * 20 / 100 / 12;
  } else if (jWage / 1000 < 900) {
    jincomeTax = jWage * 23 / 100 / 12;
  } else if (jWage / 1000 < 1800) {
    jincomeTax = jWage * 33 / 100 / 12;
  } else if (jWage / 1000 < 4000) {
    jincomeTax = jWage * 40 / 100 / 12;
  } else {
    jincomeTax = jWage * 45 / 100 / 12;
  }

  document.querySelector("#empIns").innerHTML = "&#165;" + jempIns;
  document.querySelector("#empPen").innerHTML = "&#165;" + jempPen;
  document.querySelector("#healthIns").innerHTML = "&#165;" + jhealthIns;
  document.querySelector("#residentTax").innerHTML = "&#165;" + jresidentTax;
  document.querySelector("#incomeTax").innerHTML = "&#165;" + jincomeTax;
  // document.querySelector("#residentTax").innerHTML = "&#165;" + jresidentTax;
  document.querySelector("#fixExp").innerHTML = "&#165;" + jfixExpense;
}
