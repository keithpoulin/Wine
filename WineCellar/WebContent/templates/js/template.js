Handlebars.registerHelper('money', function(money) {
	return accounting.formatMoney(money);
});

Handlebars.registerHelper('formatRating', function(rating) {
	return accounting.toFixed(rating, 2);
});

Handlebars.registerHelper('checkInventory', function(qty){
	qty = Number(qty);
	if (qty > 0){
		return "inStock";
	}else{
		return "";
	}
});