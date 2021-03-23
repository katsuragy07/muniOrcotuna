<?php

    require_once "../../connect.php";

    $id = $_POST['id']; 
    $editURL = $_POST['editURLimg'];

   
    $nombres = $_POST['inputNOM'];
  


    function saltoLinea($str) { 
        return str_replace(array("\r\n", "\r", "\n"), "<br />", $str); 
    }  
    //$comentarios = saltoLinea($comentarios);

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
                $targetPath = "../../../img/upload/logos/".$fileName;
                if(move_uploaded_file($sourcePath,$targetPath)){
                    $uploadedFile = $fileName;
                    $resultadoUP = true;
                }
            }
        }
        
        if($resultadoUP){
            $query = "UPDATE `logos` SET `nombre`='$nombres', `url_img`='$uploadedFile' WHERE `idlogo`='$id';";
        }
    }else{
        $query = "UPDATE `logos` SET `nombre`='$nombres' WHERE `idlogo`='$id';";
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