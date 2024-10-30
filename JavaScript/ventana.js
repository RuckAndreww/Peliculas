const botonConfirmar = document.querySelectorAll(".mayor");
const botonConfirmar1 = document.querySelectorAll(".mayor1");


const botonVer = document.querySelectorAll(".video")

const botonEdad = document.querySelectorAll(".enviar");
const botonEdad1 = document.querySelectorAll(".enviar1");


const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
const mensajeConfirmacion1 = document.getElementById("mensaje-confirmacion1");

const botonCerrar = document.getElementById("boton-cerrar");
const botonCerrar1 = document.getElementById("boton-cerrar1");

const ingresarEdad = document.getElementById("ingresar-edad");
const ingresarEdad1 = document.getElementById("ingresar-edad1");

function confirmarEdad() {
    mensajeConfirmacion.style.display = "block";
}

function confirmarEdad1() {
    mensajeConfirmacion1.style.display = "block";
}

function verVideo() {
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
}

function validarEdad() {
    const fechaIngresada = new Date(ingresarEdad.value);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();

    if (fechaActual.getMonth() < fechaIngresada.getMonth() || (fechaActual.getMonth() === fechaIngresada.getMonth() && fechaActual.getDate() < fechaIngresada.getDate())) {
        edad--;
    }

    if (!isNaN(edad) && edad >= 13) {
        alert("Gracias por la confirmacion.");
        verVideo();
        ingresarEdad = document.getElementById("ingresar-edad").value="";
    } else {
        alert("Lo siento, no tienes la edad requerida.");
        ingresarEdad = document.getElementById("ingresar-edad").value="";
    }
}

function validarEdad1() {
    const fechaIngresada = new Date(ingresarEdad1.value);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();

    if (fechaActual.getMonth() < fechaIngresada.getMonth() || (fechaActual.getMonth() === fechaIngresada.getMonth() && fechaActual.getDate() < fechaIngresada.getDate())) {
        edad--;
    }

    if (!isNaN(edad) && edad >= 17) {
        alert("Gracias por la confirmacion.");
        verVideo();
        ingresarEdad1 = document.getElementById("ingresar-edad1").value="";
    } else {
        alert("Lo siento, no tienes la edad requerida.");
        ingresarEdad1 = document.getElementById("ingresar-edad1").value="";
    }
}

botonVer.forEach(function(button) {
    button.addEventListener("click", verVideo);
});


botonConfirmar.forEach(function(button) {
    button.addEventListener("click", confirmarEdad);
});

botonConfirmar1.forEach(function(button) {
    button.addEventListener("click", confirmarEdad1);
});


botonEdad.forEach(function(button) {
    button.addEventListener("click", validarEdad);
});

botonEdad1.forEach(function(button) {
    button.addEventListener("click", validarEdad1);
});


botonCerrar.addEventListener("click", function() {
    mensajeConfirmacion.style.display = "none";
});

botonCerrar1.addEventListener("click", function() {
    mensajeConfirmacion1.style.display = "none";
});

/* ------------------------------------- Crear tarjeta con pelicula nueva ------------------------------------- */

const container = document.querySelector(".contenedor-peliculas");

const formularioPelicula = document.getElementById("formulario-pelicula");

const tituloPelicula = document.getElementById("titulo-tarjeta");
const añoPelicula = document.getElementById("anio-tarjeta");
const categoriaPelicula = document.getElementById("categoria-tarjeta");
const directorPelicula = document.getElementById("director-tarjeta");
const portadaPelicula = document.getElementById("portada-tarjeta");
const gifPelicula = document.getElementById("gif-tarjeta");
const linkPelicula = document.getElementById("link-pelicula");

const btnCrearTarjeta = document.getElementById("btn-crear-tarjeta");
const btnLimpiarFormulario = document.getElementById("btn-limpiar-formulario");
const btnBorrarTarjeta = document.getElementById("btn-borrar-tarjeta");



/* ----------- Resetea el formulario ----------- */
btnLimpiarFormulario.addEventListener("click", function() {
    formularioPelicula.reset();
});

/* -----------  ----------- */
btnCrearTarjeta.addEventListener("click", function() {
    const nuevaTarjeta = document.createElement("div"); 
    nuevaTarjeta.className = "movie";

    const nuevoContenido = document.createElement("div");
    nuevoContenido.className = "contenido";
    
    nuevaTarjeta.appendChild(nuevoContenido); 

    /* ----------- Ingresa el titulo de la pelicula  ----------- */
    const titulo = document.createElement("h2");
    const textoTitulo = document.createTextNode(tituloPelicula.value);

    titulo.appendChild(textoTitulo);
    nuevoContenido.appendChild(titulo); 

    /* -----------  Ingresa el año de la palicula----------- */
    const año = document.createElement("p");
    const textoAño = document.createTextNode("Año: " + añoPelicula.value);

    año.appendChild(textoAño);
    nuevoContenido.appendChild(año);

    /* ----------- Ingresa la categoria de la pelicula ----------- */
    const categoria = document.createElement("p");
    const textoCategoria = document.createTextNode("Categoria: " + categoriaPelicula.value);

    categoria.appendChild(textoCategoria);
    nuevoContenido.appendChild(categoria);

    /* ----------- Ingresa la categoria de la pelicula ----------- */
    const director = document.createElement("p");
    const textoDirector = document.createTextNode("Director: " + directorPelicula.value);

    director.appendChild(textoDirector);
    nuevoContenido.appendChild(director);

    /* ----------- Crea el boton para ver en la tarjeta ----------- */
    const nuevoBtn = document.createElement("button");
    nuevoBtn.className = "btn btn-dark video";
    nuevoBtn.appendChild(document.createTextNode("Ver"));

    const ulrPelicula = new URL(linkPelicula.value);
  
    nuevoBtn.addEventListener("click", function() {
        window.open(ulrPelicula);
    });

    nuevoContenido.appendChild(nuevoBtn);

    /* ----------- Ingresa la imagen ----------- */
    const ulrFondo = portadaPelicula.value;
    nuevaTarjeta.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url('${ulrFondo}')`;

    const urlGif = gifPelicula.value;

    nuevaTarjeta.addEventListener("mouseover", function() {
        nuevaTarjeta.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url('${urlGif}')`;
    });

    nuevaTarjeta.addEventListener("mouseout", function() {
        nuevaTarjeta.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url('${ulrFondo}')`;
    });

    /* ----------- Crea la tarjeta ----------- */
    container.appendChild(nuevaTarjeta);

    formularioPelicula.reset();

    alert("¡Nueva pelicula creada con exito!");
    
});

const ultimaTarjeta = document.getElementById("nueva-tarjeta");

/* ----------- Eliminar ultima tarjeta ----------- */
btnBorrarTarjeta.addEventListener("click", function() {
    if (container && container.lastChild) {
        // Elimina el último elemento hijo del div
        container.removeChild(container.lastChild);
        alert("¡Ultima pelicula eliminada con exito!");
    }
});

