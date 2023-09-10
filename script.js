function getweather(a) {

    $URL = "https://api.openweathermap.org/data/2.5/weather?q=" + a + "&appid=4baa298ea0cc0c7bcb2f8de5d304cf50&units=metric";

    $.getJSON($URL, function( data ) {

        weather_desc = JSON.stringify(data.weather[0].main);
        weather_temp = JSON.stringify(data.main.temp);

        weather_tmin = JSON.stringify(data.main.temp_min);
            weather_tmin = parseFloat(weather_tmin-2).toFixed(0);
        weather_tmax = JSON.stringify(data.main.temp_max);
            weather_tmax = parseFloat(weather_tmax+2).toFixed(0);
        
        weather_humi = JSON.stringify(data.main.humidity);
        weather_pres = JSON.stringify(data.main.pressure);
        weather_feli = JSON.stringify(data.main.feels_like);

        sunrise = JSON.stringify(data.sys.sunrise);
            sunrise = new Date(sunrise*1000);
                sunrise = sunrise.toString();
                    sunrise = sunrise.slice(15, 21);
        sunset = JSON.stringify(data.sys.sunset);
            sunset = new Date(sunset*1000);
                sunset = sunset.toString();
                    sunset = sunset.slice(15, 21);

        var iconcode = data.weather[0].icon;

        hr.style.display = "";
        hr2.style.display = "";
        icon.style.display = "";
        separe.style.display = "";
        separe2.style.display = "";

        $('#city').text(a);

        $('#weather_tmin').text(Math.round(weather_tmin * 2) / 2 + "°");
        $('#weather_tmax').text(" " + Math.round(weather_tmax * 2) / 2 + "°");
        
        $('#weather_temp').text(Math.round(weather_temp * 2) / 2 + "°");
        
        weather_desc = weather_desc.slice(1, weather_desc.length - 1)
        $('#weather_desc').text(weather_desc);
        
        $('#weather_hum').html('Humidity: <span style="font-family: ' + 'Comfortaa' + ', cursive;color:black;">' + weather_humi + '%</span>');
        $('#weather_hum').show();

        $('#weather_pres').html('Pressure: <span style="font-family: ' + 'Comfortaa' + ', cursive;color:black;">' + weather_pres + 'hPa</span>');
        $('#weather_pres').show();

        $('#weather_feli').html('Feels Like: <span style="font-family: ' + 'Comfortaa' + ', cursive;color:black;">' + Math.round(weather_temp * 2) / 2 + '°</span>');
        $('#weather_feli').show();

        $('#sunrise').html('Sunrise: <span style="color:black;">' + sunrise + '</span>');
        $('#sunrise').show();

        $('#sunset').html('Sunset: <span style="color:black;">' + sunset + '</span>');
        $('#sunset').show();

        var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
        
        var iconfield = document.getElementById('wicon');
        if(iconcode == "01d")
            iconfield.classList.add("sunnyanimation");
        else
            iconfield.classList.remove("sunnyanimation");
        $('#wicon').attr('src', iconurl);

        searchbox = document.getElementById("a").value = "";
    });
}
