<?php

    header("Access-Control-Allow-Origin: *");

    require_once "../../connect.php";



    $pages_size = $_GET['size'];
    $tipe = $_GET['tipe'];


    $privilegios = $_GET['privilegios'];
    $area = $_GET['area'];

    if($privilegios=="ADMINISTRADOR"){
        switch($tipe){
            case "pendientes": $rs = $mysqli->query("SELECT COUNT(*) AS filas FROM tramites WHERE estado = 1;"); break;
            case "proceso": $rs = $mysqli->query("SELECT COUNT(*) AS filas FROM tramites WHERE estado = 2;"); break;
            case "rechazados": $rs = $mysqli->query("SELECT COUNT(*) AS filas FROM tramites WHERE estado = 3;"); break;
        }
    }
    if($privilegios=="USUARIO"){
        switch($tipe){
            case "pendientes": $rs = $mysqli->query("SELECT COUNT(*) AS filas FROM tramites WHERE areas_idarea='$area' AND estado = 1;"); break;
            case "proceso": $rs = $mysqli->query("SELECT COUNT(*) AS filas FROM tramites WHERE areas_idarea='$area' AND estado = 2;"); break;
            case "rechazados": $rs = $mysqli->query("SELECT COUNT(*) AS filas FROM tramites WHERE areas_idarea='$area' AND estado = 3;"); break;
        }
    }

    
    
    if ($row = $rs->fetch_array()) {
        $pages_total = $row['filas'];
    }
    $pages = ceil($pages_total / $pages_size); 



    $json = array();

    if($pages==0){
        $json[] = array(
            'pagina' => 1,
            'size' => 0,
            'offset' => 0
        );   
    }else{
        for($i = 0; $i < $pages; $i++){
            
            $json[] = array(
                'pagina' => $i+1,
                'size' => $pages_size,
                'offset' => $i*$pages_size
            );   
        
        }
    }

    echo json_encode($json);



?>