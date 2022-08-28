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
    <title>Metodología</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" href="#"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
    <header class="navbar">
        <h1 class="titulo-header">Metodología</h2>
        <?php
            generarNav();
        ?>
    </header>
    <p>A continuación se encuentra el proceso para completar el taller</p>
    <img src="imgs/metodologia.png" alt="metodologia" class="img-met">
    <?php
        generarFooter();
    ?>
</body>
</html>