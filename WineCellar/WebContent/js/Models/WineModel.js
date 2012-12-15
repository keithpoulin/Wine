var WineModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/wines",
	idAttribute: "wineId",
	defaults: {
		brandId: 1,
		listPrice: 10,
		regionId: 1,
		varietalId: 1,		
		vineyardId: 1,
		vintageYear: 2006,
		wineDescription: "Default Description",
		inventoryNotes: "Default Note"
	},
	relations: [{
		type: Backbone.HasOne,
		relatedModel: "BrandModel",
		key: "brand",
		keySource: "brandId",
		includeInJSON: ["brandName", "brandId"],
		reverseRelation: {
			type: Backbone.HasMany,
			key: "wines",
			collectionType: "WineCollection"			 
		}		
	},{
		type: Backbone.HasOne,
		relatedModel: "RegionModel",
		key: "region",
		keySource: "regionId",
		includeInJSON: ["region", "subRegion", "regionId"],
		reverseRelation: {
			type: Backbone.HasMany,
			key: "wines",
			collectionType: "WineCollection"
		}	
	},{
		type: Backbone.HasOne,
		relatedModel: "VarietalModel",
		key: "varietal",
		keySource: "varietalId",
		includeInJSON: ["varietal", "type", "varietalId"],
		reverseRelation: {
			type: Backbone.HasMany,
			key: "wines",
			collectionType: "WineCollection"				
		}
	},{
		type: Backbone.HasOne,
		relatedModel: "VineyardModel",
		key: "vineyard",
		keySource: "vineyardId",
		includeInJSON: ["vineyard", "vineyardId"],
		reverseRelation: {
			type: Backbone.HasMany,
			key: "wines",
			collectionType: "WineCollection"
		}
	}, {
		type: Backbone.HasMany,
		relatedModel: "PurchaseModel",
		key: "purchases",
		collectionType: "PurchaseCollection",
		includeInJSON: ["purchaseId", "purchaseDate", "invLocation", "price", "priceNotes", "pricePer", "purchaseDate", "qtyOnHand", "qtyPurchased"],
		reverseRelation: {
			key: "wine",
			type: Backbone.HasOne,
			keySource: "wineId"
		}			
	}, {
		type: Backbone.HasMany,
		relatedModel: "TastingNoteModel",
		key: "tastingNotes",
		collectionType: "TastingNoteCollection",
		reverseRelation: {
			key: "wine",
			type: Backbone.HasOne,
			keySource: "wineId"
		}
	}]
});