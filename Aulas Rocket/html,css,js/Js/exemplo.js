// Programa que Calacula de Fahrenheit para Celsius



function transformDgree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
 
//Fluxo de Erro
    // valida se existe C ou F 
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau Não Indentificado')
    }

// Fluxo Ideal  F para C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

// Fluxo Alternativo C para F
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSing = 'F'
    }

    // Retorna o Fluxo Escolhido
    return formula( updateDegree) + degreeSing
}

// Passando os Dados para o Fluxo 
try{
    console.log(transformDgree('50F'));
    console.log(transformDgree('10C'));
    
} catch(error){
    console.log(error)
}