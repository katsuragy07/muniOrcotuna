<?php

header("Access-Control-Allow-Origin: *");

require_once "../../connect.php";



switch($_GET['consulta']){
    case 'buscar':  
                    $size = $_GET['size'];
                    $offset = $_GET['offset'];
                    $query = "SELECT * FROM portadas INNER JOIN (SELECT idportada FROM portadas ORDER BY idportada DESC LIMIT $size OFFSET $offset) AS res USING(idportada) ORDER BY idportada DESC;"; 
                    break;

    case 'editar':  $id = $_GET['id'];
                    $query = "SELECT * FROM portadas WHERE idportada='$id';"; 
                    break;
}


$result = $mysqli->query($query);


if(!$result){
    die("Query error " . mysqli_error($mysqli));
}

$json = array();

while($row = $result->fetch_array()){
    
    $json[] = array(
        'id' => $row['idportada'],
        'nombre' => $row['nombre'],
        'titulo' => $row['titulo'],
        'descripcion' => br2nl($row['descripcion']),
        'url_img' => $row['url_img']
    );   
   
}

echo json_encode($json);


function br2nl($string){
    return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
}


?>