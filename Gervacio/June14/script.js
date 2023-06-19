const displayProductData = async () => {
    const productContainer = document.getElementById("productContainer");

    try{
        const response = await fetch ('https://fakestoreapi.com/products');

        if(!response.ok){
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        let html = "";
        data.forEach((product) => {
            html += `<div class ="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="img-container">
                                    <img src="${product.image}"  alt="">
                                </div>
                                <h4 class="card-title">${product.title}</h4>
                                <h5>$${product.price}</h5>
                                <p>Category: ${product.category}</p>
                                <h6>Rating: ${product.rating.rate}</h6>
                                <span>Qty: ${product.rating.count}</span>
                                <p>${product.description}</p>
                                
                            </div>
                        </div>
                    </div>`
        });

        productContainer.innerHTML = html;
    }catch(error){
        productContainer.innerHTML = "An error occured while fetching user data";
        console.error(error);
    }
}

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", displayProductData);