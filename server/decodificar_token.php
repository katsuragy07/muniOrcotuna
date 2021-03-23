<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");


    require_once "connect.php";
    require __DIR__ . '/vendor/autoload.php';


    $token = $_GET['token'];

    use Lcobucci\JWT\Parser;

    

    $token = (new Parser())->parse((string) $token); // Parses from a string



    $res = array(
        'status' => 200,
        'res' => $token->getClaims()
    );



    

    echo json_encode($res);





?>