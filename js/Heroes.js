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

			if (index === 0) {
				$heroBtn.trigger('click');
			}
		});
	}

	onHeroClicked(index, event) {
		const hero = heroes[index];
		const $button = $(event.currentTarget);

		if ($button.hasClass('active')) return;

		this.$container.find('.hero-gallery_btn.active').removeClass('active');
		$button.addClass('active');

		setTimeout(() => {
			this.$container.find('.hero-gallery_content').removeClass('buzz-in');
		}, 400);

		this.$container.find('.hero-gallery_content').addClass('buzz-in');
		this.$container.find('.hero-gallery_name').text(hero.name);
		this.$container.find('.hero-gallery_real-name').text(hero.realName);
		this.$container.find('.hero-gallery_age').text(hero.age);
		this.$container.find('.hero-gallery_origin').text(hero.origin);
		this.$container.find('.hero-gallery_description').text(hero.description);
		this.$container.find('.hero-gallery_image').attr('src', `./assets/images/gallery/gallery_image_${hero.image}.png`);
	}
}