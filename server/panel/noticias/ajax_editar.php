<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";

    
    $editURL = $_POST['editURLimg'];
    $id = $_POST['id']; 
    $titulo = $_POST['inputTIT'];
    $des = $_POST['inputDES'];
    $url_img = $_POST['url_img'];
    $file = URI.'upload/noticias/'.$url_img;

    $titulo = str_replace("'","\'",$titulo);
    $des = str_replace("'","\'",$des);

    function saltoLinea($str) { 
        return str_replace(array("\r\n", "\r", "\n"), "<br />", $str); 
    }  
    //$des = saltoLinea($des);

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
                $targetPath = "../../upload/noticias/".$fileName;
                if(move_uploaded_file($sourcePath,$targetPath)){
                    $uploadedFile = $fileName;
                    $resultadoUP = true;
                }
            }
        }
        
        if($resultadoUP){
            $query = "UPDATE `noticias` SET `titulo`='$titulo', `descripcion`='$des', `fecha`=now(), `url_img`='$uploadedFile' WHERE `idnoticia`='$id';";
            if(is_file($file)){
                unlink($file); //elimino el fichero
            }
        }

    }else{
        $query = "UPDATE `noticias` SET `titulo`='$titulo', `descripcion`='$des', `fecha`=now() WHERE `idnoticia`='$id';";
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