var listaFilmes = ["https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg", "https://upload.wikimedia.org/wikipedia/pt/5/59/The_Lord_of_the_Rings_The_Two_Towers.jpg", "https://upload.wikimedia.org/wikipedia/pt/6/6c/Tarzan_filme_2013_.jpg", "https://upload.wikimedia.org/wikipedia/pt/9/9f/Thor_Poster.jpg", "https://upload.wikimedia.org/wikipedia/pt/b/b3/Thor_The_Dark_World_2013.jpg", "https://upload.wikimedia.org/wikipedia/pt/e/e6/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.jpg"];

for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<img src=" + listaFilmes[indice] +">")
}

