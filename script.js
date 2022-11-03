function converteParaFahrenheit() {
    const temperaturaCelsius = parseFloat(document.getElementById("celsius").value);
    
    const temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;
    document.getElementById('resultado-fahrenheit').innerHTML = 'O resultado é ' + temperaturaFahrenheit.toFixed(2) + 'º Fahrenheit'
}