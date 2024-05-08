/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import moment from 'moment-timezone';

const Header = ({
  cityName,
  timezone,
  onSetCity,
  error,
  errorMessage,
  onFocus,
}) => {
  //const nowInLocalTime = Date.now() + 1000 * (timezone / 3600);
  //const millitime = new Date(nowInLocalTime);
  // console.log(
  //   `city: ${cityName}, time zone: ${timezone}, now: ${nowInLocalTime}, milli: ${millitime}`
  // );
  // const today = new Date();
  //const formattedDate = formatDate(millitime).toLocaleString();

  // function formatDate(millitime) {
  //   const parts = {
  //     hour: millitime.getHours() % 12 || 12,
  //     minute: millitime.getMinutes().toString().padStart(2, '0'),
  //     amOrPm: millitime.getHours() < 12 ? 'AM' : 'PM',
  //     day: millitime.getDay(),
  //     date: millitime.getDate(),
  //     month: millitime.getMonth(),
  //     year: millitime.getFullYear(),
  //   };

  //   const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  //   const monthName = [
  //     'Jan',
  //     'Feb',
  //     'Mar',
  //     'Apr',
  //     'May',
  //     'Jun',
  //     'Jul',
  //     'Aug',
  //     'Sep',
  //     'Oct',
  //     'Nov',
  //     'Dec',
  //   ];

  //   return `${parts.hour}:${parts.minute} ${parts.amOrPm}, ${
  //     dayName[parts.day]
  //   }, ${parts.date}, ${monthName[parts.month]}, ${parts.year}`;
  // }
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    if (timezone) {
      const unixTime = moment().unix();
      const timezoneOffset = timezone;
      const localTimestamp = moment
        .unix(unixTime)
        .utcOffset(timezoneOffset / 60);
      const localTimeString = localTimestamp.format(
        'hh:mm A. ddd. MMMM. DD. YYYY'
      );

      setLocalTime(localTimeString);

      console.log('***', localTimeString);
    }
  }, [timezone]);

  return (
    <div className='flex flex-col-reverse items-center mt-8 sm:flex-row sm:justify-between sm:items-start md:flex-row md:justify-between md:items-start lg:flex-row lg:justify-between lg:items-start sm:mx-12 md:mx-12 lg:mx-12'>
      <div className='flex flex-col items-center pt-[12px] sm:mt-0 sm:pt-0 sm:justify-between sm:items-start md:mt-0 md:pt-0 md:justify-between md:items-start lg:justify-between lg:items-start lg:mt-0 lg:pt-0'>
        <p className='text-base text-white'>{localTime}</p>
        <p className='text-5xl font-medium text-white'>{cityName}</p>
      </div>
      <SearchBar
        onSetCity={onSetCity}
        error={error}
        errorMessage={errorMessage}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Header;
