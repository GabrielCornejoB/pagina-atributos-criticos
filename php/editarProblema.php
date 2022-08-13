<?php
require_once "connection.php";

$idProb = $_POST['id_prob2'];
$descProb = $_POST['nuevo_prob'];
$justProb = $_POST['nuevo_prob_just'];
$esDeDatosProb = $_POST['esDeDatos'];
$justesDeDatosProb = $_POST['nuevo_prob_just_d'];

$query = "UPDATE problemas SET descripcion='$descProb', justificacion='$justProb', es_de_datos='$esDeDatosProb', justificacion_es_de_datos='$justesDeDatosProb' WHERE id_problema=$idProb;";
mysqli_query($conn, $query);
header("location: ../aspectosProblematicos.php");
exit();