import { items } from "./data/products.js";

function renderItems() {
  let addToHTML = "";

  items.forEach((iteamList) => {
    addToHTML += `
    <section>
      <hr> 
      <div class="flex-container">
      <div class="image-div">
        <div class="discount-display">-${Math.round(
          iteamList.discountPercentage
        )}%</div>
        <img src="./images/intermediate-composite-basketball.jpg" alt="product image" /></div>
      <div class="about-div">
        <h3>${iteamList.title}</h3>
        <p>${iteamList.description}</p>
      </div>
      <div class="price-div">
        <p>$${disscountCount(iteamList.price, iteamList.discountPercentage)}</p>
        <button>Add to Cart</button>
      </div> 
      </div> 
  </section>`;
  });

  document.querySelector(".js-main").innerHTML = addToHTML;
}

renderItems();

function disscountCount(price, disscount) {
  return (price * 100 - disscount * 100) / 100;
}
