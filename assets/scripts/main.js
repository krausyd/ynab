(function(){
    var burger = document.querySelector('.navbar-burger');
    var nav = document.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
})();