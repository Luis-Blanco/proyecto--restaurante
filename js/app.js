/* MENU RESPONSIVE */
var btnBotonOpen = document.querySelector(".btn__menuOpen"),
   btnBotonClose = document.querySelector(".btn__menuClose"),
   menuResponsive = document.querySelector(".principal__menuBar"),
   enlaces = document.querySelector(".principal__enlaces");

//CLIK ABRIR
btnBotonOpen.addEventListener("click", function () {
   /* activar active para que a */
   menuResponsive.classList.add("active");
});
/* CLICK CERRAR */
btnBotonClose.addEventListener("click", function () {
   menuResponsive.classList.remove("active");
});

/* CERRAR MENU CON ELEMENTOS DE ENLACE */

enlaces.addEventListener("click", function () {
   menuResponsive.style.transitionDelay = "0.5s";
   menuResponsive.classList.remove("active");
});

/* SLIDER DE PRODUCTOS */

var contenedor = document.querySelector(".menuProductos--slider"),
   btnIzquierdo = document.querySelector(".menuProductos--btnIzquierda"),
   btnDerecha = document.querySelector(".menuProductos--btnDerecha");

btnDerecha.addEventListener("click", function () {
   contenedor.scrollLeft += contenedor.offsetWidth;
});

btnIzquierdo.addEventListener("click", function () {
   contenedor.scrollLeft -= contenedor.offsetWidth;
});
