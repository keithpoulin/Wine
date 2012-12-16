var BrandModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/brands",
	idAttribute: "brandId",
	defaults: {
		brandName: "Deafult Brand"
	},
	validate: function( attributes ){
		var msg = null;

		var brands = Backbone.Relational.store.getCollection(BrandModel).models;
		var dups = _.filter(brands, function(model){
			return model.get("brandName") === attributes.brandName && model.cid !== this.cid;
		}, this);
		if(dups.length > 0) {
			msg = "BrandName needs to be unique.";
		}

		return msg;
    }
});
