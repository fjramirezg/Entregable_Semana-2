import React, { useEffect, useState } from "react";

const Card = ({
  city,
  country,
  temperature,
  description,
  wind,
  clouds,
  presure,
  icon,
}) => {
  const [grades, setGrades] = useState([0, "C°"]);

  useEffect(() => {
    setGrades([Math.round(temperature * 100) / 100, "C°"]);
  }, [temperature]);

  const changeTem = () => {
    let nuevoValor = 0;
    if (grades[1] === "C°") {
      nuevoValor = grades[0] + 32;
      setGrades([nuevoValor, "F°"]);
    } else {
      nuevoValor = grades[0] - 32;
      setGrades([nuevoValor, "C°"]);
    }
  };

  return (
    <div className="card">
      <h1>Weather App</h1>
      <h2>
        {city} {","} {country}
      </h2>
      <ul className="card">
        <li className="temp">{grades[0] + grades[1]}</li>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <li>
          {`"`}
          {description}
          {`"`}
        </li>
        <li>Wind speed: {wind} m/s</li>
        <li>Clouds: {clouds} %</li>
        <li>Pressure: {presure} hPa</li>
      </ul>

      <button className="btn-ct" onClick={changeTem}>
        Change Temp
      </button>
    </div>
  );
};

export default Card;
