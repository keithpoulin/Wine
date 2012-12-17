Backbone.RelationalModel.prototype.fetchChildren = function( key, options, update ){
	options || ( options = {} );
	var setUrl = null,
		requests = [],
		rel = this.getRelation( key ),
		keyContents = rel && rel.keyContents;
	
		//don't bother getting wineIds if we are going to force an update
		var wineIds = null;
		if (!update){
			wineIds = _.pluck(Backbone.Relational.store.getCollection(rel.relatedModel), rel.keySource);
		}

	if ( update || _.contains(wineIds, keyContents) ) {
		
		// Try if the 'collection' can provide a url to fetch a set of models in one request.
		if ( rel.related instanceof Backbone.Collection && _.isFunction( rel.related.url ) ) {
			setUrl = rel.related.url( this );
		}
		
		// An assumption is that when 'Backbone.Collection.url' is a function, it can handle building of set urls.
		// To make sure it can, test if the url we got by supplying a list of models to fetch is different from
		// the one supplied for the default fetch action (without args to 'url').
		if ( setUrl && setUrl !== rel.related.url() ) {
			var opts = _.defaults(
				{
					error: function(collection, xhr, options) {
						console.log("error: " + xhr);
					},
					url: setUrl
				},
				options,
				{ add: true }
			);

			requests = [ rel.related.fetch( opts ) ];
		}
		else {
			console.log("error: setUrl && setUrl !== rel.related.url() == FALSE");
		}
	}
	return requests;
};