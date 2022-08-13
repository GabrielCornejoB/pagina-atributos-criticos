<?php
require_once "connection.php";

$idProb = $_POST['id_prob2'];
$descProb = $_POST['nuevo_prob'];
$justProb = $_POST['nuevo_prob_just'];
$esDeDatosProb = $_POST['esDeDatos'];
$justesDeDatosProb = $_POST['nuevo_prob_just_d'];

$query_esDeDatosOld = "SELECT es_de_datos FROM `problemas` WHERE id_problema=$idProb;";
$sql_old = mysqli_query($conn, $query_esDeDatosOld);
$esDeDatosOld = mysqli_fetch_assoc($sql_old);

if ($esDeDatosOld['es_de_datos'] == 1 && $esDeDatosProb == 0) {
    $query_borrarDatos = "DELETE FROM datos where id_problema=$idProb;";
    mysqli_query($conn, $query_borrarDatos);
}
$query = "UPDATE problemas SET descripcion='$descProb', justificacion='$justProb', es_de_datos='$esDeDatosProb', justificacion_es_de_datos='$justesDeDatosProb' WHERE id_problema=$idProb;";
mysqli_query($conn, $query);
header("location: ../aspectosProblematicos.php");
exit();