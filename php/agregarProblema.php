<?php

require_once "connection.php";

$problema = $_POST['problema'];
$justProblema = $_POST['justificacion'];
$esDeDatos = $_POST['esDeDatos'];
$justCalidad = $_POST['justCalidad'];

echo $problema . $justProblema . $esDeDatos . $justCalidad;