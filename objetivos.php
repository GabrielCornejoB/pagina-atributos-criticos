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
    <title>Objetivos</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" href="#"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
    <header class="navbar">
        <h1 class="titulo-header">OBJETIVOS ESTRATÉGICOS</h2>
        <?php
            generarNav();
        ?>
    </header>
    <div class="objetivos">
        <?php
            generarObjetivos();
        ?>

        <form action="php/agregarObjetivo.php" method="post">
            <p class="txt-input">En el siguiente campo puede agregar más objetivos estratégicos, una vez haya terminado de escribir uno, presione "Agregar"</p>
            <br>
            <textarea placeholder='Objetivo estratégico' rows='3' style='resize:none' name='objetivo' required></textarea>
            <br>
            <button type="submit">Agregar</button>
        </form>
    </div>
    <?php
        generarFooter();
    ?>
</body>
</html>