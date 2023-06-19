// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
let square = (num) => {
    console.log(Math.sqrt(num)); 
}
// square(16);

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
let name = "Ross";
let age = 30;
// console.log(`Welcome ${name} who is ${age} years old!`);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
    firstName: "Rachel",
    lastName: "Green"
}
const {firstName, lastName} = person;
// console.log(firstName);
// console.log(lastName);

// Task 4: Use the spread operator to merge two arrays into a single array.
const array1 = [2, 4, 6];
const array2 = [ ... array1, 3, 5, 7];
// console.log(array2);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
function rectangleArea(width = 4, height = 2){
    return width * height;
}
// console.log(rectangleArea(50,30));
// console.log(rectangleArea());
// console.log(rectangleArea(5));

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of the Person class
const personN = new Person('John', 25);
// personN.sayHello(); // Output: Hello, my name is John and I am 25 years old.



//Create a Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    //simulate an asynchronous operation
    setTimeout(() => {
      //resolve promise with the fetched data
      const data = 'Fetched Data';
      resolve(data);
    }, 2000);
  });
}

//Use the promise with chaining
let result = fetchData()
  .then((data) => {
  //handle the ersolved value
  console.log(data);
  return data;
  })
  .then((processedData) => {
    console.log(processedData);
  })