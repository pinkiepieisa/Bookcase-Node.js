let estante = [
    { id: 1, nome: "O Pequeno Príncipe", ano_publicacao: 1943, nome_autor: "Antoine de Saint-Exupéry", lido: true, estrelas: 5, capa: "/img/pequenoprincipe.jpeg"},
    { id: 2, nome: "Amor, teoricamente", ano_publicacao: 2023, nome_autor: "Ali Hazelwood", lido: true, estrelas: 3, capa: "/img/amorteoricamente.jpeg" },
    { id: 3, nome: "A Hora da Estrela", ano_publicacao: 1977, nome_autor: "Clarice Lispector", lido: true, estrelas: 5, capa: "/img/ahoradaestrela.jpeg" },
    { id: 4, nome: "Asas Reluzentes", ano_publicacao: 2025, nome_autor: "Allison Saft", lido: false, estrelas: 5, capa: "/img/asasreluzentes.jpeg" },
    { id: 5, nome: "Doukyuusei", ano_publicacao: 2006, nome_autor: "Asumiko Nakamura", lido: false, estrelas: 5, capa: "/img/doukyuusei.jpeg" },
];

module.exports = {

    ordenar() {
        return estante;
    },

    adicionar(livro) {
        livro.id = estante.length + 1;
        estante.push(livro);
    },

    personalizar(id, dados) {
        const livro = estante.find((e) => e.id == id);
        if(livro) {
            livro.nome = dados.nome;
            livro.ano_publicacao = dados.ano_publicacao;
            livro.nome_autor = dados.nome_autor;
            livro.lido = dados.lido === 'on';
            livro.estrelas = dados.estrelas;
            livro.capa = dados.capa;
        }
    },

    apagar(id) {
        estante = estante.filter((e) => e.id != id);
    }

};