let nomeParaEditar;
let idadeParaEditar;

function converteParaFahrenheit() {
    const temperaturaCelsius = parseFloat(document.getElementById("celsius").value);
    
    const temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;
    document.getElementById('resultado-fahrenheit').value = temperaturaFahrenheit.toFixed(2) + 'º Fahrenheit';
}


function mostrarCartaoAltera(nome, idade) {
    document.getElementById("nome-alteracao").value = nome;
    nomeParaEditar = nome;
    
    document.getElementById("idade-alteracao").value = idade;
    idadeParaEditar = parseInt(idade);
    
    const alteraBD = document.getElementById('altera-bd');
    alteraBD.style.display = "flex";
}