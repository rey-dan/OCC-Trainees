let carts = document.querySelectorAll(".add-cart");

const products = [
  {
    name: "Oishi Cracklings",
    tag: "Cracklings",
    price: 10,
    inCart: 0,
  },
  {
    name: "Crispy Patata",
    tag: "Patata",
    price: 8,
    inCart: 0,
  },
  {
    name: "Pillows Ube",
    tag: "Pillows",
    price: 11,
    inCart: 0,
  },
  {
    name: "Crispy Tattoos",
    tag: "Tattoos",
    price: 11,
    inCart: 0,
  },
  {
    name: "Piattos Cheeze",
    tag: "Piattos",
    price: 12,
    inCart: 0,
  },
];
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}
function loadLocalStorage() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}
function cartNumbers(product) {
  console.log(product);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  //   console.log(product.price);
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class = "product">
        <img src= "https://i.pinimg.com/736x/fd/b5/e9/fdb5e92095e956b781b5046b569a25a0.jpg"/>
        <span>${item.name}</span>
        <div class="price" style="">₱${item.price}</div>
        <div class="quantity">Quantitiy :${item.inCart}</div>
        <div class="total">Total:  ₱${item.inCart * item.price}</div>
      </div>
      `;
    });
  }
}

loadLocalStorage();
displayCart();
