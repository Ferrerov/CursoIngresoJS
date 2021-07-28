function mostrar()
{
	let num;
	pares = 0;

	num = parseInt(prompt("Ingrese un numero"));

	while(isNaN(num)){
		num = parseInt(prompt("Ingrese un numero valido"));
	}

	for( let i = 1; i <= num; i++){
		if(!( i % 2)){
			console.log(i);
			pares++;
		}
	}
	console.log("Cantidad de numeros pares: " + pares);
}//FIN DE LA FUNCIÓN