var VineyardCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/vineyards",
	model: VineyardModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "vineyards";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new VineyardModel(items[i]));
			}
		}
	}
});
