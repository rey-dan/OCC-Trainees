//https://fakestoreapi.com/products

const fetchApi = async () => {
  const mainDiv = document.querySelector("#main");
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Something went wrong");
    } else {
      const data = await res.json();
      let html = "";
      for (let d of data) {
        html += `
        <div class="col-md-6 col-lg-3">
          <div class="card mb-4">
            <div class="img-con card-img-top">
                <img src="${d.image}" class="card-img" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">${d.title}</h5>
              <p class="card-text">${d.description}</p>
              <p class="card-text" style="text-transform:uppercase; font-size:.8rem; font-weight:bolder">Category: ${d.category}</p>
              <p class="card-text" style="text-transform:uppercase; font-size:.8rem; font-weight:bolder">Price: ₱ ${d.price}</p>
              <p class="card-text"><small class="text-muted">Rating: ${d.rating.rate} <i class="fa-solid fa-star"></i></small></p>
              
            </div>
          </div>
        </div>
        `;
      }
      main.innerHTML = html;
    }
  } catch (e) {
    console.error("There's an error!!!!!");
  }
};
fetchApi();

/* 
<div class="col-6 g-2">
            <div class="card mb-12" style="max-width: 540px; height:100%">
                <div class="row g-0">
                    <div class="col-md-4 img-con">
                        <img src="${d.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${d.title}</h5>
                        <p class="card-text">${d.description}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div> */

//==========================================
/* const fetchData = async (url) => {
  try {
    // Fetch data
    const response = await fetch(url);

    // Check if the response is not successful
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Extract JSON data from the response
    const data = await response.json();

    return data;
  } catch (error) {
    return `An error occurred while fetching user data., ${error}`;
  }
};
let myData = fetchData("https://fakestoreapi.com/products");
console.log(myData[0]); */
//    console.log(fetchData('https://fakestoreapi.com/products'))

//   fetchData('https://fakestoreapi.com/products')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

//   const displayProducts = async () => {
//     const productContainer = document.getElementById("product");
//     fetchData('https://fakestoreapi.com/products')
//       .then((data)=>{
//         let html = "";
//         data.map((product) => {
//           // Generate HTML Markup for each user
//           html +=
//           `
//           <div class="col">
//             <div class="card">
//               <div class="card-body">
//                 <img src=${product.image}>
//                 <h5 class="card-title">${product.title}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
//                 <p>${product.description}</p>
//               </div>
//             </div>
//           </div>`
//         });
//         productContainer.innerHTML = html;
//       })
//       .catch(err => {console.error(err)})
//   }

//   displayProducts()
