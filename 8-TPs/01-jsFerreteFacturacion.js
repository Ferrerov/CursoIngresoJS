/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let sumatoria;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumatoria = precio1 + precio2 + precio3;

    alert("La suma de los prodcutos es " + sumatoria)
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let sumatoria;
    let promedio;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumatoria = precio1 + precio2 + precio3;

    promedio = sumatoria / 3 ;

    alert("La suma de los productos es $" + promedio)
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let sumatoria;
    let iva;
    let preciofinal;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumatoria = precio1 + precio2 + precio3;

    iva = sumatoria * 21 / 100;
    
    preciofinal = sumatoria + iva;

    alert("La suma de los prodcutos es " + preciofinal)
}