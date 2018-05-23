<?php
session_start(); // primero iniciamos la sesion ya que no podemos matar una sesion si no ha sido iniciada

$comprobante= $_POST['comprobante'];


  session_destroy(); // destruimos la sesion
  $response['final'] = "Has salido";


echo json_encode($response)
 ?>
