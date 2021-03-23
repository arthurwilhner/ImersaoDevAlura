function ConversorKm() {
  var valorLy = document.getElementById("valorLy").value;
  var valorKm = (parseFloat(valorLy) * 9460528404879.4).toExponential(4);

  document.getElementById("valuekmconverted").innerHTML =
    " " + valueEmKm + " Km";
}

