var nombreId;
var num1,num2,num3,num4,num5,num6, num7,num8,num9,num0,punto,igual,suma, resta,multiplicacion,division,signo,on;
var valorAnt="" ;
var valor  ;
num1 = document.getElementById("1");
num2 = document.getElementById("2");
num3 = document.getElementById("3");
num4 = document.getElementById("4");
num5 = document.getElementById("5");
num6 = document.getElementById("6");
num7 = document.getElementById("7");
num8 = document.getElementById("8");
num9 = document.getElementById("9");
num0 = document.getElementById("0");
punto = document.getElementById("punto");
igual = document.getElementById("igual");
suma = document.getElementById("mas");
resta = document.getElementById("menos");
multiplicacion = document.getElementById("por");
division = document.getElementById("dividido");
signo = document.getElementById("sign");
on = document.getElementById("on");

var calculadora = {
  operaciones: function() {
    num1.onmouseup = function() {aumentarTamanio('1')};
    num2.onmouseup = function() {aumentarTamanio('2')};
    num3.onmouseup = function() {aumentarTamanio('3')};
    num4.onmouseup = function() {aumentarTamanio('4')};
    num5.onmouseup = function() {aumentarTamanio('5')};
    num6.onmouseup = function() {aumentarTamanio('6')};
    num7.onmouseup = function() {aumentarTamanio('7')};
    num8.onmouseup = function() {aumentarTamanio('8')};
    num9.onmouseup = function() {aumentarTamanio('9')};
    num0.onmouseup = function() {aumentarTamanio('0')};
    igual.onmouseup = function() {aumentarTamanio('igual')};
    punto.onmouseup = function() {aumentarTamanio('punto')};
    suma.onmouseup = function() {aumentarTamanio('mas')};
    resta.onmouseup = function() {aumentarTamanio('menos')};
    on.onmouseup = function() {aumentarTamanio('on')};
    multiplicacion.onmouseup = function() {aumentarTamanio('por')};
    division.onmouseup = function() {aumentarTamanio('dividido')};
    signo.onmouseup = function() {aumentarTamanio('sign')};

    num1.onmousedown = function() {reduceTamanio('1')};
    num2.onmousedown = function() {reduceTamanio('2')};
    num3.onmousedown = function() {reduceTamanio('3')};
    num4.onmousedown = function() {reduceTamanio('4')};
    num5.onmousedown = function() {reduceTamanio('5')};
    num6.onmousedown = function() {reduceTamanio('6')};
    num7.onmousedown = function() {reduceTamanio('7')};
    num8.onmousedown = function() {reduceTamanio('8')};
    num9.onmousedown = function() {reduceTamanio('9')};
    num0.onmousedown = function() {reduceTamanio('0')};
    igual.onmousedown = function() {reduceTamanio('igual')};
    punto.onmousedown = function() {reduceTamanio('punto')};
    suma.onmousedown = function() {reduceTamanio('mas')};
    resta.onmousedown = function() {reduceTamanio('menos')};
    on.onmousedown = function() {reduceTamanio('on')};
    multiplicacion.onmousedown = function() {reduceTamanio('por')};
    division.onmousedown = function() {reduceTamanio('dividido')};
    signo.onmousedown = function() {reduceTamanio('sign')};


    num1.onclick = function() {digitarNumero('1')};
    num2.onclick = function() {digitarNumero('2')};
    num3.onclick = function() {digitarNumero('3')};
    num4.onclick = function() {digitarNumero('4')};
    num5.onclick = function() {digitarNumero('5')};
    num6.onclick = function() {digitarNumero('6')};
    num7.onclick = function() {digitarNumero('7')};
    num8.onclick = function() {digitarNumero('8')};
    num9.onclick = function() {digitarNumero('9')};
    num0.onclick = function() {digitarNumero('0')};
    on.onclick = function() {borrar()};
    punto.onclick = function() {validarPunto()};
    signo.onclick = function() {signoValor()};

    suma.onclick = function() {calculadora.calculos('suma')};
    resta.onclick = function() {calculadora.calculos('restar')};
    multiplicacion.onclick = function() {calculadora.calculos('multiplicar')};
    division.onclick = function() {calculadora.calculos('dividir')};
    igual.onclick = function() {calculadora.calculos('igual')};
  },
  calculos: function(signoAritmetico)
  {
      switch (signoAritmetico) {
        case 'suma':
          valorAnt += document.getElementById('display').innerHTML + ' + ';
          document.getElementById('display').innerHTML= '';
          break;
        case 'restar':
          valorAnt += document.getElementById('display').innerHTML + ' - ';
          document.getElementById('display').innerHTML= '';
          break;
        case 'multiplicar':
          valorAnt += document.getElementById('display').innerHTML + ' * ';
          document.getElementById('display').innerHTML= '';
          break;
        case 'dividir':
          valorAnt += document.getElementById('display').innerHTML + ' / ';
          document.getElementById('display').innerHTML= '';
          break;
        case 'igual':
            valorAnt += document.getElementById('display').innerHTML ;
            var resultado = valorAnt.split(" ");
            var numero1=0,numero2=0;
            var total=0;
            for (var i = 0; i < resultado.length; i++) {
              switch (resultado[i]) {
                case '+':
                  numero2 = parseFloat(resultado[i + 1]);
                  total = this.sumar(total,numero2);
                  i++;
                  break;
                case '-':
                  numero2 = parseFloat(resultado[i + 1]);
                  total = this.restar(total,numero2);
                  i++;
                  break;
                case '*':
                  numero2 = parseFloat(resultado[i + 1]);
                  total = this.multiplicar(total,numero2);
                  i++;
                  break;
                case '/':
                  numero2 = parseFloat(resultado[i + 1]);
                  total = this.dividir(total,numero2);
                  i++;
                  break;
                default:
                  total = parseFloat(resultado[i]);
              }
            }
            valorAnt="";
            var resul = total.toString();
            document.getElementById('display').innerHTML=resul ;
          break;
      }

  },
  sumar: function sumarNumeros(n1, n2) {
      return (parseFloat(n1) + parseFloat(n2));
  },

  restar: function restarNumeros(n1, n2) {
      return (parseFloat(n1) - parseFloat(n2));
  },

  multiplicar: function multiplicarNumeros(n1, n2) {
      return (parseFloat(n1) * parseFloat(n2));
  },

  dividir: function dividirNumeros(n1, n2) {
      return (parseFloat(n1) / parseFloat(n2));
  }
}

function aumentarTamanio(nombreId) {
  document.getElementById(nombreId).style="transition: all 200ms ease-in;transform: scale(1);";
}
function reduceTamanio(nombreId) {
  document.getElementById(nombreId).style="transition: all 200ms ease-in;transform: scale(0.9);";
}
function digitarNumero(nombreId) {
  var numeros;
  var largo;
  var display = document.getElementById('display').innerHTML;
  largo = display.length;
  if (largo < 8) {
    if(display == '0' && nombreId !== '.' )
    {
      document.getElementById('display').innerHTML = nombreId;
    }
    else
    {
      numeros = display.concat(nombreId);
      document.getElementById('display').innerHTML = numeros;
    }
  }
}
function borrar() {
    valorAnt="";
    document.getElementById('display').innerHTML = '0';
}
function validarPunto(){
  var valorPunto = document.getElementById('display').innerHTML;
  if (valorPunto.indexOf(".")<= 0 )
  {
    digitarNumero('.');
  }
}
function signoValor() {
  var signoDig = document.getElementById('display').innerHTML;
  if (signoDig !== '0')
  {
    if (signoDig.indexOf("-") == 0 )
    {
      var sinSigno = signoDig.replace("-","");
      document.getElementById('display').innerHTML=sinSigno;
    }
    else
    {
      document.getElementById('display').innerHTML="-".concat(signoDig);
    }
  }
}
calculadora.operaciones();
