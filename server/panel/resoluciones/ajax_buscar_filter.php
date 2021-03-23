<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";
    

    $tipo = $_GET['tipo'];
    $year = $_GET['year'];
    $mes = $_GET['mes'];
    $key = $_GET['index'];

    if($tipo=="0"){
        if($mes=="0"){
            $query = "SELECT * FROM resoluciones INNER JOIN (SELECT idresolucion FROM resoluciones WHERE fecha LIKE '$year-%-%' AND nombre LIKE '%$key%' ORDER BY idresolucion DESC)AS my_results USING (idresolucion) ORDER BY idresolucion DESC;";
        }else{
            $query = "SELECT * FROM resoluciones INNER JOIN (SELECT idresolucion FROM resoluciones WHERE fecha LIKE '$year-$mes-%' AND nombre LIKE '%$key%' ORDER BY idresolucion DESC)AS my_results USING (idresolucion) ORDER BY idresolucion DESC;";
        }
    }else{
        if($mes=="0"){
            $query = "SELECT * FROM resoluciones INNER JOIN (SELECT idresolucion FROM resoluciones WHERE tipo LIKE '$tipo' AND fecha LIKE '$year-%-%' AND nombre LIKE '%$key%' ORDER BY idresolucion DESC)AS my_results USING (idresolucion) ORDER BY idresolucion DESC;";
        }else{
            $query = "SELECT * FROM resoluciones INNER JOIN (SELECT idresolucion FROM resoluciones WHERE tipo LIKE '$tipo' AND fecha LIKE '$year-$mes-%' AND nombre LIKE '%$key%' ORDER BY idresolucion DESC)AS my_results USING (idresolucion) ORDER BY idresolucion DESC;";
        }
    }
    
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