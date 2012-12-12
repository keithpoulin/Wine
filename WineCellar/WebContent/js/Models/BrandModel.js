var BrandModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/brands",
	idAttribute: "brandId",
	defaults: {
		brandName: "Deafult Brand"
	}
});
