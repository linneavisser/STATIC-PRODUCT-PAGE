//PRODUCT PAGE
const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;
//console.log(id);

// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page

function showProduct(product) {
  //console.log(product);
  //change content
  document.querySelector(
    ".productTitle"
  ).textContent = `${product.brandname} ${product.productdisplayname}`;
  document.querySelector("h3.title").textContent = product.productdisplayname;
  document.querySelector("p.price").textContent = "DKK " + product.price;
  document.querySelector(
    ".productPage img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".productPage img").alt = product.productdisplayname;
  document.querySelector("dl.productInfo dd").textContent = product.brandname;
  document.querySelector("dl.productInfo dd:nth-of-type(2)").textContent =
    product.basecolour;
  document.querySelector("dl.productInfo dd:nth-of-type(3)").textContent =
    product.id;
  // onSale soldOut
  if (product.discount) {
    document.querySelector("section.infoBox").classList.add("onSale");
    document.querySelector(".price").classList.add("discount");
    document.querySelector(".discountPrice p").textContent = `DKK ${Math.ceil(
      (1 - product.discount / 100) * product.price
    )}`;
    document.querySelector(
      ".discountPrice p:nth-child(2)"
    ).textContent = `${product.discount} %`;
  }
}
