<?php
    session_start();
    require_once "php/funciones.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" href="#"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
    <header class="navbar">
        <h1 class="titulo-header">DATOS INVOLUCRADOS</h2>
        <?php
            generarNav();
        ?>
    </header>
    <div class="objetivos">
        <?php
            generarDatos();
        ?>
        <form action="./php/agregarDato.php" method="post" style="margin-bottom:50px">
            <p class="txt-input">En el siguiente campo puede agregar más datos, una vez haya terminado de escribir uno, presione "Agregar"</p>
            <br>
            <select name="problemaD" id="problemas" required>
                <option disabled selected value style="color:gray"> -- seleccione el aspecto problemático al que pertenecerá el nuevo dato -- </option>
                <?php
                    generarSelectProbs();
                ?>
            </select>
            <br>
            <div class="inputs-datos">
                <input type="text" name="dato" list="datosDefinidos" placeholder='Descripción dato' required>
                <datalist id='datosDefinidos'>
                    <option value="Nombre"></option>
                    <option value="e-mail"></option>
                    <option value="Dirección"></option>
                    <option value="Precio"></option>
                    <option value="Cantidad"></option>
                    <option value="Marca"></option>
                </datalist>
                <input type="number" name="frecuencia" placeholder='Frecuencia mensual' required>
                <input type="number" name="costo" placeholder='Valor aprox mensual' required>
            </div>    
            <br>
            <textarea placeholder='Justificación de la frecuencia y del valor del dato' rows='3' style='resize:none' name='justFinan' required></textarea>
            <br>
            <button type="submit">Agregar</button>
        </form>
    </div>
</body>
</html>