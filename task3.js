// // Select the countdown display
const countdownElement = document.getElementById("countdown");


const targetDate = new Date("1 january,2025 00:00:00").getTime();

// Function to calculate and display the countdown
function updateCountdown() {
  const now = new Date().getTime(); // Current time
  const timeDifference = targetDate - now; // Time remaining

  if (timeDifference > 0) {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Format the countdown in DD:HH:MM:SS format
    countdownElement.innerHTML = `${padZero(days)}:${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  } else {
    // Stop the countdown and show a message
    countdownElement.innerHTML = "Happy New Year!";
    clearInterval(countdownInterval); // Clear the interval to stop the countdown once it's over
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
