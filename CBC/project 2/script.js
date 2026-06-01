const cartContainer = document.querySelectorAll(".cart-container");
const addToCarts = document.querySelectorAll(".add-to-cart");
const images = document.querySelectorAll(".image");


addToCarts.forEach(function(addToCart) {
  addToCart.addEventListener("mouseenter", function(){
    addToCart.style.border = "2px solid #CC5500";
    addToCart.style.width  = "130px";
    addToCart.style.whiteSpace = "nowrap"
  });

  addToCart.addEventListener("mouseleave", function() {
    addToCart.style.border = ""
    addToCart.style.width  = "130px"
  });

  addToCart.addEventListener("click", function() {
     addToCart.style.backgroundColor = "#CC5500"
     addToCart.innerHTML = `
          <img src="assets/images/icon-decrement-quantity.svg" alt="decrement icon" class="minus">
          <span class="text-white font-semibold pr-8 pl-8 quantity">1</span>
          <img src="assets/images/icon-increment-quantity.svg" alt="increment icon" class="plus">
     `
     addToCart.classList.add( 
      "flex items-center h-[200px] text-white")   
  });

  /*
  const minus = addToCart.querySelector(".minus")
  const quantity = addToCart.querySelector(".quantity")
  const plus = addToCart.querySelector(".plus") 
  plus.addEventListener("click", function() {
    quantity++;
    quantityText.textContent = quantity;
  });
  minus.addEventListener("click", function() {
    if (quantity > 1) {
      quantity--;
      quantityText.textContent = quantity;
    };
  }); */

});

images.forEach(function(image) {
  image.addEventListener("mouseenter", function() {
    image.style.border = "2px solid #CC5500";
  });

  image.addEventListener("mouseleave", function()  {
    image.style.border = "";
  });

});