var SelectBrands = Backbone.View.extend({
	template: components.select_brands,
	model: Backbone.Relational.store.getCollection(BrandModel),
	initialize: function(){
		this.model.bind("add", this.render, this);
	},
	render: function(){
		var data = { brands: this.model.toJSON() };
		this.$el.html(this.template( data ));
		return this;
	},
	events: {
		
	},
	getValue: function(){
		return this.$el.val();
	}
});
