<?php

header("Access-Control-Allow-Origin: *");

require_once "../../connect.php";



switch($_GET['consulta']){
    case 'buscar':  
                    $size = $_GET['size'];
                    $offset = $_GET['offset'];
                    $query = "SELECT * FROM convocatorias INNER JOIN (SELECT idconvocatoria FROM convocatorias ORDER BY idconvocatoria DESC LIMIT $size OFFSET $offset) AS res USING(idconvocatoria) ORDER BY idconvocatoria DESC;"; 
                    break;

    case 'editar':  $id = $_GET['id'];
                    $query = "SELECT * FROM convocatorias WHERE idconvocatoria='$id';"; 
                    break;
}


$result = $mysqli->query($query);


if(!$result){
    die("Query error " . mysqli_error($mysqli));
}

$json = array();

while($row = $result->fetch_array()){
    
    $json[] = array(
        'id' => $row['idconvocatoria'],
        'nombre' => $row['nombre'],
        'fecha' => date('d-m-Y h:i A',strtotime($row['fecha'])),
        'url_archivo' => $row['url_archivo']
    );   
   
}

echo json_encode($json);


function br2nl($string){
    return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
}


?>