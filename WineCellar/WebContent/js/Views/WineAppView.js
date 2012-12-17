var WineAppView = Backbone.View.extend({
	initialize: function(){
		useMobileTemplates(this.options.mobile);
		this.$el.html(this.template());

		this.collections = {
			brands: new BrandCollection(),					//.fetch({add:true}),
			locations: new LocationCollection(),			//.fetch({add:true}),
			locationTypes: new LocationTypeCollection(),	//.fetch({add:true}),
			purchases: new PurchaseCollection(),			//.fetch({add:true}),
			regions: new RegionCollection(),				//.fetch({add:true}),
			tastingNotes: new TastingNoteCollection(),		//.fetch({add:true}),
			varietals: new VarietalCollection(),			//.fetch({add:true}),
			vineyards: new VineyardCollection(), 			//.fetch({add:true}),
			wines: new WineCollection()						//.fetch({add:true}),
		};
		
		this.views["wineList"]=  new WineSummaryList({
			model: Backbone.Relational.store.getCollection(WineModel),
			el: this.$el.find("#wineSummaries").get(0)
		});
		this.views["selectBrands"] = new SelectBrands({model: this.collections.brands, el: this.$el.find("#select_brands").get(0)});
		this.views["selectVineyards"] = new SelectVineyards({model: this.collections.vineyards, el: this.$el.find("#select_vineyards").get(0)});
		
		this.collections.brands.fetch({add:true});
		this.collections.locations.fetch({add:true});
		this.collections.locationTypes.fetch({add:true});
		this.collections.regions.fetch({add:true});
		this.collections.varietals.fetch({add:true});
		this.collections.vineyards.fetch({add:true});
		this.collections.wines.fetch({add:true});
	}, 
	template: templates.wineApp,
	views: {},
	collections: {},
	addView: function(name, view){
		if (!(name in this.views)){
			this.views[name] = view;
		}else{ alert("View with name: " + name + " already exists......"); }	
	},
	render: function(){
		
	}
});
