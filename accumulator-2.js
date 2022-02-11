const numbers = [-2, 5, 0, -8, 7, 4, -1, 3, 9, 2];

let accumulator = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    accumulator += numbers[i];
  }
}
