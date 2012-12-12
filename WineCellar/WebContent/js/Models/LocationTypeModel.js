var LocationTypeModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/locationTypes",
	idAttribute: "locationTypeId",
	defaults: {
		locationType: "Default LocationType"
	}
});
