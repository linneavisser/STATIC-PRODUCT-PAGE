const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    handleCategoriesList(data);
  });

function handleCategoriesList(data) {
  console.log(data);
  data.forEach(showCategory);
}

function showCategory(category) {
  // template
  const template = document.querySelector("#categoryTemplate").content;
  // copy
  const copy = template.cloneNode(true);
  // content
  copy
    .querySelector("a")
    .setAttribute(
      "href",
      `productList.html?products&category=${category.category}`
    );
  copy.querySelector("a.categoryName").textContent = category.category;
  //parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
