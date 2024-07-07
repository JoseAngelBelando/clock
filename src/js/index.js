// El styles lo importamos aquí, ya se carga después al compilar todo
// Localizamos los id
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const dayOfWeekElement = document.getElementById('day-of-week');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const hoursHandElement = document.getElementById('hour-hand');
const minutesHandElement = document.getElementById('minute-hand');
const secondsHandElement = document.getElementById('second-hand');
// creamos una aray con los dias
const days = ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// creamos un array con los mese
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
  'December'
];
// definimos una funcion que agrega un 0 delante de un número si es menor a 10.
const fixTime = number => (number < 10 ? '0' + number : number);
// las funciones de "getDayOfWeek y getMonth" que devuelven el nombre del día y del mes.
const getDayOfWeek = today => days[today];
const getMonth = currentMonth => months[currentMonth];
// la funcion setClocks se encarga de obtener la fecha y hora actual, actualizar los elementos del reloj en el DOM con esta información, y rotar las manecillas del reloj según la hora, minutos y segundos actuales.
const setClocks = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const today = now.getDay();
  const date = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  hoursElement.textContent = fixTime(hours);
  minutesElement.textContent = fixTime(minutes);

  dayOfWeekElement.textContent = getDayOfWeek(today);
  dayElement.textContent = date;
  monthElement.textContent = getMonth(currentMonth);
  yearElement.textContent = currentYear;

  const secondsDegrees = seconds * 6;
  secondsHandElement.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = minutes * 6 + seconds / 10;
  minutesHandElement.style.transform = `rotate(${minutesDegrees}deg)`;

  const hourDegrees = hours * 30 + minutes / 2;
  hoursHandElement.style.transform = `rotate(${hourDegrees}deg)`;
};
// setInterval se utilaza para  llamar a la función
// setClocks  para mostrar la hora actual al cargar la página.
setInterval(() => {
  setClocks();
}, 1000);

setClocks();
