function mostrar()
{
	let num;

	for(;;){
		num = parseInt(prompt("Ingrese un numero"));

		while(isNaN(num)){
			num = parseInt(prompt("Por favor ingrese un numero valido"));
		}
		if( num === 9){
			break;
		}

	}
}//FIN DE LA FUNCIÓN