// Clases
function crearEmpresa(id, nombreEmpresa, listaObjetivos) {
    return {
        id,
        nombre: nombreEmpresa,
        listaObjetivos
    };
}
function crearObjetivo(id, descripcionObjetivo, listaProblemas) {
    return {
        id,                             // Consecutivo: O001, 0213, ...
        descripcion: descripcionObjetivo,
        listaProblemas
    };
}
function crearProblema(id, descripcionProblema, explicacion, esDeDatos, valorTotal, listaDatos) {
    return {
        id,                             // Consecutivo: P001, P213, ...             
        descripcion: descripcionProblema,
        explicacion,
        esDeDatos,                      // Bool, define si el problema es o no de datos
        valorTotal,
        listaDatos,
    };
}
function crearDato(id, descripcionDato, descripcionFinal, valorParticular) {
    return {
        id,                             // Consecutivo: D001, D213, ...  
        descripcion: descripcionDato,   // Descripción inicial que ingresa el cliente del dato
        descripcionFinal,               // De tipo 'Diccionario', descripción final que sale de nuestro diccionario de datos
        valorParticular
    };
}
// Aquí esto es una clase diccionario pero realmente debería ser de tipo DatoDiccionario, luego lo consulto
function crearDiccionario(id, descripcionDiccionario, listaTerminos) {
    return {
        id,
        descripcion: descripcionDiccionario,
        listaTerminos                      
    };
}
// Los Terminos se refieren a las palabras que representan un mismo DatoDiccionario
function crearTermino(id, descripcionTermino) {
    return {
        id,
        descripcion: descripcionTermino
    };
}

// Paso a paso
let empresa = crearEmpresa("E001", "tmp", []);
let contadorObjetivos = 0
let contadorProblemas = 0
let contadorDatos = 0

// Paso 1
function isEmpty(str) {
    return !str.trim().length;
}
function agregarObjetivos() {
    empresa.listaObjetivos = []
    let listaInputs = document.getElementsByClassName("input-paso-1")
    for (let i=0; i<listaInputs.length; i++) {
        if(!isEmpty(listaInputs[i].value)) {
            // let tmpObjetivo = crearObjetivo()
            empresa.listaObjetivos.push(listaInputs[i].value);
        }
    }
    if(empresa.listaObjetivos.length !== 0) {
        creacionInputsPaso2();
    }
    console.log(empresa.listaObjetivos)
    mostrarContenido("paso-2");
}

// Paso 2
function creacionInputsPaso2() {
    let strPaso2 = "";
    let it = 0;
    let strInputs = "<input type='text' placeholder='Aspecto problemático' class='input-paso-2'><input type='text' placeholder='Explicación'>";
    for (o in empresa.listaObjetivos) {
        it++;
        let strTmp = "<p>" + it + ". " + empresa.listaObjetivos[o] + "</p><br>" + "<div class='div-paso-2-2'>" + strInputs.repeat(5) + "</div><br><br>";
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
