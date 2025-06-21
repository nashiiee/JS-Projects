// Get today's date
const now = new Date();

// Determine the next New Year's Day
let targetYear = now.getFullYear();
if (now.getMonth() > 0 || (now.getMonth() === 0 && now.getDate() > 1))  {
  targetYear += 1;
}

const newYear = `1 Jan ${targetYear}`;

function countdown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000)

  if (totalSeconds < 0) {
    document.getElementById('countdown').textContent = "🎉 Happy New Year! 🎉";
    return;
  }

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds / 3600) % 24)
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('mins').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

countdown();
setInterval(countdown, 1000);