const {MongoClient} = require('mongodb');

async function main() {

    // conexão com o banco de dados
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();

    // Especifique qual database / collection
    const db = client.db("primeiroDB");
    const usuarios = db.collection("nome");
    const result = await usuarios.findOne({nome: "Lucas Santos"})
    console.log(result);
}

main()