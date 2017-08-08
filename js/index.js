var TAGS = {
	GLOBAL: /\[(img)\].+\[\/(img)\]/g,
	IMG: /(\[(img)\]).+(\[\/(img)\])/,
};

$(document).ready(function() {
	$.get('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=589250&count=1&format=json', function(data) {
		var tags = data.appnews.newsitems[0].contents.match(TAGS.GLOBAL);
  		$('.tab[data-tab="game"]').html(data.appnews.newsitems[0].contents);
	});

	$('.nav-btn').on('click', function(event) {
		event.preventDefault();
		var $button = $(event.currentTarget);
		if ($button.hasClass('active'))  return; 
		var tab = $button.data('tab');
		$('.nav-btn').removeClass('active');
		$button.addClass('active');
		$('.tab').hide();
		$('.tab[data-tab="' + tab + '"]').show();
	});
});
