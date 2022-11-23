// Função autoinvocável 

// Uma função anonima, entre parênteses,
// seguida por outro par de parênteses,
// que representa sua chamada.

// EX:

(
    function(){
        let name = "Lucas Santos"
        return name;
    }
)();


// Lucas Santos

//------------------------------------------------------------------------------------

// EX 2:


(
    function(a,b){
        return a + b;
    }
)(1,2);// 3


//------------------------------------------------------------------------------------
// Também pode ser ultilizada com parâmetros 
// ou Armazenada em uma variável.

// EX 3:


const soma3 = (
    function(){
        return a + b;
    }
)(1,2);

console.log(soma3)// 3


//------------------------------------------------------------------------------------


// Funções Callbacks 


// Uma função callback é uma função passada como argumento para outra.

// Ultilizando Callbacks, você tem maior controle da oredem de chamadas


const calc = function(operacao, num1 , num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1,2);
const resultSub = calc(sub, 1,2);


console.log(resultSoma); // 3
console.log(resultSub); // -1