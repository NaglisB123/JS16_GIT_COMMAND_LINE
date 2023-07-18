console.log('main.js file was loaded');

export function sum(a, b, c) {
  return a + b / c;
}

const result = sum(10, 20, 40);
console.log('result ===', result);

// ========================

export function isEligible(num) {
  if (num > 18) {
    console.log('Welcome');
  } else {
    console.log('YOU ARE TOO YOUNG TO ACCESS');
  }
}

isEligible(14);

// =========================

export function isDivisibleByTwo(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisibleByTwo(8));
