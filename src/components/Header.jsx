/* eslint-disable react/prop-types */
import SearchBar from './SearchBar';

const Header = ({ cityName, onSetCity, error }) => {
  const today = new Date();
  const formattedDate = formatDate(today);

  function formatDate(dateObject) {
    const parts = {
      hour: dateObject.getHours() % 12 || 12,
      minute: dateObject.getMinutes().toString().padStart(2, '0'),
      amOrPm: dateObject.getHours() < 12 ? 'AM' : 'PM',
      day: dateObject.getDay(),
      date: dateObject.getDate(),
      month: dateObject.getMonth(),
      year: dateObject.getFullYear(),
    };

    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const monthName = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    return `${parts.hour}:${parts.minute} ${parts.amOrPm}, ${
      dayName[parts.day]
    }, ${parts.date}, ${monthName[parts.month]}, ${parts.year}`;
  }

  return (
    <div className='flex justify-between mt-8 mx-12'>
      <div className='flex flex-col justify-between items-start'>
        <p className='text-base text-white'>{formattedDate}</p>
        <p className='text-5xl font-medium text-white mt-[-6px]'>{cityName}</p>
      </div>
      <SearchBar onSetCity={onSetCity} error={error} />
    </div>
  );
};

export default Header;
