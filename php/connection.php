<?php

$dbServerName = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "atributos_criticos";
$conn = mysqli_connect($dbServerName, $dbUserName, $dbPassword, $dbName);

if (!$conn) {
    die("Conexión con base de datos falló: " . mysqli_connect_error());
}