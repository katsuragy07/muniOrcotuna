<?php

    require_once "../../connect.php";

    $id = $_POST['id']; 
    $url = $_POST['url_img'];
    $file = '../../../img/upload/logos/'.$url;


    $query = "DELETE FROM `logos` WHERE `idlogo`='$id';";
    
   
    $result = $mysqli->query($query);


    if(is_file($file)){
        unlink($file); //elimino el fichero
    }


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }else{
        echo '200';
    }
 

?>