Handlebars.registerHelper('money', function(money) {
	return accounting.formatMoney(money);
});

Handlebars.registerHelper('formatRating', function(rating) {
	return accounting.toFixed(rating, 2);
});
