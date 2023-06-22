/* 
Synchronous Programming: In synchronous programming, tasks are executed one after the other in a sequential manner. Each task must complete before the next task can start. This blocking behavior can lead to inefficient use of resources, especially when dealing with time-consuming operations.
 */
console.log(1);
console.log(2);
console.log(3);
const task1 = () => {
  // for (let i = 0; i <= 10; i++) {
  //   console.log(i);
  // }
  setTimeout(() => {
    console.log("Task 1");
  }, 5000);
};
const task2 = () => {
  console.log("task2");
};
const task3 = () => {
  console.log("task3");
};
// task1();
// task2();
// task3();
//Using Callback Functons
/* console.log("====================");


const getAllMembers = () => {
  console.log(members);
};
getAllMembers();

const addMember = (member) => {
  setTimeout(() => {
    members.push(member);
    console.log("member added");
  }, 3);
};
addMember("Jane");
getAllMembers(); */
let members = ["Ken", "Chi", "Anj"];
const getAllMembers = () => {
  console.log(members);
};

const addMember = (member, callback) => {
  setTimeout(() => {
    members.push(member);
    console.log("New member added");
    callback();
  }, 3000);
};
// addMember("Jane", getAllMembers);
const changeColor = (color, delay, callback) => {
  setTimeout(() => {
    document.body.style.background = color;
    callback();
  }, 3000);
};
changeColor("pink", 2000, () => {
  changeColor("gray", 3000, () => {
    changeColor("black", 1000, () => {});
  });
});

//Promises

let myPromise = new Promise((resolve, reject) => {
  const num1 = 4;
  const num2 = 4;
  if (num1 === num2) {
    resolve("yes they are equal");
  } else {
    reject("a problem occured");
  }
});
myPromise
  .then((res) => {
    console.log(`${res} thank you for fullfilling it`);
  })
  .catch((e) => {
    console.log(e);
  });
