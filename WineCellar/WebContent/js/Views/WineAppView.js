var WineAppView = Backbone.View.extend({
	initialize: function(){
		useMobileTemplates(this.options.mobile);
		this.$el.html(this.template());
		var cellarModel = new WineCellarModel();
		this.model = cellarModel;

		this.views["wineList"]=  new WineSummaryList({
				model: this.model.get("wines"),
				el: this.$el.find("#wineSummaries").get(0)
			});
			
		if (this.options.autoFetch){			
			cellarModel.fetch({add: true} );
		}
	}, 
	template: templates.wineApp,
	views: {},
	addView: function(name, view){
		if (!(name in this.views)){
			this.views[name] = view;
		}else{ alert("View with name: " + name + " already exists......"); }	
	},
	render: function(){
		
	}
});
