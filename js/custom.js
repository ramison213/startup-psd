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


// show modals

document.querySelectorAll('.modal-btn') // получаем кнопки открытия модалки
	.forEach(btn => {
		btn.addEventListener('click', () => {
			let $popup = document.querySelector('#' + btn.dataset.popupname); // получаем data- атрибут кнопки и по нему выбираем конкретное модальное окно

            $popup.hidden = false; // открываем модалку
            document.body.classList.toggle('lock');
		});
	})

document.querySelectorAll('.modal') // выбираем все оверлеи модалок
	.forEach($modal => {
		$modal.addEventListener('click', () => {
            $modal.hidden = true;
            document.body.classList.toggle('lock');
		})

		let $modalContent = $modal.querySelector('.modal__content'); // получаем само окно

		$modalContent.addEventListener('click', elem => {
			elem.stopPropagation();
		})

		$modalContent.querySelector('.modal__close').addEventListener('click', () => {
            $modal.hidden = true;
            document.body.classList.toggle('lock');
		})
	})
