var WineDetailView = Backbone.View.extend({
	tagName: "div",
	template: templates.wineDetail,
	initialize: function(){
		this.wineId = null;
		this.collection =  Backbone.Relational.store.getCollection(WineModel);
		this.collection.on("add", this.onAdd, this);
	},
	setModel: function(model){		
		if (model != undefined){
			model.fetchChildren("tastingNotes", {}, true);
			model.fetchChildren("purchases", {}, true);
			this.model = model;
			this.render();
		}		
		return this;
	},
	setWineId: function(wineId){		
		this.wineId = wineId;
		var wineModel = this.collection.get(wineId);
		this.setModel( wineModel );
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