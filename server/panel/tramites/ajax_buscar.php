<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";
    
    $tipo = $_GET['tipo'];
    $key = $_GET['index'];

    $privilegios = $_GET['privilegios'];
    $area = $_GET['area'];

    if($privilegios=="ADMINISTRADOR"){
        $query = "SELECT * FROM tramites INNER JOIN (
            SELECT idtramite FROM tramites WHERE estado='$tipo' AND codigo LIKE '%$key%' ORDER BY idtramite DESC LIMIT 10)
            AS my_results USING (idtramite) INNER JOIN areas ON tramites.areas_idarea = areas.idarea;";
    }else{
        $query = "SELECT * FROM tramites INNER JOIN (
            SELECT idtramite FROM tramites WHERE areas_idarea='$area' AND estado='$tipo' AND codigo LIKE '%$key%' ORDER BY idtramite DESC LIMIT 10)
            AS my_results USING (idtramite) INNER JOIN areas ON tramites.areas_idarea = areas.idarea;";
    }

    

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){
        
        $json[] = array(
            'id' => $row['idtramite'],
            'codigo' => $row['codigo'],
            'fecha' => $row['fecha'],
            'doc_tipo' => $row['doc_tipo'],
            'doc_nro' => $row['doc_nro'],
            'solicitante' => $row['solicitante'],
            'telefono' => $row['telefono'],
            'email' => $row['email'],
            'asunto' => $row['asunto'],
            'destinatario' => $row['destinatario'],
            'estado' => $row['estado'],
            'nombre_area' => $row['nombre_area'],
            'url_document' => $row['url_document']
        );   
    
    }

    echo json_encode($json);


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>