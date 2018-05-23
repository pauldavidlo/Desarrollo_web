<?php
error_reporting(E_ALL^E_NOTICE);
require_once ("conexion.php");
session_start();

  $con = new DataBase("mysql:host=localhost;dbname=agenda","admin","paul1543");

$data['titulo'] ="'".$_POST['titulo']."'";
$data['fecha_inicio'] = "'".$_POST['start_date']."'";
$data['hora_inicio'] = "'".$_POST['start_hour']."'";
$data['fecha_finalizacion'] = "'".$_POST['end_date']."'";
$data['hora_finalizacion'] = "'".$_POST['end_hour']."'";
$data['dia_completo'] = "'".$_POST['allDay']."'";
$data['fk_user'] = $_SESSION['userid'];


  if($con->conectarDB() == "OK"){
    if($con->agregarEvento('eventos',$data)){
      $response['msg'] = "OK";
    }
    else{
      $response['msg'] = "Error al registrar evento";
    }
  }
  else{
    $response['msg'] = "Error en la conexion";
  }

echo json_encode($response);
$con->desconectarDB();

 ?>
