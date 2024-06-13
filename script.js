// Function to format numbers to always have two digits
function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Function to update the date
function updateDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = formatNumber(now.getMonth() + 1); // Months are zero-based
    const day = formatNumber(now.getDate());

    // Format the date string
    const dateString = `${year}-${month}-${day}`;

    // Update the content of the div with id 'date'
    document.getElementById('date').textContent = dateString;
}

// Function to update the time
function updateTime() {
    const now = new Date();
    const hours = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());
    const seconds = formatNumber(now.getSeconds());

    // Format the time string
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Update the content of the div with id 'time'
    document.getElementById('time').textContent = timeString;
}

// Function to update both date and time
function updateDateTime() {
    updateDate();
    updateTime();
}

// Update the date and time immediately
updateDateTime();

// Set an interval to update the time every second
setInterval(updateDateTime, 1000);
