<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");


    require_once "connect.php";
    require __DIR__ . '/vendor/autoload.php';


    $token = $_GET['token'];

    use Lcobucci\JWT\ValidationData;
    use Lcobucci\JWT\Parser;

    
    use Lcobucci\JWT\Builder;
    use Lcobucci\JWT\Signer\Key;
    use Lcobucci\JWT\Signer\Hmac\Sha256;


    $signer = new Sha256();



    try{

        $token = (new Parser())->parse((string) $token); // Parses from a string
        $data = new ValidationData();
        if($token->validate($data)){
    
            if($token->verify($signer, 'testing')){
                
                $res = array(
                    'status' => 200,
                    'res' => $token->getClaims()
                );
                
                //echo 1;
            }else{
                
                $res = array(
                    'status' => 404
                );
                
                //echo 0;
            }
    
        }else{
            
            $res = array(
                'status' => 500
            );
            
            //echo 0;
        }

    }catch(Exception $e){
        
        $res = array(
            'status' => 600
        );
        
        //echo 0;
    }
    


    
    


    /*
    $token = (new Parser())->parse((string) $token); // Parses from a string
    //$token->getHeaders(); // Retrieves the token header
    //$token->getClaims(); // Retrieves the token claims
    
    //echo $token->getHeader('jti'); // will print "4f1g23a12aa"
    //echo $token->getClaim(); // will print "http://example.com"
    //echo $token->getClaim('uid'); // will print "1"

    if($token->verify($signer, 'testing')){
        
        $res = array(
            'status' => 200
        );
        
        //echo true;
    }else{
        
        $res = array(
            'status' => 404
        );
        
        //echo false;
    }
    */

  



    

    echo json_encode($res);





?>