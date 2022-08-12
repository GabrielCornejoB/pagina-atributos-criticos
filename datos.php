<?php
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
        <nav>
            <ul class="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="objetivos.php">Objetivos</a></li>
                <li><a href="aspectosProblematicos.php">Aspectos Problemáticos</a></li>
                <li><a href="#">Datos</a></li>
            </ul>
        </nav>
    </header>
    <div class="objetivos">
        <?php
            generarDatos();
        ?>
        <form action="./php/agregarDato.php" action="post">
            <p class="txt-input">En el siguiente campo puede agregar más datos, una vez haya terminado de escribir uno, presione "Agregar"</p>
            <br>
            <div class="inputs-datos">
                <input type="text" name="dato" placeholder='Descripción dato'>
                <input type="number" name="frecuencia" placeholder='Frecuencia mensual'>
                <input type="number" name="costo" placeholder='Valor aprox mensual'>
            </div>    
            <br>
            <textarea placeholder='Justificación de la frecuencia y del valor del dato' rows='3' style='resize:none' name='justParticular' required></textarea>
            <br>
            <button type="submit">Agregar</button>
        </form>
    </div>
</body>
</html>