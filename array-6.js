const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
