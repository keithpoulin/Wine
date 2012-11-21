Handlebars.registerHelper('money', function(money) {
	return accounting.formatMoney(money);
});

Handlebars.registerHelper('rating', function(rating) {
	console.log(rating);  
	return accounting.toFixed(rating, 2);
});
