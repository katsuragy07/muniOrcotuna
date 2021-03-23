<?php

header("Access-Control-Allow-Origin: *");

require_once "../connect.php";



switch($_GET['consulta']){
    case 'buscar':  
                    $query = "SELECT * FROM general ORDER BY idgeneral DESC LIMIT 1"; 
                    break;

    case 'editar':  $id = $_GET['id'];
                    $query = "SELECT * FROM general WHERE idgeneral='$id';"; 
                    break;
}


$result = $mysqli->query($query);


if(!$result){
    die("Query error " . mysqli_error($mysqli));
}

$json = array();

while($row = $result->fetch_array()){
    
    $json = array(
        'id' => $row['idgeneral'],
        'fecha' => $row['fecha'],
        'serial' => $row['serial'],
        'active' => $row['active']
    );   
   
}

echo json_encode($json);


function br2nl($string){
    return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
}


?>