var op = prompt('Digite 1 para soma, 2 para subtração. 3 para Divisão, 4 para Multiplicação')

var primeiroValor = parseInt(prompt('Digite o 1º valor!'))
var segundoValor = parseInt(prompt('Digite o 2º valor!'))

if (op == 3){
var resultado = primeiroValor * segundoValor
document.write('<h2>' + primeiroValor + ' x ' + segundoValor + ' = ' + resultado + '</h2>')
}
else{
  if (op == 1){
    var resultado = primeiroValor + segundoValor
    document.write('<h2>' + primeiroValor + ' + ' + segundoValor + ' = ' + resultado + '</h2>')
  }
  else{
    if (op == 2){
      var resultado = primeiroValor - segundoValor
      document.write('<h2' + primeiroValor + ' - ' + segundoValor + ' = ' + resultado + '</h2>')
    }
    else{
      if (op == 3){
        var resultado = primeiroValor / segundoValor
        document.write('<h2>' + primeiroValor + ' / ' + segundoValor + ' = ' + resultado + '</h2>')
      }
      else{
        if (op == 4){
          var resultado = primeiroValor * segundoValor
          document.write('<h2>' + primeiroValor + ' * ' + segundoValor + ' = ' + resultado + '</h2')
        } else {
          document.write("<h2>Opção Inválida</h2>")
        }
      }
    }
  }
}