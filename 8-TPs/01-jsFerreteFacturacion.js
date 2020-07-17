/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var Preciotres;
	var suma;

	preciouno = txtIdPrecioUno.value;
	preciodos = txtIdPrecioDos.value;
	preciotres = txtIdPrecioTres.value;

	preciouno = parseInt(preciouno);
	preciodos = parseInt(preciodos);
	preciotres = parseInt(preciotres);



	suma = preciouno + preciodos + preciotres;

	alert("La suma es: " + suma); 
}
function Promedio () 
{
	var preciouno;
	var preciodos;
	var Preciotres;
	var suma;
	var promedio 

	preciouno = txtIdPrecioUno.value;
	preciodos = txtIdPrecioDos.value;
	preciotres = txtIdPrecioTres.value;

	preciouno = parseInt(preciouno);
	preciodos = parseInt(preciodos);
	preciotres = parseInt(preciotres);



	suma = preciouno + preciodos + preciotres;

	promedio = suma / 3

	alert("El promedio es: $ " + promedio)

 }
function PrecioFinal () 
{
	var preciouno;
	var preciodos;
	var Preciotres;
	var precio;
	var iva 
	var preciofinal 

	preciouno = txtIdPrecioUno.value;
	preciodos = txtIdPrecioDos.value;
	preciotres = txtIdPrecioTres.value;

	preciouno = parseInt(preciouno);
	preciodos = parseInt(preciodos);
	preciotres = parseInt(preciotres);

    
    precio = preciouno + preciodos + preciotres;

    iva = precio * 21/100 

    preciofinal = precio + iva  


    alert("El precio final es: $ " + preciofinal);
}