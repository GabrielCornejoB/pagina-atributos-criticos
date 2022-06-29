// Paso 1
function isEmpty(str) {
    return !str.trim().length;
}
let l_objetivos = []
function agregarObjetivos() {
    l_objetivos = []
    let l_inputs = document.getElementsByClassName("input-paso-1")
    for (let i=0; i<l_inputs.length; i++) {
        if(!isEmpty(l_inputs[i].value)) {
            l_objetivos.push(l_inputs[i].value);
        }
    }
    console.log(l_objetivos)
}

// Cambiar de vista en el HTML
let current_div = document.getElementById("paso-1")
function mostrarContenido(id_div) {
    let div = document.getElementById(id_div);
    if(div.hidden !== false) {
        if(l_objetivos.length !== 0) {
            current_div.hidden = true;
            div.hidden = false;
            current_div = div;
        }
        else {
            alert("Primero debe realizar el paso 1")
        }
    }
}
