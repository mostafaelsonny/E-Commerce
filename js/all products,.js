fetch("js/items.json")
  .then((res) => res.json())
  .then((data) => {
    all_data = data;
    const our_products = document.getElementById("our_products");

    data.forEach((product) => {
      const discount = product.old_price
        ? `<div class="discount">%${Math.floor(
            ((product.old_price - product.price) / product.old_price) * 100
          )}</div>`
        : "";
      const oldPrice = product.old_price
        ? `<span>$${product.old_price}</span>`
        : "";
      our_products.innerHTML += `<div class="item swiper-slide">
                    <div class="img-product">
                    
                        <img onclick = "showItem(${product.id})" src="${product.img}" alt="">
                        <img onclick = "showItem(${product.id})"  class="img_hover" src="${product.img_hover}" alt="">
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
                        ${oldPrice}
                    </div>
                    <div class="icons">
                        <i onclick ="addToCart(${product.id},this)"   data-id="${product.id}"  class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-share"></i>
                    </div>
                    ${discount}
                    </div>`;
    });

    
  });




function showItem(id) {
  const product = all_data.find((p) => p.id === id);
  const item_content = document.getElementById("items_sale");
  console.log(product);
  console.log("item_content:", item_content);
    if (!product || !item_content) return
  console.log(product , "my scpounf product ");

  item_content.innerHTML = `
    <div class="images">
      <div class="bg_img">
        <img id="main_img" src="${product.img}" alt="">
      </div>
      <div class="sm_img">
        <img onclick="changePhone(this.src)" src="${product.img}" alt="">
        <img onclick="changePhone(this.src)" src="${product.img_hover}" alt="">
      </div>
    </div>
    <div class="content">
      <h3>${
        product.name || "Original Mobile Android Dual SIM Smart Phone G3"
      }</h3>
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>
      <div class="price">
        <h3>$${product.price}</h3>
        ${product.old_price ? `<p>$${product.old_price}</p>` : ""}
      </div>
      <h4>Availability: <span>In Stock</span></h4>
      <h4>SKU: <span>${product.sku || "samsung"}</span></h4>
      <p>${
        product.description ||
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }</p>
      <h2>Hurry Up ! Only ${product.stock || 98} Products left in stock.</h2>
      <button onclick="addToCart(${product.id},this)" id="item_btn">
        Add to Cart <i class="fa-solid fa-cart-shopping"></i>
      </button> 
      <div class="icons">
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-share"></i>
        <i class="fa-brands fa-elementor"></i>
        <i class="fa-solid fa-print"></i>
      </div>
    </div>
  `;
}
