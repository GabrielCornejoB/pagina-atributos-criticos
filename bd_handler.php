<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos guardados</title>
</head>
<body>
    <?php
        $empresaJSON = $_POST['data'];
        $empresa = json_decode($empresaJSON, true);

        // Conexión con bd
        require_once 'php/connection.php';

        // Insertar en BD nombre de la empresa
        $nombreEmpresa = $empresa['nombre'];

        $sql = "INSERT INTO empresas (nombre) VALUES ('$nombreEmpresa');";
        mysqli_query($conn, $sql);
          
        $ansIdEmpresa = mysqli_query($conn, "SELECT * FROM empresas ORDER BY id_empresa DESC LIMIT 1;");   
        $idEmpresa = mysqli_fetch_assoc($ansIdEmpresa)['id_empresa'];

        // Inserta en BD los objetivos
        for ($i=0; $i<count($empresa['listaObjetivos']); $i++) {      
            $objetivo = $empresa['listaObjetivos'][$i];
            $descObjetivo = $objetivo['descripcion'];

            $sql = "INSERT INTO objetivos (id_empresa, descripcion) 
                    VALUES ('$idEmpresa', '$descObjetivo');";
            mysqli_query($conn, $sql);

            $ansIdObjetivo = mysqli_query($conn, "SELECT * FROM objetivos ORDER BY id_objetivo DESC LIMIT 1;");
            $idObjetivo = mysqli_fetch_assoc($ansIdObjetivo)['id_objetivo'];

            //Inserta en bd los aspectos problemáticos
            for ($j=0; $j<count($objetivo['listaProblemas']); $j++) {
                $problema = $objetivo['listaProblemas'][$j];
                $descProblema = $problema['descripcion'];
                $justificacion = $problema['explicacion'];
                $boolEsDeDatos = 0;
                $justificacionDatos = "n/a";
                $valorTotalAnual = 0;
                if($problema['esDeDatos'] == 'Si') {
                    $boolEsDeDatos = 1;
                    $justificacionDatos = $problema['explicacionDatos'];
                    $valorTotalAnual = $problema['valorTotalAnual'];
                }
                $justificacionEsDeDatos = $problema['explicacionEsDeDatos'];
                
                $sql = "INSERT INTO problemas (id_objetivo, descripcion, justificacion, es_de_datos, justificacion_es_de_datos, justificacion_datos, valor_total_anual) 
                        VALUES ('$idObjetivo', '$descProblema', '$justificacion', '$boolEsDeDatos', '$justificacionEsDeDatos', '$justificacionDatos', '$valorTotalAnual');";
                mysqli_query($conn, $sql);
                
                // Inserta en bd los datos
                if ($problema['esDeDatos'] == 'Si') {
                    $ansIdProblema = mysqli_query($conn, "SELECT * FROM problemas ORDER BY id_problema DESC LIMIT 1;");
                    $idProblema = mysqli_fetch_assoc($ansIdProblema)['id_problema'];

                    for ($k=0; $k<count($problema['listaDatos']); $k++) {
                        $dato = $problema['listaDatos'][$k];
                        $descDato = $dato['descripcion'];
                        $frecMensual = $dato['frecuenciaMensual'];
                        $valorParticularAnual = $dato['valorParticularAnual'];
                        $justificacionFinanciera = $dato['explicacionValor'];

                        $sql = "INSERT INTO datos (id_problema, descripcion, frecuencia_mensual, valor_particular_anual, justificacion_financiera)
                                VALUES ('$idProblema', '$descDato', '$frecMensual', '$valorParticularAnual', '$justificacionFinanciera');";
                        mysqli_query($conn, $sql);
                    }
                }      
            }
        }
    ?>

    <h1>Datos ingresados exitosamente</h1>
    
    <!-- <button>Volver a inicio</button> -->
</body>
</html>
