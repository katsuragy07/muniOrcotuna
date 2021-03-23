<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");


    require_once "connect.php";
    require __DIR__ . '/vendor/autoload.php';

    use Lcobucci\JWT\Builder;
    use Lcobucci\JWT\Signer\Key;
    use Lcobucci\JWT\Signer\Hmac\Sha256;


    /*
    var_dump($token->verify($signer, 'testing 1')); // false, because the key is different
    var_dump($token->verify($signer, 'testing')); // true, because the key is the same
    */




    $user = $_POST['user_name'];
    $pass = $_POST['user_password'];

    $query = "SELECT * FROM usuarios WHERE usuario = '$user' AND estado = '1';";
    $result = $mysqli->query($query);


    if(!$result){
        die("Problemas al conectar la base de datos" . mysqli_error($mysqli));
    }


    while($row = $result->fetch_array()){
        if($row['pass']==$pass){
            $signer = new Sha256();
            $time = time();
            $token = (new Builder())
                            /*
                            ->issuedBy($row['usuario']) // Configures the issuer (iss claim)
                            ->permittedFor(URI) // Configures the audience (aud claim)
                            ->identifiedBy('4f1g23a12aa', true) // Configures the id (jti claim), replicating as a header item
                            */
                            ->issuedAt($time) // Configures the time that the token was issue (iat claim)
                            ->canOnlyBeUsedAfter($time) // Configures the time that the token can be used (nbf claim)
                            ->expiresAt($time + 3600) // Configures the expiration time of the token (exp claim)
                            
                            ->withClaim('uid', $row['idusuario']) // Configures a new claim, called "uid"
                            ->withClaim('privilegios', $row['privilegios'])
                            ->withClaim('nombre', $row['nombre'])
                            ->withClaim('url_img', $row['url_img'])
                            ->withClaim('idarea', $row['area_idarea'])
                            ->withClaim('accesos', array(
                                'general' => substr($row['accesos'],0,1) == "0" ? false : true,
                                'portadas' => substr($row['accesos'],1,1) == "0" ? false : true,
                                'noticias' => substr($row['accesos'],2,1) == "0" ? false : true,
                                'anuncios' => substr($row['accesos'],3,1) == "0" ? false : true,
                                'resoluciones' => substr($row['accesos'],4,1) == "0" ? false : true,
                                'convocatorias' => substr($row['accesos'],5,1) == "0" ? false : true
                            ))
                            ->getToken($signer, new Key('testing')); // Retrieves the generated token

            $res = array(
                'status' => 200,
                'res' => strval($token)
            );
            echo json_encode($res);
            mysqli_close($mysqli);
            die();
        }else{
            //echo 'contraseña incorrecta';
            $res = array(
                'status' => 500,
                'res' => 'Contraseña incorrecta!'
            );
            echo json_encode($res);
            mysqli_close($mysqli);
            die();
        }
    }



    $res = array(
        'status' => 404,
        'res' => 'El usuario no existe!'
    );
    echo json_encode($res);


    mysqli_close($mysqli);


?>