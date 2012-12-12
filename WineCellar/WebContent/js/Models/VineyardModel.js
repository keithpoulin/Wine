var VineyardModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/vineyards",
	idAttribute: "vineyardId",
	defaults: {

	}
});
