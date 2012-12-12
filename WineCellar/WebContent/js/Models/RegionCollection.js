var RegionCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/regions",
	model: RegionModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "region";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new RegionModel(items[i]));
			}
		}
	}
});
