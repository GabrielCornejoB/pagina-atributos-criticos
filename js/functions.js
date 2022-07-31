// Funciones Paso 1:
function generarTextArea() {
    console.log("'generarTextArea()' called");
    let strTextArea = "<textarea placeholder='Objetivo' cols='150' rows='3' style='resize:none' required></textarea>";
    document.getElementById("inputs").insertAdjacentHTML('beforeend', strTextArea); 
}