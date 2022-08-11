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
        <nav>
            <ul class="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Objetivos</a></li>
                <li><a href="aspectosProblematicos.php">Aspectos Problemáticos</a></li>
                <li><a href="#">Datos</a></li>
            </ul>
        </nav>
    </header>
    <div class="objetivos">
        <?php
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
        ?>

        <!-- 
        <div class="objetivo">
            <p>1. Mejorar la eficiencia de tal</p>
            <span class="material-symbols-outlined">edit</span>
        </div> 
        <hr>
        -->

        <form action="php/agregarObjetivo.php" method="post">
            <p class="txt-input">En el siguiente campo puede agregar más objetivos estratégicos, una vez haya terminado de escribir uno, presione "Agregar"</p>
            <br>
            <textarea placeholder='Objetivo estratégico' rows='3' style='resize:none' name='objetivo' required></textarea>
            <br>
            <button type="submit">Agregar</button>
        </form>
    </div>
    
    <script src="js/functions.js"></script>
</body>
</html>