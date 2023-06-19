//a. Square root
function squareRoot(num){
    return Math.sqrt(num);
}
// console.log(squareRoot(16));

//b. Random number 1-10
function random(){
    return Math.floor(Math.random() * 10) + 1;
}
// console.log(random());

//c. 
function convertToNumber(text){
    console.log(parseInt(text));
}
// console.log(convertToNumber("5"));

//d. 
function checkValue(val){
    if(typeof val === "number"){
        return("Value is a number");
    }else{
        return("Value is not a number");
    }
}
// console.log(checkValue("1"));

//e. number to string
function numberToString(num){
    return num.toString();
}
// console.log(numberToString(45));
// console.log(typeof(numberToString(45)));

