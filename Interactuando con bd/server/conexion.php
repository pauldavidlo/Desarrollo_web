<?php
class DataBase{
private $server;
private $user;
private $pass;
private $conexion;


function __construct($server,$user,$pass){
  $this->server = $server;
  $this->user = $user;
  $this->pass = $pass;
}

function conectarDB(){
  $this->conexion = new PDO($this->server,$this->user,$this->pass);
  if($this->conexion->error_reporting){
    return $this->conexion->error_reporting;
  }
  else{
    return "OK";
  }
}



function desconectarDB(){
  $this->conexion = null;
}

function ejecutarQuery($query){
  return $this->conexion->query($query);
}

function agregarEvento($tabla,$datos){
  $sql = "INSERT INTO ".$tabla."(";
  $i =1;
  foreach ($datos as $key => $value) {
    $sql .= $key;
    if($i < count($datos)){
      $sql .= ",";
    }
    else{$sql .= ")";}
    $i++;
  }

  $sql .= "VALUES(";
  $i =1;
  foreach ($datos as $key => $value) {
    $sql .= $value;
    if($i < count($datos)){
      $sql .= ",";
    }
    else{
      $sql .= ");";
    }
    $i++;
  }
  return $this->ejecutarQuery($sql);
  //echo $sql;
}


function select($tabla){
  $sql = "SELECT *"." FROM ".$tabla.";";
  return $this->ejecutarQuery($sql);

}



function buscarUsuario($tablas,$data,$condicion=""){
  $sql .= "SELECT ";
  $i =1;
  foreach ($data as $key => $value) {
    $sql .= $value;
    if($i < count($data)){
      $sql .= ",";
    }
    else{
      $sql .= " FROM ".$tablas;
    }
    $i++;
  }
  if($condicion ==""){
    $sql .= " ";
  }
  else{
    $sql .= $condicion." ";
  }

  return $this->ejecutarQuery($sql);
  //echo $sql;
  }



  function eliminarRegistro($tabla,$condicion=""){
    $sql = "DELETE FROM ". $tabla . $condicion. ";";
    return $this->ejecutarQuery($sql);
    //echo $sql;
  }


function buscarRegistro($condicion=""){
  $sql = "SELECT usuarios.id AS id_user , eventos.id AS id_event, eventos.titulo AS titulo_event, eventos.fecha_inicio AS fi_event, eventos.hora_inicio AS hi_event, eventos.fecha_finalizacion AS ff_event,
  eventos.hora_finalizacion AS hf_event, eventos.dia_completo AS dc_event
   FROM eventos
   JOIN usuarios  ON eventos.fk_user = usuarios.id ".$condicion.";";
  return $this->ejecutarQuery($sql);
 //echo $sql;
}



function actualizar($tabla,$data,$condicion=""){
  $sql = "UPDATE ".$tabla." SET ";
  $i=1;
  foreach ($data as $key => $value) {
    $sql .= $key."=";
    $sql .= $value;
    if($i < count($data)){
      $sql .= ",";
    }
    $i++;
  }
  if($condicion ==""){
    $sql .= ";";
  }
  else{
    $sql .= $condicion.";";
  }
  return $this->ejecutarQuery($sql);
  //echo $sql;
}





}




 ?>
