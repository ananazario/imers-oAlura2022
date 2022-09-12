function converter() {

var notaPrimeiroBimestre = parseInt(document.querySelector(".notaUm").value)
var notaSegundoBimestre = parseInt(document.querySelector(".notaDois").value)
var notaTerceiroBimestre = parseInt(document.querySelector(".notaTres").value)
var notaQuartoBimestre = parseInt(document.querySelector(".notaQuatro").value)
var notaImpressão = document.querySelector(".notaFinal")
var resultado = document.querySelector(".resultado")

var notaResultado = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4 

notaImpressão.innerHTML = "O aluno teve como nota final: " + notaResultado
if(notaResultado < 6) {
    resultado.innerHTML = "Recuperação"
} else {
    resultado.innerHTML = "Passou para a próxima série. Parabéns!"
}
}