// arquivo de javaScript para interagir com a pagina de html criado para o projeto
// acessando as TAGs do html para fazer a ligacao
let imagemCarregando = document.getElementById("meme-insert");
let imagemSalva = document.getElementById("meme-image")
// adicionando uma escuta no elemento que irar receber o arquivo escolhido pelo usuario
imagemCarregando.addEventListener('change', carregado );
// funcao para manipular os elementos depois da interacao do usuario
function carregado(event){
    if(FileReader){                                          // verificacao se existe uma funcao FileReader( )  no browser que ler arquivos do usuario 
    let construtor = new FileReader();                       //fazendo uma copia dessa funcao para utiliza-la no script
        construtor.readAsDataURL(event.target.files[0])      //acessando uma propriedade que converte o evento em dados que pode ser lido como caminho
        construtor.onload = function(event){                 // depois que a imagem é carregada, pega os dados de leitura 
        imagemSalva.src = event.target.result;               //e transfere a URL para a TAG img que ira receber a imagem
    }
}
    else{           /// caso nao exista suporte a FileReader retorna.
    }
}
