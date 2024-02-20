import cardComponent from "../components/cardComponent.js";
import products from "../api/products.js";
let render = document.querySelector("#render");

products.map((products) => {
  render.innerHTML += cardComponent(products);
});
