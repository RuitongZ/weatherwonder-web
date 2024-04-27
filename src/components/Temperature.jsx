const Temperature = (props) => {
  const weatherIcon = props.weather.icon
    ? `http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`
    : null;

  return (
    <div className='flex items-center mx-12 pt-[98px] text-white'>
      <div>
        <p className='font-medium text-[140px]'>{`${props.weather.temp}°`}</p>
      </div>

      <div className='flex flex-col'>
        <div className='w-32 flex justify-end '>
          <img src={weatherIcon} alt='Rainy icon' className='w-20 h-20' />
        </div>
        <div className='mt-[-18px]'>
          <p className='font-normal text-xl'>{props.weather.weatherDes}</p>
          <p className='text-sm'>
            H:{`${props.weather.tempMax}°`} L:{`${props.weather.tempMin}°`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
