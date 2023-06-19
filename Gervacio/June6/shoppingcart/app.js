document.addEventListener("DOMContentLoaded", function () {
  // Variables
  let addButtons = document.querySelectorAll(".add");
  let cartList = document.getElementById("cart-items");
  let checkoutButton = document.getElementById("checkout-button");
  let computationsDiv = document.getElementById("computations"); // Use the existing computations div

  addButtons.forEach(function (button) {
    button.addEventListener("click", addToCart);
  });

  // Functions
  function addToCart(e) {
    const itemDiv = e.target.parentNode;
    const itemName = itemDiv.querySelector("label").textContent;
    const itemQty = parseInt(itemDiv.querySelector("input").value);

    if (itemQty <= 0) {
      return;
    }

    const existingItem = Array.from(cartList.getElementsByTagName("li")).find(
      (item) => item.textContent.includes(itemName));

    const quantity = existingItem ? parseInt(existingItem.querySelector(".quantity").textContent) : 0;
    const newQty = quantity + itemQty;

    if (existingItem) {
      existingItem.querySelector(".quantity").textContent = newQty;
    } else {
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `
        <span class="item-name">${itemName}</span>
        - Quantity: <span class="quantity">${newQty}</span>
        <button class="delete-button">Delete</button>
      `;

      const deleteButton = cartItem.querySelector(".delete-button");
      deleteButton.addEventListener("click", removeFromCart);

      cartList.appendChild(cartItem);
    }

    itemDiv.querySelector("input").value = 0;
    showCheckoutButton();
  }


  function removeFromCart(e) {
    let deleteButton = e.target;
    let cartItem = deleteButton.parentNode;
    cartItem.parentNode.removeChild(cartItem);
    e.stopPropagation(); // Prevent event propagation to avoid triggering the addToCart function
    showCheckoutButton(); // Call the showCheckoutButton function after removing an item
  }

  function showCheckoutButton() {
    if (cartList.getElementsByTagName("li").length > 0) {
      checkoutButton.style.display = "block";
    } else {
      checkoutButton.style.display = "none";
    }
  }
    
  });

