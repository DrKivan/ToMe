// Establece la fecha del cumpleaños para este año
const year = new Date().getFullYear();
const birthdayThisYear = new Date(year, 6, 21, 22, 26, 0).getTime(); // 20 de julio a las 15:30:45

// countdown
let timer = setInterval(function() {
  // Obtén la fecha de hoy
  const today = new Date().getTime();

  // Obtén la diferencia
  const diff = birthdayThisYear - today;

  // Cálculos de tiempo
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Mostrar resultados
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

  // Mostrar el botón cuando el contador llegue a cero
  if (diff < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "¡El tiempo se ha cumplido!";
    document.getElementById("redirectButton").style.display = "block";
  }

}, 1000);

// Verifica si la fecha ya ha pasado al cargar la página
if (new Date().getTime() > birthdayThisYear) {
  document.getElementById("timer").innerHTML = "¡El tiempo se ha cumplido!";
  document.getElementById("redirectButton").style.display = "block";
}

// Función para redirigir
function redirect() {
  window.location.href = 'content.html';
}
