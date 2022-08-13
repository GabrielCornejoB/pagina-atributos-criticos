<?php
require_once "connection.php";

$idObj = $_POST['id_obj2'];

$query = "DELETE FROM objetivos WHERE id_objetivo=$idObj;";
mysqli_query($conn, $query);
header("location: ../objetivos.php");
exit();