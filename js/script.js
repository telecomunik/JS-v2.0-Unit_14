fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=e8b3f256e03a7bd1fceef939387e3620')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
    });