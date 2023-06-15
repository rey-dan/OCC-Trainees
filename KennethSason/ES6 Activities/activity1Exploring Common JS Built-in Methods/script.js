// Your code implementation goes here:

// Calculate the square root of a given number
const squareRoot = (num) => Math.sqrt(num);
console.log(squareRoot(4));
// Generate a random number between 1 and 10
const randomNum = () => {
  return Math.floor(Math.random() * 10) + 1;
};
console.log(`Random number: ${randomNum()}`);
// Convert a string representation of a number to an actual number
const becomeNum = (num) => {
  actualNum = parseInt(num);
  console.log(`Number ${actualNum} is a ${typeof actualNum}`);
};
becomeNum("10");
// Check if a value is not a number
const isNumber = (value) => {
  if (typeof value === "number") {
    console.log(`${value} is a Number`);
  } else {
    console.log(`${value} is not a Number`);
  }
};
isNumber("0");
// Convert a number to a string
const toNumber = (value) => {
  value = value.toString();
  console.log(`${value} is a ${typeof value}`);
};
toNumber(10);
