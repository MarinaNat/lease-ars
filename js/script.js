'use strict'

const swiper = new Swiper(".swiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	effect: "fade",
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});

const tabItem = document.querySelectorAll('.tabs__btn-item')
const tabContent = document.querySelectorAll('.tabs__content-item')

tabItem.forEach(function (element) {
	element.addEventListener('click', open)
})

function open(evt) {
	const tabTarger = evt.currentTarget;
	const button = tabTarger.dataset.button;

	tabItem.forEach(function (item) {
		item.classList.remove('tabs__btn-item_active')
	})
	tabTarger.classList.add('tabs__btn-item_active')
	tabContent.forEach(function (item) {
		item.classList.remove('tabs__content-item_active');
	})

	document.querySelector(`#${button}`).classList.add('tabs__content-item_active')
}
// бургер меню

// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');

// menuBtn.addEventListener('click', () => {
// 	menu.classList.toggle('menu_active')
// })

