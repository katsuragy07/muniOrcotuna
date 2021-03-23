<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";
    


    $key = $_GET['index'];

    $query = "SELECT * FROM resoluciones INNER JOIN (
                SELECT idresolucion FROM resoluciones WHERE nombre LIKE '%$key%' ORDER BY idresolucion DESC LIMIT 20)
                AS my_results USING (idresolucion) ORDER BY idresolucion DESC;";

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){
        
        $json[] = array(
            'id' => $row['idresolucion'],
            'nombre' => $row['nombre'],
            'tipo' => $row['tipo'],
            'fecha' => date('d-m-Y',strtotime($row['fecha'])),
            'url_archivo' => $row['url_archivo']
        );   
    
    }

    echo json_encode($json);


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>