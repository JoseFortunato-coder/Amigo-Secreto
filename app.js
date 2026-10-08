let amigos = [];

function aleatorizarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function adicionar() {
    let input = document.getElementById("nome-amigo");
    let nome = input.value;

    if (nome.trim() === "") {
        return;
    }

    amigos.push(nome);
    document.getElementById('lista-amigos').innerHTML = amigos.join("<br>");
    input.value = "";
}

function sortear() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 participantes para sortear!");
        return;
    }

    let sorteados = [...amigos];
    let valido = false;

    while (!valido) {
        aleatorizarArray(sorteados);
        valido = true;
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === sorteados[i]) {
                valido = false;
                break;
            }
        }
    }

    let resultadoHTML = `<strong>Participantes do Sorteio:</strong>${amigos}<br>`;

    for (let i = 0; i < amigos.length; i++) {
        resultadoHTML += `O amigo secreto de <strong>${amigos[i]}</strong> é <strong>${sorteados[i]}</strong><br>`;
    }

    document.getElementById('lista-sorteio').innerHTML = resultadoHTML;
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = "";
    document.getElementById('lista-sorteio').innerHTML = "";
    document.getElementById('nome-amigo').value = "";
}