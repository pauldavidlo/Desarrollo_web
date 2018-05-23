<?php
error_reporting (E_ALL ^ E_NOTICE);
require_once ("conexion.php");

$con = new DataBase("mysql:host=127.0.0.1;dbname=agenda","admin","paul1543");



if($con->conectarDB() == "OK"){
  if($con->eliminarRegistro('eventos'," WHERE id=".$_POST['id']."")){
      $response['msg'] = "OK";
      $response['final'] = $_POST['id'];
  }
  else{
    $response['msg'] = "Error al eliminar registro";
  }
}


$con->desconectarDB();
echo json_encode($response);



 ?>
