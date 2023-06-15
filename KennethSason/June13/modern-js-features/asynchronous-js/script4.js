const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      console.log(data[0]);
    } else {
      throw new Error("Request Failed");
    }
  } catch (error) {
    console.log(error);
  }
};
// fetchData();

const fetchButton = document.querySelector("#fetch-btn");
fetchButton.addEventListener("click", fetchData);
