var VarietalCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/varietals",
	model: VarietalModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "varietals";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new VarietalModel(items[i]));
			}
		}
	}
});
