<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";

    
    $id = $_GET['id']; 
    $url_archivo = $_GET['url_archivo'];
    $file = URI.'upload/convocatorias/'.$url_archivo;


    $query = "DELETE FROM `convocatorias` WHERE `idconvocatoria`='$id';"; 
   
    $result = $mysqli->query($query);

   

    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }else{
    
        if(isset($url_archivo) && $url_archivo!=""){
            if(is_file($file)){
                unlink($file); //elimino el fichero
                echo 200;
            }else{
                echo 301;
            }
        }else{
            echo 200;
        }
        
    }
 

?>