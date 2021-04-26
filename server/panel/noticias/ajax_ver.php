<?php

header("Access-Control-Allow-Origin: *");

require_once "../../connect.php";



switch($_GET['consulta']){
    case 'buscar':  
                    $size = $_GET['size'];
                    $offset = $_GET['offset'];
                    $query = "SELECT * FROM noticias INNER JOIN (SELECT idnoticia FROM noticias ORDER BY idnoticia DESC LIMIT $size OFFSET $offset) AS res USING(idnoticia) ORDER BY idnoticia DESC;"; 
                    break;

    case 'editar':  $id = $_GET['id'];
                    $query = "SELECT * FROM noticias WHERE idnoticia='$id';"; 
                    break;
}


$result = $mysqli->query($query);


if(!$result){
    die("Query error " . mysqli_error($mysqli));
}

$json = array();

while($row = $result->fetch_array()){
    
    $json[] = array(
        'id' => $row['idnoticia'],
        'fecha' => date('d-m-Y h:i A',strtotime($row['fecha'])),
        'titulo' => $row['titulo'],
        'descripcion' => $row['descripcion'],
        'url_img' => $row['url_img']
    );   
   
}

echo json_encode($json);


function br2nl($string){
    return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
}


?>