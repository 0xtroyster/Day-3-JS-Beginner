const numbers = [4, 8, 12, 16];
const foundNumber = numbers.find(function (number) {
  return number > 10;
});
console.log("Found:", foundNumber);
