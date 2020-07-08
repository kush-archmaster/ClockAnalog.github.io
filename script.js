const HRhand = document.querySelector("#hour");
const MINhand = document.querySelector("#minute");
const SEChand = document.querySelector("#second");

function runclock() {
  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  console.log("Hours:" + hr + " minute:" + min + " sec:" + sec);

  let secpos = sec * (360 / 60);
  let minpos = (min * 360) / 60 + (sec * (360 / 60)) / 60;
  let hrpos = (hr * 360) / 12 + (min * (360 / 60)) / 12;

  SEChand.style.transform = "rotate(" + secpos + "deg)";
  MINhand.style.transform = "rotate(" + minpos + "deg)";
  HRhand.style.transform = "rotate(" + hrpos + "deg)";
}

setInterval(runclock, 1000);

