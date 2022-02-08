const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  //grab template
  const template = document.querySelector("#productImageTemplate").content;
  //clone
  const copy = template.cloneNode(true);
  //content
  //copy.querySelector("h3 div.brand").textContent = `${product.brandname}`;
  copy.querySelector(
    "h3"
  ).textContent = `${product.brandname} | ${product.productdisplayname}`;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".price").textContent = `DKK ${product.price}`;

  // soldOut onSale
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".price").classList.add("discount");
  }
  copy.querySelector(".discountPrice p").textContent = `DKK ${Math.round(
    (1 - product.discount / 100) * product.price
  )}`;
  copy.querySelector(
    ".discountPrice p:nth-child(2)"
  ).textContent = `${product.discount} %`;

  //parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}

/*<template id="productImageTemplate">
<article class="productImage">
<a href="product.html">
  <img src="/images/1163.webp" alt="Nike Football shirt" />
  <div class="textOverlay">
    <h3 class="title">
      Nike Sahara Team India Fanwear Round Neck Jersey
    </h3>
    <p class="price">DKK 895</p>
  </div>
</a>
</article>
</template>*/
