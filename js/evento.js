function sumar() {
  // capturamos los valores ingresados
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  var suma = parseInt(num1) + parseInt(num2);
  res = document.getElementById("resultado");
  res.value = suma;
}
