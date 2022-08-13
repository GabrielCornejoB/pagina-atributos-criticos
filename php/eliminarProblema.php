<?php

require_once "connection.php";

$idProb = $_POST['id_prob2'];

$query = "DELETE FROM problemas WHERE id_problema=$idProb;";
mysqli_query($conn, $query);
header("location: ../aspectosProblematicos.php");
exit();