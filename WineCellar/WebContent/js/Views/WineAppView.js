var WineAppView = Backbone.View.extend({
	initialize: function(){
		this.$el.html(this.template());

		this.collections = {
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
				
		this.views["wineList"]=  new WineSummaryList({
			model: Backbone.Relational.store.getCollection(WineModel),
			el: this.$el.find("#wineSummaries").get(0)
		});
		this.views["selectBrands"] = new Select({
			el: this.$el.find("#select_brands"), 
			attributes:{multiple: "multiple"}, 
			modelType: BrandModel,
			template: templates.select_brands
		});
		this.views["selectVineyards"] = new Select({
			el: this.$el.find("#select_vineyards"), 
			attributes:{multiple: "multiple"}, 
			modelType: VineyardModel,
			template: templates.select_vineyards
		});
		this.views["selectVarietals"] = new Select({
			el: this.$el.find("#select_varietals"),
			attributes: {},
			modelType: VarietalModel,
			template: templates.select_varietals
		});
		this.views["selectRegions"] = new Select({
			el: this.$el.find("#select_regions"),
			attributes: {},
			modelType: RegionModel,
			template: templates.select_regions
		});
		
		this.views["wineDetail"] = new WineDetailView({el: "#wineDetail"}); 
		
		for (var key in this.collections){
			if (key != "purchases" && key != "tastingNotes"){
				this.collections[key].fetch({add: true});
			}
		}
		
		router = new Router({appView: this});
		Backbone.history.start();
		
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
