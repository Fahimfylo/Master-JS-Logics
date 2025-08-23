// Calculating Factorial using Javascript
function factorial(inpNum) {
  if (inpNum < 0) {
    throw new Error("inpur number should be greater or equal to 0");
  }
  let res = 1;
  for (i = 1; i <= inpNum; i++) {
    res *= i;
  }
  return `${inpNum}! = ${res}`;
}
console.log(factorial(0));

// using recursion
function recursionFactorial(inpNum) {
  if (inpNum < 0) {
    throw new Error("inpur number should be greater or equal to 0");
  }
  if (inpNum === 0 || inpNum === 1) {
    return 1;
  }
  return inpNum * recursionFactorial(inpNum - 1);
}

console.log(recursionFactorial(4));