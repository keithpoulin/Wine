var t_wineSummary = Handlebars.compile($("#t_m_wineSummary").html());
var t_purchaseDetails = Handlebars.compile($("#t_m_PurchaseDetails").html());
var t_tastingNotes = Handlebars.compile($("#t_m_TastingNotes").html());
var t_wineDetail = Handlebars.compile($("#t_m_WineDetail").html());

var WineSummaryList = Backbone.View.extend({
	el: $("#listView"),
	initialize: function(){				
		var wineSummaryCollection = new WineSummaryCollection();
		this.model = wineSummaryCollection;
		wineSummaryCollection.bind("add", this.addOne, this);
		wineSummaryCollection.fetchFromLocalStorage();
	},
	addOne: function(summary){
		var view = new WineSummaryView({model: summary});
		this.$el.append(view.render().el);
	},
	addAll: function() {
		this.model.each(this.addOne);
	}
});

var WineSummaryView = Backbone.View.extend({
	tagName: "li",
	template: Handlebars.compile($("#t_wineSummary").html()),
	initialize: function(){
		 this.model.bind('change', this.render, this);
		 this.model.bind('destroy', this.remove, this);
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));	
		this.vineyard = this.$(".vineyard");
		return this;
	},
	events: {
		"dblclick .vineyard":"editVineyardName"
	},
	editVineyardName: function(){
		this.$el.addClass("editing");
		$("#input_title").val(this.vineyard.html());
		var view = this;
		$("#saveVineyard").unbind().bind("click", function(){
			view.model.set("vineyard", {vineyard: $("#input_title").val(), vineyardId: 0});
			view.stopEditing();
		});
	},
	stopEditing: function(){
		this.$el.removeClass("editing");
		$("#input_title").val("");
		this.model.collection.saveToLocalStorage();
	}
});


