function mostrar()
{
	let num;
	divisores = 0;

	num = parseInt(prompt("Ingrese un numero"));

	while(isNaN(num)){
		num = parseInt(prompt("Ingrese un numero valido"));
	}

	for( let i = 1; i <= num; i++){
		if(!( num % i)){
			console.log(i);
			divisores++;
		}
	}
	console.log("Cantidad de numeros divisores: " + divisores);
}//FIN DE LA FUNCIÓN