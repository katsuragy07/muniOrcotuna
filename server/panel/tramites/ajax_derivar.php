<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";

    
    $id = $_GET['id']; 
    $areaDest = $_GET['areaDest']; 


    $query = "UPDATE tramites SET estado = 1, areas_idarea = '$areaDest' WHERE idtramite='$id';
            INSERT INTO historial (fecha_mov,estado_mov,observaciones,tramites_idtramite,area_idarea) VALUES (now(),'1','','$id','$areaDest');"; 
   
    $result = $mysqli->multi_query($query);

   

    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }else{
        echo 200;
        /*
        if(isset($url_img) && $url_img!=""){
            if(is_file($file)){
                unlink($file); //elimino el fichero
                echo 200;
            }else{
                echo 301;
            }
        }else{
            echo 200;
        }
        */
    }
 

?>