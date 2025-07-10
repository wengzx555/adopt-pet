window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 1) { 
        header.classList.add('navbar-shadow');
    }else{
        header.classList.remove('navbar-shadow');
    }
});