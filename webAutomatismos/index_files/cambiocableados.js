//https://www.anerbarrena.com/javascript-confirm-js-5508/
function acentos(cadena){//una funcion que encontre en interner para corregir los acentos
   // Definimos los caracteres que queremos eliminar
   var specialChars = "";

   // Los eliminamos todos
   for (var i = 0; i < specialChars.length; i++) {
       cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
   }   

  


   // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro

    cadena = cadena.replace(/Á/gi,"\u00C1");
    cadena = cadena.replace(/á/gi,"\u00E1");
    cadena = cadena.replace(/É/gi,"\u00C9");
    cadena = cadena.replace(/é/gi,"\u00E9");
    cadena = cadena.replace(/Í/gi,"\u00CD");
    cadena = cadena.replace(/í/gi,"u00ED");
    cadena = cadena.replace(/Ó/gi,"\u00D3");
    cadena = cadena.replace(/ó/gi,"\u00F3");
    cadena = cadena.replace(/Ú/gi,"\u00DA");
    cadena = cadena.replace(/ú/gi,"u00FA");
   return cadena;
}
//       ------------------- FIN DE ACENTOS  --------------------


var enunciadoPractica = document.querySelector('#enunciado');// identifico donde esta texto que quiero cambiar


var enunciado=[];
var imagen=[];



/*    ------------------     ENUNCIADOS e IMAGEN de cada botón ----------*/

enunciado[0]=acentos("<h2>MARCHA-PARO </h2> <p> Con el pulsador S2 el motor se pone en marcha<br>Con el pulsador S1 o fallo térmico el motor se para.</p>");
imagen[0]="imagenes_cableados/01marcha-paro.png"

enunciado[1]=acentos("<h2>MARCHA DESDE DOS PULSADORES </h2><p> El motor se pone en marcha con S2 o S3<br>Se para con S1 o fallo térmico.</p>");
imagen[1]= "imagenes_cableados/02marcha1o1-paro1.png";

enunciado[2]=acentos("<h2>MARCHA DESDE DOS PULSADORES A LA VEZ </h2><p> El motor se pone en marcha pulsado S1 y S3 SIMULTANEAMENTE.<br>Se para con S2 o fallo térmico.</p>");
imagen[2]= "imagenes_cableados/03marcha1y1-paro1.png";


enunciado[3]=acentos("<h2>MARCHA DESDE UN PULSADOR Ó DESDE DOS A LA VEZ</h2><p> El motor se pone en marcha con S4 ó pulsando S1 y S3 simultaneamente.<br>el motor se para con S2 o fallo térmico.</p>");
imagen[3]= "imagenes_cableados/04marcha1y1o1-paro1.png";

enunciado[4]=acentos("<h2>PARO DESDE DOS PULSADORES</h2><p> El motor se pone en marcha con S1.<br>Y se para con S2 ó S3 ó fallo térmico.</p>");
imagen[4]= "imagenes_cableados/05marcha1-paro1o1.png"; 


enunciado[5]=acentos("<h2>PARO CON DOS PULSADORES SIMULTANEAMENTE</h2><p> Ponemos en marcha el motor con S2.<br>Paramos con S4 ó con S1 y S3 a la vez ó fallo térmico.</p>");
imagen[5]= "imagenes_cableados/06marcha-paro1y1.png"; 


enunciado[6]=acentos("<h2>MARCHA-PARO CON TÉRMICO </h2><p> Ejemplo de utilización de un rele térmico.</p>");
imagen[6]="imagenes_cableados/07marcha-paro-termico.png"; 


//  -------------------------------------------giro

enunciado[10]=acentos("<h2>CAMBIO DE GIRO MOTOR TRIFASICO CON SELECTOR </h2><p> Con KM1 el motor gira en un sentido.<br>Con KM2, el motor gira en sentido contrario.<br>KM1 y KM2 llevan enclavamiento eléctrico y mecánico porque NUNCA pueden funcionar a la vez.<br>El sentido de giro se selecciona con S4.<br>El motor arranca con S2 y para con  S1</p>");
imagen[10]= "imagenes_cableados/10CAMBIO_GIRO_SELECTOR.png";

enunciado[11]=acentos("<h2>CAMBIO DE GIRO MOTOR TRIFÁSICO PASANDO POR PARO</h2><p> Con KM1 el motor gira en un sentido.<br>Con KM2, el motor gira en sentido contrario.<br>KM1 y KM2 llevan enclavamiento eléctrico y mecánico porque NUNCA pueden funcionar a la vez.<br>Al pulsar S2 el motor arranca en un sentido.<br>Al pulsar S3 el motor arranca en sentido contrario.<br>Para cambiar de giro hay que pulsar S1 y parar el motor.<br>.</p>");
imagen[11]= "imagenes_cableados/11CAMBIO_GIRO_pasando_paro.png";

enunciado[12]=acentos("<h2>CAMBIO DE GIRO MOTOR TRIFÁSICO SIN PASAR POR PARO</h2><p> Con KM1 el motor gira en un sentido.<br>Con KM2, el motor gira en sentido contrario.<br>KM1 y KM2 llevan enclavamiento eléctrico y mecánico porque NUNCA pueden funcionar a la vez.<br><br>Al pulsar S2 el motor arranca en un sentido.<br>Al pulsar S3 el motor arranca en sentido contrario.<br><br>Se puede cambiar de giro si el motor con el motor en marcha.<br></p>");
imagen[12]= "imagenes_cableados/12CAMBIO_GIRO_sin_pasar_paro.png";

//   --------------------  ARRANQUES

enunciado[20]=acentos("<h2>ARRANQUE ESTRELLA-TRIANGULO</h2><p>El arranque estrella triangulo se utiliza para limitar<br>la corriente de arranque de un motor.<br><br>Al pulsar marcha cerramos KM1 y KM2, arranque en estrella.<br>Pasado unos segundos deactivamos KM2 y activamos KM3 funcionamiento en triangulo.<br><br>KM2 y KM3 nuncan puede funcionar a la vez. para ello se le pone un enclavamiento<br>eléctrico y mecánico.<br></p>");
imagen[20]="imagenes_cableados/20estrella-triangulo.png"

enunciado[21]=acentos("<h2>ARRANQUE ESTRELLA-TRIANGULO CON CAMBIO DE GIRO</h2><p>El arranque estrella triangulo se utiliza para limitar la corriente de arranque de un motor.<br><br>Al pulsar S2, arrancamos en estrella triangulo en un sentido, cerramos KM1 y KM2, arranque en estrella, Pasado unos segundos deactivamos KM2 y activamos KM3 funcionamiento en triangulo.<br><br>Al pulsar S3, arrancamos en estrella triangulo en sentido contrario, cerramos KM4 y KM2, arranque en estrella, Pasado unos segundos deactivamos KM2 y activamos KM3 funcionamiento en triangulo.<br><br>KM2 y KM3 nuncan puede funcionar a la vez. para ello se le pone un enclavamiento eléctrico y mecánico.<br><br>Para cambiar de sentio de giro hay que pasar por paro.</p>");
imagen[21]= "imagenes_cableados/21estrella-triangulo-conCambioGiro.png";



enunciado[22]=acentos("<h2>ARRANQUE POR ELIMINACIÓN DE RESISTENCIAS ROTORICAS</h2><p> Arrancamos con las resistencias en el rotor, y a media  que el motor acelera reducimos la resistencias hasta eliminarlas.<br><br> Funcionamiento:<br>Arrancamos con KM1, pasado un tiempo cierro KM2 y pasado mas tiempo cierro KM3</p>");
imagen[22]= "imagenes_cableados/22rotor_bobinado.png";


enunciado[23]=acentos("<h2>ARRANQUE POR ELIMINACIÓN DE RESISTENCIAS ESTATORICAS</h2><p> Limitar la Intensidad en el arranque ponemos resistencia en el estator, a media que el motor acelera reducimos resistencias hasta eliminarlas.<br><br> El pulsar marcha cerramos KM1, pasado unos segundos cerramos KM2 y pasados unos segundos cerramos KM3.<br><br> Los contactores KM2 y KM3 pueden funcionar simulataneamente.</p>");
imagen[23]= "imagenes_cableados/23 arranque resistencias estoricas.png";


//  ----------------------------------FRENANDO  -----------------------------------

enunciado[30]=acentos("<h2>FRENADO POR CONTRACORRIENTE</h2>  <p> Al pulsar paro, el motor intenta hacer una inversión de giro.<br> La resistencia en el circuito de potencia me limita la intensidad en el cambio de giro.<br><br>El retardo a la desconexión del temporizador, para el motor antes de que empieze a girar en sentido contrario.</p>");
imagen[30]="imagenes_cableados/30frenado a contracorriente.png"

enunciado[31]=acentos("<h2>FRENADO POR INYECCIÓN DE CORRIENTE CONTINUA</h2><p>Al pulsar paro, se alimentan los bobinados con 12Vdc y el motor se frena.</p>");
imagen[31]= "imagenes_cableados/31frenado corriente continua.png";

//  -----------------------------  VARIACION DE VELOCIDAD ----------------------

enunciado[40]=acentos("<h2>MOTOR DAHLANDER</h2><p> Para la velocidad lenta alimentamos U1, V1, W1 <br><br>Para la velocidad rapida alimentamos por U2, V2, W3 y corticuitamos  U1, V1, W1.<br><br>En el motor dahlender, la velocidad rapida siempre es el doble de la velocidad lenta.</p>");
imagen[40]="imagenes_cableados/40velo_dahlander.png"


//------------------------------------ MOTORES MONOFASICOS  ---------------------------
enunciado[50]=acentos("<h2>ARRANQUE DE UN MOTOR MONOFÁSICO</h2><p> El circuito de arranque se desconecta automaticamente con un interruptor centrifugo.</p>");
imagen[50]="imagenes_cableados/50Monofasico.png"

enunciado[51]=acentos("<h2>ARRANQUE Y CAMBIO DE GIRO DE UN MOTOR MONOFÁSICO</h2><p>El motor debe de estar totalmente parado, para que el interruptor centrígufo no esta activado, y funcione el devanado de arranque.</p>");
imagen[51]= "imagenes_cableados/51Monofasico_Cambio_de_giro.png";


// ------------------------------------  CORRIENTE CONTINUA  ---------------------------

enunciado[60]=acentos("<h2>ARRANQUE DE UN MOTOR SHUNT</h2>");
imagen[60]="imagenes_cableados/60ccmotor.png"

enunciado[61]=acentos("<h2>ARRANQUE DE UN MOTOR SHUNT CON LIMITACIÓN DE INTENSIDAD DE ARRANQUE</h2><p> Limitación de corriente en el arranque un motor CC SHUNT.<br><br>Arrancamos con resistencias en el rotor, y a medida que el motor acelera, la eliminamos.<br><br>Funcionamiento:<br>En el momento del arranque cerramos KM1, pasado un tiempo cerramos KM2 y pasado un tiempo cerramos KM3.</p>");
imagen[61]= "imagenes_cableados/61ccMotorArranque.png";

enunciado[62]=acentos("<h2>ARRANQUE Y CAMBIO DE GIRO DE UN MOTOR SHUNT</h2><p> El motor se pone en marcha pulsado S1 y S3 SIMULTANEAMENTE.<br>Se para con S2 o fallo térmico.</p>");
imagen[62]= "imagenes_cableados/62ccMotorCambioGiro.png";


enunciado[63]=acentos("<h2>ARRANQUE Y CAMBIO DE GIRO DE UN MOTOR SHUNT CON LIMITACIÓN DE INTENSIDAD DE ARRANQUE</h2><p> Arranque y cambio de giro de un motor de corriente continua..</p>");
imagen[63]= "imagenes_cableados/63ccMotorarranqueCambioGiro.png";




/*    ------------------ FIN ENUNCIADOS e IMAGEN de cada botón ----------*/






document.getElementById("boton0").addEventListener('click',function(){practica(0)});
document.getElementById("boton1").addEventListener('click',function(){practica(1)});
document.getElementById("boton2").addEventListener('click',function(){practica(2)});
document.getElementById("boton3").addEventListener('click',function(){practica(3)});
document.getElementById("boton4").addEventListener('click',function(){practica(4)});
document.getElementById("boton5").addEventListener('click',function(){practica(5)});
document.getElementById("boton6").addEventListener('click',function(){practica(6)});

document.getElementById("giro0").addEventListener('click',function(){practica(10)});
document.getElementById("giro1").addEventListener('click',function(){practica(11)});
document.getElementById("giro2").addEventListener('click',function(){practica(12)});

document.getElementById("arranque0").addEventListener('click',function(){practica(20)});
document.getElementById("arranque1").addEventListener('click',function(){practica(21)});
document.getElementById("arranque2").addEventListener('click',function(){practica(22)});
document.getElementById("arranque3").addEventListener('click',function(){practica(23)});

document.getElementById("frenado0").addEventListener('click',function(){practica(30)});
document.getElementById("frenado1").addEventListener('click',function(){practica(31)});

document.getElementById("velocidad0").addEventListener('click',function(){practica(40)});

document.getElementById("monofasicos0").addEventListener('click',function(){practica(50)});
document.getElementById("monofasicos1").addEventListener('click',function(){practica(51)});


document.getElementById("cc0").addEventListener('click',function(){practica(60)});
document.getElementById("cc1").addEventListener('click',function(){practica(61)});
document.getElementById("cc2").addEventListener('click',function(){practica(62)});
document.getElementById("cc3").addEventListener('click',function(){practica(63)});


function practica(orden) {
   // alert(orden);
    //alert(enunciado[orden]);
document.getElementById('matrix').src =imagen[orden]; 
enunciadoPractica.innerHTML=(enunciado[orden]);
}







                
                  
/*var imagen02=
var enunciado02=acentos
                  
var imagen03=
var enunciado03=acentos

var imagen04=
var enunciado04=acentos

var imagen05=
var enunciado05=acentos

var imagen06=
var enunciado06=acentos

var imagen07=
var enunciado07=acentos

var imagen08=
var enunciado08=acentos

var imagen09=
var enunciado09=acentos

var imagen10=
var enunciado10=acentos*/


 /* --------------------------- ok didactico ------------- 
boton[0].addEventListener('click',pot00);
function pot00() { document.getElementById('matrix').src =imagen[0]; 
enunciadoPractica.innerHTML=(enunciado[0] );}
-------------------------*/

/*  ---------------------------------  ok didactico addevenlistener   -----
//https://www.w3bai.com/es/jsref/met_element_addeventlistener.html

boton[1].addEventListener('click',function(){practica(1)});


function practica(orden) {
    alert(orden);
document.getElementById('matrix').src =imagen[orden]; 
enunciadoPractica.innerHTML=(enunciado[orden]);
}

  ---------------------------------------------------------------------------------------- */









/*function pot02 () { document.getElementById('matrix').src = "imagenes_cableados/03marcha1y1-paro1.png"; 
document.getElementById('texto').data = "imagenes_cableados/03marcha1y1-paro1.txt"; }
function pot03 () { document.getElementById('matrix').src = "imagenes_cableados/04marcha1y1o1-paro1.png"; 
document.getElementById('texto').data = "imagenes_cableados/04marcha1y1o1-paro1.txt"; }
function pot04 () { document.getElementById('matrix').src = "imagenes_cableados/05marcha1-paro1o1.png"; 
document.getElementById('texto').data = "imagenes_cableados/05marcha1-paro1o1.txt"; }
function pot05 () { document.getElementById('matrix').src = "imagenes_cableados/06marcha-paro1y1.png"; 
document.getElementById('texto').data = "imagenes_cableados/06marcha-paro1y1.txt"; }
function pot05a () { document.getElementById('matrix').src = "imagenes_cableados/07marcha-paro-termico.png"; 
document.getElementById('texto').data = "imagenes_cableados/07marcha-paro-termico.txt"; }
function pot06 () { document.getElementById('matrix').src = "imagenes_cableados/10CAMBIO_GIRO_SELECTOR.png"; 
document.getElementById('texto').data = "imagenes_cableados/10CAMBIO_GIRO_SELECTOR.txt"; }
function pot07() { document.getElementById('matrix').src = "imagenes_cableados/11CAMBIO_GIRO_pasando_paro.png"; 
document.getElementById('texto').data = "imagenes_cableados/11CAMBIO_GIRO_pasando_paro.txt"; }
function pot08() { document.getElementById('matrix').src = "imagenes_cableados/12CAMBIO_GIRO_sin_pasar_paro.png"; 
document.getElementById('texto').data = "imagenes_cableados/12CAMBIO_GIRO_sin_pasar_paro.txt"; }
function pot09() { document.getElementById('matrix').src = "imagenes_cableados/15estrella-triangulo.png"; 
document.getElementById('texto').data = "imagenes_cableados/15estrella-triangulo.txt"; }
function pot10() { document.getElementById('matrix').src = "imagenes_cableados/16estrella-triangulo-conCambioGiro.png"; 
document.getElementById('texto').data = "imagenes_cableados/16estrella-triangulo-conCambioGiro.txt"; }
function pot11() { document.getElementById('matrix').src = "imagenes_cableados/rotor_bobinado.png"; 
document.getElementById('texto').data = "imagenes_cableados/rotor_bobinado.txt"; }
function pot11a() { document.getElementById('matrix').src = "imagenes_cableados/arranque resistencias estoricas.png"; 
document.getElementById('texto').data = "imagenes_cableados/arranque resistencias estoricas.txt"; }
function pot11b() { document.getElementById('matrix').src = "imagenes_cableados/frenado a contracorriente.png"; 
document.getElementById('texto').data = "imagenes_cableados/frenado a contracorriente.txt"; }
function pot11c() { document.getElementById('matrix').src = "imagenes_cableados/frenado corriente continua.png"; 
document.getElementById('texto').data = "imagenes_cableados/frenado corriente continua.txt"; }


function pot12() { document.getElementById('matrix').src = "imagenes_cableados/Monofasico_Cambio_de_giro.png"; 
document.getElementById('texto').data = "imagenes_cableados/Monofasico_Cambio_de_giro.txt"; }

function pot13() { document.getElementById('matrix').src = "imagenes_cableados/Monofasico.png"; 
document.getElementById('texto').data = "imagenes_cableados/Monofasico.txt"; }
function pot14() { document.getElementById('matrix').src = "imagenes_cableados/ccmotor.png"; 
document.getElementById('texto').data = "imagenes_cableados/ccmotor.txt"; }
function pot15() { document.getElementById('matrix').src = "imagenes_cableados/ccMotorArranque.png"; 
document.getElementById('texto').data = "imagenes_cableados/ccMotorArranque.txt"; }
function pot16() { document.getElementById('matrix').src = "imagenes_cableados/ccMotorCambioGiro.png"; 
document.getElementById('texto').data = "imagenes_cableados/ccMotorCambioGiro.txt"; }
function pot17() { document.getElementById('matrix').src = "imagenes_cableados/ccMotorarranqueCambioGiro.png"; 
document.getElementById('texto').data = "imagenes_cableados/ccMotorarranqueCambioGiro.txt"; }

function pot20() { document.getElementById('matrix').src = "imagenes_cableados/velo_dahlander.png"; 
document.getElementById('texto').data = "imagenes_cableados/velo_dahlander.txt"; }
*/