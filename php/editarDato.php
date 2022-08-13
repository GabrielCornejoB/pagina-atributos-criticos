<?php
require_once "connection.php";

$idDato = $_POST['id_dato2'];
$descDato = $_POST['dato'];
$frecDato = $_POST['frecuencia'];
$valorMensual = $_POST['valorMensual'];
$justFinan = $_POST['justFinan'];

$valorDato = $valorMensual * 12;

$query = "UPDATE datos SET descripcion='$descDato', frecuencia_mensual='$frecDato', valor_particular_anual='$valorDato', justificacion_financiera='$justFinan' WHERE id_dato=$idDato;";
mysqli_query($conn, $query);
header("location: ../datos.php");
exit();