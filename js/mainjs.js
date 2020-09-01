var menu = document.getElementById('menu');
var ul = document.querySelector('.navegador');

menu.addEventListener('click', function(){
    ul.classList.toggle('.open');
});