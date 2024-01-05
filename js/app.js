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

/* SECCION DE CONTACTO Y VALIDACION DE FORMULARIO */

let formulario = document.querySelector(".formulario");

function validar(e) {
   var inputNombre = document.querySelector(".input--text"),
      inputEmail = document.querySelector(".input--email"),
      inputComentario = document.querySelector(".textarea"),
      alertError = document.querySelector(".alerta--error"),
      alertSuccess = document.querySelector(".alerta--success");

   if (
      inputNombre.value == 0 ||
      inputEmail.value == 0 ||
      inputComentario.value == 0
   ) {
      e.preventDefault();
      alertError.classList.remove("hide");
      alertError.classList.add("show");
      setTimeout(function () {
         alertError.classList.remove("show");
         alertError.classList.add("hide");
      }, 2000);
   } else {
      e.preventDefault();

      alertSuccess.classList.remove("hide");
      alertSuccess.classList.add("show");
      setTimeout(function () {
         alertSuccess.classList.remove("show");
         alertSuccess.classList.add("hide");
      }, 2000);

      inputNombre.value = "";
      inputEmail.value = "";
      inputComentario.value = "";
   }
}

//EVENTOS DEL FORMULARIO

formulario.addEventListener("submit", validar);

// BOTON SCROLL TOP

let btnTop = document.querySelector(".btn-top"),
   logo = document.querySelector(".principal__logo");

//detectar el scroll en la pagina web
window.addEventListener("scroll", function () {
   let scroll = this.document.documentElement.scrollTop,
      fullSize = this.document.documentElement.offsetHeight,
      sizeVP = this.document.documentElement.clientHeight;

   if (scroll > 100) {
      btnTop.classList.add("show");
   } else {
      btnTop.classList.remove("show");
   }

   //MODIFICAR ELEMENTO CUANDO LLEGUE AL FINAL DE LA PAGINA
   let total = scroll + sizeVP;
   if (scroll > 1910) {
      btnTop.classList.add("scrollFinal");
   } else {
      btnTop.classList.remove("scrollFinal");
   }
});

//DETECTAMOS EL EVENTO CLICK EN EL BOTON
btnTop.addEventListener("click", function () {
   window.scrollTo(0, 0);
});

//DETECTAR EVENTO CLICK EN EL LOGO
logo.addEventListener("click", function () {
   window.scrollTo(0, 0);
});
