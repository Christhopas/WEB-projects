var ul = document.getElementById("contatos")

async function load(){
  var url = 'https://randomuser.me/api/?results=10'

  var response = await fetch(url) 

  console.log(response.status) //200 (codigo 200 = deu certo tudo suave)
  
  if (response.status == 200){
    var dados = await response.json()
    showContacts(dados)
  }else{
    alert("Erro ao Carregar")
  }
}

function showContacts(dados){
  var contatos = dados.results
  var tam = contatos.length // numero de contatos

  var i = 0
  while(i < tam){
    var li = document.createElement("li")
    var img = document.createElement("img")
    img.src = contatos[i].picture.medium
    //img.class = ""    personalizar as imgs
    li.innerHTML = contatos[i].name.first
    li.appendChild(img)
    ul.appendChild(li)
    i++
  }
}