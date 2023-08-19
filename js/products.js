const api = 'https://japceibal.github.io/emercado-api/cats_products/'
const contenedor = document.getElementById('contenedor')
let catID = localStorage.getItem('catID');
let apiID = api + catID + '.json'

document.addEventListener('DOMContentLoaded', ()=>{
    cargarAutos()
    console.log(catID)
})

function cargarAutos(){
    fetch(apiID)
        .then(response => response.json())
        .then(data => mostrarAutos(data.products))
}

function mostrarAutos(array){
    for (let i of array){
        let contenedorAuto = document.createElement('div');
        contenedorAuto.classList.add('contenedor-auto')
        contenedorAuto.innerHTML = `

            <div class="contenedor-imagen">
                <img class="imagen" src="${i.image}">
            </div>

            <div class="contenedor-datos">
                <div>
                    <h3>${i.name} - ${i.currency} ${i.cost}</h3>
                    <p>${i.description}</p>
                </div>
                <p>${i.soldCount} Vendidos</p>               
            </div>
        
        `


        contenedor.appendChild(contenedorAuto)
    }
}