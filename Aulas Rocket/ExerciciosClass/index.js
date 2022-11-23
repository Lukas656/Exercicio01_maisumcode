// 1. Classe Computador
// Classe computador tem que receber dono
// Método que você chame o método e ele logue no console: "O meu dono é "

// 2. Função que vai receber o objeto computador e o novo done
//  ela vai trocar o dono do computador e retonar o computador com o novo dono

class Computador{
    constructor(dono){
        this.dono = dono;
    }

    metodolog(){
       return "O Dono do computador é: " + this.dono;
    }
}


const exemplo = new Computador("Lucas Santos");
const menssagem = exemplo.metodolog();


console.log(exemplo.dono);
console.log(menssagem);

function newDono(donoNovo){
    donoNovo.dono = "Santos";
    
}

newDono(exemplo);
console.log("O novo dono é: " + exemplo.dono)