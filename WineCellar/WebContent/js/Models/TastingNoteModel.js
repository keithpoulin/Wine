var TastingNoteModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/tastingNotes",
	idAttribute: "tastingNoteId",
	initialize: function(){
		this.set("wineSource", this.get("wineId") );
	},
	defaults: {
		wineId: 0,
		tastingDate: new Date(),
		reviewedBy: "Default User",
		review: "Default Tasting Note",
		rating: 0
	} 	
});
