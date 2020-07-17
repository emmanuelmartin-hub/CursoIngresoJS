/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoterreno;
    var anchoterreno;
    var perimetro;
    var alambrado;

    largoterreno = txtIdLargo.value; 
    anchoterreno = txtIdAncho.value;

    largoterreno = parseInt(largoterreno);
    anchoterreno = parseInt(anchoterreno);

    perimetro = (largoterreno + anchoterreno) * 2; 

    alambrado = perimetro * 3;

    alert("La cantidad es: "  + alambrado +  " metros de alambre");

}

function Circulo () 
{
	var radioterreno;
	var perimetro;
	var pi = 3.14; 
	var alambrado;


	radioterreno = txtIdRadio.value;

	radioterreno = parseInt(radioterreno);


    perimetro = 2  * pi * radioterreno;

	alambrado = perimetro * 3;

	alert("La cantidad es: " + alambrado + " metros de alambre");

}
function Materiales () 
{
	var largoterreno;
    var anchoterreno;
    var area;
    var cemento;
    var cal;
   

    largoterreno = txtIdLargo.value; 
    anchoterreno = txtIdAncho.value;
    
    largoterreno = parseInt(largoterreno);
    anchoterreno = parseInt(anchoterreno);
  

    area = largoterreno * anchoterreno; 

    cemento = area * 2;

    cal = area * 3; 


   alert("La bolsas de cemento necesarias son : " + cemento + " . Y Las bolsas de cal necesarias son: " + cal);


}