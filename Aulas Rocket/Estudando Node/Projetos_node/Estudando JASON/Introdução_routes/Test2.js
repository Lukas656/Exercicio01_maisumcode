//      Servirdor basico Com Node.js
const http = require('http'); // Carrega o modulo HTTP do Node

const hostname = '127.0.0.1'; // IP local da máquina  
const port = 3000; // porta exemplo pra teste

// Cria O Servirdor Básico 
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('contente-Type', 'text/plain')
    res.end('Servirdor Básico Funcionando...');
});

// Exibir Servirdor
server.listen(port,hostname, () => {
    console.log("Servirdor Rodando!!")
});
