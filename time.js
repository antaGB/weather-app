const theHour = document.querySelector("#hour");
const theMinute = document.querySelector("#minute");
const theSecond = document.querySelector("#second");
const theDay = document.querySelector("#day");
const theDate = document.querySelector("#date");

function currentTime() {
  const time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  theHour.innerText = hour;
  theMinute.innerText = minute;
  theSecond.innerText = second;
}

function currentDate() {
  const time = new Date();
  let day = time.getDay();
  let date = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();
  day = checkDay(day);
  date = checkTime(date);
  month = checkTime(month);
  theDay.innerText = day;
  theDate.innerText = date + "." + month + "." + year;
}

function checkTime(e) {
  if (e < 10) {
    e = "0" + e;
  }
  return e;
}

function checkDay(e) {
  switch (e) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      return "undifiend";
  }
}

currentTime();
currentDate();
setInterval(currentTime, 1000);
setInterval(currentDate, 3600000);
