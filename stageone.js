function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; // Extracting time part from UTC string
    const utcDay = now.toLocaleDateString('en-GB', { weekday: 'long', timeZone: 'UTC' });

    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const dayElement = document.querySelector('[data-testid="currentDay"]');

    timeElement.textContent = `Current Time in UTC: ${utcTime}`;
    dayElement.textContent = `Current Day of the Week: ${utcDay}`;
}

// Call the function once to initialize the values
updateTimeAndDay();

// Update the time and day every second
setInterval(updateTimeAndDay, 1000);