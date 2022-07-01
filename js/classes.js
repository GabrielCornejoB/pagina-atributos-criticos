function crearEmpresa(descripcionEmpresa) {
    return {
        id,
        descripcion: descripcionEmpresa,
        listaObjetivos
    };
}

function crearObjetivo(descripcionObjetivo) {
    return {
        id,                             // Consecutivo: O001, 0213, ...
        descripcion: descripcionObjetivo,
        listaProblemas
    };
}

function crearProblema(descripcionProblema) {
    return {
        id,                             // Consecutivo: P001, P213, ...             
        descripcion: descripcionProblema,
        esDeDatos,                      // Bool, define si el problema es o no de datos
        valorTotal,
        listaDatos,
        listaExplicaciones
    };
}

function crearDato(descripcionDato) {
    return {
        id,                             // Consecutivo: D001, D213, ...  
        descripcion: descripcionDato,   // Descripción inicial que ingresa el cliente del dato
        descripcionFinal,               // De tipo 'Diccionario', descripción final que sale de nuestro diccionario de datos
        valorParticular
    };
}

// Aquí esto es una clase diccionario pero realmente debería ser de tipo DatoDiccionario, luego lo consulto
function crearDiccionario(descripcionDiccionario) {
    return {
        id,
        descripcion: descripcionDiccionario,
        listaTerminos                      
    };
}

// Los Terminos se refieren a las palabras que representan un mismo DatoDiccionario
function crearTermino(descripcionTermino) {
    return {
        id,
        descripcion: descripcionTermino
    };
}