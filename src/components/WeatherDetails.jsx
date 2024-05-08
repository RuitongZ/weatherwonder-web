import cloud from '../assets/icons/icon-cloudy.png';
import humidity from '../assets/icons/icon-humidity.png';
import eye from '../assets/icons/icon-eye.png';
import wind from '../assets/icons/icon-wind.png';
import feelsLike from '../assets/icons/icon-temperature.png';

const containerClasses =
  'grid grid-cols-2 sm:grid-cols-3 mx-12 gap-2 mt-[-32px] md:flex md:flex-row md:justify-between lg:flex lg:flex-row';
const smContainerClasses =
  'flex flex-col justify-between bg-slate-100 bg-opacity-20 text-white rounded-xl h-36 md:basis-1/6 lg:basis-1/6';
const titleDivClasses = 'flex mt-4 mx-4 opacity-70';
const titleClasses = 'text-sm pl-1 uppercase';
const dataClasses = 'text-4xl font-normal';

const WeatherDetails = (props) => {
  return (
    <>
      <div className={containerClasses}>
        <div className={smContainerClasses}>
          <div className={titleDivClasses}>
            <img src={cloud} alt='icon' className='w-5 h-5' />
            <p className={titleClasses}>Clouds</p>
          </div>
          <div className='mb-2 ml-4'>
            <p className={dataClasses}>{`${props.weather.clouds}%`}</p>
          </div>
        </div>

        <div className={smContainerClasses}>
          <div className={titleDivClasses}>
            <img src={humidity} alt='icon' className='w-5 h-5' />
            <p className={titleClasses}>Humidity</p>
          </div>
          <div className='mb-2 ml-4'>
            <p className={dataClasses}>{`${props.weather.humidity}%`}</p>
          </div>
        </div>

        <div className={smContainerClasses}>
          <div className={titleDivClasses}>
            <img src={eye} alt='icon' className='w-5 h-5' />
            <p className={titleClasses}>Visiability</p>
          </div>
          <div className='mb-2 ml-4 flex items-baseline'>
            <p className={dataClasses}>{props.weather.visibility}</p>
            <p className='text-base'>km</p>
          </div>
        </div>

        <div className={smContainerClasses}>
          <div className={titleDivClasses}>
            <img src={feelsLike} alt='icon' className='w-5 h-5' />
            <p className={titleClasses}>Feels like</p>
          </div>
          <div className='mb-2 ml-4'>
            <p className={dataClasses}>{`${props.weather.feelsLike}°`}</p>
          </div>
        </div>

        <div className={smContainerClasses}>
          <div className={titleDivClasses}>
            <img src={wind} alt='icon' className='w-5 h-5' />
            <p className={titleClasses}>Wind</p>
          </div>
          <div className='mb-2 ml-4 flex items-baseline'>
            <p className={dataClasses}>{props.weather.wind}</p>
            <p className='text-base'>km/s</p>
          </div>
        </div>

        <div className={smContainerClasses}>
          <div className={titleDivClasses}>
            <img src={feelsLike} alt='icon' className='w-5 h-5' />
            <p className={titleClasses}>Pressure</p>
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
