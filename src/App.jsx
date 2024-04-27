import { Fragment, useEffect, useState } from 'react';

import Header from './components/Header';
import Temperature from './components/Temperature';
import bgImg from './assets/Background-img.jpg';
import WeatherDetails from './components/WeatherDetails';
import Link from './components/Link';

function App() {
  const [weather, setWeather] = useState({
    id: '',
    cityName: '',
    temp: '',
    tempMax: '',
    tempMin: '',
    weatherDes: '',
    icon: '',
    clouds: '',
    feelsLike: '',
    humidity: '',
    visibility: '',
    wind: '',
    pressure: '',
  });
  const [city, setCity] = useState('Toronto');
  const [error, setError] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_APIKEY;

  useEffect(() => {
    const fetchWeatherApi = async (cityName = city) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        );

        if (response.status === 404 && !response.ok) {
          throw new Error('Invalid city');
        }

        if (response.status !== 404 && !response.ok) {
          throw new Error('Error');
        }

        const weatherData = await response.json();

        setWeather({
          id: weatherData.id,
          cityName: weatherData.name,
          temp: Math.round(weatherData.main.temp - 273),
          tempMax: Math.round(weatherData.main.temp_max - 273),
          tempMin: Math.round(weatherData.main.temp_min - 273),
          weatherDes: weatherData.weather[0].main,
          icon: weatherData.weather[0].icon,
          clouds: weatherData.clouds.all,
          feelsLike: Math.round(weatherData.main.feels_like - 273),
          humidity: weatherData.main.humidity,
          visibility: weatherData.visibility / 1000,
          wind: weatherData.wind.speed,
          pressure: weatherData.main.pressure,
        });

        console.log(`=====${weatherData}`);
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
    };

    fetchWeatherApi();
  }, [city, apiKey]);

  return (
    <Fragment>
      <div>
        <div className='flex justify-center items-center h-svh'>
          <div
            className='shadow-2xl w-full'
            style={{
              background: `url("${bgImg}")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: 1024,
              height: 576,
            }}
          >
            <Header
              cityName={weather.cityName}
              onSetCity={setCity}
              error={error}
            />
            <Temperature weather={weather} />
            <WeatherDetails weather={weather} />
            <Link />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
