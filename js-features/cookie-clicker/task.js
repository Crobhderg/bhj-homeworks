const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clicks = 0;
let isBig = true;

cookie.onclick = function () {
  clicks++;
  counter.textContent = clicks;

  if (isBig) {
    cookie.width = 180;
  } else {
    cookie.width = 200;
  }

  isBig = !isBig;
};