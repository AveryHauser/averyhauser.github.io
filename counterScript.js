document.querySelectorAll('.button-container button').forEach(button => {
    // Load and display the saved count when the page loads
    const savedCount = localStorage.getItem(button.id); // Assume each button has a unique ID
    if (savedCount !== null) {
        button.setAttribute('data-count', savedCount);
        const countSpan = button.querySelector('.count');
        countSpan.textContent = savedCount; // Update the span content with the saved count
    }

    button.addEventListener('click', function() {
        const countSpan = this.querySelector('.count');
        let count = parseInt(this.getAttribute('data-count'), 10);
        count++;
        this.setAttribute('data-count', count);
        countSpan.textContent = count; // Update only the span content

        // Save the new count to localStorage
        localStorage.setItem(this.id, count.toString());
    });
});
