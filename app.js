// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista.
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Debe colocar un nombre en el campo para continuar");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Crear un nuevo elemento de lista y agregarlo a la lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el campo de texto
    inputAmigo.value = "";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear");
        return;
    }

    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const nombreGanador = amigos[indiceGanador];

    // Mostrar el nombre ganador en la lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${nombreGanador}</li>`;
}
