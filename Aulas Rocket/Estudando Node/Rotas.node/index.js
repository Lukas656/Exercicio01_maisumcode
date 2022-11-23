let express = require("express");
const fs = require("fs");
const path = require("path");


const app = express();


// Rotas
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/");
});
app.get("/pagina2", function(req,res){
    res.sendFile(__dirname + "/html/pagina2.html");
})


// Onde o Servidor está Rodando.
app.listen(5000, function(){
    console.log("Servidor rodando em http://localhost:5000")
});