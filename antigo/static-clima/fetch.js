navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude
    let long = pos.coords.longitude
    document.querySelector(".carregando").style.display = 'none';
    document.querySelector(".content_app").style.display = 'block';
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=5796adfb5ba187816aed16c0d04a3bfd&lang=pt`)
    .then(response => response.json())
    .then(api => {
        document.querySelector(".cidade").innerHTML = `${api.name}`;
        document.querySelector(".temperatura p").innerHTML = `${api.main.temp} ºC`;
        document.querySelector(".feels_like .info").innerHTML = `Sensação Témica: ${api.main.feels_like} ºC`;
        document.querySelector(".humidity .info").innerHTML = `Umidade do ar: ${api.main.humidity}%`;

        document.querySelector(".wind .info").innerHTML = `Velocidade do vento: ${String(api.wind.speed * 3.6).substr(0, 4)}Km/h`;

        document.querySelector(".weather .info").innerHTML = `${api.weather[0].description}`;
    });
});


`

// adicionar funcionalidade de img para dias diferentes de 'ensolarado'

icons/ceu-nublado.png
<a href="https://www.flaticon.com/br/icones-gratis/clima" title="clima ícones">Clima ícones criados por kosonicon - Flaticon</a>

icons/dia-chuvoso.png
<div> Ícones feitos por <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com'</a></div>

icons/chuva-sem-sol.png
<a href="https://www.flaticon.com/br/icones-gratis/chuvoso" title="chuvoso ícones">Chuvoso ícones criados por berkahicon - Flaticon</a>

`