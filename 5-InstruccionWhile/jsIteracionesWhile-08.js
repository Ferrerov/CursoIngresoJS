/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let numero;
	let acumNegativos = 1;
	let acumPositivos = 0;
	let flag = 0;

	do{
		
		numero = parseInt(prompt("Ingrese un numero"));

		respuesta = prompt("¿Quiere ingresar otro numero? (s/n)").toLowerCase();
		if( numero >= 0){

			acumPositivos += numero;
		}
		else{

			acumNegativos *= numero;
			flag = 1;
		}
	}while( respuesta == "s");

	if(flag){
		acumNegativos = 0;
	}
	document.getElementById("txtIdSuma").value = acumPositivos;
	document.getElementById("txtIdProducto").value = acumNegativos;

}//FIN DE LA FUNCIÓN