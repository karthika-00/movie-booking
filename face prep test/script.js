function openBookingForm(movie) {
    document.getElementById('movie-title').textContent = movie;
    document.getElementById('booking-form').style.display = 'block';
}

function submitBooking() {
    const name = document.getElementById('name').value;
    const tickets = document.getElementById('tickets').value;
    const movie = document.getElementById('movie-title').textContent;

    if (name && tickets > 0) {
        document.getElementById('booking-form').style.display = 'none';
        document.getElementById('name').value = '';
        document.getElementById('tickets').value = '';
    } else {
        alert('Please enter valid details.');
    }
}