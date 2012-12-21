window.templates = {
	wineSummary: Handlebars.compile($("#t_wineSummary").html()),
	purchaseList: Handlebars.compile($("#t_PurchaseList").html()),
	tastingNoteList: Handlebars.compile($("#t_TastingNoteList").html()),
	wineDetail: Handlebars.compile($("#t_WineDetail").html()),
	wineApp: Handlebars.compile($("#t_WineApp").html()),
	
	select_brands: Handlebars.compile($("#t_select_brands").html()),
	select_vineyards: Handlebars.compile($("#t_select_vineyards").html()),
	select_varietals: Handlebars.compile($("#t_select_varietals").html()),
	select_regions: Handlebars.compile($("#t_select_regions").html())
};
