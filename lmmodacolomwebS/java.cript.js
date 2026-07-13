document
.getElementById("formulario")
.addEventListener("submit", function(e){

e.preventDefault();

let nombre =
document.getElementById("nombre").value;

let correo =
document.getElementById("correo").value;

let mensaje =
document.getElementById("mensaje").value;

if(
nombre === "" ||
correo === "" ||
mensaje === ""
){

alert("Complete todos los campos");

return;
}

alert("Mensaje enviado correctamente");

this.reset();

});