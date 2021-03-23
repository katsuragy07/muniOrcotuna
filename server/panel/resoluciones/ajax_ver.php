<?php

header("Access-Control-Allow-Origin: *");

require_once "../../connect.php";



switch($_GET['consulta']){
    case 'buscar':  
                    $size = $_GET['size'];
                    $offset = $_GET['offset'];
                    $query = "SELECT * FROM resoluciones INNER JOIN (SELECT idresolucion FROM resoluciones ORDER BY idresolucion DESC LIMIT $size OFFSET $offset) AS res USING(idresolucion) ORDER BY idresolucion DESC;"; 
                    break;

    case 'editar':  $id = $_GET['id'];
                    $query = "SELECT * FROM resoluciones WHERE idresolucion='$id';"; 
                    break;
}


$result = $mysqli->query($query);


if(!$result){
    die("Query error " . mysqli_error($mysqli));
}

$json = array();

while($row = $result->fetch_array()){
    
    $json[] = array(
        'id' => $row['idresolucion'],
        'nombre' => $row['nombre'],
        'tipo' => $row['tipo'],
        'fecha' => date('d-m-Y',strtotime($row['fecha'])),
        'url_archivo' => $row['url_archivo']
    );   
   
}

echo json_encode($json);


function br2nl($string){
    return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
}


?>