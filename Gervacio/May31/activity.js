
//1. Declare a variable named numbers and assign it an array of at least 5 different integer values. The numbers can be any integers you choose
let numbers = [2, 4, 6, 8, 10];
console.log(numbers);


//2. Write a function named findMinMax. This function should take an array of numbers as a parameter and should print the minimum and maximum numbers from the array. The function does not need to return anything.
function findMinMax(arr) {

let min = arr[0];
let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(min);
    console.log(max);
}

findMinMax([8,1,4,6,9,0,23]);


//3. Write a function named printEvenOdd. This function should take an array of numbers as a parameter and should print whether each number is even or odd.
function printEvenOdd(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i]+" is an even number");
        }
        else{
            console.log(arr[i]+" is an odd number");
        }
    }
}

printEvenOdd([10,17,22]);


//4. Write a function named Add. This function should take 2 numbers as a parameter and should print the sum of the two numbers.
function Add(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
}

Add(100, 500);


//5. Write a function named Subtract. This function should take 2 numbers as a parameter and should print the difference of the two numbers.
function Subtract(num1, num2){
    let difference = num1 - num2;
    console.log(difference);
}

Subtract(10, 5);


//6. Write a function named Multiply. This function should take 2 numbers as a parameter and should print the product of the two numbers.
function Multiply(num1, num2){
    let product = num1 * num2;
    console.log(product);
}

Multiply(10, 5);


//7. Write a function named Divide. This function should take 2 numbers as a parameter and should print the quotient of the two numbers and it's remainder if there is a remainder
function Divide(num1, num2){
    let quotient = num1 / num2;
    console.log(quotient);
}

Divide(12, 2);