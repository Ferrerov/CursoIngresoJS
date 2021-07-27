function mostrar()
{
	let estacion;
	let destino;
	let resultado;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion){
		case "Invierno":
			if (destino != "Bariloche"){
				resultado = "No se viaja";
			}
			else{
				resultado = "Se viaja";
			}
			break;
		case "Verano":
			if (destino == "Mar del palta" || destino == "Cataratas"){
				resultado = "Se viaja";
			}
			else{
				resultado = "No se viaja";
			}
			break;
		case "Otoño":
			resultado = "Se viaja";

		case "Primavera":
			if (destino != "Bariloche"){
				resultado = "Se viaja"
			}
			else{
				resultado = "No se viaja";
			}
			break;
	}
	alert(resultado);
}//FIN DE LA FUNCIÓN