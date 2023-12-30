const burgerBtn = document.getElementById('header-burger');
const headerNav = document.getElementById('header-nav');
const body = document.body;

export function toggleHeaderMenu(){
    burgerBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        headerNav.classList.toggle('active');
        body.classList.toggle('no-scroll')
    })
    headerNav.addEventListener('click', function () {
        if ( this.classList.contains('active') ) {
            this.classList.remove('active');
            body.classList.remove('no-scroll');
            burgerBtn.classList.remove('active');
        }
    })
}