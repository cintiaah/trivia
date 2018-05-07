alert("Bienvenid@ a Preguntados");
var name = prompt ("Ingresa tu nombre");

name = name.toUpperCase();
document.write ( "Bienvenid@ " + name  );


var  confirmar=confirm("List@ para jug@r");
 if (confirmar)
 var mexico= prompt ( "¿Cuántas sedes tiene Laboratoria en México?")
 else
 alert('Hasta la próxima :( ');
  
 
 mexico = mexico.toLowerCase();



     if (mexico == "2" ){
    document.write ( mexico + "= Respuesta correcta" );
     alert("Respuesta correcta");
 }
 else if (mexico=="dos") {
    document.write ( mexico + "= Respuesta correcta" );
    alert ("Respuesta correcta");
  }
 else {
    document.write ( mexico + "= Respuesta incorrecta" );
    alert ("Respuesta incorrecta"); 
     
 }


 var cursar= prompt ("¿Puedo cursar online?")
 
    
cursar = cursar.toLocaleLowerCase();

 if (cursar == "no"){
 document.write ( cursar + " = Respuesta correcta" );
  alert ("Respuesta correcta");
  

 }
 else {
    document.write ( cursar + "= Respuesta incorrecta" );
    alert (  "Respuesta incorrecta"); 
     
 }

var meses = prompt ("¿Cuántos meses dura el Bootcamp?");
meses = meses.toLowerCase();

if (meses == "6"){
    document.write ( meses + "= Respuesta correcta" );
    alert("Respuesta correcta");
}
else if (mexico=="seis") {
    document.write ( meses + "= Respuesta correcta" );
   alert ("Respuesta correcta");
 }
else {
    document.write ( meses + "= Respuesta incorrecta" );
   alert ("Respuesta incorrecta"); 
    
}




alert ("¡¡¡ Veámos tu resultado!!!");


