var VarietalModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/varietals",
	idAttribute: "varietalId",
	defaults: {
		varietal: "Pino Noir",
		type: "Red"
	}
});
