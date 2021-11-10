let loadFile = function(event) {
    var output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src); // free memory
    }
  };

let texto = document.getElementById("text-input");
texto.addEventListener("keyup", function() {
    let textoImagem = document.getElementById("meme-text");
    textoImagem.innerText = this.value;
})