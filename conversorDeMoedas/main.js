function converter() {
    var valorEmDolarNumerico = parseFloat(document.querySelector("#valor").value)
    var botao = document.querySelector(".botao-valor").value

    var elementoValorConvertido = document.querySelector("#valorConvertido")

    if(botao == "dólar" || botao == "Dólar" || botao == 1) {
        var valorEmReal = valorEmDolarNumerico * 5.17
        var valorConvertido = "O resultado em real é R$" + valorEmReal
        elementoValorConvertido.innerHTML = valorConvertido
    } else if (botao == "euro" || botao == "Euro" || botao == 2) {
        var valorEmReal = valorEmDolarNumerico * 5.20
        var valorConvertido = "O resultado em real é R$" + valorEmReal
        elementoValorConvertido.innerHTML = valorConvertido
    } else if(botao == "libra" || botao == "Libra" || botao == 3) {
        var valorEmReal = valorEmDolarNumerico * 6
        var valorConvertido = "O resultado em real é R$" + valorEmReal
        elementoValorConvertido.innerHTML = valorConvertido
    } else {
        var valorConvertido = "Por favor, digite o nome da moeda ou seu número da lista acima"
        elementoValorConvertido.innerHTML = "Por favor, digite o nome da moeda ou seu número da lista acima"
    }
}