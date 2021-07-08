/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let suma;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value );

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value );

	suma = numero1 + numero2;

	alert("La suma es " +suma);

}

function restar()
{
	let numero1;
	let numero2;
	let resta;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value );

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value );

	resta = numero1 - numero2;

	alert("La resta es " +resta);

}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let multiplicar;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value );

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value );

	multiplicar = numero1 * numero2;

	alert("La multiplicacion es " +multiplicar);

}

function dividir()
{
	let numero1;
	let numero2;
	let dividir;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value );

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value );

	dividir = numero1 / numero2;

	alert("La division es " +dividir);

}

