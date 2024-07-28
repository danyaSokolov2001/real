document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.back-a');
    const content = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            content.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 200); // Время должно совпадать с transition в CSS
        });
    });
});