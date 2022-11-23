// 1 Contar o número de Categorias e o Número de livros em cada categoria
// 2 Contar o Número de Autores 
// 3 Mostrar a Função acima emn um função que irá receber o nome do Autor e devolver os livros dessse aultor

const CategoriaLivros = [
    {
        categoria:"Riqueza",
        livros: [
            {
                titulo: "Os Segredos da mente milionaria",
                autor: "T. Harv Eker",
            },
            {
                titulo: "O Homem mais Rico Da Babilônia",
                autor: "George S. Clason",
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        categoria:"Inteligencia Emocioonal",
        livros: [
            {
                titulo: "Você é insubstituível",
                autor: "Augusto Cury",
            },
            {
                titulo: "Ansiedade - Como enfrentar  o mal do Seculo",
                autor: "Augusto Cury",
            },
            {
                titulo: "Os 7 habitos das pessoas altamente eficazes",
                autor: "Stephen R. Covey",
            },
        ],

    },
];

// 1 Resposta:
const TotalCategorias = CategoriaLivros.length
console.log('Total de Categorias: ', TotalCategorias)

// 2 Resposta:
for (let categoria of CategoriaLivros){
    console.log('Total de livros da Categoria: ', categoria.categoria)
    console.log(categoria.livros.length)
}


// 3 Resposta:

function ContaAutor(){
    let Autores = []

    for(let categoria of CategoriaLivros){
        for(let livro of categoria.livros){
            if(Autores.indexOf(livro.autor) == -1){
                Autores.push(livro.autor)
            }
        }
    }

    console.log("Total de Autores: ",Autores.length)
}


function livrosDoAutor(autor){
    let livrosAutor = []

    for(let categoria of CategoriaLivros){
        for(let livro of categoria.livros){
            if(livro.autor == autor){
                livrosAutor.push(livro.titulo)
            }
        }
    }

    console.log( `Livros do Autor ${autor}: ${livrosAutor.join(", ")}` )
}

ContaAutor()
livrosDoAutor('Augusto Cury')
livrosDoAutor('George S. Clason')
livrosDoAutor('Stephen R. Covey')