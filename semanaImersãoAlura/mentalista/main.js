var numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
    var chute = parseInt(document.querySelector("#valor").value)
    var elementoResultado = document.querySelector("#resultado")
    
    if(chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!"    
    } else if(chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10!"    
    } else {
        elementoResultado.innerHTML = `Errou, o número secreto era ${numeroSecreto}!`   
    }
}