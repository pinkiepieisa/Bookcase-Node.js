const EstanteModel = require('../models/estanteModel');

module.exports = {

    ordenarLivro(req, res) {
        const livros = EstanteModel.ordenar();
        res.render('estanteLivros', { livros });
    },

    exibirAdicionarLivro(req, res) {
        res.render('adicionarLivro');
    },

    adicionarLivro(req, res) {
        const novoLivro = {
            nome: req.body.nome,
            ano_publicacao: req.body.ano_publicacao,
            nome_autor: req.body.nome_autor,
            lido: false,
            estrelas: req.body.estrelas,
            capa: req.body.capa
        };

        EstanteModel.adicionar(novoLivro);
        res.redirect('/');

    },

    exibirPersonalizacao(req, res) {
        const { id } = req.params;
        const livro = EstanteModel.listar().find((e) => e.id == id);
        res.render('editaLivro', { tarefa });
    },

    personalizarLivro(req, res) {
        const { id } = req.params;
        EstanteModel.personalizar(id.req.body);
    },

    apagarLivro(req, res) {
        const { id } = req.params;
        EstanteModel.apagar(id);
        res.redirect('/');
    }

};