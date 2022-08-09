<?php

require_once "connection.php";
$objetivo = $_POST['objetivo'];
$query = "INSERT INTO objetivos (id_empresa, descripcion) VALUES ('1', '$objetivo');";

mysqli_query($conn, $query);
header("location: ../objetivos.php");
exit();