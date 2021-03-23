<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";

    
    $id = $_GET['id']; 


    $query = "DELETE FROM `areas` WHERE `idarea`='$id';"; 
   
    $result = $mysqli->query($query);

   

    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }else{
        echo 200;   
    }
 

?>