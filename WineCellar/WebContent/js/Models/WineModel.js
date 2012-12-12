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
		reverseRelation: {
			type: Backbone.HasMany,
			key: "wines",
			collectionType: "WineCollection"
		}},{
			type: Backbone.HasOne,
			relatedModel: "VarietalModel",
			key: "varietal",
			keySource: "varietalId",
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
			reverseRelation: {
				key: "wines",
				type: Backbone.HasOne,
				keySource: "wineId"
			}			
		}, {
			type: Backbone.HasMany,
			relatedModel: "TastingNoteModel",
			key: "tastingNotes",
			collectionType: "TastingNoteCollection",
			reverseRelation: {
				key: "wines",
				type: Backbone.HasOne,
				keySource: "wineId"
			}
		}
	]
});
