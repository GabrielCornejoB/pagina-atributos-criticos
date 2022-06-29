// Cambiar de vista en el HTML
let current_div = document.getElementById("paso-1")
function mostrarContenido(id_div) {
    let div = document.getElementById(id_div);
    if(div.hidden !== false) {
        current_div.hidden = true;
        div.hidden = false;
        current_div = div;
    }
}