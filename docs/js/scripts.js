//Reloj digital
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const weekDayElement = document.getElementById('week-day');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

//Reloj analógico
const hourHandElement = document.getElementById('hour-hand');
const minuteHandElement = document.getElementById('minute-hand');
const secondHandElement = document.getElementById('second-hand');

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Dicember'
];

const setClocks = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const today = now.getDay();
    const date = now.getDate();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
  
    hoursElement.textContent = hours < 10 ? '0' + hours : hours;
    minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
  
    weekDayElement.textContent = today === 0 ? days[6] : days[today - 1];
    dayElement.textContent = date;
    monthElement.textContent = months[currentMonth];
    yearElement.textContent = currentYear;

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHandElement.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHandElement.style.transform = `rotate(${minutesDegrees}deg)`;

  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHandElement.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(() => {
    setClocks();
}, 1000);
  
setClocks();
