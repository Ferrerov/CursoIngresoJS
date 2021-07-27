/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .").toLowerCase();

	while(sexoIngresado != "f" && sexoIngresado != "m"){

		sexoIngresado = prompt("Sexo desconocido. Ingrese nuevamente: ").toLowerCase();

	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN