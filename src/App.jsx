import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=336ce8349801dd00af9eb136764fc400`
        )
        .then((res) => {
          setWeather({
            city: res.data.name,
            country: res.data.sys.country,
            temperature: res.data.main.temp - 273.15,
            description: res.data.weather[0].description,
            wind: res.data.wind.speed,
            clouds: res.data.clouds.all,
            pressure: res.data.main.pressure,
            icon: res.data.weather[0].icon,
          });
        });
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);



  return (
    <div className="app">
      <Card
        city={weather.city}
        country={weather.country}
        temperature={weather.temperature}
        description={weather.description}
        wind={weather.wind}
        clouds={weather.clouds}
        presure={weather.pressure}
        icon={weather.icon}
      />
    </div>
  );
};

export default App;
