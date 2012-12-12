var PurchaseCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/purchases",
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