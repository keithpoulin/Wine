var WineCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/wines",
	model: WineModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "wines";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new WineModel(items[i]));
			}
		}
	}
});
