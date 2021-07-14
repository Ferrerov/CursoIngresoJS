function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Julio":
			alert("Abrigate que hace frío");
			break;
		case "Agosto":
		alert("Abrigate que hace frío");
		break;
		case "Septiembre":
			alert("Ya pasamos el frío, ahora calor!!!");
			break;
		case "Octubre":
			alert("Ya pasamos el frío, ahora calor!!!");
			break;
		case "Noviembre":
			alert("Ya pasamos el frío, ahora calor!!!");
			break;
		case "Diciembre":
			alert("Ya pasamos el frío, ahora calor!!!");
			break;
		default:
			alert("Falta para el invierno");
			break;
	}

}//FIN DE LA FUNCIÓN