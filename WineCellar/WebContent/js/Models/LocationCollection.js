var LocationCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/locations",
	model: LocationModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "locations";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new LocationModel(items[i]));
			}
		}
	}
});
