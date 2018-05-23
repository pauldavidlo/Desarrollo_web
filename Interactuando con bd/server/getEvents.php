<?php
error_reporting (E_ALL ^ E_NOTICE);
require_once("conexion.php");
session_start();

$con = new DataBase("mysql:host=127.0.0.1;dbname=agenda","admin","paul1543");
$contador;

if($contador >= 0){
  $contador = 1;
}
else{
  $contador = $_SESSION['contador'];
}


  if($con->conectarDB() == "OK"){

      $encontrados= $con->buscarRegistro("WHERE usuarios.id='".$_SESSION['userid']."'");

    if($encontrados){
      $i=0;
  			while ($fila = $encontrados -> fetch(PDO::FETCH_ASSOC)) {
          if($contador == 0){
              $evento['id'] = $fila['id_user'];
              $contador++;
          }
          else{
            $evento['id'] = $fila['id_event'];
          }

    				$evento['title'] = $fila['titulo_event'];

  				if($fila['dc_event'] == "true"){
  					$evento['start'] = $fila['fi_event'];
  					$evento['allDay'] = true;
  				} else {
  					$evento['start'] = $fila['fi_event'].'T'.$fila['hi_event'];
  					$evento['end'] = $fila['ff_event'].'T'.$fila['hf_event'];
  					$evento['allDay'] = false;
  				}

  				$evento['color'] = '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6);
  				$response['evento'][$i] = $evento;
  				$i++;

  			}
        $response["msg"] = "OK";
        $response["final"] = $contador;

    }
  }
  else{
    $data["msg"] = "Error de conexion";
  }




  echo json_encode($response);
  $con->desconectarDB();




 ?>
