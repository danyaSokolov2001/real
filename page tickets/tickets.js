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


document.getElementById('nextPage').addEventListener('click', function() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'nextpage.html';
    }, 500); 
});