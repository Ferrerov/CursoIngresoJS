/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let acumNeg = 0;
	let acumPos = 0;
	let contadorNeg = 0;
	let contadorPos = 0;
	let contadorPar = 0;
	let contadorCero = 0;
	let promNeg = 0;
	let promPos = 0;
	let diferencia;
	let respuesta;

	do{
		numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){
			numero = parseInt(prompt("No es un numero. Por favor ingrese un numero: "));
		}
		

		if(numero > 0){
			acumPos = acumPos + numero;
			contadorPos++;
		}
		else if(numero < 0){
			acumNeg = acumNeg + numero;
			contadorNeg++;
		}
		else{
			contadorCero++;
		}

		if(numero % 2 == 0){
			contadorPar++;
		}

		respuesta = prompt("¿Quiere seguir ingresando numeros? (s/n)").toLowerCase();
	}while(respuesta == "s");

	if(contadorNeg != 0){
		promNeg = acumNeg / contadorNeg;
	}
	if(contadorPos != 0){
		promPos = acumPos / contadorPos;
	}

	diferencia = contadorNeg - contadorPos;
	if(diferencia < 0){
		diferencia *= -1;
	}

	document.write("1-Suma de los negativos: " + acumNeg + "<br>");
	
	document.write("2-Suma de los positivos: " + acumPos + "<br>");
	
	document.write("3-Cantidad de positivos: " + contadorPos + "<br>");
	
	document.write("4-Cantidad de negativos: " + contadorNeg + "<br>");
	
	document.write("5-Cantidad de ceros: " + contadorCero + "<br>");
	
	document.write("6-Cantidad de números pares: " + contadorPar + "<br>");
	
	document.write("7-Promedio de positivos: " + promPos + "<br>");
	
	document.write("8-Promedios de negativos: " + promNeg + "<br>");
	
	document.write("9-Diferencia entre positivos y negativos: " + diferencia + "<br>");
}//FIN DE LA FUNCIÓN