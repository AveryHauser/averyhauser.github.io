document.querySelectorAll('.button-container button').forEach(button => {
    // Load and display the saved count when the page loads
    const savedCount = localStorage.getItem(button.id); 
    if (savedCount !== null) {
        button.setAttribute('data-count', savedCount);
        const countSpan = button.querySelector('.count');
        countSpan.textContent = savedCount;
    }

    button.addEventListener('click', function() {
        const countSpan = this.querySelector('.count');
        let count = parseInt(this.getAttribute('data-count'), 10);
        count++;
        this.setAttribute('data-count', count);
        countSpan.textContent = count;

        localStorage.setItem(this.id, count.toString());
    });
});

// Reset button event listener
document.getElementById('resetButton').addEventListener('click', function() {
    document.querySelectorAll('.button-container button').forEach(button => {
        // Reset the count to 0
        button.setAttribute('data-count', 0);
        const countSpan = button.querySelector('.count');
        countSpan.textContent = 0;

        // Update localStorage
        localStorage.setItem(button.id, '0');
    });
});
