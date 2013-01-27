var WineAppView = Backbone.View.extend({
	initialize: function(){
		this.collections = {
			wines: new WineCollection()	,
			brands: new BrandCollection(),				
			locations: new LocationCollection(),		
			locationTypes: new LocationTypeCollection(),	
			purchases: new PurchaseCollection(),			
			regions: new RegionCollection(),				
			tastingNotes: new TastingNoteCollection(),		
			varietals: new VarietalCollection(),			
			vineyards: new VineyardCollection(),						
		};
		
		this.views["wineList"]=  new WineSummaryList({
			model: Backbone.Relational.store.getCollection(WineModel),
			el: $("#wineSummaryList")
		});
		this.views["selectBrands"] = new Select({
			el: $("#select_brands"), 
			attributes:{multiple: "multiple"}, 
			modelType: BrandModel,
			template: templates.select_brands
		});
		this.views["selectVineyards"] = new Select({
			el: $("#select_vineyards"), 
			attributes:{multiple: "multiple"}, 
			modelType: VineyardModel,
			template: templates.select_vineyards
		});
		this.views["selectVarietals"] = new Select({
			el: $("#select_varietals"),
			attributes: {},
			modelType: VarietalModel,
			template: templates.select_varietals
		});
		this.views["selectRegions"] = new Select({
			el: $("#select_regions"),
			attributes: {},
			modelType: RegionModel,
			template: templates.select_regions
		});
		
		this.views["wineDetail"] = new WineDetailView({
			el: $("#wineDetail div.content")
		}); 
		
		for (var key in this.collections){
//			if (key != "purchases" && key != "tastingNotes"){
				this.collections[key].fetch({add: true, success: function(collection){
					collection.trigger("fetched");
					var url = "";
					if (typeof(collection.url) == "function"){
						url = collection.url();
					}else {
						url = collection.url;
					}
					console.log("triggering fetched for " + url.split("/")[3]);
					if (collection.url == "/rest/WineCellar/wines"){
						Backbone.Relational.store.getCollection(WineModel).trigger("fetched");
					}
				}});
//			}
			
		}		
		this.setListeners();
		this.router = new Router({appView: this});
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
//		for (var key in this.views){
//			this.views[key].render();
//		}
	},
	refreshAll: function(){
		this.render();
		this.views.wineList.addAll();
	}, setListeners: function(){
//		var context = this;

	}
});
