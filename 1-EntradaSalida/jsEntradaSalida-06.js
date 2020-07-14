/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	
	var Ingresenumerouno;
	var Ingresenumerodos;
	var suma;

	Ingresenumerouno = txtIdNumeroUno.value;
	Ingresenumerodos = txtIdNumeroDos.value;

	Ingresenumerouno = parseInt(Ingresenumerouno);
	Ingresenumerodos = parseInt(Ingresenumerodos);

	//parseInt covierte a numero aritmetica 

	suma = Ingresenumerouno + Ingresenumerodos;

    alert(suma);
}

