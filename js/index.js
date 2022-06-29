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
    if(l_objetivos.length !== 0) {
        paso2();
    }
    console.log(l_objetivos)
}

// Paso 2
function paso2() {
    let strPaso2 = "";
    let it = 0;
    let strInputs = "<input type='text' placeholder='Aspecto problemático'><input type='text' placeholder='Explicación'>";
    for (o in l_objetivos) {
        it++;
        let strTmp = "<p>" + it + ". " + l_objetivos[o] + "</p><br>" + strInputs.repeat(5);
        strPaso2 = strPaso2.concat(strTmp);
    }
    document.getElementById('div-paso-2').innerHTML = strPaso2;
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
