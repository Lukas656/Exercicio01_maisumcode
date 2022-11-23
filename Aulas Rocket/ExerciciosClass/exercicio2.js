// 1)
// definir dois numeros
// funcao que multiple os dois numeros e retrona o valor
// Dentro da minha funcao, se o resultado da multiplicacao for maior que 100
// Loga maior que 100
// Menos que 100, loga que foi menor 100

// 2)
/*

    Classe de mesa, altura e largura
    funcao que vai receber uma mesa, vai multiplicar a altura e a largura da mesa
     e retornar o valor
    Logar qual é a altura da mesa multiplicada pela largura da mesa
*/



let numero1 = 10;
let numero2 = 20;

console.log("Exercicio (1):")
function verifica(n1, n2) {
    resultado = n1 * n2;
    if (resultado >= 100) {
        console.log(resultado + " é maior que 100")
    } else {
        console.log(resultado + " é menor que 100")
    }
    return resultado;
}

let respostaF = verifica(numero1, numero2)
console.log(respostaF);

console.log("Exercicio (2):");

class mesa {
    constructor(altura, largura) {
        this.alt = altura;
        this.larg = largura;
    }
}

let mesa1 = new mesa(10, 15);

function calc(banana) {

   altura = banana.alt 
   largura = banana.larg

    resp = largura * altura
    console.log( `Resposta de ${altura} X ${largura}: ` + resp)

    return resp

}

calc(mesa1)
