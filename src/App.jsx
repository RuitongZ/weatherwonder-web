import { Fragment, useEffect, useState } from 'react';

import clearVideo from './assets/videos/clear.mp4';
import drizzleVideo from './assets/videos/drizzle.mp4';
import rainVideo from './assets/videos/rain.mp4';
import thunderstorm from './assets/videos/thunderstorm.mp4';
import cloudsVideo from './assets/videos/clouds.mp4';
import mistVideo from './assets/videos/mist.mp4';
import tornadoVideo from './assets/videos/tornado.mp4';
import dustVideo from './assets/videos/dust.mp4';
import snowVideo from './assets/videos/snow.mp4';

import Header from './components/Header';
import Temperature from './components/Temperature';
import WeatherDetails from './components/WeatherDetails';
import Link from './components/Link';

function App() {
  const [weather, setWeather] = useState({
    id: '',
    cityName: 'Toronto',
    timezone: '',
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
  const [videoBg, setVideoBg] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const apiKey = import.meta.env.VITE_WEATHER_APIKEY;

  useEffect(() => {
    const fetchWeatherApi = async (cityName = city) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        );

        if (response.status === 404 && !response.ok) {
          throw new Error('Invalid city name!');
        }

        if (response.status === 400 && !response.ok) {
          throw new Error('Please enter city name!');
        }

        const weatherData = await response.json();

        setWeather({
          id: weatherData.id,
          cityName: weatherData.name,
          timezone: weatherData.timezone,
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

        console.log(weatherData);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      }
    };

    fetchWeatherApi();
  }, [city, apiKey]);

  const inputFocusHandler = () => {
    setError(false);
  };

  //Set video background
  const weatherCondition = weather.weatherDes;
  useEffect(() => {
    const atmosphere = ['Mist', 'Haze', 'Fog'];
    const atmosphere2 = ['Squall', 'Tornado'];
    const atmosphere3 = ['Smoke', 'Dust', 'Sand', 'Ash'];

    if (weatherCondition && weatherCondition.includes('Clear')) {
      setVideoBg(clearVideo);
    }

    if (weatherCondition && weatherCondition.includes('Clouds')) {
      setVideoBg(cloudsVideo);
    }

    if (weatherCondition && weatherCondition.includes('Drizzle')) {
      setVideoBg(drizzleVideo);
    }

    if (weatherCondition && weatherCondition.includes('Rain')) {
      setVideoBg(rainVideo);
    }

    if (weatherCondition && weatherCondition.includes('Thunderstorm')) {
      setVideoBg(thunderstorm);
    }

    if (
      weatherCondition &&
      atmosphere.some((item) => weatherCondition.includes(item))
    ) {
      setVideoBg(mistVideo);
    }

    if (
      weatherCondition &&
      atmosphere2.some((item) => weatherCondition.includes(item))
    ) {
      setVideoBg(tornadoVideo);
    }

    if (
      weatherCondition &&
      atmosphere3.some((item) => weatherCondition.includes(item))
    ) {
      setVideoBg(dustVideo);
    }

    if (weatherCondition && weatherCondition.includes('Snow')) {
      setVideoBg(snowVideo);
    }
  }, [weatherCondition]);

  return (
    <Fragment>
      <div className='flex md:h-dvh lg:h-svh lg:justify-center lg:items-center'>
        <video
          autoPlay
          muted
          loop
          id='myVideo'
          src={videoBg}
          type='video/mp4'
          className='fixed z-[-1] object-cover h-full md:min-w-[1024px] md:min-h-[576px] md:object-fill lg:max-w-[1280px] lg:max-h-[576px] lg:drop-shadow-2xl lg:object-contain'
        />

        <div className='w-full lg:w-[1040px] lg:h-[565px] pb-[20px]'>
          <div className='flex flex-col'>
            <Header
              cityName={weather.cityName}
              timezone={weather.timezone}
              onSetCity={setCity}
              error={error}
              errorMessage={errorMessage}
              onFocus={inputFocusHandler}
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
