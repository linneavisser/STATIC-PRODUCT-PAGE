const url = "https://kea-alt-del.dk/t7/api/products/2801";
// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(
    ".productTitle"
  ).textContent = `${product.brandname} ${product.productdisplayname}`;
  document.querySelector("h3.title").textContent = product.productdisplayname;
  document.querySelector("p.price").textContent = "DKK " + product.price;
  document.querySelector(
    ".productPage img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("dl.productInfo dd").textContent = product.brandname;
  document.querySelector("dl.productInfo dd:nth-of-type(2)").textContent =
    product.basecolour;
  document.querySelector("dl.productInfo dd:nth-of-type(3)").textContent =
    product.id;
}
