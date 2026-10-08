
// Botón hamburguesa
const btnHamburger = document.getElementById("btnHamburger");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");

btnHamburger.addEventListener("click", function () {
    sidebar.classList.toggle("cerrado");
    mainContent.classList.toggle("expandido");
});
// Menú Usuarios
const btnUsuarios = document.getElementById("btnUsuarios");
const submenuUsuarios = document.getElementById("submenuUsuarios");
btnUsuarios.addEventListener("click", function () {
    submenuUsuarios.classList.toggle("mostrar");
});
// Formulario de usuario
const formUsuario = document.getElementById("formUsuario");
formUsuario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombreUsuario").value;
    const correo = document.getElementById("correoUsuario").value;
    const password = document.getElementById("passwordUsuario").value;
    const mensaje = document.getElementById("mensajeUsuario");
    // Validar correo usando utileria.js
    if (!validarCorreo(correo)) {
        mensaje.textContent = "El correo no es válido.";
        return;
    }
    // Validar contraseña usando utileria.js
    if (!validarPassword(password)) {
        mensaje.textContent =
            "La contraseña debe tener mínimo 8 caracteres, mayúscula, minúscula, número y carácter especial.";
        return;
    }

    mensaje.textContent = "Usuario " + nombre + " registrado correctamente.";

    formUsuario.reset();
});


// Formulario de alumnos
const formAlumno = document.getElementById("formAlumno");

formAlumno.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombreAlumno").value;
    const numeroControl = document.getElementById("numeroControl").value;
    const fechaNacimiento =
        document.getElementById("fechaNacimiento").value;

    const mensaje = document.getElementById("mensajeAlumno");

    // Validar número de control
    if (!/^\d{6}$/.test(numeroControl)) {
        mensaje.textContent =
            "El número de control debe contener exactamente 6 dígitos.";
        return;
    }

    // Validar fecha
    if (!fechaNacimiento) {
        mensaje.textContent =
            "Selecciona la fecha de nacimiento.";
        return;
    }
    // Calcular edad usando utileria.js
    const edad = calcularEdad(fechaNacimiento);
    // Determinar mayoría de edad
    const mayorEdad = esMayorDeEdad(fechaNacimiento);
    const resultado = mayorEdad
        ? `${nombre} tiene ${edad} años y es mayor de edad.`
        : `${nombre} tiene ${edad} años y es menor de edad.`;
    document.getElementById("resultadoEdad").textContent = resultado;
    // Mostrar modal
    document.getElementById("modalEdad").classList.add("mostrar");
    mensaje.textContent = "";
    formAlumno.reset();
});
// Cerrar modal
const cerrarModal = document.getElementById("cerrarModal");
const btnAceptarModal = document.getElementById("btnAceptarModal");
const modalEdad = document.getElementById("modalEdad");
cerrarModal.addEventListener("click", function () {
    modalEdad.classList.remove("mostrar");
});
btnAceptarModal.addEventListener("click", function () {
    modalEdad.classList.remove("mostrar");
});

// Cerrar modal al hacer clic fuera
modalEdad.addEventListener("click", function (event) {
    if (event.target === modalEdad) {
        modalEdad.classList.remove("mostrar");
    }
});
