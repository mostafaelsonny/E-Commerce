const closeCart = document.querySelector("#close")
const openCart = document.querySelector("#open")
const sidebar = document.querySelector("aside")
const more = document.querySelector(".more")


// ======================= OPEN AND CLOSE CART ===========================

// sidebar.addEventListener("mouseleave",()=>{
//         sidebar.classList.remove("show")
//     localStorage.setItem("cart","hide")
// })

closeCart.addEventListener("click",()=>{
    sidebar.classList.remove("show")
    localStorage.setItem("cart","hide")
})
more.addEventListener("click",()=>{
    sidebar.classList.remove("show")
    localStorage.setItem("cart","hide")
})
openCart.addEventListener("click",()=>{
    sidebar.classList.add("show")
    localStorage.setItem("cart", "show")
})

// window.addEventListener("load",()=>{
//     if(localStorage.getItem("cart")==="show"){
//         sidebar.classList.add("show")
//     }else{
//         sidebar.classList.remove("show")
//     }

// })




// ======================= OPEN AND CLOSE MENU ===========================

const closeMenu = document.querySelector("#close-menu")
const openMenu = document.querySelector("#open-menu")
const ul = document.querySelector("ul")
const overlay = document.querySelector(".overlay")




closeMenu.addEventListener("click",()=>{
    ul.classList.remove("show")
    localStorage.setItem("menu","hide")
})

overlay.addEventListener("click",()=>{
    ul.classList.remove("show")
    localStorage.setItem("menu","hide")
})
openMenu.addEventListener("click",()=>{
    ul.classList.add("show")
    localStorage.setItem("menu", "show")
})


// window.addEventListener("load",()=>{
//     if(localStorage.getItem("menu")==="show"){
//         ul.classList.add("show")
//     }else{
//         ul.classList.remove("show")
//     }

// })




// ========================= ADD PRODUCTS TO ARRAY =============================

var items_in_cart = document.querySelector(".items_in_cart")
const buy = document.getElementById("buy")

var all_data;
let product_cart ;


window.addEventListener("load",()=>{
    
    if(localStorage.our_products != null  ){
        product_cart = JSON.parse(localStorage.our_products)

        getCartItem()
        getSummaryItem()
        
    }else{
        product_cart = []
    }
    


})


function addToCart (id , element){
    product_cart.push(all_data[id])
    element.classList.add("active")
    
    localStorage.setItem("our_products",JSON.stringify(product_cart))
    localStorage.setItem("state","active")
    localStorage.setItem("active_element", element.dataset.id)


    


    getCartItem()



    getSummaryItem()
    
}

// =============================== SHOW ARRAY PRODUCT IN CART ==========================

function getCartItem () {
    let a7a = ""
    for (let i = 0; i < product_cart.length; i++) {
        a7a += `
        <div class="product">
            <img src="${product_cart[i].img}" alt="">
            <div class="content">
                <p>${product_cart[i].name}</p>
                <p>$${product_cart[i].price}</p>
            </div>
            <button onclick = "updateIcons(${i})"  class="delete-item">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `
    }
    items_in_cart.innerHTML = a7a

    total()
}




// =========================== UPDATE CART PRODUCTS ==============================
let item_btn = document.querySelectorAll(".fa-cart-shopping")



function updateIcons(index) {
    product_cart.splice(index,1)
    localStorage.setItem("our_products",JSON.stringify(product_cart))
    getCartItem()
    getSummaryItem();
    
    item_btn.forEach(btn=>{
        let  id = Number(btn.dataset.id)
        btn.classList.remove("active")
        localStorage.setItem("state","non_active")
        if(product_cart.some(product => product.id === id)){
            btn.classList.add("active")
            localStorage.setItem("state","active")
        }
    })
}

// =============================== CHECKBOX ITEMS ===========================

const items_in_summary = document.getElementById("in_summary")
function getSummaryItem() {
    
    let a7a = "";
    for (let i = 0; i < product_cart.length; i++) {
        a7a += `
        <div class="product">
            <img src="${product_cart[i].img}" alt="">
            <div class="content">
                <p>${product_cart[i].name}</p>
                <div class="price">
                    <p>Price : </p>
                    <span>${product_cart[i].price}</span>
                    </div>
            </div>
        </div>`;
    }
    items_in_summary.innerHTML = a7a;
}



// =============================== CHECKBOX ITEMS ===========================




// =========================== GET SUPTOTAL =============================

let cart_total = document.getElementById("cart_total")
let header_total = document.getElementById("header_total")
let cart_header_total = document.getElementById("cart_header_total")
let product_count =document.getElementById("product_count")
let checkBox_total = document.getElementById("checkBox_total")

function total (){
    let result = 0 
    for(let i = 0 ; i<product_cart.length ; i++){
        result += +product_cart[i].price
    }
    cart_total.innerHTML = result
    header_total.innerHTML = `$${result}`
    cart_header_total.innerHTML = product_cart.length
    product_count.innerHTML = `(${product_cart.length} items in cart)`
    if(checkBox_total){

        checkBox_total.innerHTML = `$${result}`
    }
    
}

//============================ scroll to top =====================//

const to_top = document.getElementById("to_top");

to_top.addEventListener("click", function()  {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
});

// ============= Book Your products ================


const place_order = document.getElementById("place_order")
if(place_order){

    place_order.addEventListener("click",()=>{
        if(product_cart.length > 0){
            
            window.alert("Your Order Has been Booked")
        }else{
            window.alert("Choose Your Product First")
        }
    })
}

// ============= Book Your products ================





// ========================================= CHANGE IMAGE ====================





// ========================================= CHANGE COLOR ====================


function color(element) {
    let pages = document.querySelectorAll(".pagination .container a")
    pages.forEach((ele)=>{
        ele.classList.remove("activee")
    })
    element.classList.add("activee")
}



// ================================ FILTER MENU ======================

const filter = document.querySelector(".filter-btn")
const our_list = document.querySelector(".our_list")

if(filter){

    filter.addEventListener("click",()=>{
        our_list.classList.toggle("show")
    })
}



