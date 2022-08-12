<?php
function generarObjetivos () {
    require_once './php/connection.php';
    // Conectar lo de id_empresa con el login
    $query = "SELECT * FROM objetivos WHERE id_empresa=1;";
    $result = mysqli_query($conn, $query);
    $resultRows = mysqli_num_rows($result);
    if ($resultRows > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<div class='objetivo'><p>" . $row['descripcion'] . "</p><span class='material-symbols-outlined'>edit</span></div><hr>";
        }
    }
}

function generarAspectosP () {
    require './php/connection.php';
    // Conectar lo de id_empresa con el login
    $queryObj = "SELECT * FROM objetivos WHERE id_empresa=1;";
    $sqlObj = mysqli_query($conn, $queryObj);
    $filasObj = mysqli_num_rows($sqlObj);
    $strHTML = "";
    if ($filasObj > 0) {
        $count = 0;
        while ($obj = mysqli_fetch_assoc($sqlObj)) {
            $strHTML = $strHTML . "<div class='prob-titulo'><p>" . $obj['descripcion'] . "</p><span class='material-symbols-outlined'>edit</span></div>" . "<div class='problemas'>";

            $queryProb = "SELECT * FROM problemas WHERE id_objetivo=" . $obj['id_objetivo'];
            $sqlProb = mysqli_query($conn, $queryProb);
            $filasProb = mysqli_num_rows($sqlProb);
            if($filasProb > 0) {
                while ($prob = mysqli_fetch_assoc($sqlProb)) {
                    $count = $count + 1;
                    $strHTML = $strHTML . "<div class='problema' onclick=\"infoProblema('problema$count')\">";

                    $esDeDatos = "NO";
                    if ($prob['es_de_datos'] == '1') {
                        $esDeDatos = "SI";
                    }

                    $strHTML = $strHTML . "<p>" . $prob['descripcion'] . "</p>";
                    $strHTML = $strHTML . "<div class='problema-ext' id='problema" . $count . "' hidden>" . 
                                            "<p><strong>Justificación: </strong>" . $prob['justificacion'] ."</p>" . 
                                            "<p><strong>Es ocasionado por calidad de datos: </strong>" . $esDeDatos . "</p>" . 
                                            "<p><strong>Justificacion de porque es ocasionado o no por calidad de datos: </strong>" . $prob['justificacion_es_de_datos'] . "</p></div>";

                    $strHTML = $strHTML . "</div>";
                }      
            }         
            $strHTML = $strHTML . "</div><hr>";
        }
        echo $strHTML;
    }
}
function generarSelect () {
    require './php/connection.php';
    $queryObj = "SELECT * FROM objetivos WHERE id_empresa=1;";
    $sqlObj = mysqli_query($conn, $queryObj);
    $filasObj = mysqli_num_rows($sqlObj);
    if ($filasObj > 0) {
        while ($obj = mysqli_fetch_assoc($sqlObj)) {
            echo "<option value='" . $obj['id_objetivo'] . "'>" . substr($obj['descripcion'],0,70) . "</option>";
        }
    }
}