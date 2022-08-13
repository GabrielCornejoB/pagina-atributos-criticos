<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" href="#"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
    <header class="navbar">
        <h1 class="titulo-header">MODIFICAR</h1>
        <nav>
            <ul class="nav-links">
                <li><a href="objetivos.php">Regresar</a></li>
            </ul>
        </nav>
    </header>
    <div class='div-editar'>
        <form action="" method="post">
        <?php
            if(isset($_POST['id_tipo'])) {
                $tipo = $_POST['id_tipo'];
                if ($tipo == 1) {
                    $idObj = $_POST['id_obj'];
                    $descObj = $_POST['desc_obj'];
                    echo "<p>Aquí puede modificar la descripción del objetivo que eligió, si desea guardar los cambios presione <strong>\"Actualizar\"</strong>, si desea volver y descartar los cambios presione <strong>\"Regresar\"</strong></p>";
                    echo "<textarea rows='3' style='resize:none' name='objetivo' required>" . $descObj . "</textarea><br>";
                    echo "<button type='submit'>Actualizar</button>";
                }
                elseif ($tipo == 2) {
                    $idProb = $_POST['id_prob'];
                }
                elseif ($tipo == 3) {
                    $idDato = $_POST['id_dato'];
                }
            }
            else {
                header("location: objetivos.php");
            }
        ?>
        </form>  
    </div>
    
</body>
</html>

