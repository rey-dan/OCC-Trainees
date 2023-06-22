//Function to Simulate an Asynchronous Request

function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res("Data Fetched");
      } else {
        rej("error fetching data");
      }
    }, 2000);
  });
}
fetchData()
  .then((data) => {
    console.log("My data : " + data);
  })
  .catch((e) => {
    console.log("There's an error: " + e);
  });

const fetchDataAsync = async () => {
  try {
    const result = await fetchData();
    console.log("result + " + result);
  } catch (e) {
    console.log("error + " + e);
  }
};
fetchDataAsync();
