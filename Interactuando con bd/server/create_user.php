<?php
error_reporting(E_ALL^E_NOTICE);
 require_once ("conexion.php");

 $con = new DataBase("mysql:host=127.0.0.1;dbname=agenda","admin","paul1543");
 $datos["nombre"] = "'Maria Teresa'";
 $datos["email"] = "'teresa@gmail.com'";
 $datos["pass"] = "'".password_hash("123",PASSWORD_DEFAULT)."'";
 $datos["fecha_nacimiento"] = "'11/01/1985'";
if($con->conectarDB() == "OK"){
    if($con->agregarUsuario('usuarios',$datos)){
      $response["final"] = "Datos guardados correctamente";
      $con->desconectarDB();
    }
    else{
      $response["final"] = "Error en registrar usuario";
    }

}else{$reponse["final"]="Error en conexion";}

echo $response["final"];





 ?>
