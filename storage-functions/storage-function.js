// 4.1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// 4.2
const numbers = [-2, 5, 0, -8, 7, 4, -1, 3, 9, 2];

function getPositiveNum(arr) {
  let positiveNum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNum += numbers[i];
    }
  }
  return positiveNum;
}

// 4.3
const languages = [
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

function getMoreThanThree(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 4.4
const nameArr = [
  "Ibra",
  "Sidek",
  "Abubakar",
  "Adam",
  "Usman",
  "Umalt",
  "Muhammad",
  "Ridvan",
  "Deni",
  "Alihan",
  "Shamil",
  "Nasyr",
  "Alvi",
  "Ahmad",
];

function getNames(arr) {
  const newArr = [];
  for (let i = 0; i < nameArr.length; i++) {
    if (
      nameArr[i][0].toUpperCase() === "A" ||
      nameArr[i][0].toUpperCase() === "U"
    ) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 4.5
function deleteMessages(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i].deleted) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

const messages = [
  { text: "hello", deleted: true },
  { text: "bue", deleted: false },
  { text: "js is a beauty", deleted: false },
  { text: "pair programming", deleted: true },
  { text: "this is my horse", deleted: false },
];

console.log(deleteMessages(messages));
