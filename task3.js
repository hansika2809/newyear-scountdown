
const countdownElement = document.getElementById("countdown");


const targetDate = new Date("1 january,2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime(); // Current time
  const timeDifference = targetDate - now; // Time remaining

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    
    countdownElement.innerHTML = `${padZero(days)}:${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  } else {
  
    countdownElement.innerHTML = url("hansika.html");
    clearInterval(countdownInterval); 
  }
}

// Function to add leading zero if the number is less than 10
function padZero(num) {
  return num < 10 ? "0" + num : num;
}

// Immediately update the timer once on page load
updateCountdown();

// Then update every second
const countdownInterval = setInterval(updateCountdown, 1000);
