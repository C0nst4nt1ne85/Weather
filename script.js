

function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        let getUrl = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
        $.ajax({
            url: getUrl
        })
            .done(function (data) {
                $("#temp").html((data.main.temp).toFixed(0));

                if (data.weather[0].id <= 232) {
                    $("#catchphrase").html(`Beware, ${data.weather[0].description} over ${data.name}`);
                    $(".container").css('background-image', 'url("https://images.unsplash.com/photo-1510300101842-d7a2ed0bde3b?auto=format&fit=crop&w=1998&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")');
                    $("#photographer").html("Sean Pierce");
                } else if (data.weather[0].id <= 321) {
                    $("#catchphrase").html(`Take your umbrella, ${data.weather[0].description} at ${data.name}`);
                    $(".container").css('background-image', 'url("https://images.unsplash.com/photo-1505404919723-002ecad81b92?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")');
                    $("#photographer").html("Philippe Tarbouriech");
                } else if (data.weather[0].id <= 531) {
                    $("#catchphrase").html(`Take your umbrella, ${data.weather[0].description} at ${data.name}`);
                    $(".container").css('background-image', 'url("https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")');
                    $("#photographer").html("Inge Maria");
                } else if (data.weather[0].id <= 622) {
                    $("#catchphrase").html(`A white day, ${data.weather[0].description} at ${data.name}`);
                    $(".container").css('background-image', 'url("https://images.unsplash.com/photo-1477601263568-180e2c6d046e?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")');
                    $("#photographer").html("Filip Bunkens");
                } else if (data.weather[0].id <= 781) {
                    $("#catchphrase").html(`Beware, ${data.weather[0].description} on atmosphere at ${data.name}`);
                    $(".container").css('background-image', 'url("https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&w=633&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")');
                    $("#photographer").html("Annie Spratt");
                } else if (data.weather[0].id == 800) {
                    $("#catchphrase").html(`Clear sky over ${data.name}. Time for a walk.`);
                    $(".container").css('background-image', 'url("https://images.unsplash.com/photo-1495333258329-fe29ba3a7b4b?auto=format&fit=crop&w=634&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D")');
                    $("#photographer").html("chrissie kremer");
                } else if (data.weather[0].id <= 804) {
                    $("#catchphrase").html(`The sun plays hide and seek with ${data.weather[0].description} at  ${data.name}`);
                    $(".container").css('background-image', 'url("https://images.unsplash.com/photo-1504722754074-60e9f87d2817?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
                    $("#photographer").html("Ryan Waring");
                } else {
                    $("#catchphrase").html(`Beware extreme weather at  ${data.name}, ${data.weather[0].description}.`);
                    $(".container").css('background-image', 'url("https://images.unsplash.com/photo-1454789476662-53eb23ba5907?auto=format&fit=crop&w=689&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
                    $("#photographer").html("NASA");
                }   
            });

    })
};

function changeScale() {
    if ($("#scale").text() == "°C") {
        $("#scale").html("°F");
        $("#temp").html(($("#temp").text() * 1.8 + 32).toFixed(0));
        
    } else {
        $("#scale").html("°C");
        $("#temp").html((($("#temp").text()-32) / 1.8).toFixed(0));
    }

};

$(document).ready(function () {

    getLocation();
    $("#scale").click(changeScale);
});

