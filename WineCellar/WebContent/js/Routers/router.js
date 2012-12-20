var Router = Backbone.Router.extend({
	initialize: function(options){
		if (options.appView != undefined){
			this.appView = options.appView;
		}
	},
	routes : {
		"wineDetails/:wineId" : "showDetails"
	},
	showDetails : function(wineId) {
		console.log("getting details for wineId: " + wineId);
		this.appView.views.wineDetail.setWineId(wineId);
		document.title = "Wine Cellar | Wine " + wineId;
	}
});