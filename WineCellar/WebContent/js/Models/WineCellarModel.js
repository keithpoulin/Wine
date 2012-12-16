var WineCellarModel = Backbone.Model.extend({
	initialize: function(){
			debugger;
			this.set("brands", new BrandCollection() );
			this.set("locations", new LocationCollection());
			this.set("locationTypes", new LocationTypeCollection());
			this.set("purchases", new PurchaseCollection());
			this.set("regions", new RegionCollection());
			this.set("tastingNotes", new TastingNoteCollection());
			this.set("varietals", new VarietalCollection());
			this.set("vineyards", new VineyardCollection());
			this.set("wines", new WineCollection());
	}, fetch: function(){
		console.log("Fetching Wine Cellar models");
		for (var key in this.attributes){
			if (this.attributes.hasOwnProperty(key)){
				this.get(key).fetch();
			}
		}
	}, load: function(){
		console.log("loading models...");
		for (var key in this.attributes){
			if (this.attributes.hasOwnProperty(key)){
				this.get(key).fetch({add: true});
			}
		}
	}
});