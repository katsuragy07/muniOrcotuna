<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";
    


    $key = $_GET['index'];

    $query = "SELECT * FROM portadas INNER JOIN (
                SELECT idportada FROM portadas WHERE nombre LIKE '%$key%' ORDER BY idportada DESC LIMIT 20)
                AS my_results USING (idportada);";

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