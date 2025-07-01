const clock = document.getElementById("time-update");

function timer() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  clock.textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(timer, 1000);
