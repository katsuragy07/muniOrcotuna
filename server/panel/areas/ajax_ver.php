<?php

header("Access-Control-Allow-Origin: *");

require_once "../../connect.php";



switch($_GET['consulta']){
    case 'all':     $query = "SELECT * FROM areas;"; 
                    break;

    case 'buscar':  
                    $size = $_GET['size'];
                    $offset = $_GET['offset'];
                    $query = "SELECT * FROM areas INNER JOIN (SELECT idarea FROM areas ORDER BY idarea DESC LIMIT $size OFFSET $offset) AS res USING(idarea);"; 
                    break;

    case 'editar':  $id = $_GET['id'];
                    $query = "SELECT * FROM areas WHERE idarea='$id';"; 
                    break;
}


$result = $mysqli->query($query);


if(!$result){
    die("Query error " . mysqli_error($mysqli));
}

$json = array();

while($row = $result->fetch_array()){
    
    $json[] = array(
        'id' => $row['idarea'],
        'nombre' => $row['nombre_area']
    );   
   
}

echo json_encode($json);


function br2nl($string){
    return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
}


?>