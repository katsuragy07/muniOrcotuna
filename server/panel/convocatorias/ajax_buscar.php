<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";
    


    $key = $_GET['index'];

    $query = "SELECT * FROM convocatorias INNER JOIN (
                SELECT idconvocatoria FROM convocatorias WHERE nombre LIKE '%$key%' ORDER BY idconvocatoria DESC LIMIT 20)
                AS my_results USING (idconvocatoria);";

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){
        
        $json[] = array(
            'id' => $row['idconvocatoria'],
            'nombre' => $row['nombre'],
            'fecha' => date('d-m-Y h:i A',strtotime($row['fecha'])),
            'url_archivo' => $row['url_archivo']
        );   
    
    }

    echo json_encode($json);


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>