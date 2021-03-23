<?php

header("Access-Control-Allow-Origin: *");

require_once "../../connect.php";


$tipo = $_GET['tipo'];

$privilegios = $_GET['privilegios'];
$area = $_GET['area'];


if($privilegios=="ADMINISTRADOR"){
    switch($_GET['consulta']){
        case 'buscar':  
                        $size = $_GET['size'];
                        $offset = $_GET['offset'];
                        switch($tipo){
                            case 1: $query = "SELECT * FROM tramites INNER JOIN (SELECT idtramite FROM tramites WHERE estado = 1 ORDER BY idtramite DESC LIMIT $size OFFSET $offset) AS res USING(idtramite) INNER JOIN areas ON tramites.areas_idarea = areas.idarea;"; break;
                            case 2: $query = "SELECT * FROM tramites INNER JOIN (SELECT idtramite FROM tramites WHERE estado = 2 ORDER BY idtramite DESC LIMIT $size OFFSET $offset) AS res USING(idtramite) INNER JOIN areas ON tramites.areas_idarea = areas.idarea;"; break;
                            case 3: $query = "SELECT * FROM tramites INNER JOIN (SELECT idtramite FROM tramites WHERE estado = 3 ORDER BY idtramite DESC LIMIT $size OFFSET $offset) AS res USING(idtramite) INNER JOIN areas ON tramites.areas_idarea = areas.idarea;"; break;
                        }
                        break;
    
        case 'editar':  $id = $_GET['id'];
                        $query = "SELECT * FROM tramites WHERE idtramite='$id';"; 
                        break;
    }
}
if($privilegios=="USUARIO"){
    switch($_GET['consulta']){
        case 'buscar':  
                        $size = $_GET['size'];
                        $offset = $_GET['offset'];
                        switch($tipo){
                            case 1: $query = "SELECT * FROM tramites INNER JOIN (SELECT idtramite FROM tramites WHERE areas_idarea='$area' AND estado = 1 ORDER BY idtramite DESC LIMIT $size OFFSET $offset) AS res USING(idtramite) INNER JOIN areas ON tramites.areas_idarea = areas.idarea;"; break;
                            case 2: $query = "SELECT * FROM tramites INNER JOIN (SELECT idtramite FROM tramites WHERE areas_idarea='$area' AND estado = 2 ORDER BY idtramite DESC LIMIT $size OFFSET $offset) AS res USING(idtramite) INNER JOIN areas ON tramites.areas_idarea = areas.idarea;"; break;
                            case 3: $query = "SELECT * FROM tramites INNER JOIN (SELECT idtramite FROM tramites WHERE areas_idarea='$area' AND estado = 3 ORDER BY idtramite DESC LIMIT $size OFFSET $offset) AS res USING(idtramite) INNER JOIN areas ON tramites.areas_idarea = areas.idarea;"; break;
                        }
                        break;
    
        case 'editar':  $id = $_GET['id'];
                        $query = "SELECT * FROM tramites WHERE idtramite='$id';"; 
                        break;
    }
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