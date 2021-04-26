<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";

    
    $editURL = $_POST['editURLimg'];
    $id = $_POST['id']; 
    $nombres = $_POST['inputNOM'];
    $url_archivo = $_POST['url_archivo'];
    $file = URI.'upload/convocatorias/'.$url_archivo;

    $nombres = str_replace("'","\'",$nombres);
    
    function saltoLinea($str) { 
        return str_replace(array("\r\n", "\r", "\n"), "<br />", $str); 
    }  

    $resultadoUP = false;
    $resultadoBD = false;


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
            $query = "UPDATE `convocatorias` SET `nombre`='$nombres', `fecha`=now(), `url_archivo`='$uploadedFile' WHERE `idconvocatoria`='$id';";
            if(is_file($file)){
                unlink($file); //elimino el fichero
            }
        }

    }else{
        $query = "UPDATE `convocatorias` SET `nombre`='$nombres', `fecha`=now() WHERE `idconvocatoria`='$id';";
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