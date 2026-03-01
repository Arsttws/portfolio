document.addEventListener('click', (e) => {
    if (e.target.closest('.items .item .title')) {
        const item = e.target.closest('.items .item');
        const info = item.querySelector('.info');
        const activeItem = document.querySelector('.items .item.active');

        if (item === activeItem) {
            closeItem(item);
            return;
        }
        if (activeItem) {
            closeItem(activeItem);
        }

        openItem(item);
    }
});

function openItem(item) {
    const info = item.querySelector('.info');

    item.classList.add('active');
    info.style.maxHeight = info.scrollHeight + 'px';

    setTimeout(() => {
        if (item.classList.contains('active')) {
            info.style.maxHeight = 'none';
        }
    }, 300);
}

function closeItem(item) {
    const info = item.querySelector('.info');

    info.style.maxHeight = info.scrollHeight + 'px';

    requestAnimationFrame(() => {
        info.style.maxHeight = 0;
        item.classList.remove('active');
    });
}