const amigos = [];
let nomes;
let listaAmigos;
function adicionar() {
 nomes = document.getElementById("nome-amigo").value; 
  amigos.push(nomes);
   listaAmigos = document.getElementById('lista-amigos').textContent = amigos.join(", \n"); 
  document.getElementById("nome-amigo").value = "";
}

function sortear() {
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").value = "";
let sorteio = amigos[Math.floor(Math.random() * amigos.length)];
listaAmigos = document.getElementById('lista-amigos').textContent = sorteio; 
}

function reiniciar(event) {
 
}
