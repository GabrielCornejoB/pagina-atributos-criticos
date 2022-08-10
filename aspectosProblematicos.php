<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aspectos Problemáticos</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" href="#"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
    <header class="navbar">
        <h1 class="titulo-header">ASPECTOS PROBLEMÁTICOS</h2>
        <nav>
            <ul class="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="objetivos.php">Objetivos</a></li>
                <li><a href="#">Aspectos Problemáticos</a></li>
                <li><a href="#">Datos</a></li>
            </ul>
        </nav>
    </header>
    
    <div class="objetivos">
        <?php
            require_once './php/connection.php';
            // Conectar lo de id_empresa con el login
            $queryObj = "SELECT * FROM objetivos WHERE id_empresa=5;";
            $sqlObj = mysqli_query($conn, $queryObj);
            $filasObj = mysqli_num_rows($sqlObj);

            $strHTML = "";
            if ($filasObj > 0) {
                $count = 0;
                while ($obj = mysqli_fetch_assoc($sqlObj)) {
                    $strHTML = $strHTML . "<p>" . $obj['descripcion'] . "</p>" . "<div class='problemas'>";

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
        ?>
    </div>
    <script>
        function infoProblema(idDiv) {
            let div = document.getElementById(idDiv);
            if(div.hidden === true) { div.hidden = false; }
            else { div.hidden = true; }
        }
    </script>
    <!-- <script src="./js/functions.js"></script>  -->
</body>
</html>