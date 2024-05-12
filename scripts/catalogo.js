let categorias = document.getElementsByClassName("labelCheck");
let categoriasElegidas = [];
const contenedor = document.getElementById("catalogoProductos")
let productos = [
    prod1 ={ titulo: "cuadrado", desc: "desc breve", precio: 100, categoria: "c_cuadrado"},

    prod2 ={ titulo: "circulo", desc: "desc breve", precio: 100, categoria: "c_circulo"},

    prod3 ={ titulo: "triangulo", desc: "desc breve", precio: 100, categoria: "c_triangulo"},

    prod6 ={ titulo: "Hexagono", desc: "desc breve", precio: 100, categoria: "c_hexagono"},

    prod4 ={ titulo: "cuadrado", desc: "desc breve", precio: 100, categoria: "c_cuadrado"},

    prod5 ={ titulo: "circulo", desc: "desc breve", precio: 100, categoria: "c_circulo"},

    prod6 ={ titulo: "triangulo", desc: "desc breve", precio: 100, categoria: "c_triangulo"},
    
    prod7 ={ titulo: "Hexagonos", desc: "desc breve", precio: 100, categoria: "c_hexagono"}
]

function crearCard(el) {
    
    const card = document.createElement("div")
    card.className = "cardProducto"
    card.id = el.categoria;

    const imagen = document.createElement("img")
    imagen.src = "../resources/Imagen-D1.jpg"
    
    const titulo = document.createElement("h1")
    titulo.innerText = el.titulo;

    const descripcion = document.createElement("p")
    descripcion.innerText = el.desc;

    const precio = document.createElement("span")
    precio.innerText = el.precio;

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);

    contenedor.appendChild(card);
}

function todosProductos(){
    for (let i = 0; i < productos.length; i++) {
        const el = productos[i];
        crearCard(el);
    }
}

let productosElegidos = [];

function filtrarCategorias(){
    contenedor.innerHTML = "";

    for (let i = 0; i < categoriasElegidas.length; i++) {
        const categoria = categoriasElegidas[i];

        productosElegidos = productos.filter((el) => el.categoria == categoria)
        
        for (let i = 0; i < productosElegidos.length; i++) {
            const el = productosElegidos[i];
            crearCard(el)
        }
    }
}

for (let i = 0; i < categorias.length; i++) {
    const seleccion = categorias[i];
    seleccion.addEventListener('click', (event) => {
        if (seleccion.checked) { 
            categoriasElegidas.push(seleccion.name)
            filtrarCategorias();
        }
        if (!seleccion.checked){
            categoriasElegidas = categoriasElegidas.filter(el => el !== seleccion.name)
            filtrarCategorias();
            if (categoriasElegidas.length == 0){
                todosProductos();
            }
        }
    });
}

todosProductos();


