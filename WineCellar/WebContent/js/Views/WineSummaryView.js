var WineSummaryView = Backbone.View.extend({
	tagName: "li",
	template: templates.wineSummary,
	initialize: function(){
		
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	events: {
		
	}
});
