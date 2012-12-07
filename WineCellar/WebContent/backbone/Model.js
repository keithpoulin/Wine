var WineSummaryModel = Backbone.Model.extend({
	urlRoot: "/rest/WineCellar/wineSummaries",
	initialize: function(){
	},
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


var WineSummaryCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/wineSummaries",
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


var WineDetailModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/wineDetails"
});

var WineDetailCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/wineDetails"
});

var VineyardModel = Backbone.Model.extend({
	urlRoot: "/rest/WineCellar/vineyards",
	idAttribute: "vineyardId",
	defaults: {

	}
});

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



var WineModel = Backbone.Model.extend({
	urlRoot: "/rest/WineCellar/wines",
	idAttribute: "wineId",
	defaults: {
		brandId: 1,
		listPrice: 10,
		regionId: 1,
		varietalId: 1,		
		vineyardId: 1,
		vintageYear: 2006,
		vineyard: {vineyardId: 1, vineyard: "bhalbha"},
		brand: {brandId: 1, brandName: "neil"},
		varietal: {varietalId: 1, varietal: "blah blha grapes"},
		region: {regionId: 1, region: "neil"},
		wineDescription: "it's okay",
		inventoryNotes: "notes are here"
		
//	private int wineId;
//	private int vineyardId;
//	private int brandId;
//	private int varietalId;
//	private int regionId;
//	private Vineyard vineyard;
//	private Brand brand;
//	private Varietal varietal;
//	private Region region;
//	private int vintageYear;
//	private String wineDescription;
//	private BigDecimal listPrice;
//	private String inventoryNotes;
		
	}
});

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


var VarietalModel = Backbone.Model.extend({
	urlRoot: "/rest/WineCellar/varietals",
	idAttribute: "varietalId",
	defaults: {
		varietal: "Pino Noir",
		type: "Red"
	}
});

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


var TastingNoteModel = Backbone.Model.extend({
	urlRoot: "/rest/WineCellar/tastingNotes",
	idAttribute: "tastingNoteId",
	defaults: {

	}
});

var TastingNoteCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/tastingNotes",
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
	urlRoot: "/rest/WineCellar/regions",
	idAttribute: "regionId",
	defaults: {
	}
});

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

var PurchaseModel = Backbone.Model.extend({
	urlRoot: "/rest/WineCellar/purchases",
	idAttribute: "purchaseId",
	defaults: {
	}
});

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

var LocationModel = Backbone.Model.extend({
	urlRoot: "/rest/WineCellar/locations",
	idAttribute: "locationId",
	defaults: {
	}
});

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

var LocationTypeModel = Backbone.Model.extend({
	urlRoot: "/rest/WineCellar/locationTypes",
	idAttribute: "locationTypeId",
	defaults: {
	}
});

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


var BrandModel = Backbone.Model.extend({
	urlRoot: "/rest/WineCellar/brands",
	idAttribute: "brandId",
	defaults: {
	}
});

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


var WineCellarModel = Backbone.Model.extend({
	urlRoot: "/rest/WineCellar",
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
		this.set("wineSummaries", new WineSummaryCollection(this.get("wineSummaries")));		
	},
	defaults: function(){
		return {};
	}, fetchFromLocalStorage: function(){
		if ("wineCellar" in localStorage){
			this.update(JSON.parse(localStorage.wineCellar));
		}
		if ("wineSummaries" in localStorage){
			this.get("wineSummaries").update(JSON.parse(localStorage.wineSummaries));
		}
		return this;
	},fetch: function(){
		var cellar = this;
		console.log("fetching data from server. Please wait...");
		$.ajax({
			url: "/rest/WineCellar",
			data: {},
			dataType: "json",
			success: function(resp){
				console.log("refreshing models...");
				for (var key in cellar.attributes){
					if (key in resp){
						console.log("updating " + key + "....");
						cellar.get(key).update(resp[key]);
					}else{
						console.log(key + " not in Reponse");
					}
				}
				
			}
		});
		console.log("fetching wineSummaries...");
		this.get("wineSummaries").fetch();
	}
});

function showAlert(message){
	alert(message);
}


