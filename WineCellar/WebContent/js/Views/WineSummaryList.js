var WineSummaryList = Backbone.View.extend({
	initialize: function(){				
		this.model.bind("add", this.addOne, this);
	},
	addOne: function(summary){
		var view = new WineSummaryView({model: summary, attributes: {wineId: summary.get("wineId")}});
		this.$el.append(view.render().el);
	},
	addAll: function() {
		this.model.each(this.addOne);
	}
});
