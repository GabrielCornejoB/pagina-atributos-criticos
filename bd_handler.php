<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>PHP wu</h1>
    <?php
        $empresaJSON = $_POST['data'];
        // echo $empresaJSON . "\n\n";
        $empresa = json_decode($empresaJSON, true);

        //Explicación == Justificación

        //empresa:  id, nombreEmpresa, listaObjetivos
        //objetivo: id, descripcionObjetivo, listaProblemas
        //problema: id, descripcionProblema, explicacion, esDeDatos, valorTotalAnual, explicacionEsDeDatos, explicacionDatos, listaDatos
        //dato:     id, descripcionDato, descripcionFinal (tipo diccionario), valorParticularAnual, frecuenciaMensual, explicacionValor

        echo $empresa;

        $dbServerName = "localhost";
        $dbUserName = "root";
        $dbPassword = "";
        $dbName = "atributos_criticos";

        $conn = mysqli_connect($dbServerName, $dbUserName, $dbPassword, $dbName);
    ?>
</body>
</html>