var LocationModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/locations",
	idAttribute: "locationId",
	defaults: {
		locationName: "Default Name",
		locationCity: "Default City",
		locationState: "CO",
		locationTypeId: 0		
	},relations: [{
		type: Backbone.HasOne,
		relatedModel: "LocationTypeModel",
		key: "locationType",
		keySource: "locationTypeId",
		keyDestination: "locationType",
		includeInJSON: ["locationType", "locationTypeId"],
		reverseRelation: {
			type: Backbone.HasMany,
			key: "locations",
			collectionType: "LocationCollection"
		}
	}]
});
