<?php
require_once "connection.php";

$idDato = $_POST['id_dato2'];

$query = "DELETE FROM datos WHERE id_dato=$idDato;";
mysqli_query($conn, $query);
header("location: ../datos.php");
exit();