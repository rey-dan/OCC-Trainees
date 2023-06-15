//Create a Promise

const fetchData = () => {
  return new Promise((resolve, reject) => {
    //Simulate an asynchronous operation
    setTimeout(() => {
      //Resolve the promise with the fetched data
      const data = "Fetched Data";
      resolve(data);
    }, 3000);
  });
};

let result = fetchData()
  .then((data) => {
    console.log("My data is " + data);
    return data;
  })
  .catch((err) => {
    console.log(err);
  });
/*   .then((processedData) => {
    console.log(processedData);
  }); */
