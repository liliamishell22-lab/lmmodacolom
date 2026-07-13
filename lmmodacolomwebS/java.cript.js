const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

e.preventDefault();

const nombre =
document.getElementById("nombre").value;

const correo =
document.getElementById("correo").value;

const mensaje =
document.getElementById("mensaje").value;

if(
nombre === "" ||
correo === "" ||
mensaje === ""
){
alert("Por favor complete todos los campos.");
return;
}

alert(
"Gracias por contactarnos. Te responderemos pronto."
);

formulario.reset();

});

window.addEventListener("scroll", () => {

const header =
document.querySelector("header");

if(window.scrollY > 50){
header.style.background = "#000";
}
else{
header.style.background = "#111";
}

});