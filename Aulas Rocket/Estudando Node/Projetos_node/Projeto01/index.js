const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/index.html', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

router.get('/pagina2.html', function(req,res){
    res.sendFile(path.join(__dirname+'/pagina2.html'));
})

app.use('/',router);
app.listen(process.env.port || 3000);


console.log("Servirdor Rodando..")

