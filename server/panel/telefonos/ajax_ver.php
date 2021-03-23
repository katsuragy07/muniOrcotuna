<?php

header("Access-Control-Allow-Origin: *");

require_once "../../connect.php";



switch($_GET['consulta']){
    case 'buscar':  
                    $query = "SELECT * FROM telefonos INNER JOIN (SELECT idtelefono FROM telefonos ORDER BY idtelefono DESC) AS res USING(idtelefono) ORDER BY idtelefono DESC;"; 
                    break;

    case 'editar':  $id = $_GET['id'];
                    $query = "SELECT * FROM telefonos WHERE idtelefono='$id';"; 
                    break;
}


$result = $mysqli->query($query);


if(!$result){
    die("Query error " . mysqli_error($mysqli));
}

$json = array();

while($row = $result->fetch_array()){
    
    $json[] = array(
        'id' => $row['idtelefono'],
        'nombre' => $row['nombre'],
        'numero' => $row['numero']
    );   
   
}

echo json_encode($json);


function br2nl($string){
    return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
}


?>