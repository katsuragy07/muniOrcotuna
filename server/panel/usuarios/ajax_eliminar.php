<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";

    
    $id = $_GET['id']; 
    $url_img = $_GET['url_img'];
    $file = URI.'upload/usuarios/'.$url_img;


    $query = "DELETE FROM `usuarios` WHERE `idusuario`='$id';"; 
   
    $result = $mysqli->query($query);

   

    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }else{
    
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
        
    }
 

?>