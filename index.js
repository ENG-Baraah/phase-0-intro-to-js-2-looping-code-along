// Code your solutions in this file

const arr = ["Charlie", "Samip", "Ali"];
function writeCards(arr, message) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = `Thank you, ${arr[i]}, for the wonderful ${message} gift!`;
  }
  return newArr;
}
console.log(writeCards(arr, "birthday"));

const n = 10;
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
countDown(10);
