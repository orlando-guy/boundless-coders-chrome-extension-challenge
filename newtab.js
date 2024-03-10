console.log('in the script')

function updateTimeAndDate() {
    const now = new Date();

    // Get the current time
    const timeString = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    })

    // Get the current date
    const dateString = now.toLocaleDateString([], { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const timeContainer = document.getElementById('time')
    const dateContainer = document.getElementById('date')
    const secDiv = document.querySelector('div + div')

    if (timeContainer && dateContainer && secDiv) {
        timeContainer.textContent = timeString
        dateContainer.textContent = dateString
        // secDiv.textContent += "Ho "
    }
}

// Update time and date every second
setInterval(updateTimeAndDate, 1000)

// Initial update
updateTimeAndDate()