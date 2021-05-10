const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post')

// Confi handlebaras template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// Confi body-parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Rotas cadastrar

// Rota Home
app.get('/', function(req, res){
    res.render('home')
})

// Rota de cadastro
app.get('/cadastrar', function (req, res) {
    res.render('formulario')
})

app.post('/cadastrar', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send('Erro no post: ' + erro)
    })
})

// Servidor express
app.listen(8080, function () {
    console.log('Server is runnig on port 8080')
})

/**
 * Express é um popular framework web estruturado, escrito em JavaScript que roda sobre o ambiente node.js em tempo de execução.
 * npm install --save express
 *
 * handlebars é um template engine, serve para usar estruturas no html, tais como,
 * condicionais, repeticão e principalmente exibir dados que viram do backend no
 * frontend.
 * npm install --save express-hundlebars
 *
 * Sequelize é um ORM Object Relational Model, para banco de dados relacionais, tais como, PostgressSQL, MariaDB, SQLite e MySQL
 * npm install --save sequelize
 *
 * Nodemon irá monitorar todas as alteraçãos nos arquivos de sua aplicação e reiniciar automaticamente o servidor quando for necessario
 * npm install -g nodemon --save-dev
 *
 * mysql2 servidor de banco de dados mysql
 * npm install --save mysql2
 */