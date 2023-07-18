console.log('main.js file was loaded');

export function sum(a, b, c) {
  return a + b / c;
}

const result = sum(10, 20, 40);
console.log('result ===', result);

// ========================

function isEligible(num) {
  if (num > 18) {
    console.log('Welcome');
  } else {
    console.log('YOU ARE TOO YOUNG TO ACCESS');
  }
}

isEligible(14);
