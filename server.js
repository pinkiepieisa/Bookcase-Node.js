const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const estanteController = require('./controllers/estanteController');

const app = express();
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/'
}));

app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', estanteController.ordenarLivro);
app.get('/livros/adicionar', estanteController.exibirAdicionarLivro);
app.post('/livros', estanteController.adicionarLivro);
app.get('/livros/:id/personalizar', estanteController.exibirPersonalizacao);
app.post('/livros/:id/personalizar', estanteController.personalizarLivro);
app.get('/livros/:id/apagar', estanteController.apagarLivro);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!");
});