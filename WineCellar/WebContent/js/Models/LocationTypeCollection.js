var LocationTypeCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/locationTypes",
	model: LocationTypeModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "locationTypes";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new LocationTypeModel(items[i]));
			}
		}
	}
});
