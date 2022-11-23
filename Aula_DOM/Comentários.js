//  window.open('pagina2.html');  Abre outra janela no navegador
//  history.back();     carrega a URL anterior na lista de histórico.
//  history.forward();  O mesmo que clicar para a frente no navegador

/* 

.sectionCardBox:hover{
  transform: scale(1.1);
}

.sectionCardBox:hover{
  transform:translateY(10px)
}

.sectionCardBox:hover{
  transform:translateY(-50px)
}

*/

// document.getElementByid()
// Pega elemento pelo ID

// const element = document.getElementById('ID');

///////////////////////////////////////////////////////////////

// document.getElementByClassName()
//Pega Varios Elementos Que tem a mesma Class

// const element = document.getElementsByClassName('NomeClass');

///////////////////////////////////////////////////////////////

// document.getElementByTagName()
// (HTMLColection)
// pega os Elelmentos Pela Tag

// const element = document.getElementsByTagName('h1');

///////////////////////////////////////////////////////////////

// document.QuerySelector

// Pega O elemento pelo Seletor CSS

//const element = document.QuerySelector('.class');

///////////////////////////////////////////////////////////////

// document.QuerySelectorAll
// (Node List)
// Pega TODOS elemento pelo Seletor CSS

//const elements = document.QuerySelectorAll('#ID');
//const elements = document.QuerySelectorAll('.class');

///////////////////////////////////////////////////////////////


//Manipulando Conteúdo
// TextContent
/*

let element = document.querySelector('h1');

element.textContent ='Olá Dev !'

// Ou para concatenar

element.textContent += 'Olá Dev';

*/

///////////////////////////////////////////////////////////////

//Manipulando Conteúdo
// innerText  = texto interno
/*

let element = document.querySelector('h1');

element.innerText ='Olá Dev !'


*/
///////////////////////////////////////////////////////////////

//Manipulando Conteúdo HTML
// innerHTML

/*
let element = document.querySelector('h1');

element.innerHTML = "Olá Dev <small>Conteudo Adicionado Via JS</small>"

*/
///////////////////////////////////////////////////////////////

//Manipulando Conteúdo HTML
// Value

/*
let element = document.querySelector('input');

element.value = "valor que eu Quiser"

*/
///////////////////////////////////////////////////////////////

//Manipulando Conteúdo HTML
// Atributos

/*
const header = document.querySelector('header');
// Adicionando um ID no elmenmto Header
header.setAttribute('id' , 'header')

// salvando ID numa variavél headarID
const headerID = document.querySelector('#header');

// adicionar classse oi ID
header.setAttribute('class', 'bg')

// remover Atributos 
header.removeAttribute('bg');
*/

///////////////////////////////////////////////////////////////

//Manipulando Estilos CSS

/*
const element = document.querySelector('body');

element.style.backgroundColor = 'black'
element.style.color = 'white'

*/

///////////////////////////////////////////////////////////////

//Manipulando Estilos CSS
// classlist
/*
const element = document.querySelector('body')
// Adicionar classe 
element.classList.add('nomeDaClasse', 'outraClasse', 'outra');

// remover classe
element.classList.remove('nomeDaClasse');


// O .toggle se tem a classe ele retira se não ele adiciona
element.classList.toggle('nomeDaClasse');

*/
///////////////////////////////////////////////////////////////

//Navegar pelos elementos pais
// parentNode parentElement
/*
const body = document.querySelector('body');

console.log(body.parentNode);
console.log(body.parentElement);

*/
///////////////////////////////////////////////////////////////


//Navegar pelos elementos filhos
// childNode children
/*
const body = document.querySelector('body');

console.log(body.childNodes);
console.log(body.children); // tras HTMLColetion

*/

///////////////////////////////////////////////////////////////

//Navegar pelos elementos irmaõs
// nextSibleng e nextElementSiblin
// priviousSibleng e priviousElementSiblin


///////////////////////////////////////////////////////////////
/*
//Criando e adicionando Elementos 

// criar
const div = document.createElement('div');
div.innerText = 'Olá Devs!'


// adicionar  append
const body = document.querySelector('body');
body.prepend(div) // adiciona antes do elemento celecionado
body.append(div) // adiciona depois do elemento selecionado

// adiciona no meio 
// criar
const div = document.createElement('div');
div.innerText = 'Olá Devs!'


// insertBefore
const body = document.querySelector('body');
const input = body.querySelector('input');
body.insertBefore(div, input )
*/
///////////////////////////////////////////////////////////////

// Eventos
/*
const h1 = document.querySelector('h1');

h1.addEventListener('click' , print);  

function print(){
    console.log('rodei')
};

// Evento 
// Argumanto event

const input = document.querySelector('h1');
// onclick  onkeydown .....
input.onclick = function(event){
  console.log(event);
}

*/