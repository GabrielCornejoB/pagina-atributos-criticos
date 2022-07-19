let empresa = JSON.parse(localStorage.getItem("nombre-empresa"));

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
        strInforme = strInforme.concat("<hr><div class='problema " + prob.id + "'>" + 
                                            "<h3 class='titulo-problema'>Aspecto problemático " + it_p + ": " + prob.descripcion + "</h3>" +
                                            "<p class='subtitulo'>Justificación aspecto problemático</p>" + 
                                            "<p>" + prob.explicacion + "</p>" + 
                                            "<p class='subtitulo'>El aspecto problemático es ocasionado por calidad de datos?: </p>" +
                                            "<p>(" + prob.esDeDatos.toUpperCase() + "). " + prob.explicacionEsDeDatos +"</p>");
                                            
        if(prob.esDeDatos === 'Si') {
            strInforme = strInforme.concat("<p class='subtitulo'>Justificación datos involucrados en el aspecto problemático generado por calidad de datos</p>" + 
                                            "<p >" + prob.explicacionDatos + "</p>" + 
                                            "<div class='datos'>");
            let it_d = 1;
            for (d in prob.listaDatos) {
                let dato = prob.listaDatos[d];              
                strInforme = strInforme.concat("<div class='dato " + dato.id + "'>" + 
                                                    "<h4 class='titulo-dato'>Dato " + it_d + ": " + dato.descripcion + "</h4>" +
                                                    "<p class='subtitulo'>Frecuencia en que el dato genera el aspecto problemático (mensual/anual)</p>" + 
                                                    "<p style='text-align:end'>" + dato.frecuenciaMensual + " / "+ (dato.frecuenciaMensual * 12) + "</p>" +
                                                    "<p class='subtitulo'>Impacto financiero que causa el dato al generar el aspecto problemático (mensual/anual)</p>" +
                                                    "<p style='text-align:end'>$" + formatoDinero.format(dato.valorParticularAnual/12) + " / $" + formatoDinero.format(dato.valorParticularAnual) + "</p>" +
                                                    "<p class='subtitulo'>Justificación frecuencia e impacto financiero del dato</p>" +
                                                    "<p>" + dato.explicacionValor + "</p>" +
                                                "</div><hr>");
                it_d++;
            }
            strInforme = strInforme.concat( "</div>");
            strInforme = strInforme.concat("<p class='subtitulo'>Impacto financiero total del aspecto problemático (mensual/anual):</p>" + 
                                            "<p style='text-align:end'>$" + formatoDinero.format(prob.valorTotalAnual/12) + " / $" + formatoDinero.format(prob.valorTotalAnual) + "</p>");         
        } 
        it_p++;
        strInforme = strInforme.concat("</div>");
    }
    strInforme = strInforme.concat("</div></div><hr>");
    it++;
    
}
document.getElementsByClassName("objetivos")[0].innerHTML = strInforme;
document.getElementById("input-post").value = JSON.stringify(empresa);