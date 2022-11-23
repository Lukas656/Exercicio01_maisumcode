console.log("Iniciando.....") // mensagem simples pra Visualizar no console que iniciou.
const express = require('express'); // Chamo a Bibliotéca
const app = express(); // Crio uma Variável pra adicionar a Bibliotéca
const port = 3000 // uma porta que vai Rodar a aplicação EX: http://localhost:3000


app.get('/',(req,res)=>{  // Um Get para addicionar algo nessa aplicação, aqui no caso uma messagem
    res.send('<h1>Fala Word!</h1>')
});
app.listen(port, ()=>{ // Aqui eu coloco a aplicação pra rodar na porta que já defini acima.
    console.log(`Rodando na porta: ${port}`)// Menssagem que o Servidor está rodando.
});