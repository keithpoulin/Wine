var SelectVineyards = Backbone.View.extend({
	template: components.select_vineyards,
//	model: Backbone.Relational.store.getCollection(VineyardModel),
	initialize: function(){
		this.model.bind("add", this.render, this);
	},
	render: function(){
		var data = { vineyards: this.model.toJSON() };
		this.$el.html(this.template( data ));
		return this;
	},
	events: {
		
	},
	getValue: function(){
		return this.$el.val();
	}
});
