var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";


async function main() {

    // conexão com o banco de dados
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();

    // Especifique qual database / collection
    const db = client.db("primeiroDB");
    const usuarios = db.collection("nome");

    // Crio uma variavel referenciando quem vou alterar 
    const myquery = {nome: "outroNome", idade: "57"}
    
    // Crio uma variavel com os novos dados 
    const newUsuario = { $set: {nome: "NovoNome", idade: "41"}}
    // updateOne eu adiciono o novo dado no banco
    const result = await usuarios.updateOne(myquery, newUsuario)

    console.log("Usuario Alterado");
}

main()