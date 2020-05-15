import React from 'react'

const boldStyle = {
  fontWeight: 'bold'
};

const WeatherDisplay = ({ capital, weather }) => {

  let imgURl = weather.weather_icons;

  return (
    <>
    <h2>Weather in {capital}</h2>
      <p> <span style={boldStyle}>Temperature: </span>{weather.temperature}</p>
      <img src={imgURl} alt="weather_icon" height="80" width="80"></img>
       <p> <span style={boldStyle}> Wind: </span>{weather.wind_speed} direction: {weather.wind_speed} {weather.wind_dir}</p>
  </>
  )
} 

export default WeatherDisplay
