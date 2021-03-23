<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";
    


    $key = $_GET['index'];

    $query = "SELECT * FROM anuncios INNER JOIN (
                SELECT idanuncio FROM anuncios WHERE nombre LIKE '%$key%' ORDER BY idanuncio DESC LIMIT 20)
                AS my_results USING (idanuncio);";

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