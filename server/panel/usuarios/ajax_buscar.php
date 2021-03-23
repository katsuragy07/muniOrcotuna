<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";
    


    $key = $_GET['index'];

    $query = "SELECT * FROM usuarios INNER JOIN (
                SELECT idusuario FROM usuarios WHERE nombre LIKE '%$key%' ORDER BY idusuario DESC LIMIT 20)
                AS my_results USING (idusuario);";

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){
        
        $accesos = array();
        $accesos = array(
            'portadas' => substr($row['accesos'],0,1) == "0" ? false : true,
            'noticias' => substr($row['accesos'],1,1) == "0" ? false : true,
            'anuncios' => substr($row['accesos'],2,1) == "0" ? false : true,
            'normas' => substr($row['accesos'],3,1) == "0" ? false : true,
            'convocatorias' => substr($row['accesos'],4,1) == "0" ? false : true
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
            'area_idarea' => $row['area_idarea']
        );   
    
    }

    echo json_encode($json);


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>