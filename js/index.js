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

function generarTextArea() {
    console.log("'generarTextArea()' called");
    let strTextArea = "<textarea cols='100' rows='3' class='input-paso-1 p-1' style='resize:none'></textarea>";
    document.getElementById("div-paso-1").insertAdjacentHTML('beforeend', strTextArea); 
}

function validarPaso1() {
    let listaElementos = document.getElementsByClassName('p-1');
    let hayVacio = false;
    console.log(listaElementos.length);
    for (let i=0; i<listaElementos.length; i++) {
        if(isEmpty(listaElementos[i].value)) {
            hayVacio = true;
        }
    }
    if (hayVacio === false) {
        agregarObjetivos();
    }
    else {
        alert("Aún faltan campos por llenar")
    }
}

function agregarObjetivos() {
    console.log("'agregarObjetivos()' called");
    empresa.listaObjetivos = [];
    let listaInputs = document.getElementsByClassName("input-paso-1");
    for (let i=0; i<listaInputs.length; i++) {
        let tmpObjetivo = crearObjetivo(idClases('O', contadorObjetivos), listaInputs[i].value, []);
        empresa.listaObjetivos.push(tmpObjetivo);      
    }
    generarPaso2(); 
}

function generarPaso2() {
    console.log("'generarPaso2()' called");
    let strPaso2 = "";
    for (o in empresa.listaObjetivos) {
        strPaso2 = strPaso2.concat("<p>" + empresa.listaObjetivos[o].descripcion + "</p>"); 
        strPaso2 = strPaso2.concat("<div class='div-paso-2-2'>");    
        for (let i=1; i<6; i++) {
            let strInputs = "<input type='text' placeholder='Aspecto problemático' class='" + empresa.listaObjetivos[o].id + " pro " + i + "'>" + 
                            "<input type='text' placeholder='Explicación' class='" + empresa.listaObjetivos[o].id + " exp " + i + "'>";
            strPaso2 = strPaso2.concat(strInputs);
        }  
        strPaso2 = strPaso2.concat("</div>");  
    }  
    document.getElementById('div-paso-2').innerHTML = strPaso2;
    cambiarVista("paso-2");
}

function validarPaso2() {
    let listaProbs = document.getElementsByClassName('pro');
    let noHayExps = false;
    let hayProbs = false;
    for (let i=0; i<listaProbs.length; i++) {
        if(!isEmpty(listaProbs[i].value)) {
            let tmpExp = document.getElementsByClassName(listaProbs[i].className.slice(0,6) + "exp " + listaProbs[i].className.slice(-1));
            if(isEmpty(tmpExp[0].value)) {
                noHayExps = true;
            }
            hayProbs = true;
        }
    }
    if(noHayExps === false && hayProbs === true) {
        agregarProblemas();
    }
    else {
        alert("Aún faltan campos por llenar");
    }
}

function agregarProblemas() {
    console.log("'agregarProblemas()' called");
    let explicacionesProblemasValidas = true;
    let alMenosUnProblema = false;
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        obj.listaProblemas = [];
        let listaInputs = document.getElementsByClassName(obj.id + " pro");
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
    console.log("'generarPaso3()' called");
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
                                            "<p>SI&nbsp</p><input type='radio' name=r'" + prob.id + "' value='Si' class='" + strClass + " rad' checked>" +
                                            "&nbsp&nbsp<p>NO&nbsp</p><input type='radio' name=r'" + prob.id+ "' value='No' class='" + strClass + " rad'> </div>");
                strPaso3 = strPaso3.concat("<input type='text' placeholder='Explicación' class='" + strClass + " exp2'>");
            }
        }
    }
    document.getElementById('div-paso-3').innerHTML = strPaso3;
    cambiarVista("paso-3");
}

function agregarEsDatos() {
    console.log("'agregarEsDatos()' called");
    let explicacionInvalida = false;
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            let radios = document.getElementsByClassName(obj.id + " " + prob.id + " rad");
            let exp = document.getElementsByClassName(obj.id + " " + prob.id + " exp2");
            if(!isEmpty(exp[0].value)){
                prob.explicacionEsDeDatos = exp[0].value;
                if (radios[0].checked) {
                    prob.esDeDatos = radios[0].value;            
                }
                else {
                    prob.esDeDatos = radios[1].value;
                }
            }
            else {
                explicacionInvalida = true;
            }
        }
    }
    if(explicacionInvalida === false) {
        generarPaso4();
    }
    else {
        alert("Error: Debe colocar las descripciones para pasar al siguiente paso");
    }
}

function generarPaso4() {
    console.log("'generarPaso4()' called");
    let strPaso4 = "";
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        strPaso4 = strPaso4.concat("<p style='font-weight:bold'>" + obj.descripcion + "</p>");
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
    console.log("'agregarDatos()' called");
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            if (prob.esDeDatos === 'Si') {
                let datos = document.getElementsByClassName(obj.id + " " + prob.id + " dat");
                let exp = document.getElementsByClassName(obj.id + " " + prob.id + " expD");
                let arregloDatos = datos[0].value.split(",");
                for (let i=0; i<arregloDatos.length; i++) {
                    prob.listaDatos.push(arregloDatos[i].trim());
                }
                prob.explicacionDatos = exp[0].value;
            }
        }
    }
    generarPaso5();
}

function generarPaso5() {
    console.log("'generarPaso5()' called");
    let strPaso5 = "";
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        strPaso5 = strPaso5.concat("<p style='font-weight:bold'>" + obj.descripcion + "</p>");
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            if (prob.esDeDatos === "Si") {
                strPaso5 = strPaso5.concat("<p>" + prob.descripcion + "</p>")
                strPaso5 = strPaso5.concat("<div class='fila-paso-5'> <input type='text' placeholder='Frecuencia mensual'>" + 
                                            "<input type='text' placeholder='Impacto mensual'>" + 
                                            "<input type='text' placeholder='Impacto anual'>" + 
                                            "<input type='text' placeholder='Explicación'> </div>");
            }
        }
    }
    document.getElementById('div-paso-5').innerHTML = strPaso5;
    cambiarVista("paso-5");
}

function logFinal() {
    console.log("'logFinal()' called");
    cambiarVista("paso-5");
    console.log("Nombre empresa: " + empresa.nombre);
    console.log("Lista de objetivos estratégicos:");
    for(let i=0; i<empresa.listaObjetivos.length; i++) {
        console.log(" - " + empresa.listaObjetivos[i].descripcion);
        console.log("\tLista de aspectos problemáticos:");
        for(let j=0; j<empresa.listaObjetivos[i].listaProblemas.length; j++) {
            console.log("\t- " + empresa.listaObjetivos[i].listaProblemas[j].descripcion + " (Es de Datos: " + empresa.listaObjetivos[i].listaProblemas[j].esDeDatos + ")");
            if(empresa.listaObjetivos[i].listaProblemas[j].esDeDatos === "Si") {
                console.log("\t\tLista de datos:");
                for(let k=0; k<empresa.listaObjetivos[i].listaProblemas[j].listaDatos.length; k++) {
                    console.log("\t\t- " + empresa.listaObjetivos[i].listaProblemas[j].listaDatos[k]);
                }
            }
        }
    }
}

function agregarImpactoFinanciero() {
    
}

// Cambiar de vista en el HTML
let currentDiv = document.getElementById("paso-1")
document.getElementById("btn-paso-1").style.backgroundColor = 'rebeccapurple';
function cambiarVista(idDiv) {
    let div = document.getElementById(idDiv);
    if(div.hidden !== false) {
        currentDiv.hidden = true;
        div.hidden = false;
        let idOld = currentDiv.id;
        currentDiv = div;
        document.getElementById("btn-" + idDiv).style.backgroundColor = 'rebeccapurple';
        document.getElementById("btn-" + idOld).style.backgroundColor = 'transparent';
    }
}