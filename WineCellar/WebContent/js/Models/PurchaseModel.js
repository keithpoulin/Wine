var PurchaseModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/purchases",
	idAttribute: "purchaseId",
	initialize: function(){
		this.set("wineSource", this.get("wineId") );
		this.set("locationSource", this.get("locationId"));
	},
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
		keySource: "locationSource",
		keyDestination: "location",
		includeInJSON: ["locationName", "locationCity", "locationState", "locationId", "locationType"],
		reverseRelation: {
			type: Backbone.HasMany,
			key: "purchases",
			collectionType: "PurchaseCollection"
		}
	}]
});
