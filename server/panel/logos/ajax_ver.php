<?php

require_once "../../connect.php";

switch($_GET['consulta']){
    case 'buscar': $query = 'SELECT * FROM logos;'; break;
    case 'editar': $id = $_GET['id'];
                   $query = "SELECT * FROM logos WHERE idlogo='$id';"; break;
}


$result = $mysqli->query($query);


if(!$result){
    die("Query error " . mysqli_error($mysqli));
}

$json = array();

while($row = $result->fetch_array()){
    
    $json[] = array(
        'id' => $row['idlogo'],
        'nombre' => $row['nombre'],
        'url_img' => $row['url_img']
    );   
   
}

echo json_encode($json);



?>