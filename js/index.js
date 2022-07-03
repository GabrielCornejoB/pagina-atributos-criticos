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
function crearProblema(id, descripcionProblema, explicacion, listaDatos, esDeDatos, explicacionDatos, valorTotal,  explicacionEsDeDatos) {
    return {
        id,                             // Consecutivo: P001, P213, ...             
        descripcion: descripcionProblema,
        explicacion,
        esDeDatos,                      // Bool, define si el problema es o no de datos
        explicacionDatos,
        valorTotal,
        listaDatos,
        explicacionEsDeDatos
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
let empresa = crearEmpresa("E0001", "Empresa de prueba", []);
console.log(empresa);
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

function isEmpty(str) {
    return !str.trim().length;
}
function agregarObjetivos() {
    empresa.listaObjetivos = [];
    let listaInputs = document.getElementsByClassName("input-paso-1");
    for (let i=0; i<listaInputs.length; i++) {
        if(!isEmpty(listaInputs[i].value)) {
            let tmpObjetivo = crearObjetivo(idClases('O', contadorObjetivos), listaInputs[i].value, []);
            empresa.listaObjetivos.push(tmpObjetivo);
        }
    }
    if(empresa.listaObjetivos.length !== 0) {
        generarPaso2();
    }
    else {
        alert("Paso 1 incorrecto");
    }
}

function generarPaso2() {
    let strPaso2 = "";
    for (o in empresa.listaObjetivos) {
        strPaso2 = strPaso2.concat("<p>" + empresa.listaObjetivos[o].descripcion + "</p>");
        strPaso2 = strPaso2.concat("<div class='div-paso-2-2'>");
        for (let i=1; i<6; i++) {
            let strInputs = "<input type='text' placeholder='Aspecto problemático' class='" + empresa.listaObjetivos[o].id + " obj " + i + "'>" + 
                            "<input type='text' placeholder='Explicación' class='" + empresa.listaObjetivos[o].id + " exp " + i + "'>";
            strPaso2 = strPaso2.concat(strInputs);
        }   
        strPaso2 = strPaso2.concat("</div>");   
    }  
    document.getElementById('div-paso-2').innerHTML = strPaso2;
    cambiarVista("paso-2");
}

function agregarProblemas() {
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        let listaInputs = document.getElementsByClassName(obj.id + " obj");
        for (let i=0; i<listaInputs.length; i++) {
            if(!isEmpty(listaInputs[i].value)) {
                let strArgE2 = obj.id + " exp " + listaInputs[i].className.slice(-1);
                let tmpExplicacion = document.getElementsByClassName(strArgE2);
                let tmpProblema = crearProblema(idClases('P', contadorProblemas), listaInputs[i].value, tmpExplicacion[0].value, []);
                obj.listaProblemas.push(tmpProblema);
            }
        }
    }
    generarPaso3(); 
}

function generarPaso3() {
    let strPaso3 = "";
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        if(obj.listaProblemas.length !== 0) {
            strPaso3 = strPaso3.concat("<p style='font-weight:bold'>Objetivo: " + obj.descripcion + "</p><p></p><p></p>");
            for(p in obj.listaProblemas) {
                let prob = obj.listaProblemas[p];
                strPaso3 = strPaso3.concat("<p>" + prob.descripcion + "</p>");
                let strClass = obj.id + " " + prob.id;
                strPaso3 = strPaso3.concat("<div class='columna-paso-3'>" + 
                                            "<p>SI&nbsp</p><input type='radio' name=r'" + prob.id + "' value='Si' class='" + strClass + " rad'>" +
                                            "&nbsp&nbsp<p>NO&nbsp</p><input type='radio' name=r'" + prob.id+ "' value='No' class='" + strClass + " rad'> </div>");
                strPaso3 = strPaso3.concat("<input type='text' placeholder='Explicación' class='" + strClass + " exp'>");
            }
        }
    }
    document.getElementById('div-paso-3').innerHTML = strPaso3;
    cambiarVista("paso-3");
}

function agregarEsDatos() {
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            let radios = document.getElementsByClassName(obj.id + " " + prob.id + " rad");
            let exp = document.getElementsByClassName(obj.id + " " + prob.id + " exp");
            if (radios[0].checked) {
                prob.esDeDatos = radios[0].value;            
            }
            else {
                prob.esDeDatos = radios[1].value;
            }
            prob.explicacionEsDeDatos = exp[0].value;
        }
    }
    generarPaso4();
}

function generarPaso4() {
    let strPaso4 = "";
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        strPaso4 = strPaso4.concat("<p style='font-weight:bold' id='sub-paso-4-" + o + "'>" + obj.descripcion + "</p>");
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            if (prob.esDeDatos === 'Si') {
                let strClass = obj.id + " " + prob.id;
                strPaso4 = strPaso4.concat("<p>" + prob.descripcion + "</p>")
                strPaso4 = strPaso4.concat("<div class='fila-paso-4'><input type='text' placeholder='Datos involucrados' class='" + strClass + " dat'>" + 
                                            "<input type='text' placeholder='Explicación' class='" + strClass + " expD'></div>");
            }       
        }       
    }
    document.getElementById('div-paso-4').innerHTML = strPaso4;
    cambiarVista("paso-4");
}

function agregarDatos() {
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            if (prob.esDeDatos === 'Si') {
                let datos = document.getElementsByClassName(obj.id + " " + prob.id + " dat");
                let exp = document.getElementsByClassName(obj.id + " " + prob.id + " expD");
                let arregloDatos = datos[0].value.split(",");
                for (let i=0; i<arregloDatos.length; i++) {
                    prob.listaDatos.push(arregloDatos[i]);
                }
                prob.explicacionDatos = exp[0].value;
            }
        }
    }
}

function generarPaso5() {
    cambiarVista("paso-5");
}

function agregarImpactoFinanciero() {
    alert("FIN");
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
