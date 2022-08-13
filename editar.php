<?php
    require_once "php/funciones.php";
?>
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
                <?php
                if(isset($_POST['id_tipo'])) {
                    $tipo = $_POST['id_tipo'];
                    if ($tipo == 1) {
                        echo "<li><a href='objetivos.php'>Regresar</a></li>";
                    }
                    elseif ($tipo == 2) {
                        echo "<li><a href='aspectosProblematicos.php'>Regresar</a></li>";
                    }
                    elseif ($tipo == 3) {
                        echo "<li><a href='datos.php'>Regresar</a></li>";
                    }
                }
                ?> 
            </ul>
        </nav>
    </header>
    <div class='div-editar'>
        <?php
            if(isset($_POST['id_tipo'])) {
                $tipo = $_POST['id_tipo'];
                if ($tipo == 1) {
                    $idObj = $_POST['id_obj'];
                    $descObj = $_POST['desc_obj'];
                    echo "<form action='php/editarObjetivo.php' method='post'>";
                        echo "<p>Aquí puede modificar la descripción del objetivo que eligió, si desea guardar los cambios presione <strong>\"Actualizar\"</strong>, si desea volver y descartar los cambios presione <strong>\"Regresar\"</strong></p>";
                        echo "<input type='text' name='id_obj2' hidden value='" . $idObj . "'>";
                        echo "<textarea rows='3' style='resize:none' name='nuevo_obj' required>" . $descObj . "</textarea><br>";
                        echo "<button type='submit'>Actualizar</button>";
                    echo "</form>";
                }
                elseif ($tipo == 2) {
                    $idProb= $_POST['id_prob'];  
                    echo $idProb;       
                    require_once "php/connection.php";
                    $query = "SELECT * FROM problemas WHERE id_problema='$idProb';";
                    $sqlProb = mysqli_query($conn, $query);
                    $filasProb = mysqli_num_rows($sqlProb);
                    $prob = mysqli_fetch_assoc($sqlProb);
                    echo $prob['id_problema'] . "<br>";
                    echo $prob['descripcion'] . "<br>";
                    echo $prob['justificacion'] . "<br>";
                    echo $prob['es_de_datos'] . "<br>";
                    echo $prob['justificacion_es_de_datos'] . "<br>";
                }
                elseif ($tipo == 3) {
                    // $idDato = $_POST['id_dato'];
                    echo "hola3";
                }
            }
            else {
                header("location: objetivos.php");
            }
        ?>
         
    </div>
    
</body>
</html>

