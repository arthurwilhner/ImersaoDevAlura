// A ISS dá uma volta ao redor da Terra em 90min = 1,5h
// O dia tem 24h, logo são 16 órbitas que a ISS completa

var qtdDeHoras = prompt("Quantas horas temos em um dia?")

var qtdDeHorasNumero = parseFloat(qtdDeHoras)

alert(qtdDeHorasNumero)

var qtdDeOrbitas = qtdDeHorasNumero / 1.5

alert("A ISS dá um total de " + qtdDeOrbitas + " órbitas ao redor da Terra")