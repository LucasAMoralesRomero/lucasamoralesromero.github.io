function showAlert() {
    let nombre = prompt("ingresa tu nombre");
    alert("¡Hola, " + nombre +  " esta es una alerta desde JavaScript!");
  }

  function piedraPapelTijera(){
    let usuario = prompt("Ingresa un valor = 1 piedra, 2 = papel, 3 = tijera");
    console.log(usuario);
    let pc = Math.floor(Math.random() * 3 + 1);
    console.log(pc);
    if (pc == "1" && usuario == "3"){
      alert("perdiste, pc eligio piedra y usuario eligio papel");
    }
    if (pc == "1" && usuario == "2"){
      alert ("ganaste, pc eligio piedra y usuario eligio papel");
    }
    if (pc == "1" && usuario == "1"){
      alert ("empate, pc eligio piedra y usuario eligio piedra");
    }
    if (pc == "2" && usuario == "3"){
      alert("ganaste, pc eligio papel y usuario eligio tijera");
    }
    if (pc == "2" && usuario == "2"){
      alert ("empate, pc eligio papel y usuario eligio papel");
    }
    if (pc == "2" && usuario == "1"){
      alert ("perdiste, pc eligio papel y usuario eligio piedra");
    }
    if (pc == "3" && usuario == "3"){
      alert("empate, pc eligio tijera y usuario eligio tijera");
    }
    if (pc == "3" && usuario == "2"){
      alert ("perdiste, pc eligio tijera y usuario eligio papel");
    }
    if (pc == "3" && usuario == "1"){
      alert ("ganaste, pc eligio tijera y usuario eligio piedra");
    }
  }

  const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}
function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  if (!validateEmail(email)) {
    //emailInput.style.backgroundColor = "red";
    alert('Por favor ingrese un correo electrónico válido.');

  } else {
    //emailInput.style.backgroundColor = "green";
    alert('Correo electrónico enviado correctamente.');
 
  }
}
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})