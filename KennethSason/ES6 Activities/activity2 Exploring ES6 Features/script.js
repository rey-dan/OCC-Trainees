// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
console.log("Task 1==========");
const squareNum = (num) => num * num;
console.log(`Square is ${squareNum(2)}`);
// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
console.log("Task 2==========");
const helloUser = (name, age) => {
  console.log(`Hello ${name} so you are now ${age}`);
};
helloUser("Chi-chi", 22);
// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
console.log("Task 3==========");
const person = { firstName: "Chi-chi", lastName: "Mio" };
const { firstName, lastName } = person;
console.log(`Full name ${firstName},${lastName}`);
// Task 4: Use the spread operator to merge two arrays into a single array.
console.log("Task 4==========");
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const comboArry = [...array1, ...array2];
console.log(`Combined array is ${comboArry}`);
// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
console.log("Task 5==========");
const areaRec = (length = 1, width = 1) => {
  return length * width;
};
console.log(`First result with default params is ${areaRec()}`);
console.log(`Second result with values for params is ${areaRec(2, 2)}`);
// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
console.log("Task 6==========");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introducePerson() {
    console.log(`Hello I am ${this.name} and I am ${this.age}`);
  }
}
const person1 = new Person("Chi-chi", 22);
person1.introducePerson();
