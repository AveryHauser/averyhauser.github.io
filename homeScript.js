document.getElementById('checkCodeButton').addEventListener('click', function() {
    const input = document.getElementById('secretCode').value;
    const correctCode = "ABC123"; // Example of a 6-character long string
    
    if (input === correctCode) {
        // Redirect if the input matches the correct code
        window.location.href = 'counter.html'; // Replace with the actual filename
    } else {
        alert("Incorrect code. Please try again.");
    }
});