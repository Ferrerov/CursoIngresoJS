function mostrar()
{

	let repeticiones = parseInt(prompt("Ingrese la cantidad de repeticiones"));

	while(isNaN(repeticiones) || repeticiones <= 0){
		repeticiones = parseInt(prompt("Valor ingresado incorrecto, por favor ingrese un numero mayor a 0"));
	}
	for(let contador = 0; contador < repeticiones ; contador++){
		console.log("Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN

//1. Pido la cantidad de repeticiones
//2. Hago un alert por cada repeticion
//3. 