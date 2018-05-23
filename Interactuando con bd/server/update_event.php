<?php
 error_reporting (E_ALL ^ E_NOTICE);
 require_once ("conexion.php");

 $con = new DataBase("mysql:host=127.0.0.1;dbname=agenda","admin","paul1543");
 $data['fecha_inicio'] ="'".$_POST['start_date']."'";
 $data['hora_inicio'] = "'".$_POST['start_hour']."'";
 $data['fecha_finalizacion'] = "'".$_POST['end_date']."'";
 $data['hora_finalizacion'] = "'".$_POST['end_hour']."'";

$response["final"] = $_POST['id'];
 if($con->conectarDB() == "OK"){
   if($con->actualizar('eventos',$data," WHERE id='".$_POST['id']."'")){
     $response['msg'] ="OK";

   }
   else{
     $response['msg']="No se actualizo el evento";
   }
 }

$con->desconectarDB();
echo json_encode($response);

 ?>
