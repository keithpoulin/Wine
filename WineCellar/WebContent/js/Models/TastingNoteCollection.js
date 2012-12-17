var TastingNoteCollection = Backbone.Collection.extend({
	url: function(models){
		var url = "/rest/WineCellar/tastingNotes";
		if (models != undefined){
			var wineId = models.get("wineId");
			if (wineId != undefined && wineId != null){
				url = "/rest/WineCellar/wines/" + wineId + "/tastingNotes";
			}
		}		
		return url;
	},
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
