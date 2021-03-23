<?php

    header("Access-Control-Allow-Origin: *");

    require_once "../../connect.php";

    
    $editURL = $_POST['editURLimg'];

    $privilegios = $_POST['privilegios'];
    $accesos = $_POST['accesos'];
    $usuario = $_POST['usuario'];
    $pass = $_POST['pass'];
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $area_idarea = $_POST['area_idarea'];

    
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
                $targetPath = URI."upload/usuarios/".$fileName;
                if(move_uploaded_file($sourcePath,$targetPath)){
                    $uploadedFile = $fileName;
                    $resultadoUP = true;
                }
            }
        }
        
        if($resultadoUP){
            $query = "INSERT INTO usuarios(privilegios,accesos,usuario,pass,nombre,correo,estado,area_idarea,url_img) VALUES ('$privilegios','$accesos','$usuario','$pass','$nombre','$correo','1','$area_idarea','$uploadedFile');";   
        }
        
    }else{
        $query = "INSERT INTO usuarios(privilegios,accesos,usuario,pass,nombre,correo,estado,area_idarea) VALUES ('$privilegios','$accesos','$usuario','$pass','$nombre','$correo','1','$area_idarea');"; 
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