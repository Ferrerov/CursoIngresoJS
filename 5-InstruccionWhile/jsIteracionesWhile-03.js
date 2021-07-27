/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave");

	while (clave != "utn750"){
		
		alert("La clave ingresada es incorrecta. Por favor intentelo nuevamente.");
		clave = prompt("Ingrese la clave");

	}

	alert("La contraseña ingresada es correcta");
		
}//FIN DE LA FUNCIÓN
