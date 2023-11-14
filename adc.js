function adc()
{
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resul = num1 + num2;
  document.getElementById("resul").innerText = "Resultado: " + resul;
}
