/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
playVideoOnScroll();


$(function(){
  $('#mostrarTodos').on('click',mostrarTodos)
  setSelect();
  $('select').material_select();
})

function mostrarTodos(event){
  event.preventDefault();
  $('.itemMostrado').remove();
  $.ajax({
    url:'documento.php',
    type:'POST',
    data:{}
  }).done(function(data){
    var datos = JSON.parse(data);

    datos_json(datos);
  })
}

function mostrarFiltros(){
  $('.itemMostrado').remove();
  var ciudad = $('#selectCiudad').val();
  var tipo = $('#selectTipo').val();
  var rango = $('#rangoPrecio').val();
  var filtro= 'ciudad='+ciudad +'&tipo='+tipo+'&precio='+rango;

  $.ajax({
    url:'filtro.php',
    type:'POST',
    data:filtro
  }).done(function(data){
    if (!($.isEmptyObject(data))){
      var datos = JSON.parse(data);
      datos_json(datos);
    }else{
      $(".colContenido").html('<div class="tituloContenido card"><h5>No se encuentran resultados de la búsqueda!</h5><div class="divider"></div><button type="button" name="todos" class="btn-flat waves-effect" id="mostrarTodos">Mostrar Todos</button></div>');
    }
  })
  return false;
}


function setSelect(){
  $.ajax({
    url:"documento.php",
    type:"POST",
    data:{}
  }).done (function(data){
    var datos = JSON.parse(data);
    var ciudades = setCiudades(datos);
    filtro_ciudad(ciudades);

    var tipos = setTipo(datos);
    filtro_tipo(tipos);
  })
}

function setCiudades(datos){
  var dato_ciudad=[];
  $.each(datos, function(i, item) {
    dato_ciudad[dato_ciudad.length]=item.Ciudad;
  });
  Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
  });
  return (dato_ciudad.unique()) ;
}

function setTipo(datos){
  var dato_Tipos=[];
  $.each(datos, function(i, item) {
    dato_Tipos[dato_Tipos.length]=item.Tipo;
  });
  Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
  });
  return (dato_Tipos.unique()) ;
}

function filtro_ciudad(ciudades){
  for(i=0;i<ciudades.length;i++){
    $('#selectCiudad').append('<option value="'+ciudades[i]+'">'+ciudades[i]+'</option>');
  }
    $("select").material_select('update');
}

function filtro_tipo(tipos){
  for(i=0;i<tipos.length;i++){
    $('#selectTipo').append('<option value="'+tipos[i]+'">'+tipos[i]+'</option>');
  }
    $("select").material_select('update');
}

function datos_json(datos){
  $.each(datos, function(i, item) {
     $('.colContenido').append(
       '<div class="itemMostrado card">'+
       '<img src="img/home.jpg">'+
       '<div class="card-stacked">'+
       '<span><strong>Dirección :</strong>'+item.Direccion+'</span><br />'+
       '<span><strong>Ciudad : </strong>'+item.Ciudad+'</span><br />'+
       '<span><strong>Telefono : </strong>'+item.Telefono+'</span><br />'+
       '<span><strong>Codigo Postal : </strong>'+item.Codigo_Postal+'</span><br />'+
       '<span><strong>Tipo : </strong>'+item.Tipo+'</span><br />'+
       '<span><strong>Precio : </strong><span class="precioTexto">'+item.Precio+'</span></span><br /><br />'+
     '<div class="divider"></div>'+
     '<div class="card-action">VER MAS</div>'+
       '</div></div>'
     )
  })
}
