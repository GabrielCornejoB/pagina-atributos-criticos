<?php
function generarObjetivos () {
    require_once './php/connection.php';
    $idEmpresa = $_SESSION['ide'];

    $query = "SELECT * FROM objetivos WHERE id_empresa=$idEmpresa;";
    $result = mysqli_query($conn, $query);
    $resultRows = mysqli_num_rows($result);
    if ($resultRows > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<div class='objetivo'><p><strong>Objetivo:</strong>&emsp;" . $row['descripcion'] . "</p>" . 
                    "<form action='./editar.php' method='post' class='form-edit'>" . 
                        "<input type='text' name='id_tipo' value='1' hidden>" . 
                        "<input type='text' name='id_obj' hidden value='" . $row['id_objetivo'] . "'>" .
                        "<input type='text' name='desc_obj' hidden value='" . $row['descripcion'] . "'>" .
                        "<button type='submit'><span class='material-symbols-outlined'>edit</span></button>" . 
                    "</form></div><hr>";
        }
    }
}
function generarAspectosP () {
    require './php/connection.php';
    $idEmpresa = $_SESSION['ide'];
    // Conectar lo de id_empresa con el login
    $queryObj = "SELECT * FROM objetivos WHERE id_empresa=$idEmpresa;";
    $sqlObj = mysqli_query($conn, $queryObj);
    $filasObj = mysqli_num_rows($sqlObj);
    $strHTML = "";
    if ($filasObj > 0) {
        $count = 0;
        while ($obj = mysqli_fetch_assoc($sqlObj)) {
             echo "<p><strong>Objetivo:</strong>&emsp;" . $obj['descripcion'] . "</p>";
             echo "<div class='problemas'>";

             $queryProb = "SELECT * FROM problemas WHERE id_objetivo=" . $obj['id_objetivo'];
             $sqlProb = mysqli_query($conn, $queryProb);
             $filasProb = mysqli_num_rows($sqlProb);
            if ($filasProb > 0) {
                while ($prob = mysqli_fetch_assoc($sqlProb)) {
                    $count = $count + 1;
                    echo "<div class='problema' onclick=\"infoProblema('problema$count')\">";
                    $esDeDatos = "NO";
                    if ($prob['es_de_datos'] == '1') {
                        $esDeDatos = "SI";
                    }
                    echo "<div class='problema-lapiz'><p><strong>Aspecto problemático:</strong>&emsp;" . $prob['descripcion'] . "</p>" . 
                            "<form class='form-edit' action='./editar.php' method='post'>" . 
                                "<input type='text' name='id_tipo' value='2' hidden>" . 
                                "<input type='text' name='id_prob' hidden value='" . $prob['id_problema'] . "'>" .
                                "<button type='submit'><span class='material-symbols-outlined' style='font-size:17px;margin-right:7px;'>edit</span></button>" .
                            "</form>" .
                            "</div></div>";
                    echo "<div class='problema-ext' id='problema$count' hidden>" .
                            "<p><strong>Justificación: </strong>" . $prob['justificacion'] ."</p>" .
                            "<p><strong>Es ocasionado por calidad de datos: </strong>" . $esDeDatos . "</p>" .
                            "<p><strong>Justificacion de porque es ocasionado o no por calidad de datos: </strong>" . $prob['justificacion_es_de_datos'] . "</p></div>";
                }
            }  
            echo "</div><hr>";
        }
        echo $strHTML;
    }
}
function generarSelect () {
    require './php/connection.php';
    $idEmpresa = $_SESSION['ide'];
    $queryObj = "SELECT * FROM objetivos WHERE id_empresa=$idEmpresa;";
    $sqlObj = mysqli_query($conn, $queryObj);
    $filasObj = mysqli_num_rows($sqlObj);
    if ($filasObj > 0) {
        while ($obj = mysqli_fetch_assoc($sqlObj)) {
            echo "<option value='" . $obj['id_objetivo'] . "'>" . substr($obj['descripcion'],0,70) . "</option>";
        }
    }
}
function generarDatos () {
    setlocale(LC_MONETARY,"en_US");
    require './php/connection.php';
    $idEmpresa = $_SESSION['ide'];
    $queryObj = "SELECT * FROM objetivos WHERE id_empresa=$idEmpresa;";
    $sqlObj = mysqli_query($conn, $queryObj);
    $filasObj = mysqli_num_rows($sqlObj);

    if ($filasObj > 0) {
        while ($obj = mysqli_fetch_assoc($sqlObj)) {
            echo "<div class='prob-titulo'><p><strong>Objetivo:</strong>&emsp;" . $obj['descripcion'] . "<div class='problemas'>";

            $queryProb = "SELECT * FROM problemas WHERE id_objetivo=" . $obj['id_objetivo'] . ";";
            $sqlProb = mysqli_query($conn, $queryProb);
            $filasProb = mysqli_num_rows($sqlProb);
            echo "<table>";
            if ($filasProb > 0) {
                while ($prob = mysqli_fetch_assoc($sqlProb)) {
                    if ($prob['es_de_datos'] == 1) {
                        echo "<tr><td colspan=5 class='prob-tabla'>Aspecto problemático:&emsp;" . $prob['descripcion'] . "</td></tr>" . 
                        "<tr><th style='width:15%'>Dato</th>" ."<th style='width:15%'>Frecuencia mensual</th>" ."<th style='width:15%'>Valor anual</th>" ."<th style='width:45%'>Justificación</th>" . "<th style='width:10%'>¿Editar?</th>" .  "</tr>";

                        $queryDato = "SELECT * FROM datos WHERE id_problema=" . $prob['id_problema'] . ";";
                        $sqlDato = mysqli_query($conn, $queryDato);
                        $filasDato = mysqli_num_rows($sqlDato);
                        if ($filasDato > 0) {    
                            
                            while ($dato = mysqli_fetch_assoc($sqlDato)) {
                                echo "<tr>";
                                echo "<td>" . $dato['descripcion'] . "</td>";
                                echo "<td>" . $dato['frecuencia_mensual'] . "</td>";
                                echo "<td>$" . $dato['valor_particular_anual'] . "</td>";
                                echo "<td>" . $dato['justificacion_financiera'] . "</td>";
                                echo "<td><form class='form-edit' action='./editar.php' method='post'>" . 
                                        "<input type='text' name='id_tipo' value='3' hidden>" . 
                                        "<input type='text' name='id_dato' hidden value='" . $dato['id_dato'] . "'>" .
                                        "<button type='submit'><span class='material-symbols-outlined lapiz-dato' style='font-size:20px;color:black;'>edit</span></button>" . 
                                      "</form></td>";
                                echo "</tr>";
                            }      
                        }
                    }
                }
            }
            echo "</table>";
            echo "</div><hr>";
            echo "</div>";
        }
    }
}
function generarSelectProbs () {
    require './php/connection.php';
    // Aqui hay que hacer un join
    $idEmpresa = $_SESSION['ide'];
    $queryProb = "SELECT problemas.id_problema, problemas.descripcion, problemas.es_de_datos FROM problemas JOIN objetivos ON problemas.id_objetivo = objetivos.id_objetivo WHERE objetivos.id_empresa=$idEmpresa;";
    $sqlProb = mysqli_query($conn, $queryProb);
    $filasProb = mysqli_num_rows($sqlProb);
    if ($filasProb > 0) {
        while ($prob = mysqli_fetch_assoc($sqlProb)) {
            if ($prob['es_de_datos'] == 1) {
                echo "<option value='" . $prob['id_problema'] . "'>" . substr($prob['descripcion'],0,70) . "</option>";
            }   
        }
    }
}
function generarNav() {  
    if (isset($_SESSION['user'])) {
        echo "<nav>" .
                "<ul class='nav-links'>" .
                    "<li><a href='metodologia.php'>Metodología</a></li>" .
                    "<li><a href='objetivos.php'>Objetivos</a></li>" .
                    "<li><a href='aspectosProblematicos.php'>Aspectos Problemáticos</a></li>" .
                    "<li><a href='datos.php'>Datos</a></li>" .
                "</ul>" .
            "</nav>";
    }
    else {
        header("location: index.php");
        exit();
    }
}
function generarFooter() {
    echo "<footer>" .
            "<div class='footer-content'>" .
                "<p>Todos los derechos reservados. No utilizar ni distribuir sin autorización.</p>" .
            "</div>" .
        "</footer>";
}