var TastingNoteCollection = Backbone.Collection.extend({
	url: "/rest/WineCellar/tastingNotes",
	model: TastingNoteModel,
	initialize: function(){
		
	},
	fetchFromLocalStorage: function(){
		this.reset();
		var key = "tastingNotes";
		if (key in localStorage){
			var items = JSON.parse(localStorage[key]);
			for (var i=0; i < items.length; i++){
				this.add(new TastingNoteModel(items[i]));
			}
		}
	}
});
