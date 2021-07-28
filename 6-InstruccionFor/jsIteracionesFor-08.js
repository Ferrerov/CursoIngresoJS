function mostrar()
{
	let num;
	let primos = 0;

	num = parseInt(prompt("Ingrese un numero"));

	while(isNaN(num)){
		num = parseInt(prompt("Ingrese un numero valido"));
	}

	for( let i = 1; i <= num; i++){
		if(num % i == 0){
			primos++;
		}
	}
	if (primos == 2) {
		console.log("El numero " + num + " es primo");
	}
	else{
		console.log("El numero " + num + " no es primo");
	}
}//FIN DE LA FUNCIÓN