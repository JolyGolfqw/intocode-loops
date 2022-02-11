const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let accumulatorEven = [];

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) {
    accumulatorEven.push(numbers[i]);
  }
}

let accumulatorOdd = [];

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    accumulatorOdd.push(numbers[i]);
  }
}
