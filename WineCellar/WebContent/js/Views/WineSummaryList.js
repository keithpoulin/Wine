var WineSummaryList = Backbone.View.extend({
	initialize: function(){				
		this.model.bind("add", this.addOne, this);	
		var context = this;
		this.count = 0;		
		this.initialized = false;
		this.model.on("fetched", function(){
			context.refresh();
		});
	},
	addOne: function(summary, context){
		this.count = this.count + 1;
		var view = new WineSummaryView({
			model: summary, 
			attributes: {
				wineId: summary.get("wineId")
			}
		});		
		view.render();
		this.$el.append(view.$el);
		this.views.push(view);
		$(".msg_loading").hide();
//		this.refresh();
	},
	addAll: function() {
		for (var i=0; i< this.model.length; i++){
			this.addOne(this.model.at(i), this);
		}
	}, views: [],
	getView: function(wineId){
		var view = null;
		for (var i=0; i< this.views.length; i++){
			if (this.views[i].model.wineId == wineId){
				view  = this.views[i];
			}
		}
		return view;
	}, render: function(){		

	}, refresh: function(){		
		console.log("refreshing");
		try{
			this.$el.listview("refresh", true);
		}catch(e){
			console.log("failed to refresh listview");
		}
		this.initialized = true;
	}
});
