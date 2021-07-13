function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let max = 10;
	let min = 1;

	numero = Math.floor(Math.random() *(max - min + 1) + 1 );
	
	if ( numero == ( 9 || 10)){
		alert("EXCELENTE")
	}
	else if ( numero => 4){
			alert("APROBÓ")
			}		
	else{
		alert("Vamos, la proxima se puede")
	}
}//FIN DE LA FUNCIÓN