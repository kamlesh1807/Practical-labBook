// selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

// event listener
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// functions
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let todayDate = today.toDateString();

  // am pm
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hrs format
  // eg when 24%12
  hour = hour % 12 || 12;

  // output
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)}<span> </span>${amPm}`;

  date.innerHTML = `${todayDate}`;
  setTimeout(showTime, 1000);

  function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }
}
function setGreeting() {
  let today = new Date();
  let hour = today.getHours(); //17

  if (hour < 12) {
    document.body.style.backgroundImage = 'url("../img/wood.jpg")';
    greeting.innerHTML = "Good Morning";
    time.style.fontFamily = "cursive";
    document.body.style.color = "red";
    time.style.color = "red";
  } else if (hour < 18) {
    document.body.style.backgroundImage = 'url("../img/wood.jpg")';
    greeting.innerHTML = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = 'url("../img/Nature-Images-For-Desktop.jpg")';
    greeting.innerHTML = "Good Evening";
    document.body.style.color = "white";
  }
}

function getName() {
  if (localStorage.getItem("myData") === null) {
    name.innerHTML = "[Enter Name]";
  } else {
    name.innerHTML = localStorage.getItem("myData");
  }
}
function setName(e) {
  // which event work
  // for which key
  if (e.type === "keypress") {
    // for enter key press
    if (e.keyCode == 13) {
      localStorage.setItem("myData", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
  }
}

getName();
showTime();
setGreeting();