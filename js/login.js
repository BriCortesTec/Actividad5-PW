const formulario = document.getElementById("formLogin");

const correo = document.getElementById("correo");
const password = document.getElementById("password");

const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");

const mensaje = document.getElementById("mensaje");


formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Limpiar mensajes anteriores
    errorCorreo.textContent = "";
    errorPassword.textContent = "";
    mensaje.textContent = "";

    let formularioValido = true;


    // Validar correo
    if (!validarCorreo(correo.value)) {
        errorCorreo.textContent = "Ingresa un correo electrónico válido.";
        formularioValido = false;
    }


    // Validar contraseña
    if (!validarPassword(password.value)) {

        errorPassword.textContent =
            "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
        formularioValido = false;
    }


    // Si todo es correcto
    if (formularioValido) {
        localStorage.setItem("correoUsuario", correo.value);
        window.location.href = "index.html";
    }

});