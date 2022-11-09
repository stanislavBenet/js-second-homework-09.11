let userInput1 = prompt("Please enter data");
let userInput2 = prompt("Please enter data");

isIfItNumberWriteInInputVariable(Number(userInput1));
isIfItNumberWriteInInputVariable(Number(userInput2));

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

function isIfItNumberWriteInInputVariable(val1) {
  if (isNaN(val1) || val1 === null || val1 === "") {
    userInput1 = val1;
  }
}

isCompareSimmilarType(userInput1, userInput2);

console.log(isCompareSimmilarType(userInput1, userInput2));
