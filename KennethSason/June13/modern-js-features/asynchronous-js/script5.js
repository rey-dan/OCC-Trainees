const displayUserData = async () => {
  const userContainer = document.getElementById("userContainer");
  try {
    //Fetch User Data from JSONPlaceholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Faeled to fetch data");
    } else {
      const data = await response.json();
      let html = "";
      //Iterate over each user in the data array
      data.forEach((user) => {
        //Generate HTML Markup for each user

        html += `
            <div class= "col">
                <div class= "card">
                    <div class = "card-body">
                        <h5 class = "card-title">${user.name}</h5>
                        <h6 class = "card-subtitle mb-2 text-muted">${user.email}</h6>
                    </div>
                </div>
            </div>
            `;
      });
      userContainer.innerHTML = html;
    }
  } catch (e) {
    console.error(e);
    productContainer.innerHTML =
      "An error occurred while fetching product data.";
  }
};
const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", displayUserData);
