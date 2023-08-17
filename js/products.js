const apiCars =
  "https://japceibal.github.io/emercado-api/cats_products/101.json";

const contenedorLista = document.getElementById("lista-productos");

document.addEventListener("DOMContentLoaded", () => {
  getProducts();
});

function getProducts() {
  fetch(apiCars)
    .then((response) => response.json())
    .then((data) => showProducts(data.products));
}

function showProducts(datos) {
  for (let i = 0; i < datos.length; i++) {
    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedor-producto");
    contenedor.innerHTML = `
            <div class="contenedor-imagen">
                <img class="imagen-producto" src=${datos[i].image}>
            </div>
    <div class="info-producto">
        <div>
            <h3 class="datos">${datos[i].name} - ${datos[i].currency} ${datos[i].cost}</h3>
            <p class="desc">${datos[i].description} </p> 
        </div>
        <p class="vendidos">${datos[i].soldCount} vendidos</p>
    </div>
    `;

    contenedorLista.appendChild(contenedor);
  }
}
