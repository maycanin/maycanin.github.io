function converteParaFahrenheit() {
    const temperaturaCelsius = parseFloat(document.getElementById("celsius").value);
    
    const temperaturaFahrenheit = temperaturaCelsius * 1.8 + 32;
    document.getElementById('resultado-fahrenheit').value = temperaturaFahrenheit.toFixed(2) + 'º Fahrenheit';
}