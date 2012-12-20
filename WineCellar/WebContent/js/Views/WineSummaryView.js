var WineSummaryView = Backbone.View.extend({
	tagName: "li",
	template: templates.wineSummary,
	initialize: function(){
		this.attributes.id = "wineSummary" + this.model.get("wineId");
		for (var key in this.attributes){
			this.$el.attr(key, this.attributes[key]);
		}
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	events: {
		
	}
});
