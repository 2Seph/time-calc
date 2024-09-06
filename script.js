
function calculate() {
    const startTime = document.getElementById('start-time').value  
    const endTime = document.getElementById('end-time').value  

    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    let difference = end - start
    if (difference < 0) {
        difference += 24 * 60 * 60 * 1000
    }

    const hours = Math.floor(difference / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

    document.getElementById('total-time').textContent = `${hours}h ${minutes}m`;
}