const boton = document.getElementById("dropdown__boton");

const menu = document.getElementById("dropdown__menu");

let fondo = document.createElement("div")

document.body.appendChild(fondo)

let visible = false

boton.addEventListener("click", event => {
    if (visible){
        menu.setAttribute("style","display: none")
        fondo.setAttribute("style","")
        visible = false;
    }
    else{
        menu.setAttribute("style","display: unset")
        fondo.setAttribute("style",`top: 0; position: fixed; height: 100%; width: 100%; z-index: 900; background-color:rgba(0,0,0,.5)`)
        visible = true;
    }
})