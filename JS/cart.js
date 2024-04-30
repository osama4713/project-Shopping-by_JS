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

if(firstName) {
    console.log(localStorage.getItem("firstName"));
    signupBtn.style.display = "none"
    signInBtn.style.display = "none"
    profileNameBox.style.display = "block"
    profileName.innerHTML +=  firstName 
}
userImg.addEventListener("click",() => {
    if(profileNameMenu.style.display !== "flex") {
        profileNameMenu.style.display = "flex"
    }else {
        profileNameMenu.style.display = "none"
    }
})

const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click",() => {
    localStorage.removeItem("FirstName")
    localStorage.removeItem("LastName")
    localStorage.removeItem("Email")
    localStorage.removeItem("Password")
    localStorage.removeItem("Username")
    window.location.reload()
})

// ---------------------------------  JavaScript for horizontal scroll -------------------------------------------

const scrollContainer = document.querySelector('.scrollspy-example');
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
  scrollContainer.style.cursor = 'grabbing';
});

scrollContainer.addEventListener('mouseleave', () => {
  isDown = false;
  scrollContainer.style.cursor = 'grab';
});

scrollContainer.addEventListener('mouseup', () => {
  isDown = false;
  scrollContainer.style.cursor = 'grab';
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (isDown === false) return;
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 5; 
  scrollContainer.scrollLeft = scrollLeft - walk;
});

// ---------------------------------------

let Products = localStorage.getItem('allProducts');
if (Products) {
  Products = JSON.parse(Products);
}

function updateProductPice (array) {
  array.forEach((product) => {
    product.cartPrice = product.cartPrice
  });
}

let cartContainer = document.querySelector('.cartContainer')
let allCartProducts = localStorage.getItem('cart')

if (allCartProducts){
  allCartProducts = JSON.parse(allCartProducts)
  updateProductPice (allCartProducts)
}else {
  allCartProducts=[]
}


let totalPrice = document.querySelector('.totalPrice span')
let totalPriceContainer = document.querySelector('.totalPriceContainer')
function drawTotalPrice () {
  let price = 0 
  if (allCartProducts.length !== 0) {
    allCartProducts.map((product) => {
      price += product.cartPrice
    })
    totalPrice.innerHTML = price
  } else { 
    totalPriceContainer.style.display = "none "
  }
}

// ------------------------------------------------ drawItems ---------------------------------

function drawItems () {
  const cartProductsCards = allCartProducts.map( (item) => {
    return `<div class="cartProductCard">
    <div class="cardImgBox">
      <img src="${item.imageUrl}".jpg" alt="">
    </div>
    <div class="cartProductBody">
      <h3 class="productTitle">${item.product}</h3>
      <div class="productInfo"> 
        <p class="productCategory">Category : <span> ${item.Category} </span></p>
        <p class="productTotalPrice_${item.id}">Total Price : <span> ${item.cartPrice} </span>$</p>
      </div>
      <div class="cartProductQuantity">
        <div class="cardBtns">
          <span class="btn btn-primary productQuantityBtn" onclick="quantityIncrement(${item.id})"><i class="fa-solid fa-plus"></i></span>
          <span class="productQuantity_${item.id}">${item.cartQuantity}</span>
          <span class="btn btn-danger productQuantityBtn" onclick="quantityDecrement(${item.id})"><i class="fa-solid fa-minus"></i></span>
        </div>
        <button class="deleteBtn" onclick=" deleteProductBtn (${item.id})">Delete</button>
      </div>
    </div>
</div>`
  })
  drawTotalPrice ()
  cartContainer.innerHTML = cartProductsCards.join('')
}
drawItems ()



// -----------------------------------------------------------------------

let cartBadgeValue = 0
let cartBadge = document.querySelector(".cartBadge")

function cartOnload () { 
  if (allCartProducts.length !== 0) {
      
      function Badge (){
          allCartProducts.map((product) => {
              cartBadgeValue += product.cartQuantity
              cartBadge.innerHTML = cartBadgeValue
          } )
      }
      Badge ()
  }else {
    cartBadge.style.display = "none"
    cartContainer.innerHTML = `<h2 class="emptyContainer">Cart Is Empty</h2>
    <a class="btn" href="index.html">Go Shopping</a>`
  }
}
cartOnload ()


function updateCartBadge () {
  if (allCartProducts.length !== 0) {
    cartBadgeValue = 0
    allCartProducts.map(function (product) {
      let quantity = product.cartQuantity
      cartBadgeValue += quantity
    })
    cartBadge.innerHTML = cartBadgeValue
  }else {
    cartBadge.style.display = "none"
    cartContainer.innerHTML = `<h2 class="emptyContainer">Cart Is Empty</h2>
    <a class="btn" href="index.html">Go Shopping</a>`
  }
}


// ------------------------------- Increment ----------------------------------------

function quantityIncrement(id) {
  let index = allCartProducts.findIndex((item) => item.id === id) 
  let productTotalPrice = document.querySelector (`.productTotalPrice_${allCartProducts[index].id} span`) 
   allCartProducts[index].cartQuantity ++
  let productQuantityText = document.querySelector (`.productQuantity_${allCartProducts[index].id}`) 
  productQuantityText.innerHTML = allCartProducts[index].cartQuantity
  cartBadgeValue ++
  cartBadge.innerHTML = cartBadgeValue
  allCartProducts[index].cartPrice = allCartProducts[index].price * allCartProducts[index].cartQuantity;
  productTotalPrice.innerHTML = allCartProducts[index].cartPrice ;
  drawTotalPrice ()
  localStorage.setItem('cart' , JSON.stringify(allCartProducts))
}

// ------------------------------- Decrement ----------------------------------------

function quantityDecrement(id) {
  let index = allCartProducts.findIndex((item) => item.id === id) 
  let productTotalPrice = document.querySelector (`.productTotalPrice_${allCartProducts[index].id} span`) 

  if (allCartProducts[index].cartQuantity > 1 ) {
    let productQuantityText = document.querySelector (`.productQuantity_${allCartProducts[index].id}`) 
    allCartProducts[index].cartQuantity --
    productQuantityText.innerHTML = allCartProducts[index].cartQuantity
    allCartProducts[index].cartPrice =  allCartProducts[index].price * allCartProducts[index].cartQuantity
    productTotalPrice.innerHTML = allCartProducts[index].cartPrice
  }else {
    allCartProducts.splice(index, 1);
    drawItems();
    localStorage.setItem('cart', JSON.stringify(allCartProducts));
  }

  drawTotalPrice ()
  updateCartBadge ()
  
  localStorage.setItem('cart' , JSON.stringify(allCartProducts) )

}
// -----------------------------  Delete from  Cart   -----------------------------

function deleteProductBtn(id) {
  let index = allCartProducts.findIndex((item) => item.id === id);
  if (index !== -1) {
    allCartProducts.splice(index, 1);
    drawItems()

    localStorage.setItem('cart', JSON.stringify(allCartProducts));
    updateCartBadge();

  }
}

let deleteAllBtn = document.querySelector('.deleteAllBtn')
deleteAllBtn.addEventListener('click',() => {
  allCartProducts=[]
  localStorage.removeItem('cart')
  drawItems()
  updateCartBadge();
})

// ---------------------------------------------------

let favoriteContainer = document.querySelector('.favoriteContainer')
let circlesBox = document.querySelector('.circlesBox')
let allFavoriteProducts = localStorage.getItem('favorites')

if (allFavoriteProducts){
  allFavoriteProducts = JSON.parse(allFavoriteProducts)
}else{
  allFavoriteProducts =[]
}

// ----------------------------------- drawFavorite --------------------------

function drawFavoriteProducts () {
  if (allFavoriteProducts.length > 0) {

    let favoriteLength = allFavoriteProducts.length
    let indexID = 0
    const favoriteProductsCards = allFavoriteProducts.map( (item) => {
      indexID ++
      
      return `<div id="list-item-${indexID}"  class="scrollCard bg-light favoriteCard">
      <div class="favoriteImgBox ">
      <img src="${item.imageUrl}" alt="" class="favoriteImg"  draggable="false">
      </div>
      <div class="favoriteCardText">
      <h2 class="favoriteName">${item.product}</h2>
      <button class=" favoriteIcon" onclick="favoriteProduct (${item.id})" onclick><i class="fas fa-heart"></i></button>
      </div>
      </div>`
    })
    favoriteContainer.innerHTML = favoriteProductsCards.join('')
  }else {
    favoriteContainer.innerHTML = `<div class="emptyFavorite">
    <h2>No Favorite Item</h2>
  </div>`
  }
}
 drawFavoriteProducts ()

// ------------------------------------------------- 

function favoriteProduct (id) {

    let index = allFavoriteProducts.findIndex((item) => item.id === id)
    allFavoriteProducts.splice(index, 1)

    let length = allFavoriteProducts.length 

    let reIndex = Products.findIndex((item) => item.id === id)
    Products[reIndex].favorite = false
    localStorage.setItem("favorites" , JSON.stringify(allFavoriteProducts))
    localStorage.setItem("allProducts" , JSON.stringify(Products))
    drawFavoriteProducts ()
    drawFavoriteCircles ()
}

// -------------------------------------------------

function drawFavoriteCircles () {
  circlesBox.innerHTML = ""
  let favoriteLength = allFavoriteProducts.length 
  if (favoriteLength > 0) {

    if (favoriteLength <3) {
      if(screen.width < 868){
        favoriteContainer.style.justifyContent = "auto"
      }else{
        favoriteContainer.style.justifyContent = "center"
      }

    }else {
      let circleNo = Math.floor(favoriteLength/3)
      favoriteContainer.style.justifyContent = "auto"
      
      if (favoriteLength < 6 && favoriteLength > 3 && favoriteLength != 0) {
        circlesBox.innerHTML += `<a class="list-group-item list-group-item-action" href="#list-item-1"></a> `
        circlesBox.innerHTML += `<a class="list-group-item list-group-item-action" href="#list-item-${favoriteLength}"></a> `
      } else {
        circlesBox.innerHTML += `<a class="list-group-item list-group-item-action" href="#list-item-1"></a> `
        let temp = 3
        let temp2 = 3
        for (let i = 1; i < circleNo  ; i ++ ) {
          temp2 = temp + i
          if (temp2 < favoriteLength) {
            circlesBox.innerHTML += `<a class="list-group-item list-group-item-action" href="#list-item-${i+temp}"></a> `
            temp += 3
          }
        }
        circlesBox.innerHTML += `<a class="list-group-item list-group-item-action" href="#list-item-${favoriteLength}"></a> `
      }
    }
    
  }
}
drawFavoriteCircles () 