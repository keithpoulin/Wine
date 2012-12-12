var WineSummaryModel_rel = Backbone.RelationalModel.extend({
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


var WineSummaryCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/wineSummaries",
	model: WineSummaryModel_rel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		if ("wineSummaries" in localStorage){
			var summaries = JSON.parse(localStorage.wineSummaries);
			for (var i=0; i< summaries.length; i++){
				this.add(new WineSummaryModel_rel(summaries[i]));
			}
		}
	},
	toJsonString: function(){
		return JSON.stringify(this.toJSON());
	},
	saveToLocalStorage: function(){
		localStorage.wineSummaries = this.toJsonString();
	},relations: [{
        type: Backbone.HasMany,
        key: 'wineSummaries',
        relatedModel: 'WineSummaryModel_rel',
        reverseRelation: {
            key: 'collection',
            includeInJSON: 'wineId',
        },
    }]
});


var WineDetailModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/wineDetails"
});

var WineDetailCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/wineDetails",
	model: WineDetailModel_rel
});

var VineyardModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/vineyards",
	idAttribute: "vineyardId",
	defaults: {

	}
});

var VineyardCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/vineyards",
	model: VineyardModel_rel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "vineyards";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new VineyardModel_rel(items[i]));
			}
		}
	}
});



var WineModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/wines",
	idAttribute: "wineId",
	defaults: {
		brandId: 1,
		listPrice: 10,
		regionId: 1,
		varietalId: 1,		
		vineyardId: 1,
		vintageYear: 2006,
//		vineyard: {vineyardId: 1, vineyard: "Default Vineyard"},
//		brand: {brandId: 1, brandName: "Default Brand"},
//		varietal: {varietalId: 1, varietal: "Default Varietal"},
//		region: {regionId: 1, region: "neil"},
		wineDescription: "Default Description",
		inventoryNotes: "Default Note"
	},
	relations: [{
		type: Backbone.HasOne,
		relatedModel: "BrandModel_rel",
		key: "brand",
		keySource: "brandId",
		reverseRelation: {
			type: Backbone.HasMany,
			key: "wines",
			collectionType: "WineCollection_rel"
		}
	},{
		type: Backbone.HasOne,
		relatedModel: "RegionModel_rel",
		key: "region",
		keySource: "regionId",
		reverseRelation: {
			type: Backbone.HasMany,
			key: "wines",
			collectionType: "WineCollection_rel"
		}},{
			type: Backbone.HasOne,
			relatedModel: "VarietalModel_rel",
			key: "varietal",
			keySource: "varietalId",
			reverseRelation: {
				type: Backbone.HasMany,
				key: "wines",
				collectionType: "WineCollection_rel"				
			}
		},{
			type: Backbone.HasOne,
			relatedModel: "VineyardModel_rel",
			key: "vineyard",
			keySource: "vineyardId",
			reverseRelation: {
				type: Backbone.HasMany,
				key: "wines",
				collectionType: "WineCollection_rel"
			}
		}, {
			type: Backbone.HasMany,
			relatedModel: "PurchaseModel_rel",
			key: "purchases",
			collectionType: "PurchaseCollection_rel",
			reverseRelation: {
				key: "wines",
				type: Backbone.HasOne,
				keySource: "wineId"
			}			
		}, {
			type: Backbone.HasMany,
			relatedModel: "TastingNoteModel_rel",
			key: "tastingNotes",
			collectionType: "TastingNoteCollection_rel",
			reverseRelation: {
				key: "wines",
				type: Backbone.HasOne,
				keySource: "wineId"
			}
		}
	]
});

var WineCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/wines",
	model: WineModel_rel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "wines";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new WineModel_rel(items[i]));
			}
		}
	}
});


var VarietalModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/varietals",
	idAttribute: "varietalId",
	defaults: {
		varietal: "Pino Noir",
		type: "Red"
	}
});

var VarietalCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/varietals",
	model: VarietalModel_rel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "varietals";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new VarietalModel_rel(items[i]));
			}
		}
	}
});


var TastingNoteModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/tastingNotes",
	idAttribute: "tastingNoteId",
	defaults: {
		wineId: 0,
		tastingDate: new Date(),
		reviewedBy: "Default User",
		review: "Default Tasting Note",
		rating: 0
	} 	
});

var TastingNoteCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/tastingNotes",
	model: TastingNoteModel_rel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "tastingNotes";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new TastingNoteModel_rel(items[i]));
			}
		}
	}
});


var RegionModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/regions",
	idAttribute: "regionId",
	defaults: {
	}
});

var RegionCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/regions",
	model: RegionModel_rel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "region";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new RegionModel_rel(items[i]));
			}
		}
	}
});

var PurchaseModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/purchases",
	idAttribute: "purchaseId",
	defaults: {
		locationId: 1,
//		wineId: 1,
		purchaseDate: new Date(),
		price: 10,
		pricePer: "Bottle",
		qtyPurchased: 1,
		priceNotes: "",
		qtyOnHand: 1,
		invLocation: ""
	},relations: [{
		type: Backbone.HasOne,
		relatedModel: "LocationModel_rel",
		key: "location",
		keySource: "locationId",
		reverseRelation: {
			type: Backbone.HasMany,
			key: "purchases",
			collectionType: "PurchaseCollection_rel"
		}
	}]
});

var PurchaseCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/purchases",
	model: PurchaseModel_rel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "purchases";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new PurchaseModel_rel(items[i]));
			}
		}
	}
});

var LocationModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/locations",
	idAttribute: "locationId",
	defaults: {
		locationName: "Default Name",
		locationCity: "Default City",
		locationState: "CO",
		locationTypeId: 0		
	},relations: [{
		type: Backbone.HasOne,
		relatedModel: "LocationTypeModel_rel",
		key: "locationType",
		keySource: "locationTypeId",
		reverseRelation: {
			type: Backbone.HasMany,
			key: "locations",
			collectionType: "LocationCollection_rel"
		}
	}]
});

var LocationCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/locations",
	model: LocationModel_rel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "locations";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new LocationModel_rel(items[i]));
			}
		}
	}
});

var LocationTypeModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/locationTypes",
	idAttribute: "locationTypeId",
	defaults: {
		locationType: "Default LocationType"
	}
});

var LocationTypeCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/locationTypes",
	model: LocationTypeModel_rel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "locationTypes";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new LocationTypeModel_rel(items[i]));
			}
		}
	}
});


var BrandModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/brands",
	idAttribute: "brandId",
	defaults: {
		brandName: "Deafult Brand"
	}
});

var BrandCollection_rel = Backbone.Collection.extend({
	url: "/rest/WineCellar/brands",
	model: BrandModel_rel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "brands";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new BrandModel_rel(items[i]));
			}
		}
	}
});


var WineCellarModel_rel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar",
	initialize: function(){
		this.set("vineyards", new VineyardCollection_rel(this.get("vineyards")));
		this.set("wines", new WineCollection_rel(this.get("wines")));
		this.set("varietals", new VarietalCollection_rel(this.get("varietals")));
		this.set("tastingNotes", new TastingNoteCollection_rel(this.get("tastingNotes")));
		this.set("regions", new RegionCollection_rel(this.get("regions")));
		this.set("purchases", new PurchaseCollection_rel(this.get("purchases")));
		this.set("locations", new LocationCollection_rel(this.get("locations")));
		this.set("locationTypes", new LocationTypeCollection_rel(this.get("locationTypes")));
		this.set("brands", new BrandCollection_rel(this.get("brands")));
		this.set("wineSummaries", new WineSummaryCollection_rel(this.get("wineSummaries")));		
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


