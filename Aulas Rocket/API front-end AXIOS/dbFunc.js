
// Retorna todos os dados (VOOS) do Banco 
async function getVoos(){
    const voosCollection = await getCollection();
    const voos = await voosCollection.find().toArray();
    return voos
};

// Retorna somente um voo pelo ID
async function getVoo(vooId){
    const voosCollection = await getCollection();
    const voos = await voosCollection.find({vooId: parseInt(vooId)}).toArray();
    //return voos
}


// Adiciona um voo no Banco de dados
async function addVoo(voo){
    const voosCollection = await getCollection();
    voosCollection.insertOne(voo);
}


// // Atualiza um voo no Banco de dados
// async function updateVoo(req, res){
//     const voosCollection = await getCollection();
 

// };


// Deleta um voo no Banco de dados
async function deletaVoo(voo){
    const voosCollection = await getCollection();
    let myquery = voo;
    voosCollection.deleteOne(myquery);
}


//module.exports = {getVoos, getVoo, addVoo, updateVoo, deletaVoo};




/*

app.put('/users', async (req, res) => {

    // Conexão com o banco de dados
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();
    var db = client.db("first_database");
    var collection = db.collection("users");

    // Logica
    var corpo = req.body;

    var filtro = {name: corpo.nome}
    var mod = { $set: {age: corpo.nova_idade} };

    var r = await collection.updateOne(filtro, mod)
    console.log(r);

    res.send("Ok")

})
app.get('/users', async (req, res) => {

    // Conexão com o banco de dados
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();
    var db = client.db("first_database");
    var collection = db.collection("users");

    var users = await collection.find({}).toArray();
    res.send(users)
})*/