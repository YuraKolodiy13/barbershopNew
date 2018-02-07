const showMap = document.querySelector('.showMap');
const modalMaps = document.querySelector('.modal__maps');
const close = document.querySelector('.close');

showMap.addEventListener('click', function (e) {
    e.preventDefault();
    modalMaps.style.display = 'block';
});
close.addEventListener('click', function (e) {
    e.preventDefault();
    modalMaps.style.display = 'none';
});

const icon = document.querySelector('.icon');
const headerMain = document.querySelector('.headerMain');

icon.addEventListener('click', function () {
    headerMain.classList.toggle('responsive');
    icon.classList.toggle('icon-open');
});
