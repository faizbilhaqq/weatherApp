
let weather = {
    // apikey: "e064c8c61c0b80a9f7c7cbd4da2e9ea2",
    fetchWeather: function() {
        fetch(
            "https://data.covid19.go.id/public/api/prov.json"
        )
        .then((res) => 
            res.json()
        )
        .then((data) => this.displayWeather(data))
    }, 
    displayWeather: function (city, data) {

        var kota = city;
        var namakota = kota.split(' ').join('_');
        // list kode provinsi
        const jakarta = 0
        const jawa_barat = 1
        




        const { jenengkota } = data.list_data[namakota].key;
        const { jumlah_kasus } = data.list_data[namakota].jumlah_kasus;
        // const { temp, humidity } = data.main;
        // const { speed } = data.wind;
        // console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "jumlah kasus di" + jenengkota;
        // document.querySelector(".icon").src =
        // "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = jumlah_kasus;
        // document.querySelector(".temp").innerText = temp + "°C";
        // document.querySelector(".humidity").innerText =
        // "Humidity: " + humidity + "%";
        // document.querySelector(".wind").innerText =
        // "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";

    },

    search: function () {
        this.displayWeather(document.querySelector(".search-bar").value, data);
      }

};


document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
});


weather.displayWeather("jakarta", data);