const btnEl = document.getElementById("btn");
const resultG1El = document.querySelector(".risultatoG1")
const reusltCpuEl = document.querySelector(".risultatoCpu")
const gameResult = document.querySelector(".game_result");
let numebrG1 = 0;
let numberCpu = 0;

btnEl.addEventListener("click", function(){
    numebrG1 = Math.floor(Math.random() * 6) + 1;
    numberCpu = Math.floor(Math.random() * 6) + 1;
    resultG1El.innerHTML = `${numebrG1}`;
    reusltCpuEl.innerHTML = `${numberCpu}`;

    if(numebrG1 > numberCpu){
        gameResult.innerHTML = "Hai vinto! &#128526"
    }else if(numebrG1 === numberCpu){
        gameResult.innerHTML = " E' un pareggio &#128579 "
    } else{
        gameResult.innerHTML = "Hai perso &#128546"
    }

})

