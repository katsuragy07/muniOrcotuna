<?php

    header("Access-Control-Allow-Origin: *");

    require_once "../../connect.php";

    
    $editURL = $_POST['editURLimg'];
    $nombres = $_POST['inputNOM'];

    
    function saltoLinea($str) { 
        return str_replace(array("\r\n", "\r", "\n"), "<br />", $str); 
    }  
    //Modo de uso 
    //$comentarios = saltoLinea($comentarios);
    
    
    $resultadoUP = false;
    $resultadoBD = false;
    
    $uploadedFile = '';

    if($editURL){
        $uploadedFile = '';
        if(!empty($_FILES["file"]["type"])){
            $fileName = uniqid();
            $valid_extensions = array("pdf", "doc", "docx");
            $temporary = explode(".", $_FILES["file"]["name"]);
            $file_extension = strtolower(end($temporary));
            $fileName = $fileName.".".$file_extension;
            if((($_FILES["file"]["type"] == "application/pdf") || ($_FILES["file"]["type"] == "application/msword") || ($_FILES["file"]["type"] == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) && in_array($file_extension, $valid_extensions)){
                $sourcePath = $_FILES['file']['tmp_name'];
                $targetPath = URI."upload/convocatorias/".$fileName;
                if(move_uploaded_file($sourcePath,$targetPath)){
                    $uploadedFile = $fileName;
                    $resultadoUP = true;
                }
            }
        }
        
        if($resultadoUP){
            $query = "INSERT INTO convocatorias(nombre,fecha,url_archivo) VALUES ('$nombres',now(),'$uploadedFile');";   
        }
        
    }else{
        $query = "INSERT INTO convocatorias(nombre,fecha) VALUES ('$nombres',now());"; 
        $resultadoUP = true;
    }

        
    
    if($resultadoUP){
    
        $result = $mysqli->query($query);
    
        if(!$result){
            die("Query error " . mysqli_error($mysqli));
        }else{
            $resultadoBD = true;
        }
    }
    
    if($resultadoUP){
        if($resultadoBD){
            echo '200';
        }else{
            echo '302';
        }
    }else{
        echo '301';
    }
    








?>