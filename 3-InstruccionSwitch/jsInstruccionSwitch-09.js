function mostrar()
{
	let precio = 15000;
	let estacion;
	let destino;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion){
		case "Invierno":
			if (destino == "Bariloche"){
				precioFinal = precio + precio * .2 ;
			}
			else if (destino == "Cataratas" || destino == "Cordoba"){
				precioFinal = precio - precio * .1;
			}
			else{
				precioFinal = precio - precio * .2;
			}
		
		case "Verano":
			if (destino == "Bariloche"){
				precioFinal = precio - precio * .2;
			}
			else if (destino == "Cataratas" || destino == "Cordoba"){
				precioFinal = precio + precio * .1;
			}
			else{
				precioFinal = precio + precio * .2;
			}

		case "Otoño":
		case "Primavera":
			if (destino != "Cordoba"){
				precioFinal = precio + precio * .1;
			}

	}
	
}//FIN DE LA FUNCIÓN