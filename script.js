function runClock() {
  let time = new Date();
  let day = time.getDay();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let session = "AM";

  session = hr >= 12 ? "PM" : "AM";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.querySelector(".hrs").innerHTML = hr;
  document.querySelector(".min").innerHTML = min;
  document.querySelector(".sec").innerHTML = sec;
  document.querySelector(".am_pm").innerHTML = session;

  let today = document.querySelector(`.weekdays :nth-child(${day + 1})`);
  today.classList.add("active");
}

setInterval(runClock, 1000);
