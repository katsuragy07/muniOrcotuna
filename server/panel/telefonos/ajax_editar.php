<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";

    

    $id = $_POST['id']; 
    $nombres = $_POST['inputNOM'];
    $numero = $_POST['inputNUM'];


    function saltoLinea($str) { 
        return str_replace(array("\r\n", "\r", "\n"), "<br />", $str); 
    }  
   


    $resultadoBD = false;


    $query = "UPDATE `telefonos` SET `nombre`='$nombres', `numero`='$numero' WHERE `idtelefono`='$id';";
    


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