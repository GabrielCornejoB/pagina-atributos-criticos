<?php
    require_once "php/funciones.php";
?>

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
                <li><a href="aspectosProblematicos.php">Aspectos Problemáticos</a></li>
                <li><a href="datos.php">Datos</a></li>
            </ul>
        </nav>
    </header>
    
    <div class="objetivos">
        <?php
            generarAspectosP();
        ?>

        <form action="./php/agregarProblema.php" method="post">
            <p>En el siguiente campo puede agregar más objetivos aspectos problemáticos, una vez haya terminado de escribir uno, presione "Agregar"</p>
            
            <select name="objetivoAP" id="objetivos" required>
                <option disabled selected value style="color:gray"> -- seleccione el objetivo al que pertenece el aspecto problemático -- </option>
                <?php
                    generarSelect();
                ?>           
            </select>
            <br>
            <textarea placeholder='Aspecto Problemático' rows='3' style='resize:none' name='problema' required></textarea>
            <br>
            <textarea placeholder='Justificación del aspecto problemático' rows='3' style='resize:none' name='justificacion' required></textarea>
            <br>
            <div class="radios-problemas">
                <p>¿El problema es ocasionado por calidad de datos?</p>
                <div class="radios"><div class="label-radio"><label for="si">SI</label>
                <input type="radio" name="esDeDatos" id="si" value='1' checked></div>
                <div class="label-radio"><label for="no">NO</label>
                <input type="radio" name="esDeDatos" id="no" value='0'></div></div>
            </div>
            <!-- radio -->
            <br>
            <textarea placeholder='Justificación porque es o no ocasionado por calidad de datos' rows='3' style='resize:none' name='justCalidad' required></textarea>
            <br>
            <button type="submit">Agregar</button>
        </form>

    </div>
    <script>
        function infoProblema(idDiv) {
            let div = document.getElementById(idDiv);
            if(div.hidden === true) { div.hidden = false; }
            else { div.hidden = true; }
        }
    </script>
</body>
</html>