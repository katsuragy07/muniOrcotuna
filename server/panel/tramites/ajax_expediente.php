<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";


    $codigo = $_GET['codigo'];

    if(is_numeric($codigo)){
        
    }else{
        $codigo = "";
    }

    
    $query = "SELECT * FROM tramites INNER JOIN historial ON tramites.idtramite = historial.tramites_idtramite INNER JOIN areas ON areas.idarea = historial.area_idarea WHERE codigo='$codigo' ORDER BY historial.idhistorial ASC;"; 

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){
        
        $json[] = array(
            'id' => $row['idtramite'],
            'codigo' => $row['codigo'],
            'fecha' => $row['fecha_mov'],
            'solicitante' => $row['solicitante'],
            'asunto' => $row['asunto'],
            'destinatario' => $row['destinatario'],
            'estado_mov' => $row['estado_mov'],
            'nombre_area' => $row['nombre_area']
        );   
    
    }

    echo json_encode($json);


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }


?>