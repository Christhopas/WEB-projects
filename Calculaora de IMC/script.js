function imc(){
  var peso = document.getElementById("p").value
  var altura = document.getElementById("a").value

  var imc = peso/ (altura**2)
  
  var div = document.getElementById("out")
  div.innerHTML = "Seu IMC é:" + imc
  div.style.display = "block"
  

}



// Comentario aqui
