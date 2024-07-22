let typed = "";
const element = document.querySelector(".typity");
const puns = [
  "Hola mi amor.",
  "Se supone que aqui tengo mas libertad escribir",
  "Pero programar esto  , por como estoy justo ahora (enfermito)",
  "Estoy enojao, que dificil y rompebolah fue escribir esto que ves.",
  "Pero mi niña si es por ti, esto lo hice con un gustazo",
  "Deberia estar estar escribiendo lo importante en lugar de gastar palabras como boludo",
  "Pero cada boludo tiene a su boludita",
  "Desde el dia que supe tu nombre, en un principio no tenia mucha importancia para mi",
  "Pero con el tiempo juntos y con lo de fluir juntos, me enseñaste quien eres",
  "Eres esa personita que me hace pedir besitos y con la que me siento mucho mas libre",
  "Pero esto no es sobre nuestra relacion, es sobre ti, TU birthday",
  "Hoy hace 21 años, despues de sospechosos meses extra de embarazo...",
  "NACISTE, Erika Nicole Belen Escobar Isla",
  "Una muchachita increible en mi vida, que le gusta o es buena dibujando  ",
  "AH PERO PONGALE A DIBUJAR A LOS PRESIDENTES DE BOLIVIA AJAJJAJAJ",
  "Tambien le gustan sus asiaticos, sus kdramas... ",
  "dar platita a los niñitos del (auto) y luego se queda sin pasaje la pendeja ",
  "Representas mucho como persona, no solamente como mi pareja, que afortunado estoy de decir que esa chica me da besoh",
  "No quiero decir mucho texto",
  "FeliZ Aniversario de nacimiento WUUUUUUUUUU.",
  "Nos veremos pronto mi amor, Mi Belen, mi presente, mi vida, Mi todo <3"
];
let punIndex = 0; // Variable to keep track of the current pun index

function startType(pun, index) {
  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(function() {
      startType(pun, index);
    }, 50);
  } else {
    setTimeout(function() {
      element.classList.add("highlight");
    }, 4000);

    setTimeout(function() {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;
      punIndex = (punIndex + 1) % puns.length; // Move to the next pun
      startType(puns[punIndex], 0);
    }, 5000);
  }
}

startType(puns[punIndex], 0);
