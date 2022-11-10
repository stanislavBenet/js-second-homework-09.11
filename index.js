let userInput1 = prompt("Please enter data");
let userInput2 = prompt("Please enter data");

function isCompareSimmilarType(val1, val2) {
  if (typeof val1 === typeof val2) {
    if (val1 > val2) {
      return val1;
    } else if (val1 < val2) {
      return val2;
    } else if (val1 === val2) {
      return null;
    }
  }
  return null;
}

isCompareSimmilarType(userInput1, userInput2);
