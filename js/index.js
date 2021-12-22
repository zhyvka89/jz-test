function countdownTimer() {

  const validMinutes = new Date().getTime() + 15 * 60 * 1000;
  
  const timer = setInterval(() => {
    const currentTime = new Date().getTime();
    const time = validMinutes - currentTime;

    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = minutes + ":" + seconds;

    if (time < 0) {
      clearInterval(timer);
      document.getElementById('timer').innerHTML = "expired";
    }
  }, 1000);

}

countdownTimer();