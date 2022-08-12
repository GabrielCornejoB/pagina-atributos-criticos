<?php

require_once "connection.php";
$problemaD = $_POST['problemaD'];
$dato = $_POST['dato'];
$frecuencia = $_POST['frecuencia'];
$costo = $_POST['costo'];       // Multiplicar x12
$justFinan = $_POST['justFinan'];

$costo = $costo * 12;

$query = "INSERT INTO datos (id_problema, descripcion, frecuencia_mensual, valor_particular_anual, justificacion_financiera) VALUES ('$problemaD', '$dato', '$frecuencia', '$costo', '$justFinan');";

mysqli_query($conn, $query);
header("location: ../datos.php");
exit();