<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";

    
    $editURL = $_POST['editURLimg'];
    $id = $_POST['id']; 
    $nombres = $_POST['inputNOM'];
    $titulo = $_POST['inputTIT'];
    $des = $_POST['inputDES'];
    $url_img = $_POST['url_img'];
    $file = URI.'upload/portadas/'.$url_img;

    function saltoLinea($str) { 
        return str_replace(array("\r\n", "\r", "\n"), "<br />", $str); 
    }  
    $des = saltoLinea($des);

    $resultadoUP = false;
    $resultadoBD = false;


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
                $targetPath = "../../upload/portadas/".$fileName;
                if(move_uploaded_file($sourcePath,$targetPath)){
                    $uploadedFile = $fileName;
                    $resultadoUP = true;
                }
            }
        }
        
        if($resultadoUP){
            $query = "UPDATE `portadas` SET `nombre`='$nombres', `titulo`='$titulo', `descripcion`='$des', `url_img`='$uploadedFile' WHERE `idportada`='$id';";
            if(is_file($file)){
                unlink($file); //elimino el fichero
            }
        }

    }else{
        $query = "UPDATE `portadas` SET `nombre`='$nombres', `titulo`='$titulo', `descripcion`='$des' WHERE `idportada`='$id';";
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