<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../../connect.php";

    
    $editURL = $_POST['editURLimg'];

    $id = $_POST['id']; 
    $privilegios = $_POST['privilegios'];
    $accesos = $_POST['accesos'];
    $usuario = $_POST['usuario'];
    $pass = $_POST['pass'];
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $url_img = $_POST['url_img'];
    $area_idarea = $_POST['area_idarea'];

    $file = URI.'upload/usuarios/'.$url_img;


    function saltoLinea($str) { 
        return str_replace(array("\r\n", "\r", "\n"), "<br />", $str); 
    }  

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
                $targetPath = URI."upload/usuarios/".$fileName;
                if(move_uploaded_file($sourcePath,$targetPath)){
                    $uploadedFile = $fileName;
                    $resultadoUP = true;
                }
            }
        }
        
        if($resultadoUP){
            $query = "UPDATE `usuarios` SET `privilegios`='$privilegios', `accesos`='$accesos', `usuario`='$usuario', `pass`='$pass', `nombre`='$nombre', `correo`='$correo', `area_idarea`='$area_idarea', `url_img`='$uploadedFile' WHERE `idusuario`='$id';";
            if(is_file($file)){
                unlink($file); //elimino el fichero
            }
        }

    }else{
        $query = "UPDATE `usuarios` SET `privilegios`='$privilegios', `accesos`='$accesos', `usuario`='$usuario', `pass`='$pass', `nombre`='$nombre', `correo`='$correo', `area_idarea`='$area_idarea' WHERE `idusuario`='$id';";
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