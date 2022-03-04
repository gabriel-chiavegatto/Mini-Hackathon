
let lat;
let lon;
let geo;
let promessa;
localizaçãoDoUsuario();

function localizaçãoDoUsuario() {
    if (navigator.geolocation) {
        console.log("foi geo");
        geo = navigator.geolocation.getCurrentPosition(definePosicao);
    } else { 
        console.log("deu ruim na geolocation"); 
        // const geoNegada = document.querySelector(".localizacao-nao-permitida");
        // geoNegada.innerHTML += `
        // <h2>O acesso a sua localização não foi permitido, por favor informe manualmente</h2>
        // <label>Latitude:</label>
        // <input type="text"><br><br>
        // <label>Longitude:</label>
        // <input type="text"><br>`;
    }
}
function definePosicao(position) {
    console.log(position);
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log("atualizou lat e lon");
    console.log(lat);
    console.log(lon);
    acionarAPI();
}

function acionarAPI(){
    promessa = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=84d815e9ba727eac1fcacc766fec0187`);
    promessa.then(processarResposta);
    promessa.catch(deuRuimNaPromisse);
}

function processarResposta(resposta) {
    console.log("foi promisse api principal");
    console.log(resposta);
}
function deuRuimNaPromisse(resposta) {
    console.log("deu ruim no get");
    console.log(resposta);
}
