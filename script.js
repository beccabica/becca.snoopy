let numSec = Math.floor(Math.random()*10) + 1;
console.log(numSec);

let acerto = document.getElementById("acerto");
let erro = document.getElementById("erro");
let snoopy = document.getElementById("snoopy");

function reset(){
   window.location.reload();

}

function start(){
document.getElementById("batata").innerText="Aguardando o resultado...";
document.getElementById("cabra").src = "https://media.tenor.com/uuqTsCYHpEkAAAAj/snoopy-esnupi.gif";
snoopy.currentTime = 0;
snoopy.play();

setTimeout(verificarResultado, 5005);

}

function verificarResultado(){

let palpite = parseInt(document.getElementById("adicione").value); 

if(numSec == palpite){
    document.getElementById("batata").innerText = "Acertou Mizeravi!!!";
    document.getElementById("cabra").src = "https://media.tenor.com/DGjRxQWIrsIAAAAi/cute.giff";
    acerto.currentTime = 2;
    acerto.play();
    
}else{
    document.getElementById("batata").innerText = "Errou!!!";
    document.getElementById("cabra").src = "https://media.tenor.com/JwNnz32hNrcAAAAi/snoopy.gif"
    erro.play();
   
 }
}
 

