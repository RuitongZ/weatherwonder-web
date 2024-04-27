import cloud from '../assets/icon-cloudy.png';
import rain from '../assets/icon-rain.png';
import humidity from '../assets/icon-humidity.png';
import eye from '../assets/icon-eye.png';
import wind from '../assets/icon-wind.png';
import feelsLike from '../assets/icon-temperature.png';

const containerClasses = 'flex justify-between mx-12 gap-2 mt-[-32px] md:';
const smContainerClasses =
  'flex flex-col justify-between bg-slate-100 bg-opacity-20 text-white rounded-xl h-36 w-1/6';
const dataClasses = 'text-4xl font-normal';

const WeatherDetails = (props) => {
  return (
    <>
      <div className={containerClasses}>
        <div className={smContainerClasses}>
          <div className='flex mt-4 ml-4 opacity-70'>
            <img src={cloud} alt='icon' className='w-5 h-5' />
            <p className='text-sm pl-1 uppercase'>Clouds</p>
          </div>
          <div className='mb-2 ml-4'>
            <p className={dataClasses}>{`${props.weather.clouds}%`}</p>
          </div>
        </div>

        <div className={smContainerClasses}>
          <div className='flex mt-4 ml-4 opacity-70'>
            <img src={humidity} alt='icon' className='w-5 h-5' />
            <p className='text-sm pl-1 uppercase'>Humidity</p>
          </div>
          <div className='mb-2 ml-4'>
            <p className={dataClasses}>{`${props.weather.humidity}%`}</p>
          </div>
        </div>

        <div className={smContainerClasses}>
          <div className='flex mt-4 ml-4 opacity-70'>
            <img src={eye} alt='icon' className='w-5 h-5' />
            <p className='text-sm pl-1 uppercase'>Visiability</p>
          </div>
          <div className='mb-2 ml-4 flex items-baseline'>
            <p className={dataClasses}>{props.weather.visibility}</p>
            <p className='text-base'>km</p>
          </div>
        </div>

        <div className={smContainerClasses}>
          <div className='flex mt-4 ml-4 opacity-70'>
            <img src={feelsLike} alt='icon' className='w-5 h-5' />
            <p className='text-sm pl-1 uppercase'>Feels like</p>
          </div>
          <div className='mb-2 ml-4'>
            <p className={dataClasses}>{`${props.weather.feelsLike}°`}</p>
          </div>
        </div>

        <div className={smContainerClasses}>
          <div className='flex mt-4 ml-4 opacity-70'>
            <img src={wind} alt='icon' className='w-5 h-5' />
            <p className='text-sm pl-1 uppercase'>Wind</p>
          </div>
          <div className='mb-2 ml-4 flex items-baseline'>
            <p className={dataClasses}>{props.weather.wind}</p>
            <p className='text-base'>km/s</p>
          </div>
        </div>

        <div className={smContainerClasses}>
          <div className='flex mt-4 ml-4 opacity-70'>
            <img src={feelsLike} alt='icon' className='w-5 h-5' />
            <p className='text-sm pl-1 uppercase'>Pressure</p>
          </div>
          <div className='mb-2 ml-4 flex items-baseline'>
            <p className={dataClasses}>{props.weather.pressure}</p>
            <p className='text-base'>hPa</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
