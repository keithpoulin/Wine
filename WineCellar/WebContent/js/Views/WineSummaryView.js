var WineSummaryView = Backbone.View.extend({
	tagName: "li",
	template: templates.wineSummary,
	initialize: function(){
//		 this.model.bind('change', this.render, this);
//		 this.model.bind('destroy', this.remove, this);
//		 console.log("initializing WineSummaryView");
		if (this.model.id == 117){
			console.log("wineSummary model: ");
			console.log(this.model);
			console.log( this.template(this.model.toJSON()) );
		}
		
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	events: {
		
	}
});
