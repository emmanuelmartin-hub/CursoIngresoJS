/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Ingresenumerouno;
	var Ingresenumerodos;
	var suma;

	Ingresenumerouno = txtIdNumeroUno.value;
	Ingresenumerodos = txtIdNumeroDos.value;

	Ingresenumerouno = parseInt(Ingresenumerouno);
	Ingresenumerodos = parseInt(Ingresenumerodos);

	suma = Ingresenumerouno + Ingresenumerodos;

    alert(suma);
	
}

function restar()
{
	var Ingresenumerouno;
	var Ingresenumerodos;
	var resta;

	Ingresenumerouno = txtIdNumeroUno.value;
	Ingresenumerodos = txtIdNumeroDos.value;

	Ingresenumerouno = parseInt(Ingresenumerouno);
	Ingresenumerodos = parseInt(Ingresenumerodos);

	 

	resta = Ingresenumerouno - Ingresenumerodos;

    alert(resta);
}

function multiplicar()
{ 
	var Ingresenumerouno;
	var Ingresenumerodos;
	var multiplicar;

	Ingresenumerouno = txtIdNumeroUno.value;
	Ingresenumerodos = txtIdNumeroDos.value;

	Ingresenumerouno = parseInt(Ingresenumerouno);
	Ingresenumerodos = parseInt(Ingresenumerodos);

	 

	multiplicar = Ingresenumerouno * Ingresenumerodos;

    alert(multiplicar);
	
}

function dividir()
{
	var Ingresenumerouno;
	var Ingresenumerodos;
	var dividir;

	Ingresenumerouno = txtIdNumeroUno.value;
	Ingresenumerodos = txtIdNumeroDos.value;

	Ingresenumerouno = parseInt(Ingresenumerouno);
	Ingresenumerodos = parseInt(Ingresenumerodos);

	 

	dividir = Ingresenumerouno / Ingresenumerodos;

    alert(dividir);

    //document.getelementbyId
}

