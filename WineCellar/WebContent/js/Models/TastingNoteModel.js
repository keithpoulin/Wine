var TastingNoteModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/WineCellar/tastingNotes",
	idAttribute: "tastingNoteId",
	defaults: {
		wineId: 0,
		tastingDate: new Date(),
		reviewedBy: "Default User",
		review: "Default Tasting Note",
		rating: 0
	} 	
});
