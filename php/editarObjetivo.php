<?php
require_once "connection.php";

$idObj = $_POST['id_obj2'];
$nuevoObj = $_POST['nuevo_obj'];

$query = "UPDATE objetivos SET descripcion='$nuevoObj' WHERE id_objetivo=$idObj;";
mysqli_query($conn, $query);
header("location: ../objetivos.php");
exit();