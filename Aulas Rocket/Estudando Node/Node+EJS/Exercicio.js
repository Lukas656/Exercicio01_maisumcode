/*
// 1  - Criar um endpoint com uma rota diferente. (Exemplo: /voos, /viagems e retornar algo diferente)
// 2 - Criar endpoints com diferentes verbos http (GET, POST, PUT, DELETE) - chamar eles usando o postman
// 3 - Criar um novo endpoint [POST] /soma - 

Passar um json para esse endpoint: 
{
    "x": "1",
    "y": "2"
}

{
    "resultado": 3
}
*/

console.log("Iniciando.....")
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080 

app.use(bodyParser.json())
// Exercicio 1
app.get('/voos',(req,res)=>{
    res.send('<h1>Todos os Voos</h1>');
});

app.get('/viagens',(req,res)=>{
    res.send('<h1>Todas as Viagens</h1>');
});


// Exercicio 2
app.get('/get',(req,res)=>{
    res.send('<h1>Get é usado para Pegar os Dados</h1>');
});
app.post('/post',(req,res)=>{
    res.send('<h1>Post: É utilizado para enviar dados para o servidor.</h1>');
});
app.put('/put',(req,res)=>{
    res.send('<h1>Put: Atualiza os Dados do BD</h1>');
});
app.delete('/delete',(req,res)=>{
    res.send('<h1>Delete: É usado para Deletar os dados</h1>');
});

// Exercicio 3

app.post('/soma',(req,res)=>{
    let x = req.body.x;
    let y = req.body.y;

    let soma = x + y;
    res.send({"Resultado": soma})
})

app.listen(port, ()=>{ 
    console.log(`Rodando na porta: ${port}`)
});