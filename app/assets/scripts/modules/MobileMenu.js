import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu');
		this.infoContent = $('.site-header__info-container');
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleMenu.bind(this));
	}

	toggleMenu() {
		this.menuContent.toggleClass('site-header__menu--is-visible');
		this.infoContent.toggleClass('site-header__info-container--is-visible');
		this.menuIcon.toggleClass('site-header__menu-icon--close-x');
	}
}

export default MobileMenu;