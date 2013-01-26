var WineDetailView = Backbone.View.extend({
	tagName: "div",
	template: templates.wineDetail,
	initialize: function(){
		_.bindAll(this);
		
		this.$el.hide();
		
		this.wineId = null;
		this.collection =  Backbone.Relational.store.getCollection(WineModel);
		this.collection.on("add", this.onAdd, this);
		
		//added this because the child views below were not able to find elements in the DOM as they had not been attached yet
		//Also, there is something "strange" going on with setting the purchase and tasting note view's $el/el tag - it isn't finding the 
		//correct tag. The workaround I have working currently is to set the element on each rendering of the view (see the ListView class)
		this.$el.html( this.template( {} ));
		this.views["purchases"] = new ListView({
			template: templates.purchaseList, 
			selector: "ul.purchaseList"
		});
		
		this.views["tastingNotes"] = new ListView({
			template: templates.tastingNoteList, 
			selector: "ul.tastingNoteList"
		}); 
		
		this.views["addTastingNote"] = new CreateItemView({
			$el: this.$(".createItemPopup"),
			attributes: { id: "addTastingNoteForm"},
			template: templates.formAddTastingNote
		});
		
		this.views["addPurchase"] = new CreateItemView({
			$el: this.$(".createItemPopup"), 
			attributes: {id: "addPurchaseForm"},
			template: templates.formAddPurchase
		});
 		
	},
	stats: {},
	views: {},
	setModel: function(model){		
		if (model != undefined){
			var context = this;
			var success = function(model, response, options){
				console.log("success function called");
				for (var key in context.views){
					context.calculateStats();
					context.render();
					context.views[key].render();					
				}
			};
			model.fetchChildren("tastingNotes", {success: success}, true);
			model.fetchChildren("purchases", {success: success}, true);
			this.model = model;
			this.model.on("change", this.render, this);
			this.model.on("all", this.calculateStats, this);
			this.views.purchases.setModel(model.get("purchases"));
			this.views.tastingNotes.setModel(model.get("tastingNotes"));		
		}		
		return this;
	},
	setWineId: function(wineId){		
		$("div.wineDetail.ajaxLoader").show();
		this.wineId = wineId;		
		var wineModel = this.collection.get(wineId);
		this.setModel( wineModel );		
	},
	render: function(){		
		this.$el.html( this.template( _.extend(this.model.toJSON(), this.stats )) );
		
		var tastingContext = this.views.addTastingNote;
		var purchaseContext = this.views.addPurchase;
		tastingContext.setElement(this.$(".createItemPopup")); 
		purchaseContext.setElement(this.$(".createItemPopup"));
		
		purchaseContext.close();
		tastingContext.close();
		
		this.$(".addTastingNoteBtn").on("click", function(){
			tastingContext.open();
		});
		
		this.$(".addPurchaseBtn").on("click", function(){
			purchaseContext.open();
		});
	
		for (var key in this.views){
			this.views[key].render();
		}
		this.$el.show();
		this.$el.css("display", "block");
		$("div.wineDetail.ajaxLoader").hide();
		return this;
	},
	onAdd: function(model, collection, options){
		if (model.get("wineId") == this.wineId){
			this.setModel(model);
		}
	}, calculateStats: function(){
		var stats = this.stats;
		stats.ratings = _.map(this.model.attributes.tastingNotes.models, function(note){
			return note.get("rating");
		});
		
		_.extend(stats, (function (){
			var l = stats.ratings.length;
			var value = 0;
			var min = stats.ratings[0]; 
			var max = stats.ratings[0];
			for (var i = 0; i< stats.ratings.length; i++){
				value = value + stats.ratings[i];
				if (stats.ratings[i] == 0){
					l--;
				}
				if (stats.ratings[i] > max){
					max = stats.ratings[i];
				}else if ( stats.ratings[i] < min){
					min = stats.ratings[i];
				}
			}
			return {avgRating: (value/l).toFixed(1), minRating: min, maxRating: max} ;
		})());
		
		stats.qtyOnHand = _.reduce(_.map(this.model.attributes.purchases.models, function(purchase){
			return purchase.get("qtyOnHand");
		}), function(memo, qty){
			return memo + qty; 
		}, 0);
		
		stats.prices = _.map(this.model.attributes.purchases.models, function(purchase){
			if (purchase.get("pricePer").toUpperCase() == "BOTTLE"){
				return purchase.get("price");
			}			
		});
		
		_.extend(stats, (function(){
			var l = stats.prices.length;
			var value = 0;
			var min = stats.prices[0]; 
			var max = stats.prices[0];
			for (var i = 0; i< stats.prices.length; i++){
				value = value + stats.prices[i];
				if (stats.prices[i] == 0){
					l--;
				}
				if (stats.prices[i] > max){
					max = stats.prices[i];
				}else if ( stats.prices[i] < min){
					min = stats.prices[i];
				}
			}
			return {avgPrice: (value/stats.prices.length).toFixed(3), maxPrice: max, minPrice: min};
		})() );
	}
});