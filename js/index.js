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
let contadorObjetivos = 1;
let contadorProblemas = 1;
let contadorDatos = 1;

function idClases(letra, numero) {
    let str = "" + numero;
    let pad = "0000";
    let final = pad.substring(0, pad.length - str.length) + numero;
    if (letra.toUpperCase() === 'O') {
        contadorObjetivos++;
    }
    else if(letra.toUpperCase() === 'P') {
        contadorProblemas++;
    }
    else if (letra.tpUpperCase() === 'D') {
        contadorDatos++;
    }
    return letra.toUpperCase() + final;
}

// Paso 1
function isEmpty(str) {
    return !str.trim().length;
}
function agregarObjetivosP1() {
    empresa.listaObjetivos = [];
    let listaInputs = document.getElementsByClassName("input-paso-1");
    for (let i=0; i<listaInputs.length; i++) {
        if(!isEmpty(listaInputs[i].value)) {
            let tmpObjetivo = crearObjetivo(idClases('O', contadorObjetivos), listaInputs[i].value, []);
            console.log(tmpObjetivo);
            empresa.listaObjetivos.push(tmpObjetivo);
        }
    }
    if(empresa.listaObjetivos.length !== 0) {
        creacionInputsP2();
        console.log(empresa.listaObjetivos);
        cambiarVista("paso-2");
    }
    else {
        alert("Paso 1 incorrecto");
    }
}

// Paso 2
function creacionInputsP2() {
    let strPaso2 = "";
    for (o in empresa.listaObjetivos) {
        strPaso2 = strPaso2.concat("<p>" + empresa.listaObjetivos[o].descripcion + "</p>");
        let strInputs = "<input type='text' placeholder='Aspecto problemático' class='" + empresa.listaObjetivos[o].id + "'><input type='text' placeholder='Explicación'>";
        strPaso2 = strPaso2.concat("<div class='div-paso-2-2'>" + strInputs.repeat(5) + "</div>");   
    }  
    document.getElementById('div-paso-2').innerHTML = strPaso2;
}

// Paso 3
function creacionCheckBoxP3() {
    let strPaso3 = "";
    for (o in empresa.listaObjetivos) {
        let listaInputs = document.getElementsByClassName(o.id);
        for (let i=0; i<listaInputs.length; i++) {
            if(!isEmpty(listaInputs[i].value)) {
                o.listaProblemas.push(listaInputs[i].value)
            }
        }
        console.log(o);
        if(o.listaProblemas.length !== 0) {
            strPaso3 = strPaso3.concat("<p>" + o.descripcion + "</p>");
        }
    }
    
    let strCheck = "<div><span>SI&nbsp</span><input type='checkbox'>&nbsp&nbsp&nbsp<span>NO&nbsp</span><input type='checkbox'> </div>"
    for (p in listaProblemas) {
        let strTmp = "<p>" + listaProblemas[p] + "</p>" + strCheck + "<input type='text'>";
        strPaso3 = strPaso3.concat(strTmp);
    }
    document.getElementById('div-paso-3').innerHTML = strPaso3;

    cambiarVista("paso-3");
}

// Cambiar de vista en el HTML
let currentDiv = document.getElementById("paso-1")
function cambiarVista(idDiv) {
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
