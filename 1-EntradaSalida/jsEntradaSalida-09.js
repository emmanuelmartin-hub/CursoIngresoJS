/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var Resultado;
	var Porcentaje;
	

	sueldo = txtIdSueldo.value;
	
    sueldo = parseInt(sueldo);


    //Porcentaje = sueldo * 10 / 100;

    //Resultado = sueldo + Porcentaje;

    Resultado = sueldo * 1.1; 

    txtIdResultado.value = Resultado;



}
