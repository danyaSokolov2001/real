document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.site-name-a');
    const content = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            content.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 300); // Время должно совпадать с transition в CSS
        });
    });
});