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
    tag: "vitamin c",
    price: 136,
    inCart: 0,
  },
];

for (let j = 0; j < carts.length; j++) {
  carts[j].addEventListener("click", () => {
    // console.log("Added to Cart");
    cartNumbers();
  });
}

function trueCartNumber() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
}
trueCartNumber();
