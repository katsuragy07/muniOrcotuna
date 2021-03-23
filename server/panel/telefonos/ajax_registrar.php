<?php

    header("Access-Control-Allow-Origin: *");

    require_once "../../connect.php";

    
    $nombres = $_POST['inputNOM'];
    $numero = $_POST['inputNUM'];
  
    
    function saltoLinea($str) { 
        return str_replace(array("\r\n", "\r", "\n"), "<br />", $str); 
    }  
    //Modo de uso 
    //$comentarios = saltoLinea($comentarios);
    
    
    $resultadoBD = false;
    
  


    $query = "INSERT INTO telefonos(nombre,numero) VALUES ('$nombres','$numero');"; 
    

        
    
 
    
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