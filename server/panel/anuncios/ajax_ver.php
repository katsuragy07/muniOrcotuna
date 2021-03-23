<?php

header("Access-Control-Allow-Origin: *");

require_once "../../connect.php";



switch($_GET['consulta']){
    case 'buscar':  
                    $size = $_GET['size'];
                    $offset = $_GET['offset'];
                    $query = "SELECT * FROM anuncios INNER JOIN (SELECT idanuncio FROM anuncios ORDER BY idanuncio DESC LIMIT $size OFFSET $offset) AS res USING(idanuncio) ORDER BY idanuncio DESC;"; 
                    break;

    case 'editar':  $id = $_GET['id'];
                    $query = "SELECT * FROM anuncios WHERE idanuncio='$id';"; 
                    break;

    case 'popup':  
                    $size = $_GET['size'];
                    $offset = $_GET['offset'];
                    $query = "SELECT * FROM anuncios INNER JOIN (SELECT idanuncio FROM anuncios WHERE inicio = 1 ORDER BY idanuncio DESC LIMIT $size OFFSET $offset) AS res USING(idanuncio) ORDER BY idanuncio DESC;"; 
                    break;
}


$result = $mysqli->query($query);


if(!$result){
    die("Query error " . mysqli_error($mysqli));
}

$json = array();

while($row = $result->fetch_array()){
    
    $json[] = array(
        'id' => $row['idanuncio'],
        'nombre' => $row['nombre'],
        'inicio' => $row['inicio'] == "0" ? false : true,
        'referencia' => $row['referencia'],
        'fecha' => date('d-m-Y h:i A',strtotime($row['fecha'])),
        'url_img' => $row['url_img']
    );   
   
}

echo json_encode($json);


function br2nl($string){
    return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
}


?>