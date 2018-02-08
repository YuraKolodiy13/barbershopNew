const showMap = document.querySelector('.showMap');
const userLogin = document.querySelector('.userBlock__login');
const modalMaps = document.querySelector('.modal__maps');
const modalPopup = document.querySelector('.modal__popup');
const close = document.querySelectorAll('.close');

document.body.addEventListener('click', function (e) {
    let target = e.target;
    if(!target.classList.contains('close')) return;
    target.parentNode.style.display = 'none';
});
if(showMap){
    showMap.addEventListener('click', function (e) {
        e.preventDefault();
        modalMaps.style.display = 'block';
    });
}
userLogin.addEventListener('click', function (e) {
    e.preventDefault();
    modalPopup.style.display = 'block';
});

const icon = document.querySelector('.icon');
const headerMain = document.querySelector('.headerMain');

icon.addEventListener('click', function () {
    headerMain.classList.toggle('responsive');
});
