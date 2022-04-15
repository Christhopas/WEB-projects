function rolar(){
  var dn = document.getElementById("dn")
  var numDados = dn.value

  var radioFaces = document.querySelector('input[name="faces"]:checked')
  var numFaces = radioFaces.value

  var somatorio = 0
  var rolagens = ""
  var i = 0
  while(i <numDados){
    var rolagem = Math.floor(Math.random()*numFaces)+1
    rolagens = rolagens + "- " + rolagem + " -"
    somatorio = somatorio + rolagem
    i = i + 1
  }
  var divRes = document.getElementById("res")
  divRes.innerHTML = somatorio
  var divRolls = document.getElementById("rolagens")
  divRolls.innerHTML = rolagens
}