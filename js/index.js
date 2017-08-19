import $ from 'jquery';
import '../styles/style.scss';

const TAGS = {
	GLOBAL: /\[(img)\].+\[\/(img)\]/g,
	IMG: /(\[(img)\]).+(\[\/(img)\])/,
};

$(document).ready(function() {
	$.get('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=589250&count=1&format=json', function(data) {
		const tags = data.appnews.newsitems[0].contents.match(TAGS.GLOBAL);
  		$('.tab[data-tab="game"]').html(data.appnews.newsitems[0].contents);
	});

	$('.nav-btn').on('click', function(event) {
		event.preventDefault();
		const $button = $(event.currentTarget);
		if ($button.hasClass('active'))  return; 
		const tab = $button.data('tab');
		$('.nav-btn').removeClass('active');
		$button.addClass('active');
		$('.tab').hide();
		$('.tab[data-tab="' + tab + '"]').show();
	});

	$.getJSON('assets/data/heroes.json', function(data) {		
	});
});