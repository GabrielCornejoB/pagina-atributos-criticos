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
function crearProblema(id, descripcionProblema, explicacion, listaDatos, esDeDatos, explicacionDatos, valorTotalAnual,  explicacionEsDeDatos) {
    return {
        id,                             // Consecutivo: P001, P213, ...             
        descripcion: descripcionProblema,
        explicacion,
        esDeDatos,                      // Bool, define si el problema es o no de datos
        explicacionDatos,
        valorTotalAnual,
        listaDatos,
        explicacionEsDeDatos
    };
}
function crearDato(id, descripcionDato, descripcionFinal, valorParticularAnual, frecuenciaMensual, explicacionValor) {
    return {
        id,                             // Consecutivo: D001, D213, ...  
        descripcion: descripcionDato,   // Descripción inicial que ingresa el cliente del dato
        descripcionFinal,               // De tipo 'Diccionario', descripción final que sale de nuestro diccionario de datos
        valorParticularAnual,
        frecuenciaMensual,
        explicacionValor
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
    else if (letra.toUpperCase() === 'D') {
        contadorDatos++;
    }
    return letra.toUpperCase() + final;
}

function isEmpty(str) {
    return !str.trim().length;
}

let empresa = crearEmpresa("E0001", "tmp", []);

function validarEmpresa() {
    console.log("'validarEmpresa()' called");
    let inputEmpresa = document.getElementById("input-nombre-empresa");
    let empresaValida = true;
    if(isEmpty(inputEmpresa.value)) {
        empresaValida = false;
    }
    if(empresaValida === true) {
        empresa.nombre = inputEmpresa.value;
        console.log(empresa);
        document.getElementById('sec-inicio').hidden = true;
        document.getElementById('sec-pasos').hidden = false;
    }
    else {
        alert("Debe colocar el nombre de la empresa para poder inciar");
    }
}

function generarTextArea() {
    console.log("'generarTextArea()' called");
    let strTextArea = "<textarea placeholder='Objetivo' cols='100' rows='3' class='input-paso-1 p-1' style='resize:none'></textarea>";
    document.getElementById("div-paso-1").insertAdjacentHTML('beforeend', strTextArea); 
}

function validarPaso1() {
    console.log("'validarPaso1()' called");
    let listaElementos = document.getElementsByClassName('p-1');
    let hayVacio = false;
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
        strPaso2 = strPaso2.concat("<p style='font-weight:bold'>" + empresa.listaObjetivos[o].descripcion + "</p>"); 
        strPaso2 = strPaso2.concat("<div class='div-paso-2-2'>");    
        for (let i=1; i<6; i++) {
            let strInputs = "<textarea rows='3' style='resize:none' placeholder='Aspecto problemático' class='" + empresa.listaObjetivos[o].id + " pro " + i + "'></textarea>" + 
                            "<textarea rows='3' style='resize:none' placeholder='Explicación del aspecto problemático' class='" + empresa.listaObjetivos[o].id + " exp " + i + "'></textarea>";
            strPaso2 = strPaso2.concat(strInputs);
        }  
        strPaso2 = strPaso2.concat("</div>");  
    }  
    document.getElementById('div-paso-2').innerHTML = strPaso2;
    cambiarVista("paso-2", false);
}

function validarPaso2() {
    console.log("'validarPaso2()' called");
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
        if(hayProbs === false) {
            alert("Debe colocar al menos un aspecto problemático para continuar al siguiente paso.");
        }
        else if(noHayExps === true) {
            alert("Debe colocar una explicación por cada aspecto problemático que ingresó.");
        }
    }
}

function agregarProblemas() {
    console.log("'agregarProblemas()' called");
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
            strPaso3 = strPaso3.concat("<p style='font-weight:bold'>" + obj.descripcion + "</p><p></p><p></p>");
            for(p in obj.listaProblemas) {
                let prob = obj.listaProblemas[p];
                if(prob.descripcion.length >= 80) {
                    strPaso3 = strPaso3.concat("<p>" + prob.descripcion.slice(0,80) + "...</p>");
                }
                else {
                    strPaso3 = strPaso3.concat("<p>" + prob.descripcion + "</p>");
                }   
                let strClass = obj.id + " " + prob.id;
                strPaso3 = strPaso3.concat("<div class='columna-paso-3'>" + 
                                            "<p>SI&nbsp</p><input type='radio' name=r'" + prob.id + "' value='Si' class='" + strClass + " rad' checked>" +
                                            "&nbsp&nbsp<p>NO&nbsp</p><input type='radio' name=r'" + prob.id+ "' value='No' class='" + strClass + " rad'> </div>");

                strPaso3 = strPaso3.concat("<textarea rows='3' style='resize:none' placeholder='Explicación de porque el problema es ocasionado o no por calidad de datos' class='" + strClass + " exp2'></textarea>");
            }
        }
    }
    document.getElementById('div-paso-3').innerHTML = strPaso3;
    cambiarVista("paso-3", false);
}

function validarPaso3() {
    console.log("'validarPaso3()' called");
    let listaExps = document.getElementsByClassName("exp2");
    let expVacia = false;
    for (let i=0; i<listaExps.length; i++) {
        if(isEmpty(listaExps[i].value)) {
            expVacia = true;
        }
    }
    if(expVacia === false) {
        agregarEsDatos();
    }
    else {
        alert("Aún faltan campos por llenar");
    }
}

function agregarEsDatos() {
    console.log("'agregarEsDatos()' called");
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            let radios = document.getElementsByClassName(obj.id + " " + prob.id + " rad");
            let exp = document.getElementsByClassName(obj.id + " " + prob.id + " exp2");
            prob.explicacionEsDeDatos = exp[0].value;
            if (radios[0].checked) {
                prob.esDeDatos = radios[0].value;            
            }
            else {
                prob.esDeDatos = radios[1].value;
            }
        }
    }
    generarPaso4();
}

function generarPaso4() {
    console.log("'generarPaso4()' called");
    let strPaso4 = "";
    let div = document.getElementById('div-paso-4');
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        strPaso4 = strPaso4.concat("<p style='font-weight:bold'>" + obj.descripcion + "</p>");
        let hayProbDatos = false;
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            if (prob.esDeDatos === 'Si') {
                hayProbDatos = true;
                let strClass = obj.id + " " + prob.id;
                strPaso4 = strPaso4.concat("<p>" + prob.descripcion + "</p>");
                strDataList = "<input list='l-datos' placeholder='Nombre del dato' class='" + strClass + " dat'>";
                strPaso4 = strPaso4.concat("<div class='fila-paso-4'>" + 
                                                "<div class='input-paso-4'>" + strDataList + "<button onclick=\"escribirDato('" + strClass + "')\">Agregar</button>" + "</div>" +
                                                "<textarea class='" + strClass + " dats4' style='resize:none' disabled></textarea>" +
                                                "<textarea placeholder='Explicación de porque los datos son problemáticos' class='" + strClass + " expD' style='resize:none'></textarea>" + 
                                            "</div>");
            }       
        }    
        if(hayProbDatos === false) {
            strPaso4 = strPaso4.concat("<p>Este objetivo no tiene problemas por calidad de datos</p>");
        }   
    }
    document.getElementById('div-paso-4').innerHTML = strPaso4;
    cambiarVista("paso-4", false);
}

function escribirDato(classInput) {
    console.log('escribirdato');
    if(document.getElementsByClassName(classInput + " dat")[0].value !== "") {
        if (document.getElementsByClassName(classInput + " dats4")[0].value !== "") {
            document.getElementsByClassName(classInput + " dats4")[0].insertAdjacentHTML('beforeend',' , ');
        } 
        document.getElementsByClassName(classInput + " dats4")[0].insertAdjacentHTML('beforeend', document.getElementsByClassName(classInput + " dat")[0].value); 
        document.getElementsByClassName(classInput + " dat")[0].value = "";
    }
}

function validarPaso4() {
    console.log("'validarPaso4()' called");
    let listaDatosI = document.getElementsByClassName("dats4");
    let listaExpsD = document.getElementsByClassName("expD");
    let faltaCampo = false;

    for (let i=0; i<listaDatosI.length; i++) {
        if(isEmpty(listaDatosI[i].value) || isEmpty(listaExpsD[i].value)) {
            faltaCampo = true;
        }
    }
    if(faltaCampo === false) {
        agregarDatos();
    }
    else {
        alert("Aún faltan campos por llenar");
    }
}

function agregarDatos() {
    console.log("'agregarDatos()' called");
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            if (prob.esDeDatos === 'Si') {
                let datos = document.getElementsByClassName(obj.id + " " + prob.id + " dats4");
                let exp = document.getElementsByClassName(obj.id + " " + prob.id + " expD");
                let datosSplit = datos[0].value.split(" , ");
                prob.listaDatos = [];
                for (let i=0; i<datosSplit.length; i++) {
                    let tmpDato = crearDato(idClases('D', contadorDatos), datosSplit[i]);
                    prob.listaDatos.push(tmpDato);
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
        let hayProbDatos = false;
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            if (prob.esDeDatos === "Si") {
                hayProbDatos = true;
                strPaso5 = strPaso5.concat("<hr style='height:1px; border-width:0; background-color:gray'>");
                strPaso5 = strPaso5.concat("<p>" + prob.descripcion + "</p>")
                for (d in prob.listaDatos) {
                    let strIdDato = prob.listaDatos[d].id;
                    strPaso5 = strPaso5.concat("<div class='fila-paso-5'>" + 
                                                "<p style='font-size:small'>" + prob.listaDatos[d].descripcion + "</p>" + 
                                                "<input type='number' placeholder='Frec mensual' class='" + strIdDato + " frec inp-paso-5'>" + 
                                                "<input type='number' placeholder='Impacto mensual ($)' class='" + strIdDato + " impM inp-paso-5'>" +      
                                                "<textarea rows='3' placeholder='Explicación' class='" + strIdDato + " exp5 inp-paso-5' style='resize:none'></textarea> </div>");
                                                
                }
            }          
        }
        if(hayProbDatos === false) {
            strPaso5 = strPaso5.concat("<p>Este objetivo no tiene problemas por calidad de datos</p>");
        }    
        strPaso5 = strPaso5.concat("<hr style='height:3px; border-width:0; background-color:gray'>");
    }
    document.getElementById('div-paso-5').innerHTML = strPaso5;
    cambiarVista("paso-5", false);
}

function validarPaso5() {
    console.log("'validarPaso5()' called");
    let listaInputs5 = document.getElementsByClassName("inp-paso-5");
    let faltaCampo = false;
    for (let i=0; i<listaInputs5.length; i++) {
        if(isEmpty(listaInputs5[i].value)) {
            faltaCampo = true;
        }
    }
    if(faltaCampo === false) {
        agregarImpactoFinanciero();
    }
    else {
        alert("Aún faltan campos por llenar");
    }
}

function agregarImpactoFinanciero() {
    console.log("'agregarImpactoFinanciero()' called");
    for (o in empresa.listaObjetivos) {
        let obj = empresa.listaObjetivos[o];
        for (p in obj.listaProblemas) {
            let prob = obj.listaProblemas[p];
            let tmpValorTotal = 0;
            if (prob.esDeDatos === 'Si') {
                for (d in prob.listaDatos) {
                    let dato = prob.listaDatos[d];
                    let campos = document.getElementsByClassName(dato.id);
                    dato.frecuenciaMensual = campos[0].value;
                    dato.valorParticularAnual = (campos[1].value * 12);
                    dato.explicacionValor = campos[2].value;
                    tmpValorTotal += (campos[1].value * 12);
                }
            }
            prob.valorTotalAnual = tmpValorTotal;
        }
    }
    localStorage.setItem("nombre-empresa", JSON.stringify(empresa));
    window.location.href = "informe.html";
}

// Cambiar de vista en el HTML
let currentDiv = document.getElementById("paso-1")
document.getElementById("btn-paso-1").disabled = true;
function cambiarVista(idDiv, isBtn) {
    let div = document.getElementById(idDiv);
    let curDigit = currentDiv.id.charAt(currentDiv.id.length - 1);
    let digit = idDiv.charAt(idDiv.length-1);
    if((div.hidden !== false && isBtn === false) || (div.hidden !== false && isBtn === true && curDigit > digit)) {
        let idOld = currentDiv.id;
        currentDiv.hidden = true;
        div.hidden = false;
        currentDiv = div;
        document.getElementById("btn-" + idDiv).disabled = true;
        document.getElementById("btn-" + idOld).disabled = false;
    }
    else {
        alert("No se puede avanzar en los pasos desde estos botones, solo retroceder, si desea avanzar debe de presionar el botón Confirmar");
    }
}