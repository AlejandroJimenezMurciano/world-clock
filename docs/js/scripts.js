//Reloj digital
const hoursElement = document.getElementById('hours');
const separatorElement = document.getElementById('separator');
const minutesElement = document.getElementById('minutes');
const weekDayElement = document.getElementById('week-day');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

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
};

setInterval(() => {
    setClocks();
}, 1000);
  
setClocks();
