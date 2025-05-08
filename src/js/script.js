//DECLARANDO O ARRAY DE IMAGENS
let imagens =[
    "src/assets/imagem1.jpg",
    "src/assets/imagem2.jpg",
    "src/assets/imagem3.jpg",
];

//DECLARANDO AS VARIAVEIS

let index = 0;
let tempo = 3000;

//CRIANDO A FUNÇAO SLIDESHOW

function slideshow(){
    document.getElementById("image").src= imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;
    }
    setTimeout("slideshow()", tempo)
}
slideshow();
