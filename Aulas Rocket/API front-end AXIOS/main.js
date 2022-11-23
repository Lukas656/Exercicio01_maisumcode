// conexão com o banco de dados
const uri = "http://localhost:3030/get";
const urlPost = "http://localhost:3030/post"
const newUser = {
   /* vooId: 5,
    origem: "RJ",
    destino: "AM"
    */
}
const UpdateUser = {
    vooId: 3,
    origem: "RJ",
    destino: "AM"
    
}


function getUser() {
    axios.get(uri)
        .then(response => {
            const data = response.data.forEach(voo => {
                document.getElementById('results').innerHTML +=
                    ('<h1>' + `ID do Voo: ${voo.vooId} | Origem: ${voo.origem} | Destino: ${voo.destino}` + '</h1>');
            });
        })
        .catch(error => console.log(error))
}
getUser()


function addNewUser() {
    axios.post(urlPost, newUser)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(error => console.log("error")) 
}

//addNewUser()

