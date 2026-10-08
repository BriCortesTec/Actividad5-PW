# Actividad 5 - Proyecto de Login

## Integrantes

- **López Cortés Hayley Brithany**
- **Avendaño Chavez Nadya Yahuili**

---

## Descripción del proyecto

El proyecto consiste en desarrollar un sistema web con un **login funcional** utilizando HTML, CSS y JavaScript.

El usuario inicia sesión mediante un correo y una contraseña. Después de validar los datos, se accede a la pantalla principal del sistema, donde se encuentran el sidebar, navbar, formularios de usuarios y alumnos, además del modal para determinar la mayoría de edad.

El flujo principal de la aplicación es:

**Login → Sistema → Formularios → Cerrar sesión → Login** 
![Login](img/image.png)
![Sistema](img/image.png)

---

# Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Git**
- **GitHub**
- **GitHub Pages**

### Framework CSS

Para este proyecto se utilizó **CSS3 sin un framework externo**, creando los estilos directamente en archivos CSS.

También se reutilizó la librería **`utileria.js`** desarrollada en la Actividad 2.

---

# Flujo del Login

El funcionamiento del sistema comienza en `login.html`.

### Paso 1: Ingreso de datos

El usuario introduce:

- Correo electrónico
- Contraseña

### Paso 2: Validación

JavaScript verifica que el correo y la contraseña cumplan con los requisitos establecidos.

Se utilizan las funciones:

validarCorreo()
validarPassword()