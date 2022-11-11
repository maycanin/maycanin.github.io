var bd = openDatabase("meuBD", "1.0", "Meu Banco de Dados", 4080);

bd.transaction(function (criar) {
    criar.executeSql(
        "CREATE TABLE formulario (nome TEXT, idade INTEGER, email TEXT, telefone TEXT, cpf TEXT)"
    );
});

function salvarDados() {
    const nome = document.getElementById("nome").value.toUpperCase();
    const idade = parseInt(document.getElementById("idade").value);
    const email = document.getElementById("email").value.toLowerCase();
    const telefone = document
        .getElementById("telefone")
        .value.replace(/\D/g, "");
    const cpf = document.getElementById("cpf").value.replace(/[^\d]+/g, "");

    if (
        nome === "" ||
        isNaN(idade) ||
        email === "" ||
        isNaN(telefone) ||
        isNaN(cpf)
    ) {
        alert("Informe corretamente os dados");
        return false;
    }
    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO formulario (nome, idade, email, telefone, cpf) VALUES (?, ?, ?, ?, ?)",
            [nome, idade, email, telefone, cpf]
        );
    });
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cpf").value = "";
}

function pesquisarPorNome() {
    const nome = document.getElementById("pesquisa-nome").value.toUpperCase();

    bd.transaction(function (ler) {
        ler.executeSql(
            `SELECT * FROM formulario WHERE nome LIKE "${nome}%"`,
            [],
            function (ler, resultados) {
                const tamanho = resultados.rows.length;

                const msg = tamanho + " linha(s) contada(s)";
                console.log(msg);

                let item;
                for (let i = 0; i < tamanho; i++) {
                    item = resultados.rows.item(i);
                    document.getElementById(
                        "lista-bd"
                    ).innerHTML += `<p onclick="mostrarCartaoAltera('${item.nome}', ${item.idade}, '${item.email}', ${item.telefone}, ${item.cpf})" style="cursor: pointer;">${item.nome} - ${item.idade} anos - ${item.email} - ${item.telefone} - ${item.cpf}</p>`;
                }
                // const nome = resultados.rows.item(tamanho - 1).nome;
                // const idade = resultados.rows.item(tamanho - 1).idade;
                // document.getElementById("pesquisa-nome").value = `${nome}`;
                // document.getElementById("resultado-pesquisa").value =
                //     idade + " anos";
            }
        );
    });
}

function exibeBD() {
    document.getElementById("lista-bd").innerHTML = "";
    bd.transaction(function (exibe) {
        exibe.executeSql(
            "SELECT * FROM formulario",
            [],
            function (exibe, resultados) {
                const tamanho = resultados.rows.length;

                let item;
                for (let i = 0; i < tamanho; i++) {
                    item = resultados.rows.item(i);
                    document.getElementById(
                        "lista-bd"
                    ).innerHTML += `<p onclick="mostrarCartaoAltera('${item.nome}', ${item.idade}, '${item.email}', ${item.telefone}, ${item.cpf})" style="cursor: pointer;">${item.nome} - ${item.idade} anos - ${item.email} - ${item.telefone} - ${item.cpf}</p>`;
                }
            }
        );
    });
}

function alteraInfo() {
    const nomeAlteracao = document.getElementById("nome-alteracao").value;
    const idadeAlteracao = parseInt(
        document.getElementById("idade-alteracao").value
    );
    const emailAlteracao = document.getElementById("email-alteracao").value;
    const telefoneAlteracao = document
        .getElementById("telefone-alteracao")
        .value.replace(/\D/g, "");
    const cpfAlteracao = document
        .getElementById("cpf-alteracao")
        .value.replace(/[^\d]+/g, "");

    if (
        nomeAlteracao === "" ||
        isNaN(idadeAlteracao) ||
        emailAlteracao === "" ||
        isNaN(telefoneAlteracao) ||
        isNaN(cpfAlteracao)
    ) {
        alert("Informe corretamente os dados");
        return false;
    }

    bd.transaction(function (modifica) {
        modifica.executeSql(
            `UPDATE formulario SET nome="${nomeAlteracao}", idade=${idadeAlteracao}, email="${emailAlteracao}", telefone=${telefoneAlteracao}, cpf=${cpfAlteracao} WHERE nome="${nomeParaEditar}" AND idade=${idadeParaEditar} AND email="${emailParaEditar}" AND telefone=${telefoneParaEditar} AND cpf=${cpfParaEditar}`
        );
    });

    exibeBD();
    document.getElementById("nome-alteracao").value = "";
    document.getElementById("idade-alteracao").value = "";
    document.getElementById("email-alteracao").value = "";
    document.getElementById("telefone-alteracao").value = "";
    document.getElementById("cpf-alteracao").value = "";

    const alteraBD = document.getElementById("altera-bd");
    alteraBD.style.display = "none";
}

function excluirInfo() {
    bd.transaction(function (exclui) {
        exclui.executeSql(
            `DELETE FROM formulario WHERE nome="${nomeParaEditar}" AND idade=${idadeParaEditar} AND email="${emailParaEditar}" AND telefone=${telefoneParaEditar} AND cpf=${cpfParaEditar}`
        );
    });

    exibeBD();
    document.getElementById("nome-alteracao").value = "";
    document.getElementById("idade-alteracao").value = "";
    document.getElementById("email-alteracao").value = "";
    document.getElementById("telefone-alteracao").value = "";
    document.getElementById("cpf-alteracao").value = "";

    const alteraBD = document.getElementById("altera-bd");
    alteraBD.style.display = "none";
}
