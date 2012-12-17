var WineAppView = Backbone.View.extend({
	initialize: function(){
		useMobileTemplates(this.options.mobile);
		this.$el.html(this.template());

		new BrandCollection().fetch({add:true});
		new LocationCollection().fetch({add:true});
		new LocationTypeCollection().fetch({add:true});
		new PurchaseCollection().fetch({add:true});
		new RegionCollection().fetch({add:true});
		new TastingNoteCollection().fetch({add:true});
		new VarietalCollection().fetch({add:true});
		new VineyardCollection().fetch({add:true});
		new WineCollection().fetch({add:true});
		
		this.views["wineList"]=  new WineSummaryList({
				model: Backbone.Relational.store.getCollection(WineModel),
				el: this.$el.find("#wineSummaries").get(0)
			});
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
