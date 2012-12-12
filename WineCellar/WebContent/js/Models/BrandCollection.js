var BrandCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/brands",
	model: BrandModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "brands";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new BrandModel(items[i]));
			}
		}
	}
});
