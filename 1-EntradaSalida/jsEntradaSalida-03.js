/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
    var nombreIngresado; //declaro variable
    //error
    //nombreIngresado=txtIdNombre ;// [ objet HTMLInputElement]
	nombreIngresado=txtIdNombre.value ; 
	//nombreIngresado=document.getElementById('txtIdNombre').value; 
	alert("su nombre es : "+nombreIngresado);



}


