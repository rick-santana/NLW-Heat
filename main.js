
   // objeto link com todas as redes sociais

  const LinksSocialMedia = {
      github: "rick-santana", //nome de usuario do GitHub
      youtube: "", //nome de usuario do Youtube
      facebook: "", //nome de usuario do Facebook
      instagram: "_rickz1_", //nome de usuario do Instagram
      linkedin: "https://www.linkedin.com/in/henrique-santana-445357198" //nome de usuario do linkedin
    }

  function changeSocialMediaLinks(){
    //o conrolador "li" é referente a cada filho 
    //que existe dentro do elemento com id "socialLinks"
    //a variavel li ta armazenando todo conteudo do elemento li do html
     for (let li of socialLinks.children){
       //pegando toda a li e exibindo a classe dela
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
      //pega o primeiro filho da li, pega o href do filho []--> omstra a posição do filho
       // alert(li.children[0].href)
            
    }

  }

  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
    //nomeDeUsuario --> nomeDoObjeto.github
      const url = `https://api.github.com/users/${LinksSocialMedia.github}`

      //reponse.json() -> transformando a informção em JSON
      fetch(url)
        .then(response => response.json())//response é o nome da variavel
        //armazena a resposta do fetch em JSON
        .then(data => {
          //id.textContent = variavel.propriedade do JSON
          userName.textContent = data.name
          //document.getElementById("userName").textContent = data.name

          userBio.textContent = data.bio
          // document.getElementById("userBio").textContent = data.bio

          //troca o link do href
          userLink.href = data.html_url
          //document.getElementById("userLink").href = data.html_url

          //troca o conteudo do src de um elemento
          userImage.src = data.avatar_url
          //document.getElementById("userImage").src = data.avatar_url

          //troca o conteudo do span, alterando o nome de login do usuario
          userLogin.textContent = data.login
          // document.getElementById("userLogin").textContent = data.login
        } )

  }

  getGitHubProfileInfos()
