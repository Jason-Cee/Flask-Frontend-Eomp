let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "Hand Sanitizer",
    tag: "sanitizer",
    price: 50,
    inCart: 0,
  },
  {
    name: "Face Masks",
    tag: "masks",
    price: 65,
    inCart: 0,
  },
  {
    name: "Infrared Termometer",
    tag: "thermometer",
    price: 500,
    inCart: 0,
  },
  {
    name: "Latex Gloves",
    tag: "gloves",
    price: 400,
    inCart: 0,
  },
  {
    name: "Vitamin C",
    tag: "vitaminc",
    price: 136,
    inCart: 0,
  },
];

for (let j = 0; j < carts.length; j++) {
  carts[j].addEventListener("click", () => {
    cartNumbers(products[j]);
    totalCost(products[j]);
    // console.log("Added to Cart");
  });
}

function trueCartNumber() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(products) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(products);
}

function setItems(products) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[products.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [products.tag]: products,
      };
    }
    cartItems[products.tag].inCart += 1;
  } else {
    products.inCart = 1;
    cartItems = {
      [products.tag]: products,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products) {
  // console.log("the products price is", products.price);
  let cartCost = localStorage.getItem("totalCost");

  console.log("My cart cost is: ", cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + products.price);
  } else {
    localStorage.setItem("totalCost", products.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="product">
        <img src="./images/${item.tag}.jpg">
        <span class="pro-title">${item.name}</span>
      
        <div class="price">R${item.price}.00</div>
        <div class="quantity">
        <span>${item.inCart}</span>
        </div>
        <div class="total">
        R${item.inCart * item.price}.00
        </div>
      </div>

      `;
    });

    productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle"> Basket Total</h4>
        <h4 class="basketTotal">R${cartCost}.00</h4>    
      </div>
    
    
    `;
  }
}

trueCartNumber();
displayCart();
