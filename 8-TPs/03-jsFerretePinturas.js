/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var centigrados;
	var gradofahrenheit;

	temperatura = txtIdTemperatura.value;
	
    temperatura = parseInt(temperatura);

    gradofahrenheit = temperatura;
    
    centigrados = (temperatura - 32) * 5/9;  

	alert(+gradofahrenheit+  " º Fahrenheit son "  + centigrados + " º centígrados");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var fahrenheit;
	var gradocentigrado;

	temperatura = txtIdTemperatura.value;
	
    temperatura = parseInt(temperatura);

    gradocentigrado = temperatura;
    
    fahrenheit = (temperatura * 9/5) + 32;  

	alert(+ gradocentigrado +  " º Fahrenheit son "  + fahrenheit + " º centígrados");
}
