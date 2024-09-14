document.querySelectorAll('.scroll-to-bottom').forEach(button => {
    button.addEventListener('click', function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});

document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('touchstart', function() {
        this.querySelector('.overlay').style.transform = 'translateY(0)';
    });

    container.addEventListener('touchend', function() {
        this.querySelector('.overlay').style.transform = 'translateY(100%)';
    });
});