let firstName = localStorage.getItem("FirstName")
let lastName = localStorage.getItem("LastName")
let email = localStorage.getItem("Email")
let username = localStorage.getItem("Username")

let signInBtn = document.querySelector("#signInBtn")
let signupBtn = document.querySelector("#signupBtn")
let profileNameBox = document.querySelector("#profileNameBox")
let profileNameMenu = document.querySelector(".profileNameMenu")
let profileName = document.querySelector(".profileName")
let userImg = document.getElementById("userImg")

if (firstName) {
    console.log(localStorage.getItem("FirstName"));
    signupBtn.style.display = "none"
    signInBtn.style.display = "none"
    profileNameBox.style.display = "block"
    profileName.innerHTML += firstName
}

userImg.addEventListener("click", () => {
    if (profileNameMenu.style.display !== "flex") {
        cartMenu.style.display = 'none';
        profileNameMenu.style.display = "flex"
    } else {
        profileNameMenu.style.display = "none"
    }

})
// ---------------------------------------------------

let cartNavIcon = document.querySelector('.cartNavIcon');
let cartMenu = document.querySelector('.cartMenu');
cartNavIcon.addEventListener('click', () => {
    if (screen.width < 991) {
        window.location = "cart.html"
    } else {
        if (cartMenu.style.display === 'block') {
            cartMenu.style.display = 'none';
        } else {
            profileNameMenu.style.display = "none"
            cartMenu.style.display = 'block';
        }
    }
});

//----------------------------------

const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click", () => {
    localStorage.clear()
    window.location = "signin.html"

})

// /////////////////////////////////////////////////////////////////////////



let Products = localStorage.getItem("allProducts");
if (Products) {
    Products = JSON.parse(Products)
} else {
    Products = [
        {
            id: 1,
            product: "T-Shirt",
            imageUrl: "image/t-shirt1.jpg",
            price: 50,
            Category: "fashion",
            default : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 2,
            product: "T-Shirt",
            imageUrl: "image/t-shirt2.jpg",
            price: 70,
            Category: "fashion",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 3,
            product: "T-Shirt",
            imageUrl: "image/t-shirt3.jpeg",
            price: 60,
            Category: "fashion",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 4,
            product: "Shoes",
            imageUrl: "image/shoes1.jpeg",
            price: 100,
            Category: "fashion",
            default : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 5,
            product: "Shoes",
            imageUrl: "image/shoes2.jpg",
            price: 90,
            Category: "fashion",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 6,
            product: "Shoes",
            imageUrl: "image/shoes3.jpg",
            price: 70,
            Category: "fashion",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 7,
            product: "Hand_bag",
            imageUrl: "image/bag.jpg",
            price: 110,
            Category: "fashion",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 8,
            product: "Hand_bag",
            imageUrl: "image/bag.webp",
            price: 115,
            Category: "fashion",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 9,
            product: "Hand_bag",
            imageUrl: "image/bag3.jpg",
            price: 95,
            Category: "fashion",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 10,
            product: "Headphones",
            imageUrl: "image/Headphones.jpeg",
            price: 130,
            Category: "electronic",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 11,
            product: "Headphones",
            imageUrl: "image/Headphones2.jpg",
            price: 150,
            Category: "electronic",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 12,
            product: "Headphones",
            imageUrl: "image/Headphones3.jpg",
            price: 160,
            Category: "electronic",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 13,
            product: "Laptop",
            imageUrl: "image/laptop.jpg",
            price: 250,
            Category: "electronic",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
        {
            id: 14,
            product: "Laptop",
            imageUrl: "image/laptop2.jpg",
            price: 200,
            Category: "electronic",
            cartPrice : 0,
            favorite : false,
            cartQuantity: 0,
        },
    ]
}

let AllProducts = document.querySelector(".products")

function drawItems() {

    const all = Products.map((item) => {

        let productFavoriteClass = "fa-solid fa-heart";

        if (item.favorite === true) {
            productFavoriteClass = "fas fa-heart active";
        }

        return `
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card mb-5 m-auto" style="width: 22rem; height: 36rem; box-shadow: 1px 1px 15px 8px;">
                    <img src="${item.imageUrl}" class="card-img-top ps-2 pe-2 pt-1" alt="Classima 10718" style="height: 65%;">
                    <div class="card-body">
                        <h5 class="" style="text-transform: uppercase;">product : ${item.product} </h5>
                        <h5 class="" style="text-transform: uppercase;">Category : ${item.Category} </h5>
                        <h5 class="" style="text-transform: uppercase; display: inline;">price : ${item.price} $</h5>
                        <span class="favoriteBtn icon"><i class="${productFavoriteClass}" id="favoriteBtn_${item.id}" onClick="favoriteProduct (${item.id})"></i></span>

                        <button class="btn btn-show mt-4 fst-italic addToCartBtn addToCartBtn_${item.id}" onClick="addToCart(${item.id})">Buy now</button>
                        
                        <div class="cardProductQuantity mt-4" id="cardProductQuantityBox_${item.id}">
                            <span class="btn btn-success" id="cartProductIncrement" onClick="quantityIncrement (${item.id})">+</span>
                            <span id="cartProductQuantity" class="cardProductQuantityValue_${item.id}">${item.cartQuantity}</span>
                            <span class="btn btn-danger" id="cartProductDecrement" onClick="quantityDecrement(${item.id})">-</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        `
    })

    AllProducts.innerHTML = all;
}
drawItems();

// ----------------------------------------- cartProducts تخزبن البانات فى مخزن ال ----------------------------

let cartProductsContainer = document.getElementById("cartProductsContainer")
let allCartProducts = localStorage.getItem('cart')
let cartProducts = []

if (allCartProducts) {
    allCartProducts = JSON.parse(allCartProducts)
    console.log(allCartProducts)
    cartProducts = allCartProducts
}

// ----------------------------------------- Subtraction and addition in card ----------------------------

let cartBadgeValue = 0
let cartBadge = document.querySelector(".cartBadge")

function cartBadgeNum(productQuantity) {
    cartTempValue = productQuantity - 1
    cartBadgeValue -= cartTempValue;
    cartBadgeValue += productQuantity;
    cartBadge.innerHTML = cartBadgeValue;
}
// -----------------------------------------  Cart Title  ----------------------------------

function cartTitle() {
    if (cartProductsContainer.innerHTML.trim() === "") {
        cartProductsContainer.innerHTML = '<h4 id="emptyCartText">Cart Is Empty</h4>'
        cartBadge.style.display = "none"
    }
}
cartTitle()

//   -------------------------------------

function addToCart(id) {
    if (username) {

        let index = Products.findIndex((item) => item.id === id);
        let product = Products[index]

        let cartProductCheck = cartProducts.findIndex((item) => item.id === id)
        if (cartProductCheck === -1) {
            cartProducts.push(product)
            product.cartQuantity = 1

            let cardProductQuantityBox = document.querySelector(`#cardProductQuantityBox_${product.id}`);
            let cardProductQuantityValue = document.querySelector(`.cardProductQuantityValue_${product.id}`)
            let addToCartBtn = document.querySelector(`.addToCartBtn_${product.id}`);

            addToCartBtn.style.display = 'none';
            cardProductQuantityValue.innerHTML = 1
            cardProductQuantityBox.style.display = "flex";
            Products[index].cartQuantity = 1

        } else {
            product.cartQuantity++
        }

        cartBadgeNum(product.cartQuantity);
        drawCartItems();

    } else {
        setTimeout(() => {
            alert("You Should Sign In")
        }, 0)
    }

    localStorage.setItem("allProducts", JSON.stringify(Products))
}

// ------------------------------------------- Decrement  و  Increment تعرض ال -----------------------------

function cartOnload () { 
    if (cartProducts.length !== 0) {
        drawCartItems ()
        function Badge (){
            cartProducts.map((product) => {
                cartBadgeValue += product.cartQuantity
                cartBadge.innerHTML = cartBadgeValue

                let cardProductQuantityBox = document.querySelector(`#cardProductQuantityBox_${product.id}`);
                let cardProductQuantityValue = document.querySelector(`.cardProductQuantityValue_${product.id}`);
                let addToCartBtn = document.querySelector(`.addToCartBtn_${product.id}`);

                addToCartBtn.style.display = 'none';
                cardProductQuantityValue.innerHTML =  product.cartQuantity;
                cardProductQuantityBox.style.display = "flex";
            })
        }
        Badge ()
    }
}
cartOnload ()

// --------------------------- draw Cart ---------------------------------------

function drawCartItems() {
    cartProductsContainer.innerHTML = ""
    let cartItems = cartProducts.map((item) => {
        item.cartPrice = item.cartQuantity * item.price

        return `
            <div class="cartProducs">
                <img src="${item.imageUrl}" alt="">
                <div class="cartProductInfo">
                    <h3>${item.product}</h3>
                    <div class="cartProductQuantity">
                        <span class="btn btn-success" id="cartProductIncrement" onclick="quantityIncrement (${item.id})">+</span>
                        <span id="cartProductQuantity">${item.cartQuantity}</span>
                        <span class="btn btn-danger" id="cartProductDecrement" onclick="quantityDecrement(${item.id})">-</span>
                    </div>
                </div>
            </div>
        `
    })
    cartBadge.style.display = "block"
    cartBadge.innerHTML = cartBadgeValue
    cartProductsContainer.innerHTML += cartItems.join('')
    cartTitle()
    localStorage.setItem('cart', JSON.stringify(cartProducts))
}

// --------------------------------------------- Button Increment ---------------------------------


function quantityIncrement(id) {
    let originIndex = Products.findIndex((item) => item.id === id)
    Products[originIndex].quantity ++
    
    let index = cartProducts.findIndex((item) => item.id === id);
    let cardProductQuantityValue = document.querySelector(`.cardProductQuantityValue_${id}`)
    if (index !== -1) {
      cartProducts[index].cartQuantity++ ;
      cartBadgeNum(cartProducts[index].cartQuantity);
      cardProductQuantityValue.innerHTML = cartProducts[index].cartQuantity
      drawCartItems(); 
    }

}

// --------------------------------------------- Button Decrement ---------------------------------

function quantityDecrement(id) {
    let originIndex = Products.findIndex((item) => item.id === id)
    Products[originIndex].quantity --

    let index = cartProducts.findIndex((item) => item.id === id);
    let cardProductQuantityBox = document.querySelector(`#cardProductQuantityBox_${id}`);
    let cardProductQuantityValue = document.querySelector(`.cardProductQuantityValue_${id}`)
    let addToCartBtn = document.querySelector(`.addToCartBtn_${id}`);

    if (index !== -1) {
        cartBadgeValue --
        if ( cartProducts[index].cartQuantity > 1) {
            cartProducts[index].cartQuantity-- ;
            cardProductQuantityValue.innerHTML = cartProducts[index].cartQuantity
            drawCartItems() 
        }else {
            cartProducts.splice(index, 1) ;
            addToCartBtn.style.display = 'flex';
            cardProductQuantityBox.style.display = "none";
        }
        drawCartItems() 
    }
}

// ---------------------------  Delete All Cart   -------------------------

let deleteAllCart = document.getElementById('deleteAllCart')
deleteAllCart.addEventListener('click', () => {
    let cardProductQuantitys = document.querySelectorAll(".cardProductQuantity")
    cardProductQuantitys.forEach((btn) => btn.style.display = "none")
    let addToCartBtns = document.querySelectorAll(`.addToCartBtn`);
    addToCartBtns.forEach((btn) => btn.style.display = "flex")

    cartProducts = [] 
    drawCartItems() 
    cartBadgeValue = 0
    cartMenu.style.display = "none"

})

// ----------------------------------- favorites ---------------

let favoriteProducts = localStorage.getItem('favorites')
if (favoriteProducts){
    favoriteProducts = JSON.parse(favoriteProducts)
}else {
    favoriteProducts =[]
}
function favoriteProduct (id) {

    let index = Products.findIndex((item) => item.id === id)
    let favoriteBtn = document.getElementById(`favoriteBtn_${id}`)

    let favoriteProduct = Products[index]

    if(favoriteProduct.favorite === false){
        favoriteProduct.favorite = true
        favoriteBtn.setAttribute("data-prefix" , 'fas')
        favoriteBtn.style.color = 'red'

        favoriteProducts.push(favoriteProduct)
    } else {

        let reIndex = favoriteProducts.findIndex((item) => item.id === id)

        Products[index].favorite = false

        favoriteBtn.setAttribute("data-prefix" , 'far')
        favoriteBtn.style.color = 'gray'

        favoriteProducts.splice(reIndex, 1)
    }
    
    localStorage.setItem("favorites" , JSON.stringify(favoriteProducts))
    localStorage.setItem("allProducts" , JSON.stringify(Products))
}

// ------------------------------------------ seach --------------------------------------------

let searchType = document.getElementById('searchType');
let searchTypeIcon = document.querySelector('.searchTypeBox span');
let searchNameInput = document.querySelector('#productNameInput');
let searchCategoryInput = document.querySelector('#productCategoryInput');


function searchTypeIconDisplay() {
    if (searchType.classList.contains("active")) {
        searchTypeIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
        searchType.classList.remove("active")
    } else {
        searchTypeIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        searchType.classList.add("active")
    }
}

searchType.addEventListener('change', () => {
    if (searchType.value === "name" ){
        searchNameInput.style.display = "block" 
        searchCategoryInput.style.display = "none"
    }else if (searchType.value === "category" ){
        searchNameInput.style.display = "none";   
        searchCategoryInput.style.display = "block"
    }
    searchType.blur()
})

const allSearchProductsCards = [];

function generateProductCard(product) {
    let productFavoriteClass = "far fa-heart"

    if (product.favorite === true) {
        productFavoriteClass = "fas fa-heart active"
    }

    return `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-5 m-auto " style="width: 22rem; height: 36rem; box-shadow: 1px 1px 15px 8px;">
                <img src="${product.imageUrl}" class="card-img-top ps-2 pe-2 pt-1" alt="Classima 10718" style="height: 65%;">
                <div class="card-body">
                    <h5 class="" style="text-transform: uppercase;">product : ${product.product} </h5>
                    <h5 class="" style="text-transform: uppercase;">Category : ${product.Category} </h5>
                    <h5 class="" style="text-transform: uppercase; display: inline;">price : ${product.price} $</h5>
                    <span class="favoriteBtn icon"><i class="${productFavoriteClass}" id="favoriteBtn_${product.id}" onClick="favoriteProduct (${product.id})"></i></span>

                    <button class="btn btn-show mt-4 fst-italic addToCartBtn addToCartBtn_${product.id}" onClick="addToCart(${product.id})">Buy now</button>
                    
                    <div class="cardProductQuantity mt-4" id="cardProductQuantityBox_${product.id}">
                        <span class="btn btn-success" id="cartProductIncrement" onClick="quantityIncrement (${product.id})">+</span>
                        <span id="cartProductQuantity" class="cardProductQuantityValue_${product.id}">${product.cartQuantity}</span>
                        <span class="btn btn-danger" id="cartProductDecrement" onClick="quantityDecrement(${product.id})">-</span>
                    </div>
                    
                </div>
            </div>
        </div>
    `
    }

function updateSearchResults() {
    allSearchProductsCards.length = 0;
    const searchNameValue = searchNameInput.value.toLowerCase()
    const searchCategoryValue = searchCategoryInput.value.toLowerCase()

    Products.forEach((product) => {
        const productName = product.product.toLowerCase()
        const productCategory = product.Category.toLowerCase()

        if ((searchType.value === "name" && productName.includes(searchNameValue)) || (searchType.value === "category" && productCategory.includes(searchCategoryValue)))
        {
            allSearchProductsCards.push(generateProductCard(product))
        }

    });

    AllProducts.innerHTML = allSearchProductsCards
    
}

searchType.addEventListener('change', () => {
    updateSearchResults();
});

searchNameInput.addEventListener("input", updateSearchResults)
searchCategoryInput.addEventListener("input", updateSearchResults)
