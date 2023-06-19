//Common JS built-in methods

// example 1: Array.prototype.forEach()
// The forEach() method executes a provided function once for each array element.

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//     console.log(number);
// });

// //example 2: Array.prototype.map()
// // the Map() method creates a new array populated with the results of calling a provided function on every element in the array.

// const squares = numbers.map((number) => number * number);
// console.log(squares);

//Example 3: Array.prototype.filter() 
//The filter() method creates a new array with all elements that pass the test implemented by the provided function
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

//Example 4: Array.prototype.reduce()
//The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

// const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
// console.log(sum);

//Example 5: String.prototype.split()
//the split() method splits a string object into an array of strings by saparating the string into substrings

// const message = "Hello, World!";
// const words = message.split(", ");
// console.log(words);

//Example 6: String.prototype.includes()
//The includes() method determines whether one string can be found within another string, returning true or false as appropriate
// const sentence = "The quick brown fox jumps oevr the laazy dog";
// const containsWord = sentence.includes("fox");
// console.log(containsWord);

//Example 7: String.prototype.trim()
//The trim() method removes white space from both ends of a string
// const paddedText = " Hello! ";
// const trimmedText = paddedText.trim();
// console.log(trimmedText);

//Example 8: Object.keys()
//The object.keys() method returns an array of a given object's own enumerable proprty names.
// const person = {name: "John", age: 30, city: "New York"};
// const keys = Object.keys(person);
// console.log(keys);

//Example 9: Object.values()
//The object.values() method returns an array of a given object's own enumerable propery values
// const values = Object.values(person);
// console.log(values);

//Example 10: Object.entries()
//The object.entries() method returns a b array of a given object's own enumerable string-jeyword property [key, value] pairs
// const entries = Object.entries(person);
// console.log(entries);

//Example 11: math.max() 
//The Math.max() function returns the largest of the zero or more numbers given as input paramaters
// const maxNumber = Math.max(10, 5, 20);
// console.log(maxNumber);

//Example 12: Math.random
//The Math.random() function returns a floating-point, pseudo-random number between 0 and 1
// const randomValue = Math.random();
// console.log(randomValue);

// Example 13: Date()
// The Date() constructor creates a new instance of the date object representing the current date and Time.
// const currentDate = new Date();
// console.log(currentDate);

//Example 14: Math.floor()
// The Math.floor() function returns the largest integer less than or equal to a given number
// const roundedNumber = Math.floor(3.7);
// console.log(roundedNumber);

//Example 15: Math.ceil()
//The Math.ceil() function returns the smallest integer greater than or equal to a given number
// const roundedNumber2 = Math.ceil(3.2);
// console.log(roundedNumber2);

//Example 16:  parseInt()
//The parseInt() function parses a string argument and returns an integer
// const stringNumber = "42";
// const parsedNumber = parseInt(stringNumber);
// console.log(parsedNumber);

//Example 17: parseFloat()
//The parseFloat() function parses a string argument and returns a floating-point number
// const stringFloat = "3.14";
// const parsedFloat = parseFloat(stringFloat);
// console.log(parsedFloat);

//Example 18: Math.randomm() with Math.floor()
//Generating a random integer between a minimum and maximum value (inclusive)
// function getRandomInt(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomInteger = getRandomInt(1, 10);
// console.log(randomInteger);

// //Example 19: math.pow()
// //The Math.pow() function returns the base to the exponent power
// const powerResult = Math.pow(2, 3);
// console.log(powerResult);

//Example 20: Math.abs()
//The Math.abs() function returns the absolute value of a number
// const absoluteValue = Math.abs(-5);
// console.log(absoluteValue);

//Example 21: math.round()
//The Math.round() function returns the value of a number rounded to the nearest integer
// const roundedValue = Math.round(3.6);
// console.log(roundedValue);

// Example 22: Math.max() and Math.min()
// The Math.max() function returns the largest of the provided Numbers,and Math.min retuns the
const maxNumber = Math.max(5, 10, 3);
const minNumber = Math.min(5, 10, 3);
console.log(maxNumber);
console.log(minNumber);