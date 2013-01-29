var LocationModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/locations",
	idAttribute: "locationId",
	initialize: function(){
		this.set("locationTypeSource", this.get("locationTypeId"));
		this.set("locationType", this.get("locationTypeObject").get("locationType"));
	},
	defaults: {
		locationName: "Default Name",
		locationCity: "Default City",
		locationState: "CO",
		locationTypeId: 1,
		locationTypeSource: 1		
	},relations: [{
		type: Backbone.HasOne,
		relatedModel: "LocationTypeModel",
		key: "locationTypeObject",
		keySource: "locationTypeSource",
		keyDestination: "locationTypeObject",
		includeInJSON: ["locationType", "locationTypeId"],
		reverseRelation: {
			type: Backbone.HasMany,
			key: "locations",
			collectionType: "LocationCollection"
		}
	}]
});
