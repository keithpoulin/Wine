var WineSummaryList = Backbone.View.extend({
	initialize: function(){				
		this.model.bind("add", this.addOne, this);
		
	},
	addOne: function(summary, context){
		var view = new WineSummaryView({model: summary, attributes: {wineId: summary.get("wineId")}});		
		view.render();
		context.$el.append(view.$el);
		context.views.push(view);
	},
	addAll: function() {
		for (var i=0; i< this.model.length; i++){
			this.addOne(this.model.at(i), this);
		}
	}, views: []
});
