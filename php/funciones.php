<?php
function generarObjetivos () {
    require_once './php/connection.php';
    // Conectar lo de id_empresa con el login
    $query = "SELECT * FROM objetivos WHERE id_empresa=1;";
    $result = mysqli_query($conn, $query);
    $resultRows = mysqli_num_rows($result);
    if ($resultRows > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<div class='objetivo'><p>" . $row['descripcion'] . "</p>" . 
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
    // Conectar lo de id_empresa con el login
    $queryObj = "SELECT * FROM objetivos WHERE id_empresa=1;";
    $sqlObj = mysqli_query($conn, $queryObj);
    $filasObj = mysqli_num_rows($sqlObj);
    $strHTML = "";
    if ($filasObj > 0) {
        $count = 0;
        while ($obj = mysqli_fetch_assoc($sqlObj)) {
            $strHTML = $strHTML . "<div class='prob-titulo'><p>" . $obj['descripcion'] . "</p>" . 
                                    "<form action='./editar.php' method='post' class='form-edit'>" . 
                                        "<input type='text' name='id_tipo' value='2' hidden>" . 
                                        "<input type='text' name='id_obj' hidden value='" . $obj['id_objetivo'] . "'>" .
                                        "<button type='submit'><span class='material-symbols-outlined'>edit</span></div></button>" . 
                                    "</form><div class='problemas'>";

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

                    $strHTML = $strHTML . "<p>" . $prob['descripcion'] . "</p></div>";      // Si falla el ext quitar este ultimo </div>
                    $strHTML = $strHTML . "<div class='problema-ext' id='problema" . $count . "' hidden>" . 
                                            "<p><strong>Justificación: </strong>" . $prob['justificacion'] ."</p>" . 
                                            "<p><strong>Es ocasionado por calidad de datos: </strong>" . $esDeDatos . "</p>" . 
                                            "<p><strong>Justificacion de porque es ocasionado o no por calidad de datos: </strong>" . $prob['justificacion_es_de_datos'] . "</p></div>";

                    // $strHTML = $strHTML . "</div>";
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
function generarDatos () {
    setlocale(LC_MONETARY,"en_US");
    require './php/connection.php';
    // Conectar lo de id_empresa con el login
    $queryObj = "SELECT * FROM objetivos WHERE id_empresa=1;";
    $sqlObj = mysqli_query($conn, $queryObj);
    $filasObj = mysqli_num_rows($sqlObj);
    $strHTML = "";

    if ($filasObj > 0) {
        while ($obj = mysqli_fetch_assoc($sqlObj)) {
            echo "<div class='prob-titulo'><p>" . $obj['descripcion'] . "</p><span class='material-symbols-outlined'>edit</span></div>" . "<div class='problemas'>";

            $queryProb = "SELECT * FROM problemas WHERE id_objetivo=" . $obj['id_objetivo'] . ";";
            $sqlProb = mysqli_query($conn, $queryProb);
            $filasProb = mysqli_num_rows($sqlProb);
            $htmlTable = "";
            echo "<table >";
            if ($filasProb > 0) {
                while ($prob = mysqli_fetch_assoc($sqlProb)) {
                    if ($prob['es_de_datos'] == 1) {
                        echo "<tr><td colspan=4 class='prob-tabla'>" . $prob['descripcion'] . "</td></tr>" . 
                        "<tr><th style='width:15%'>Dato</th>" ."<th style='width:15%'>Frecuencia mensual</th style='width:15%'>" ."<th>Valor anual</th>" ."<th style='width:55%'>Justificación</th></tr>";

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
                                echo "</tr>";
                            }      
                        }
                    }
                }
            }
            echo "</table>";
            echo "</div><hr>";
        }
    }
}
function generarSelectProbs () {
    require './php/connection.php';
    $queryProb = "SELECT * FROM problemas";
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
function generarFormEditarP ($id_obj) {
    require './php/connection.php';
    $queryProb = "SELECT * FROM problemas WHERE id_objetivo='$id_obj';";
    $sqlProb = mysqli_query($conn, $queryProb);
    $filasProb = mysqli_num_rows($sqlProb);
    if ($filasProb > 0) {
        echo "<form action='php/editarProblema.php' method='post'>";
            echo "<p>Aquí puede modificar la los valores de un aspecto problemático, primero debe elegir que aspecto problemático quiere modificar, y luego en los campos de texto puede colocar los nuevos valores. Si desea guardar los cambios presione <strong>\"Aplicar\"</strong>, si desea descartar los cambios presione <strong>\"Regresar\"</strong></p>";
            echo "<select name='aspectosP' required>";
            echo "<option disabled selected value style='color:gray'> -- seleccione el aspecto problemático que desea modificar-- </option>";
            while ($prob = mysqli_fetch_assoc($sqlProb)) {  
                echo "<option value='" . $prob['id_problema'] . "'>" . substr($prob['descripcion'],0,70) . "</option>";
            }
            echo "</select>";

        echo "</form>";
    }
    else {
        echo "<p>Este objetivo no tiene aspectos problemáticos</p>";
    }
}