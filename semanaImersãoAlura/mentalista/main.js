var numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
    var chute = parseInt(document.querySelector("#valor").value)
    var elementoResultado = document.querySelector("#resultado")
    const score = document.querySelector(".score")
    let scoreCount = 0
    
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!" 
        scoreCount = scoreCount + 1
        score.innerText = `score: ${scoreCount}`
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10!"    
    } else {
        elementoResultado.innerHTML = `Errou, o número secreto era ${numeroSecreto}!`   
    }
}