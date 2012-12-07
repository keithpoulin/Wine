/**
 * HTML Templates
 */
//var t_wineSummary = Handlebars.compile($("#t_wineSummary").html());
//var t_purchaseDetails = Handlebars.compile($("#t_m_PurchaseDetails").html());
//var t_tastingNotes = Handlebars.compile($("#t_m_TastingNotes").html());
//var t_wineDetail = Handlebars.compile($("#t_m_WineDetail").html());
//var t_wineApp = Handlebars.compile($("#t_WineApp").html());

var t_standard = {
		wineSummary: Handlebars.compile($("#t_wineSummary").html()),
		purchaseDetails: Handlebars.compile($("#t_m_PurchaseDetails").html()),
		tastingNotes: Handlebars.compile($("#t_m_TastingNotes").html()),
		wineDetail: Handlebars.compile($("#t_m_WineDetail").html()),
		wineApp: Handlebars.compile($("#t_WineApp").html())
	};
var t_mobile = {
		wineSummary: Handlebars.compile($("#t_wineSummary").html()),
		purchaseDetails: Handlebars.compile($("#t_m_PurchaseDetails").html()),
		tastingNotes: Handlebars.compile($("#t_m_TastingNotes").html()),
		wineDetail: Handlebars.compile($("#t_m_WineDetail").html()),
		wineApp: Handlebars.compile($("#t_WineApp").html())
};

var t = t_standard;

function useMobileTemplates(setting){
	if (setting == undefined){
		setting = false;
	}
	if (setting){
		t = t_mobile;
	}else{
		t = t_standard;
	}
}

/**
 * Options: boolean mobile, selector el
 * 
 */
var WineAppView = Backbone.View.extend({
	initialize: function(){
		useMobileTemplates(this.options.mobile);
		this.model = new WineCellarModel();
		this.$el.html(this.template());
		
		this.addView("wineSummaries", new WineSummaryList({
				model: this.model.get("wineSummaries"),
				el: this.$el.find("#wineSummaries")
			})
		);
		
		this.model.fetchFromLocalStorage();
	}, 
	template: t.wineApp,
	views: { },
	addView: function(name, view){
		if (!(name in this.views)){
			this.views[name] = view;
		}else{ alert("View with name: " + name + " already exists."); }	
	},
	render: function(){
		
	}
});

var WineSummaryList = Backbone.View.extend({
	initialize: function(){				
		this.model.bind("add", this.addOne, this);
	},
	addOne: function(summary){
		var view = new WineSummaryView({model: summary, attributes: {wineId: summary.get("wineId")}});
		this.$el.append(view.render().el);
	},
	addAll: function() {
		this.model.each(this.addOne);
	}
});

var WineSummaryView = Backbone.View.extend({
	tagName: "li",
	template: t.wineSummary,
	initialize: function(){
		 this.model.bind('change', this.render, this);
		 this.model.bind('destroy', this.remove, this);
//		 this.attributes.wineId = this.model.get("wineId");
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));	
		this.vineyard = this.$(".vineyard");
		return this;
	},
	events: {
		
	},	
	attributes: {
//		wineId: this.model.get("id")
	}
});


