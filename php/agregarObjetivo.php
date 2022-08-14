<?php
session_start();
require_once "connection.php";
$objetivo = $_POST['objetivo'];
$idEmpresa = $_SESSION['ide'];
$query = "INSERT INTO objetivos (id_empresa, descripcion) VALUES ('$idEmpresa', '$objetivo');";

mysqli_query($conn, $query);
header("location: ../objetivos.php");
exit();