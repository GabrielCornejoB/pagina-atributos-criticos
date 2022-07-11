let empresa = JSON.parse(localStorage.getItem("nombre-empresa"));
console.log(empresa);

document.getElementById("titulo-informe").innerHTML = "Informe final " + empresa.nombre;
let d = new Date();
document.getElementById("fecha-informe").innerHTML = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();

let div_objetivos = document.getElementsByClassName("objetivos");
let strInforme = "";
let formatoDinero = Intl.NumberFormat('en-US');
let it = 1;
for (o in empresa.listaObjetivos) {
    let obj = empresa.listaObjetivos[o];
    strInforme = strInforme.concat("<div class='objetivo " + obj.id + "'>" + 
                                        "<h2 class='titulo-objetivo'> Objetivo " + it + "</h2>" +
                                        "<p>" + obj.descripcion + "</p>" + 
                                        "<div class='problemas'>");  
    let it_p = 1;
    for (p in obj.listaProblemas) {
        let prob = obj.listaProblemas[p];
        strInforme = strInforme.concat("<div class='problema " + prob.id + "'>" + 
                                            "<h3 class='titulo-problema'>Aspecto problemático " + it_p + ": " + prob.descripcion + "</h3>" +
                                            "<p>" + prob.explicacion + "</p>" + 
                                            "<div class='es-por-datos'>" + 
                                                "<p>Es ocasionado por calidad de datos?: </p>" +
                                                "<p>" + prob.esDeDatos + "</p>" + 
                                            "</div>" + 
                                            "<p style='padding-left:20px; margin-top:0px'>" + prob.explicacionEsDeDatos + "</p>");
                                            
        if(prob.esDeDatos === 'Si') {
            strInforme = strInforme.concat("<p>Justificación datos problemáticos: " + prob.explicacionDatos + "</p>" + 
                                            "<div class='datos'>");
            let it_d = 1;
            for (d in prob.listaDatos) {
                let dato = prob.listaDatos[d];              
                strInforme = strInforme.concat("<div class='dato " + dato.id + "'>" + 
                                                    "<h4 class='titulo-dato'>Dato " + it_d + ": " + dato.descripcion + "</h4>" +
                                                    "<div class='div-financiero'>" + 
                                                        "<p>Frecuencia de ocurrencia (mensual/anual):</p>" + 
                                                        "<p>" + dato.frecuenciaMensual + " / "+ (dato.frecuenciaMensual * 12) + "</p>" +
                                                    "</div>" +
                                                    "<div class='div-financiero'>" + 
                                                        "<p>Impacto financiero (mensual/anual):</p>" + 
                                                        "<p>$" + formatoDinero.format(dato.valorParticularAnual/12) + " / $" + formatoDinero.format(dato.valorParticularAnual) + "</p>" +
                                                    "</div>" + 
                                                    "<div class='div-financiero'><p>Justificación impacto financiero: " + dato.explicacionValor + "</p></div>" +
                                                "</div><hr>");
                it_d++;
            }
            strInforme = strInforme.concat( "</div>");
            strInforme = strInforme.concat("<div class='div-financiero'>" + 
                                                "<p>Impacto financiero total (mensual/anual):</p>" + 
                                                "<p>$" + formatoDinero.format(prob.valorTotalAnual/12) + " / $" + formatoDinero.format(prob.valorTotalAnual) + "</p>" +
                                            "</div>");         
        } 
        it_p++;
        strInforme = strInforme.concat("</div>");
    }
    strInforme = strInforme.concat("</div></div><hr>");
    it++;
    
}
document.getElementsByClassName("objetivos")[0].innerHTML = strInforme;