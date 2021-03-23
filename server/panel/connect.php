<?php
header('Content-Type: text/html; charset=utf-8');
define("SERVER", "localhost");
define("USER", "u409171152_root");
define("PASSWORD", "Z2ZNEgOTe9p#");
define("DBNAME", "u409171152_muniorcotuna");

define("URI",dirname(__FILE__)."/");

$mysqli = new mysqli(
    SERVER,USER,PASSWORD,DBNAME
);



/* verificar la conexión */
if (mysqli_connect_errno()) {
    printf("Falló la conexión failed: %s\n", $mysqli->connect_error);
    exit();
}

$mysqli->set_charset("utf8");
$mysqli->query("SET time_zone = '-5:00';");

//printf("Conjunto de caracteres inicial: %s\n", $mysqli->character_set_name());



?>