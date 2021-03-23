<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";
    


    $key = $_GET['index'];

    $query = "SELECT * FROM noticias INNER JOIN (
                SELECT idnoticia FROM noticias WHERE titulo LIKE '%$key%' ORDER BY idnoticia DESC LIMIT 20)
                AS my_results USING (idnoticia);";

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
            'descripcion' => br2nl($row['descripcion']),
            'url_img' => $row['url_img']
        );  
    
    }

    echo json_encode($json);


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>