var t_standard = {
		wineSummary: Handlebars.compile($("#t_wineSummary").html()),
		purchaseDetails: Handlebars.compile($("#t_m_PurchaseDetails").html()),
		tastingNotes: Handlebars.compile($("#t_m_TastingNotes").html()),
		wineDetail: Handlebars.compile($("#t_m_WineDetail").html()),
		wineApp: Handlebars.compile($("#t_WineApp").html()),
		isMobile: false
	};
var t_mobile = {
		wineSummary: Handlebars.compile($("#t_m_wineSummary").html()),
		purchaseDetails: Handlebars.compile($("#t_m_PurchaseDetails").html()),
		tastingNotes: Handlebars.compile($("#t_m_TastingNotes").html()),
		wineDetail: Handlebars.compile($("#t_m_WineDetail").html()),
		wineApp: Handlebars.compile($("#t_WineApp").html()),
		isMobile: true
};

window.components = {
	select_brands: Handlebars.compile($("#t_select_brands").html()),
	select_vineyards: Handlebars.compile($("#t_select_vineyards").html())
};

window.templates = t_mobile;

function useMobileTemplates(setting){
	if (setting == undefined){
		setting = false;
	}
	if (setting){
		templates = t_mobile;
	}else{
		templates = t_standard;
	}
}