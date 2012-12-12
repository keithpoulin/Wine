var WineSummaryView = Backbone.View.extend({
	tagName: "li",
	template: templates.wineSummary,
	initialize: function(){
		 this.model.bind('change', this.render, this);
		 this.model.bind('destroy', this.remove, this);
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));	
		this.vineyard = this.$(".vineyard");
		return this;
	},
	events: {
		
	}
});
