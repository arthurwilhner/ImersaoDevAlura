var numSecreto = Math.floor(Math.random() * 11)
var tentativas = 3

while (tentativas > 0){
  var chute = parseInt(prompt('Digite um número'))
  if (numSecreto == chute){
    document.write("<h2>Você acertou! Parabéns!</h2>")
    break
  } else if (chute > numSecreto){
    alert('O Número secreto é menor')
    tentativas = tentativas - 1
  } else if (chute < numSecreto){
    alert('O número secreto é maior')
    tentativas = tentativas - 1
  }
}

if (chute != numSecreto) {
  document.write("<h2>" + "Suas tentativas terminaram, obrigado por tentar! O número correto era o " + numSecreto + "</h2") 
}