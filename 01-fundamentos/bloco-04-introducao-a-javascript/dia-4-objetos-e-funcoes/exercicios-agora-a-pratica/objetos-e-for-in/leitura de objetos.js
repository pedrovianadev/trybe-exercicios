let leitor = {
    nome: 'Pedro',
    sobrenome: 'Viana',
    idade: 26,
    livrosFavoritos: [
      {
        titulo: 'O dia do curinga',
        autor: 'Jostein Gaarder',
        editora: 'Cia. Das Letras',
      },
    ],
};

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama " ' + leitor.livrosFavoritos[0].titulo + ' " ');

leitor.livrosFavoritos.push(
    {
        titulo: 'Clube da luta',
        autor: 'Chuck Palahniuk',
        editora: 'Leya',
    }
)
// Aqui eu não consegui de primeira pois eu havia esquecido de colocar as vírgulas ( , )
// console.log(leitor);

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos!');