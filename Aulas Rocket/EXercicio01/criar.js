var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


async function main() {

    // conexão com o banco de dados
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();

    // Especifique qual database / collection
    const db = client.db("primeiroDB");
    const usuarios = db.collection("nome");

    // insetOne eu adiciono o  novo usuario
    const result = await usuarios.insertOne({ nome: "outroNome", idade: "57" })

    console.log("Usuario Criado");
}

main()