var WineDetailView = Backbone.View.extend({
	tagName: "div",
	template: templates.wineDetail,
	initialize: function(){
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
//			el: "ul.tastingNoteList",
			selector: "ul.tastingNoteList"
		}); 
		
	},
	views: {},
	setModel: function(model){		
		if (model != undefined){
			var context = this;
			var success = function(model, response, options){
				console.log("success function called");
				for (var key in context.views){
					context.views[key].render();
				}
			};
			model.fetchChildren("tastingNotes", {success: success}, true);
			model.fetchChildren("purchases", {success: success}, true);
			this.model = model;
			this.model.on("change", this.render, this);
			this.views.purchases.setModel(model);
			this.views.tastingNotes.setModel(model);
			this.render();	
			
		}
		
		return this;
	},
	setWineId: function(wineId){		
		this.wineId = wineId;
		var wineModel = this.collection.get(wineId);
		this.setModel( wineModel );
		this.$el.show();
	},
	render: function(){		
		this.$el.html( this.template( this.model.toJSON() ) );		
		return this;
	},
	onAdd: function(model, collection, options){
		if (model.get("wineId") == this.wineId){
			this.setModel(model);
		}
	}
});