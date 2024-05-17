let botonFiltros = document.getElementById("catalogo__boton")
let mobFiltros = document.getElementById("mobileCatalogoFiltros")

mobFiltros.setAttribute("style","display: none")
botonFiltros.innerText = "Filtros ⏷";

let mostrar = false;

botonFiltros.addEventListener("click", event => {
    mostrar ? mostrar = false : mostrar = true;
    mostrar ? mobFiltros.setAttribute("style","") : mobFiltros.setAttribute("style","display: none");
    mostrar ? botonFiltros.innerText = "Filtros ⏶" : botonFiltros.innerText = "Filtros ⏷";
    mostrar ? botonFiltros.setAttribute("class", "boton-apretado") : botonFiltros.setAttribute("class", "")
})


