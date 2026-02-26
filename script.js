function playGame(){

let numSec = Math.floor(Math.random()*10) + 1;
console.log(numSec)
let palpite = prompt("Tente adivinhar o número entre 1 e 10");

if(numSec == palpite){
    alert("Acertouu Mizeravill");
    document.getElementById("batata").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPlYrADNx6zfj2F65dJcJ_zhFmW_77zHs1w&s";
    document.getElementById("cabra").src=
    acerto.currentTime = 0;
    acerto.play();
    
}else{
    alert("Erouuuu!!");
    document.getElementById("batata").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHLrZlE_AkqHWpRTvrICMbVPoeu7VuKAXvw&s";
    document.getElementById("cabra").src=
    erro.currentTime = 0;
    erro.play();
   
 }
}
   

