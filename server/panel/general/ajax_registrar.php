<?php

    header("Access-Control-Allow-Origin: *");

    require_once "../../connect.php";

    
    $editURL = $_POST['editURLimg'];
    $nombres = $_POST['inputNOM'];
    $titulo = $_POST['inputTIT'];
    $des = $_POST['inputDES'];

    
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
        if(!empty($_FILES["inputIMG"]["type"])){
            $fileName = uniqid();
            $valid_extensions = array("jpeg", "jpg", "png");
            $temporary = explode(".", $_FILES["inputIMG"]["name"]);
            $file_extension = strtolower(end($temporary));
            $fileName = $fileName.".".$file_extension;
            if((($_FILES["inputIMG"]["type"] == "video/mp4") || ($_FILES["inputIMG"]["type"] == "video/webm") || ($_FILES["inputIMG"]["type"] == "video/ogv") || ($_FILES["inputIMG"]["type"] == "image/png") || ($_FILES["inputIMG"]["type"] == "image/jpg") || ($_FILES["inputIMG"]["type"] == "image/jpeg")) && in_array($file_extension, $valid_extensions)){
                $sourcePath = $_FILES['inputIMG']['tmp_name'];
                $targetPath = URI."upload/portadas/".$fileName;
                if(move_uploaded_file($sourcePath,$targetPath)){
                    $uploadedFile = $fileName;
                    $resultadoUP = true;
                }
            }
        }
        
        if($resultadoUP){
            $query = "INSERT INTO portadas(nombre,titulo,descripcion,url_img) VALUES ('$nombres','$titulo','$des','$uploadedFile');";   
        }
        
    }else{
        $query = "INSERT INTO portadas(nombre,titulo,descripcion) VALUES ('$nombres','$titulo','$des');"; 
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