const datosproductos = [{
        nombre: "harley quinn",
        descripcion: "Primero se la representa como la psiquiatra del Joker en prisión, luego su amante y compañera en el crimen, mencionada como cómplice y directamente responsable del asesinato del compañero de Batman, Robin.",
        precio: "69,900.00",
        cantidad: 1,
        foto: "https://http2.mlstatic.com/D_NQ_NP_794277-MLM43779177394_102020-O.webp",
    },
    {
        nombre: "Superman",
        descripcion: "Superman (en español: Superhombre) es un superhéroe ficticio que apareció por primera vez en los cómics estadounidenses publicados por DC Comics..​​",
        precio: "$155.000",
        cantidad: 320,
        foto: "https://media.revistagq.com/photos/643ffd0043b7dde5906f2d7e/1:1/w_1079,h_1079,c_limit/904934.jpg",
    },
    {
        nombre: "Batman v Superman",
        descripcion: "Batman v Superman: Dawn of Justice (titulada Batman v Superman: El amanecer de la justicia en España y Batman vs Superman: El origen de la justicia en Hispanoamérica) es una película estadounidense de superhéroes estrenada en 2016. Es la segunda entrega del Universo Extendido de DC (DCEU) y una secuela de Man of Steel (2013), además de la primera película de acción real que presenta a Batman y Superman juntos.",
        precio: "$74.990",
        cantidad: 1,
        foto: "https://pics.filmaffinity.com/Batman_v_Superman_El_amanecer_de_la_Justicia-728293826-large.jpg",
    },
    {
        nombre: "Batman",
        descripcion: "Batman (conocido inicialmente como The Bat-Man​ y en español como el Hombre Murciélago) es un personaje de cómic creado por los estadounidenses Bob Kane y Bill Finger,​ y propiedad de DC Comics.. ",
        precio: "$ 159,900.00",
        cantidad: 1,
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Batman_Comic_Book_-_NARA_-_595420.gif/640px-Batman_Comic_Book_-_NARA_-_595420.gif",
    },
];
// const f1 = "";
// const p1 = document.getElementById("app").innerHTML = `esto es un texto y una operacion ${3 + 5}`;
function plantilla(datosproductos) {
    return `<div class="ficha-producto">
    <img class="foto" src=${datosproductos.foto}><div><h2 class="nombre">${datosproductos.nombre}</h2><p class="precio">Precio: ${datosproductos.precio}</p>
    <p class="cantidad">Cantidad: ${datosproductos.cantidad}</p><p class="descripcion">${datosproductos.descripcion}</p>
    <button class="btn">Comprar</button>
    </div></div>`;
}
const p1 = (document.getElementById(
    "app"
).innerHTML = `<h1>Productos Disponibles(${
  datosproductos.length
}) </h1> ${datosproductos.map(plantilla).join("")} <p class="precio">Son ${
  datosproductos.length
}
    productos que se han actualizado recientemente en el catalogo.</p><p class="cantidad">Verifique las actualizaciones periodicamente!!!</p><br>`);