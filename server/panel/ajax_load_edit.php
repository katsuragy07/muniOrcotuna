<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";

    
    $action = $_POST['action'];
    $authorization = $_POST['authorization'];
    $resultadoBD = false;


    if($authorization!="Ueryw3wQukTbKSU37ghz"){
        die("Unauthorized!!!");
    }

    switch($action){
        case "enabled": 
                        $serial = $_POST['serial'];
                        $query = "UPDATE `general` SET `serial`='$serial', `active`='1' WHERE `idgeneral`='1';";
                        break;

        case "disabled":   
                        $query = "UPDATE `general` SET `serial`='', `active`='0' WHERE `idgeneral`='1';";
                        break;
    }

    

    
    $result = $mysqli->query($query);
    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }else{
        $resultadoBD = true;
    }


  
    if($resultadoBD){
        echo '200';
    }else{
        echo '302';
    }
 


?>