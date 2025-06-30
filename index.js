function updateTime() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
}

// Call updateTime every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);
