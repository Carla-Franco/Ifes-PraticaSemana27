const database = require('./db');
const Fornecedor = require('./models/fornecedor');
(async () => {
const database = require('./db');
const Cliente = require('./models/fornecedor');
try {
const resultado = await database.sync();
console.log(resultado);
const fornecedores = await Fornecedor.findAll();
console.log("Lista de Fornecedores \n",fornecedores);
} catch (error) {
console.log(error);
}
})();

const express = require('express');
const app = express();
const porta = 9443;
const bodyParser = require('body-parser');

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) =>{
 res.send('Bem vindo ao cadastro de fornecedores.');
});
app.listen(porta, () => { console.log('Servidor rodando') });

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));

app.get("/cadfornecedor", function(req, res) {
res.render('formFornecedor');
});

app.post('/addfornecedor', function(req, res) {
 Fornecedor.create({
 nome: req.body.nome,
 telefone: req.body.telefone,
 email: req.body.email
 }).then(function(){
 res.send("Fornecedor cadastrado com sucesso!")
 })
})
