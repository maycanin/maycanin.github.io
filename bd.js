var bd = openDatabase("meuBD", "1.0", "Meu Banco de Dados", 4080);

bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE formulario (nome TEXT, idade INTEGER)");
});

function salvarDados() {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);

    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO formulario (nome, idade) VALUES (?, ?)",
            [nome, idade]
        );
    });
}

function pesquisarPorNome() {
    const nome = document.getElementById("pesquisa-nome").value;

    bd.transaction(function (ler) {
        ler.executeSql(`SELECT * FROM formulario WHERE nome="${nome}"`, [], function (ler, resultados){
            const tamanho = resultados.rows.length;
            console.log(tamanho);
        });
    });
}
