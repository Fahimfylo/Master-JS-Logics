// reverse a string
function reverseStr(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

console.log(reverseStr("23115620"));

// reverse a string
function reverseStr2(str) {
  return (res = str.split("").reverse().join(""));
}
console.log(reverseStr2("admin"));
