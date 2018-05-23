<?php
error_reporting(E_ALL ^ E_NOTICE);
require_once ("conexion.php");


$con = new DataBase("mysql:host=127.0.0.1;dbname=agenda","admin","paul1543");

if($con->conectarDB() == "OK"){
  $usuario_encontrado = $con->buscarUsuario('usuarios',['id','email','pass'],
  ' WHERE email="'.$_POST['username']. '"');

  if($usuario_encontrado){

    $renglon = $usuario_encontrado->fetch(PDO::FETCH_ASSOC);
    if(password_verify($_POST['password'],$renglon['pass'])){
      $response['msg'] = "OK";
      session_start();
      $_SESSION['userid'] = $renglon['id'];
      $_SESSION['contador'] = 0;
    }
    else{
      $response['msg'] = "Email ó contraseña incorrecta";
    }

  }

}

echo json_encode($response);
$con->desconectarDB();


 ?>
