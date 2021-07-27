/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numero;
	let maximo;
	let minimo;
	let seguir;
	let flag = 1

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		
		while (isNaN(numero)){
			numero = parseInt(prompt("Eso no es un numero, por favor ingrese un numero: "));
		}
		
		if(flag || numero > maximo){
			maximo = numero;
		}
		if(flag || numero < minimo){
			minimo = numero;
			flag = !flag
		}

		seguir = prompt("¿Quiere ingresar otro numero? (s/n)").toLowerCase();
	}while (seguir == "s");

	document.getElementById("txtIdMinimo").value = minimo;
	document.getElementById("txtIdMaximo").value = maximo;
	
	
}//FIN DE LA FUNCIÓN