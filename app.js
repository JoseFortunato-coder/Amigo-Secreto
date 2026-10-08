const amigos = [];
let nomes;
let listaAmigos;
function aleatorizarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function adicionar() {
 nomes = document.getElementById("nome-amigo").value; 
  amigos.push(nomes);
   listaAmigos = document.getElementById('lista-amigos').textContent = amigos.join(", \n"); 
  document.getElementById("nome-amigo").value = "";
}

function sortear() {
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").value = "";
    aleatorizarArray(amigos);
    listaAmigos = document.getElementById('lista-sorteio').textContent = amigos - amigos - 1; 
}

function reiniciar(event) {
 
}
