var WineSummaryCollection = Backbone.Collection.extend({
	model: WineSummaryModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		if ("wineSummaries" in localStorage){
			var summaries = JSON.parse(localStorage.wineSummaries);
			for (var i=0; i< summaries.length; i++){
				this.add(new WineSummaryModel(summaries[i]));
			}
		}
	},
	toJsonString: function(){
		return JSON.stringify(this.toJSON());
	},
	saveToLocalStorage: function(){
		localStorage.wineSummaries = this.toJsonString();
	}
});

var WineSummaryModel = Backbone.Model.extend({
	defaults: function(){
		return {
			avgPrice: 0,
			avgRating: 0,
			brand: {},
			brandId: 0,
			maxPrice: 0,
			maxRating: 0,
			minPrice: 0,
			minRating: 0,
			pricePer: "Bottle",
			qty: 0,
			qtyOnHand: 0,
			region: {},
			regionId: 0,
			varietal: {},
			varietalId: 0,
			vineyard: {},
			vineyardId: 102,
			vintageYear: 0,
			wineId: 0
		};
	},
	idAttribute: "wineId"
});

var WineDetailCollection = Backbone.Collection.extend({
	
});

var WineDetailModel = Backbone.RelationalModel.extend({
	
});


var VineyardModel = Backbone.Model.extend({
	idAttribute: "vineyardId",
	defaults: {

	}
});

var VineyardCollection = Backbone.Collection.extend({
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



var WineModel = Backbone.Model.extend({
	idAttribute: "wineId",
	defaults: {

	}
});

var WineCollection = Backbone.Collection.extend({
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


var VarietalModel = Backbone.Model.extend({
	idAttribute: "varietalId",
	defaults: {
	}
});

var VarietalCollection = Backbone.Collection.extend({
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


var TastingNoteModel = Backbone.Model.extend({
	idAttribute: "tastingNoteId",
	defaults: {

	}
});

var TastingNoteCollection = Backbone.Collection.extend({
	model: TastingNoteModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "tastingNotes";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new TastingNoteModel(items[i]));
			}
		}
	}
});


var RegionModel = Backbone.Model.extend({
	idAttribute: "regionId",
	defaults: {
	}
});

var RegionCollection = Backbone.Collection.extend({
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

var PurchaseModel = Backbone.Model.extend({
	idAttribute: "purchaseId",
	defaults: {
	}
});

var PurchaseCollection = Backbone.Collection.extend({
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

var LocationModel = Backbone.Model.extend({
	idAttribute: "locationId",
	defaults: {
	}
});

var LocationCollection = Backbone.Collection.extend({
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

var LocationTypeModel = Backbone.Model.extend({
	idAttribute: "locationTypeId",
	defaults: {
	}
});

var LocationTypeCollection = Backbone.Collection.extend({
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


var BrandModel = Backbone.Model.extend({
	idAttribute: "brandId",
	defaults: {
	}
});

var BrandCollection = Backbone.Collection.extend({
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


var WineCellarModel = Backbone.Model.extend({
	initialize: function(){
		this.set("vineyards", new VineyardCollection(this.get("vineyards")));
		this.set("wines", new WineCollection(this.get("wines")));
		this.set("varietals", new VarietalCollection(this.get("varietals")));
		this.set("tastingNotes", new TastingNoteCollection(this.get("tastingNotes")));
		this.set("regions", new RegionCollection(this.get("regions")));
		this.set("purchases", new PurchaseCollection(this.get("purchases")));
		this.set("locations", new LocationCollection(this.get("locations")));
		this.set("locationTypes", new LocationTypeCollection(this.get("locationTypes")));
		this.set("brands", new BrandCollection(this.get("brands")));
	},
	defaults: function(){
		return {};
	}, fetchFromLocalStorage: function(){
		if ("wineCellar" in localStorage){
			this.constructor(JSON.parse(localStorage.wineCellar));
			return this;
		}
	}
});



