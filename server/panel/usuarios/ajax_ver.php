<?php

header("Access-Control-Allow-Origin: *");

require_once "../../connect.php";



switch($_GET['consulta']){
    case 'buscar':  
                    $size = $_GET['size'];
                    $offset = $_GET['offset'];
                    $query = "SELECT * FROM usuarios INNER JOIN (SELECT idusuario FROM usuarios ORDER BY idusuario DESC LIMIT $size OFFSET $offset) AS res USING(idusuario) INNER JOIN areas ON usuarios.area_idarea = areas.idarea;"; 
                    break;

    case 'editar':  $id = $_GET['id'];
                    $query = "SELECT * FROM usuarios WHERE idusuario='$id';"; 
                    break;
}


$result = $mysqli->query($query);


if(!$result){
    die("Query error " . mysqli_error($mysqli));
}

$json = array();

while($row = $result->fetch_array()){
    
    $accesos = array();
    $accesos = array(
        'general' => substr($row['accesos'],0,1) == "0" ? false : true,
        'portadas' => substr($row['accesos'],1,1) == "0" ? false : true,
        'noticias' => substr($row['accesos'],2,1) == "0" ? false : true,
        'anuncios' => substr($row['accesos'],3,1) == "0" ? false : true,
        'resoluciones' => substr($row['accesos'],4,1) == "0" ? false : true,
        'convocatorias' => substr($row['accesos'],5,1) == "0" ? false : true
    );


    $json[] = array(
        'id' => $row['idusuario'],
        'privilegios' => $row['privilegios'],
        'accesos' => $accesos,
        'usuario' => $row['usuario'],
        'pass' => $row['pass'],
        'nombre' => $row['nombre'],
        'correo' => $row['correo'],
        'url_img' => $row['url_img'],
        'estado' => $row['estado'],
        'area_idarea' => $row['area_idarea'],
        'nombre_area' => $row['nombre_area']
    );   
   
}

echo json_encode($json);


function br2nl($string){
    return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
}


?>