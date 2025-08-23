// check odd or even
function checkEvenOdd(a) {
  if (a % 2 === 0) {
    return `${a} is a even number`;
  } else {
    return `${a} is a odd number`;
  }
}

console.log(checkEvenOdd(-2));

// using ternanary operator
function checkEvenOdd(a) {
  return a % 2 === 0 ? `${a} is a even number` : `${a} is a odd number`;
}

console.log(checkEvenOdd(10));

// check the smallest

function findSmallest(a, b, c) {
  if (a < b && a < c) {
    return `${a} is the smallest`;
  } else if (b < c && b < a) {
    return `${b} is the smallest`;
  } else return `${c} is the smallest`;
}

console.log(findSmallest(10, 10, 10));
