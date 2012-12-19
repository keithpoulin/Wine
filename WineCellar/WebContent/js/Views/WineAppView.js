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
			template: components.select_brands
		});
		this.views["selectVineyards"] = new Select({
			el: this.$el.find("#select_vineyards"), 
			attributes:{multiple: "multiple"}, 
			modelType: VineyardModel,
			template: components.select_vineyards
		});
		this.views["selectVarietals"] = new Select({
			el: this.$el.find("#select_varietals"),
			attributes: {},
			modelType: VarietalModel,
			template: components.select_varietals
		});
		this.views["selectRegions"] = new Select({
			el: this.$el.find("#select_regions"),
			attributes: {},
			modelType: RegionModel,
			template: components.select_regions
		});
		
		for (var key in this.collections){
			this.collections[key].fetch({add: true});
		}
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
