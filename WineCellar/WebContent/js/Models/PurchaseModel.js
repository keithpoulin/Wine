var PurchaseModel = Backbone.RelationalModel.extend({
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
		relatedModel: "LocationModel",
		key: "location",
		keySource: "locationId",
		keyDestination: "location",
		includeInJSON: ["locationName", "locationCity", "locationState", "locationType", "locationId"],
		reverseRelation: {
			type: Backbone.HasMany,
			key: "purchases",
			collectionType: "PurchaseCollection"
		}
	}]
});
