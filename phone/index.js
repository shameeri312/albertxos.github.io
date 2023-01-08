function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
}

showTime();
setInterval(showTime, 1000);

// -----date----------------------------------

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var month;
var day;
if (mm == 1) {
    month = "January";
}
if (mm == 2) {
    month = "February";
}
if (mm == 3) {
    month = "March";
}
if (mm == 4) {
    month = "April";
}
if (mm == 5) {
    month = "May";
}
if (mm == 6) {
    month = "June";
}
if (mm == 7) {
    month = "July";
}
if (mm == 8) {
    month = "August";
}
if (mm == 9) {
    month = "September";
}
if (mm == 10) {
    month = "October";
}
if (mm == 11) {
    month = "November";
}
if (mm == 12) {
    month = "December";
}
if (dd == 1) {
    day = "Sunday";
}
if (dd == 2) {
    day = "Monday";
}
if (dd == 3) {
    day = "Tuesday";
}
if (dd == 4) {
    day = "Wednesday";
}
if (dd == 5) {
    day = "Thursday";
}
if (dd == 6) {
    day = "Friday";
}
if (dd == 7) {
    day = "Saturday";
}
if (dd == 8) {
    day = "Sunday";
}
if (dd == 9) {
    day = "Monday";
}
if (dd == 10) {
    day = "Tuesday";
}
if (dd == 11) {
    day = "Wednesday";
}
if (dd == 12) {
    day = "Thursday";
}
if (dd == 13) {
    day = "Friday";
}
if (dd == 14) {
    day = "Saturday";
}
if (dd == 15) {
    day = "Sunday";
}
if (dd == 16) {
    day = "Monday";
}
if (dd == 17) {
    day = "Tuesday";
}
if (dd == 18) {
    day = "Wednesday";
}
if (dd == 19) {
    day = "Thursday";
}
if (dd == 20) {
    day = "Friday";
}
if (dd == 21) {
    day = "Saturday";
}
if (dd == 22) {
    day = "Sunday";
}
if (dd == 23) {
    day = "Monday";
}
if (dd == 24) {
    day = "Tuesday";
}
if (dd == 25) {
    day = "Wednesday";
}
if (dd == 26) {
    day = "Thursday";
}
if (dd == 27) {
    day = "Friday";
}
if (dd == 28) {
    day = "Saturday";
}
if (dd == 29) {
    day = "Sunday";
}
if (dd == 30) {
    day = "Monday";
}

today = day + ' ' + dd + ' ' + month;
document.getElementById("date").innerText=today;
