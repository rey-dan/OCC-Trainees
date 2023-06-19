// Synchronous Programming: In synchronous programming, tasks are executed one after the other in a sequential manner. Each task must complete before the next task can start. This blocking behavior can lead to inefficient use of resources, especially when dealing with time-consuming operations.

// console.log(1);
// console.log(2);
// console.log(3);

// const task1 = () => {
//     // for(let i=0; i<100; i++){
//     //     console.log(i);
//     // }
//     setTimeout(() => {
//         console.log('task 1');
//     },5000);
    
//     // return 10;
// }

// // console.log('Start of program');
// // processData();
// // console.log('End of program');

// const task2 = () => {
//     console.log("task 2");
// }

// const task3 = () => {
//     console.log("task 3");
// }

// task1();
// task2();
// task3();

//Using callback function
let members = ["John", "Sam", "Alice"];
// const getAllMembers = () => {
//     console.log(members);
// }

// // getAllMembers();

// const addMember = (member) => {
//     setTimeout(() => {
//         members.push(member);
//         console.log("New member added");
//     }, 3000);
// }

// addMember("Jane"); //takes 3 seconds before it adds Jane
// getAllMembers();    //prints members array

// const getAllMembers = () => {
//     console.log(members);
// }

// // getAllMembers();

// const addMember = (member, callback) => {
//     setTimeout(() => {
//         members.push(member);
//         console.log("New member added");
//         callback();
//     }, 3000);
// }

// addMember("Jane", getAllMembers); //takes 3 seconds before it adds Jane


// const changeColor = (color, delay, callback) => {
//     setTimeout(() => {
//         document.body.style.background = color;
//         callback();
//     }, delay);
// }

// changeColor('red', 2000, () => {
//     changeColor("green", 3000, () => {
//         changeColor("blue", 2000, () => {
//             console.log("stop");
//         })
//     })
// });

//Supply color, delay time

//Promises - pending, fulfilled/resolved, rejected
let myPromise = new Promise((resolve, reject) => {
    const num1 = 2;
    const num2 = 4;

    if(num1 === num2){
        resolve("yes, they are equal");
    }else{
        reject("a problem occured");
    }
})

myPromise
    .then((res) => {
        console.log(`${res} Thank you for fulfilling it.`);
    });
    .catch((err) => {
        console.log(err);
    });