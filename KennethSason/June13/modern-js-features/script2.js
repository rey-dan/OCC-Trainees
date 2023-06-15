//Common JS built-in methods

//Example 1:Array.prototype.forEach()

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((numbers) => {
  console.log(numbers);
});

const squares = numbers.map((number) => number * number);
console.log(squares);
console.log("=======================");

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
//

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum);

console.log("==================");
const message = "Hello, World";
const words = message.split(", ");
console.log(words);

//String.prototype.includes()
console.log("================");
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox");
console.log(containsWord);

console.log("++++++++++++++++");
const paddedText = "      Hello        ";

const trimmedText = paddedText.trim();
console.log(trimmedText);
console.log("+============================");
const person = { name: "John", age: 30, city: "New York" };
const keys = Object.keys(person);
console.log(keys);

//Example 9 Object.values
const values = Object.values(person);
console.log(values);

//Ex 10 Object.entries()
const entries = Object.entries(person);
console.log(entries);
//Math Objects and Dates
//============
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);
// Output 20
const randomValue = Math.random();
console.log(randomValue);
// Output random value
const currentDate = new Date();
console.log(currentDate);
//Output the current date

//Math.floor

const roundedNumber = Math.floor(3.7);
console.log(roundedNumber);

//Math.ceil()
const roundedNumber2 = Math.ceil(3.2);
console.log(roundedNumber2);

//Math. parseInt()

const stringNumber = "42";
const parsedNumber = parseInt(stringNumber);
console.log(parsedNumber);
console.log("=================");
//Math. parseFloat()
const stringFloat = "3.14";
const parsedFloat = parseFloat(stringFloat);
console.log(parsedFloat);
//Math .random + math.floor()

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomInteger = getRandomInt(1, 10);
console.log(randomInteger);
console.log("-----------------------------------------");
//Example 19 Math.pow()
const powerResult = Math.pow(2, 3);
console.log(powerResult);

//Math.abs
const absoluteValue = Math.abs(-5);
console.log(absoluteValue);

//Math.round

const roundedValue = Math.round(3.6);

console.log(roundedValue);

const maxNumber1 = Math.max(5, 10, 3);
const minNumber = Math.min(5, 10, 3);
console.log(maxNumber1);
console.log(minNumber);
