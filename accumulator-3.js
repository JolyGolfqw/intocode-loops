const arr = [
  "Java",
  "C",
  "Python",
  "C++",
  "golang",
  "C#",
  "Fortran",
  "JavaSCript",
  "PHP",
  "Scratch",
];

let accumulator = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 3) {
    accumulator.push(arr[i]);
  }
}
