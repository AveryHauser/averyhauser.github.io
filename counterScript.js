

// script.js
document.querySelectorAll('.button-container button').forEach(button => {
    button.addEventListener('click', function() {
        const countSpan = this.querySelector('.count');
        let count = parseInt(this.getAttribute('data-count'), 10);
        count++;
        this.setAttribute('data-count', count);
        countSpan.textContent = count; // Update only the span content
    });
});

