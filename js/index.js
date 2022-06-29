// Paso 1
function isEmpty(str) {
    return !str.trim().length;
}
let listaObjetivos = []
function agregarObjetivos() {
    listaObjetivos = []
    let listaInputs = document.getElementsByClassName("input-paso-1")
    for (let i=0; i<listaInputs.length; i++) {
        if(!isEmpty(listaInputs[i].value)) {
            listaObjetivos.push(listaInputs[i].value);
        }
    }
    if(listaObjetivos.length !== 0) {
        creacionInputsPaso2();
    }
    console.log(listaObjetivos)
    mostrarContenido("paso-2");
}

// Paso 2
function creacionInputsPaso2() {
    let strPaso2 = "";
    let it = 0;
    let strInputs = "<input type='text' placeholder='Aspecto problemático' class='input-paso-2'><input type='text' placeholder='Explicación'>";
    for (o in listaObjetivos) {
        it++;
        let strTmp = "<p>" + it + ". " + listaObjetivos[o] + "</p><br>" + strInputs.repeat(5);
        strPaso2 = strPaso2.concat(strTmp);
    }
    // strPaso2 = strPaso2.concat("<button onclick='creacionCheckBoxPaso3()'>Confirmar</button>")
    document.getElementById('div-paso-2').innerHTML = strPaso2;
}
// let paso2Valido = false;

// Paso 3
let listaProblemas = [];
function creacionCheckBoxPaso3() {
    listaProblemas = [];
    let listaInputs = document.getElementsByClassName("input-paso-2");
    for (let i=0; i<listaInputs.length; i++) {
        if(!isEmpty(listaInputs[i].value)) {
            listaProblemas.push(listaInputs[i].value);
        }
    }
    console.log(listaProblemas)
    let strPaso3 = "";
    let strCheck = "<div><span>SI&nbsp</span><input type='checkbox'>&nbsp&nbsp&nbsp<span>NO&nbsp</span><input type='checkbox'> </div>"
    for (p in listaProblemas) {
        let strTmp = "<p>" + listaProblemas[p] + "</p>" + strCheck + "<input type='text'>";
        strPaso3 = strPaso3.concat(strTmp);
    }
    document.getElementById('div-paso-3').innerHTML = strPaso3;

    mostrarContenido("paso-3");
}

// Cambiar de vista en el HTML
let currentDiv = document.getElementById("paso-1")
function mostrarContenido(idDiv) {
    let div = document.getElementById(idDiv);
    if(div.hidden !== false) {
        currentDiv.hidden = true;
        div.hidden = false;
        currentDiv = div;

        // Navegación (temporalmente bloqueada)
        // if(listaObjetivos.length !== 0) {
            
        //     if( paso2Valido === true){
                
        //     }
        //     else {
        //         alert("Debe de responder el paso 2 de forma valida")
        //     }
        // }
        // else {
        //     alert("Primero debe realizar el paso 1")
        // }
    }
}
