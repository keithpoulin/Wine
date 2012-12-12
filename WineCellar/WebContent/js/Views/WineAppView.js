var WineAppView = Backbone.View.extend({
	initialize: function(){
		useMobileTemplates(this.options.mobile);
//		this.model = new WineCollection();
		this.$el.html(this.template());
		
		this.data = {
			brands: new BrandCollection(),
			locations: new LocationCollection(),
			locationTypes: new LocationTypeCollection(),
			purchases: new PurchaseCollection(),
			regions: new RegionCollection(),
			tastingNotes: new TastingNoteCollection(),
			varietals: new VarietalCollection(),
			vineyards: new VineyardCollection(),
			wines: new WineCollection()
		};
		this.fetchAll();
//		this.addView("wineSummaries", new WineSummaryList({
////				model: this.model,
//				el: this.$el.find("#wineSummaries")
//			})
//		);
		
	}, 
	template: templates.wineApp,
	views: { },
	addView: function(name, view){
		if (!(name in this.views)){
			this.views[name] = view;
		}else{ alert("View with name: " + name + " already exists."); }	
	},
	render: function(){
		
	}, fetchAll: function(){
		for (var key in this.data){
			if (this.data.hasOwnProperty(key)){
				this.data[key].fetch();
			}
		}
	}
});
