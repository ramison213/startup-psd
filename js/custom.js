// Burger

let iconMenu = document.querySelector('.icon-menu');
let navList = document.querySelector('.navigation__list');

function toggleBurger() {
    iconMenu.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.classList.toggle('lock');
}

iconMenu.addEventListener('click', () => {
    toggleBurger();
});

// filter buttons

let $filterBtns = document.querySelectorAll('.filter__button');

$filterBtns.forEach($filterBtn => {
    $filterBtn.addEventListener('click', () => {
        document.querySelector('.filter__button--active').classList.remove('filter__button--active');
        $filterBtn.classList.toggle('filter__button--active');
    })
});

//
