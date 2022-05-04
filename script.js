async function converter(){
  var quantia = document.getElementById("quantia").value
  var moedaIn = document.querySelector('input[name="in"]:checked').value
  var moedaOut = document.querySelector('input[name="out"]:checked').value

  var url = "https://api.exchangerate.host/convert?from="+ moedaIn + "&to="+moedaOut

  var response = await fetch(url)

  var dados = await response.json()

  document.getElementById("resultado").innerHTML= moedaOut +(dados.info.rate*quantia).toFixed(2)
}