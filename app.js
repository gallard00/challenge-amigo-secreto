// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo"); //Captura el input.
    let nombre = input.value.trim(); //Obtiene el valor y elimina espacioin innecesarios.

    if (nombre === "") {
        alert('Porfavor, inserte un nombre');
        return; //Detiene la ejecucion si la validacion falla.
    }

    amigos.push(nombre);

    // Actualizar la lista en el HTML
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    input.value = "";

}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista en el DOM
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    // Recorrer el array amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li"); // Crear un <li>
        nuevoElemento.textContent = amigos[i]; // Asignar el nombre del amigo
        nuevoElemento.classList.add("list-item"); // Agregar una clase CSS opcional
        lista.appendChild(nuevoElemento); // Añadirlo a la lista en el DOM
    }
}

function sortearAmigo() {
    // 1. Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos uno antes de sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="sorteado">🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
