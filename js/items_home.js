    fetch("js/items.json")
    .then(res => res.json())
    .then(data => {
        all_data = data
        const item_sale = document.getElementById("items_sale")
        const item_sale2 = document.getElementById("items_sale2")
        const thirdslide = document.getElementById("thirdslide")
        const our_products = document.getElementById("our_products")
        data.forEach(product => {
            if(product.old_price){
            const discount = Math.floor((product.old_price - product.price ) / product.old_price * 100)
            item_sale.innerHTML += `<div class="item swiper-slide">
                    <div class="img-product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3>Original Mobile Android Dual SIM Smart Phone G3</h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="price">
                        <h3>$${product.price}</h3><span>$${product.old_price}</span>
                    </div>
                    <div class="icons">
                        <i onclick ="addToCart(${product.id},this); "   data-id="${product.id}"  class="fa-solid fa-cart-shopping buy-btn"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-share"></i>
                    </div>
                    <div class="discount">%${discount}</div>
                    </div>`

            }
            
        });

        data.forEach(product => {
            item_sale2.innerHTML += `<div class="item swiper-slide">
                    <div class="img-product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3>Original Mobile Android Dual SIM Smart Phone G3</h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="price">
                        <h3>$${product.price}</h3>
                    </div>
                    <div class="icons">
                        <i onclick ="addToCart(${product.id},this)"   data-id="${product.id}"  class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-share"></i>
                    </div>
                    </div>`


            
        });

                data.forEach(product => {
                thirdslide.innerHTML += `<div class="item swiper-slide">
                    <div class="img-product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3>Original Mobile Android Dual SIM Smart Phone G3</h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="price">
                        <h3>$${product.price}</h3>
                    </div>
                    <div class="icons">
                        <i onclick ="addToCart(${product.id},this)"   data-id="${product.id}"  class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-share"></i>
                    </div>
                    </div>`
            
        });


                data.forEach(product => {
                our_products.innerHTML += `<div class="item swiper-slide">
                    <div class="img-product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3>Original Mobile Android Dual SIM Smart Phone G3</h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="price">
                        <h3>$${product.price}</h3>
                    </div>
                    <div class="icons">
                        <i onclick ="addToCart(${product.id},this)"   data-id="${product.id}"  class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-share"></i>
                    </div>
                    </div>`
            
        });
    
    })






