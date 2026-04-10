let prediccion=[
     "Lograrás todo lo que te propongas si no te rindes",
     "Superarás cada obstáculo que aparezca en tu camino",
     "Construirás la vida que siempre has soñado",
     "Descubrirás lo fuerte y capaz que eres.",
     "Alcanzarás tus metas paso a paso, con paciencia y esfuerzo."
     
];

function generarNombre(){

    let indice = Math.floor(Math.random()* prediccion.length);

    let nombre = prediccion[indice];

    document.getElementById("nombreGenerado").innerText = nombre;
}