document.addEventListener('click', function (e) {
    const select = document.querySelector('.custom-select');
    const selected = select.querySelector('.select-selected');
const items = select.querySelector('.select-items');

    if (select.contains(e.target)) {
        items.style.display = items.style.display === 'none' ? 'block' : 'none';
    } else {
        items.style.display = 'none';
    }

    if (e.target.parentNode.classList.contains('select-items')) {
        selected.textContent = e.target.textContent;
        const allItems = items.querySelectorAll('div');
        allItems.forEach(item => item.classList.remove('same-as-selected'));
        e.target.classList.add('same-as-selected');
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link-a');
    const content = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            content.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 500); // Время должно совпадать с transition в CSS
        });
    });
});