let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
    alert("Por favor, insira apenas letras.");
    return;
}

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    return;
}
    amigos.push(nome);
    input.value = "";

    mostrarLista();
}
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("digite os nomes de seus amigos para sortear.");
        return;
    }

    

    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${sorteado}</strong></li>`;

}

const input = document.getElementById("amigo");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});



    

