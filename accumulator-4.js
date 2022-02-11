const nameArr = [
  "Ibra",
  "Sidek",
  "Abubakar",
  "Adam",
  "Muhammad",
  "Ridvan",
  "Deni",
  "Alihan",
  "Shamil",
  "Nasyr",
  "Alvi",
  "Ahmad",
];

let accumulator = [];

for (let i = 0; i < nameArr.length; i++) {
  if (nameArr[i][0].toUpperCase() === "A") {
    accumulator.push(nameArr[i]);
  }
}
