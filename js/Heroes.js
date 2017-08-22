import $ from 'jquery';
import { heroes } from '../assets/data/heroes.json';

export default class Heroes {
	constructor($container) {
		this.$container = $container;
		const $menu = this.$container.find('.hero-gallery_menu');
		heroes.forEach((hero, index) => {
			const $heroBtn = $(`<div class='hero-gallery_btn' data-id='${index}'></div>`);
			$heroBtn.css('background-image', `url("./assets/images/gallery/${hero.image}_icon.png")`);
			$menu.append($heroBtn);
			$heroBtn.on('click', this.onHeroClicked.bind(this, index));
		});
	}
	onHeroClicked(index) {
		const hero = heroes[index];
		this.$container.find('.hero-gallery_name').html(hero.name);
		this.$container.find('.hero-gallery_real-name').html(hero.realName);
		this.$container.find('.hero-gallery_age').html(hero.age);
		this.$container.find('.hero-gallery_description').html(hero.description);
		this.$container.find('.hero-gallery_image').attr('src', `./assets/images/gallery/gallery_image_${hero.image}.png`);
	}
}