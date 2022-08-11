<?php

require_once "connection.php";

$objetivoAp = $_POST['objetivoAP'];
$problema = $_POST['problema'];
$justProblema = $_POST['justificacion'];
$esDeDatos = $_POST['esDeDatos'];
$justCalidad = $_POST['justCalidad'];

$query = "INSERT INTO problemas (id_objetivo, descripcion, justificacion, es_de_datos, justificacion_es_de_datos) VALUES ('$objetivoAp', '$problema', '$justProblema', '$esDeDatos', '$justCalidad');";

mysqli_query($conn, $query);
header("location: ../aspectosProblematicos.php");
exit();