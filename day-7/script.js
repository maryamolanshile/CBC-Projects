const products = [
    {id: 0, name: "Waffle", price: 5.99, image: "assets/images/image-waffle-desktop.jpg"},
    {id: 1, name: "Pancakes", price: 4.99, image: "assets/images/image-creme-brulee-desktop.jpg"},
    {id: 2, name: "Croissant", price: 3.99, image: "assets/images/image-macaron-desktop.jpg"},
]

const productContainer = document.getElementById("product-container");
const cartContainer = document.getElementById("cart-items");

function displayProducts(){
    products.forEach(function(product){
        const productHTML = `
        <div>
           <div class="relative pb-4 cart-container">
             <img src="${product.image}" class="w-48 rounded-lg image" />
             <button onClick="addToCart(${product.id})" class="bg-white flex pl-[15px] pr-[13px] w-[130px] rounded-xl shadow-lg text-center absolute bottom-[-3px] left-[30px] p-[1px] add-to-cart">
              <img src="assets/images/icon-add-to-cart.svg" />
              Add to cart
             </button>
           </div>
        </div>
        `
        productContainer.innerHTML += productHTML;
    })
}
displayProducts();

let cart = [];
function addToCart(id){
    const existingItem = cart.find(function(item){
        return item.id == id;
    });
    if(existingItem){
        alert("Item already in cart");
    }else{
        cart.push(products[id]);
    }
    
    console.log(cart)
    displayCartItems();
}


function displayCartItems(){
    cartContainer.innerHTML = "";

    cart.forEach(function(item){
        const cartItemHTML = `
        <div class="flex items-center justify-between p-2 border-b">
            <div>
                <p>${item.name}</p>
                <p class="text-gray-500">$${item.price}</p>
            </div>
           <svg class="text-gray-700" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - -->
           </svg>
        </div>
        `
        cartContainer.innerHTML += cartItemHTML;
    })
}
displayCartItems();
