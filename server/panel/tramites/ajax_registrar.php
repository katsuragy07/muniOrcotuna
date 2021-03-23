<?php

    header("Access-Control-Allow-Origin: *");

    require_once "../../connect.php";


    $editURL = $_POST['edit_file'];

    $doc_tipo = $_POST['doc_tipo'];
    $doc_nro = $_POST['doc_nro'];
    $solicitante = $_POST['solicitante'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $destinatario = $_POST['destinatario'];

    
    function saltoLinea($str) { 
        return str_replace(array("\r\n", "\r", "\n"), "<br />", $str); 
    }  
    //Modo de uso 
    //$comentarios = saltoLinea($comentarios);


    $codigo = uniqid();
    $codigo = hexdec(uniqid());
    $codigo = crc32(uniqid());
    $codigo = abs(crc32( uniqid()));


    
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
                $targetPath = URI."upload/tramites/".$fileName;
                if(move_uploaded_file($sourcePath,$targetPath)){
                    $uploadedFile = $fileName;
                    $resultadoUP = true;
                }
            }
        }
        
        if($resultadoUP){
            $query = "INSERT INTO tramites(codigo, doc_tipo, doc_nro, solicitante, telefono, email, asunto, destinatario, estado, fecha, areas_idarea, url_document) VALUES ('$codigo','$doc_tipo','$doc_nro','$solicitante','$telefono','$email','$asunto','$destinatario','1', NOW(),'2','$uploadedFile');";   
        }
        
    }else{
        $query = "INSERT INTO tramites(codigo, doc_tipo, doc_nro, solicitante, telefono, email, asunto, destinatario, estado, areas_idarea, fecha) VALUES ('$codigo','$doc_tipo','$doc_nro','$solicitante','$telefono','$email','$asunto','$destinatario','1', NOW(), '2');";   
        $resultadoUP = true;
    }

        
    
    if($resultadoUP){
    
        $result = $mysqli->query($query);
    
        if(!$result){
            die("Query error " . mysqli_error($mysqli));
        }else{
            
            $rs = $mysqli->query("SELECT idtramite FROM tramites ORDER BY idtramite DESC LIMIT 1;");
            if ($row = $rs->fetch_array()) {
                $id_last = trim($row['idtramite']);
                $id_last = floatval($id_last);
            }

            $query2 =  "INSERT INTO historial (fecha_mov,estado_mov,observaciones,tramites_idtramite,area_idarea) VALUES (now(),'1','','$id_last','2');";
            $result2 = $mysqli->query($query2);
            if(!$result){
                die("Query error " . mysqli_error($mysqli));
            }else{
                $resultadoBD = true;
            }
        }
    }
    
    if($resultadoUP){
        if($resultadoBD){
            $json = array(
                'status' => 200,
                'res' => $codigo,
            );   
        }else{
            $json = array(
                'status' => 302,
                'res' => "",
            );   
        }
    }else{
        $json = array(
            'status' => 301,
            'res' => "",
        );   
    }
    

    echo json_encode($json);






?>