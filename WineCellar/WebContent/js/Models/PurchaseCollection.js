var PurchaseCollection = Backbone.Collection.extend({
	url: function(models){
		var url = "/rest/WineCellar/purchases";
		if (models != undefined){
			var wineId = models.get("wineId");
			if (wineId != undefined && wineId != null){
				url = "/rest/WineCellar/wines/" + wineId + "/purchases";
			}
		}		
		return url;
	},
	model: PurchaseModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "purchases";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new PurchaseModel(items[i]));
			}
		}
	}
});