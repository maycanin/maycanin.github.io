let nomeParaEditar;
let idadeParaEditar;
let emailParaEditar;
let telefoneParaEditar;
let cpfParaEditar;

function mostrarCartaoAltera(nome, idade, email, telefone, cpf) {
    document.getElementById("nome-alteracao").value = nome;
    nomeParaEditar = nome;

    document.getElementById("idade-alteracao").value = idade;
    idadeParaEditar = parseInt(idade);

    document.getElementById("email-alteracao").value = email;
    emailParaEditar = email;

    document.getElementById("telefone-alteracao").value = telefone;
    telefoneParaEditar = telefone;

    document.getElementById("cpf-alteracao").value = cpf;
    cpfParaEditar = cpf;

    const alteraBD = document.getElementById("altera-bd");
    alteraBD.style.display = "flex";
}

const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
};

const handleCpf = (event) => {
    let input = event.target;
    input.value = cpfMask(input.value);
};

const cpfMask = (cpf) => {
    if (!cpf) return "";

    cpf = cpf.replace(/[^\d]+/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
    // value = value.replace(/\D/g, "");
    // value = value.replace(/(\d{2})(\d)/, "($1) $2");
    // value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    // return value;
};

// function verificarCPF(cpf) {
//     // Remove os pontos/traço da expressão regular, caso exista
//     cpf = cpf.replace(/[^\d]+/g, "");
//     if (cpf == "") return false;

//     // Elimina CPFs invalidos conhecidos
//     if (
//         cpf.length != 11 ||
//         cpf == "00000000000" ||
//         cpf == "11111111111" ||
//         cpf == "22222222222" ||
//         cpf == "33333333333" ||
//         cpf == "44444444444" ||
//         cpf == "55555555555" ||
//         cpf == "66666666666" ||
//         cpf == "77777777777" ||
//         cpf == "88888888888" ||
//         cpf == "99999999999"
//     )
//         return false;

//     // Valida 1o digito
//     add = 0;

//     for (i = 0; i < 9; i++) {
//         add += parseInt(cpf.charAt(i)) * (10 - i);
//     }
//     rev = 11 - (add % 11);
//     if (rev == 10 || rev == 11) {
//         rev = 0;
//     }

//     if (rev != parseInt(cpf.charAt(9))) {
//         return false;
//     }

//     // Valida 2o digito
//     add = 0;
//     for (i = 0; i < 10; i++) {
//         add += parseInt(cpf.charAt(i)) * (11 - i);
//     }
//     rev = 11 - (add % 11);
//     if (rev == 10 || rev == 11) {
//         rev = 0;
//     }
//     if (rev != parseInt(cpf.charAt(10))) {
//         return false;
//     }
//     return true;
// }

// function converteParaFahrenheit() {
//     const temperaturaCelsius = parseFloat(
//         document.getElementById("celsius").value
//     );

//     const temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;
//     document.getElementById("resultado-fahrenheit").value =
//         temperaturaFahrenheit.toFixed(2) + "º Fahrenheit";
// }
