Backbone.Collection.prototype.update = function(colIn){  
	var origCol = _.pluck(this.models, "attributes");
	
	for (var i=0; i < colIn.length; i++){
		var modIn = colIn[i];
	    var existing = this.get(modIn);
	    if (existing) { 
	    	existing.set(modIn); 
	    }
	    else { 
	    	this.add(modIn); 
	    }
	}
	
//	remove missing models
	var collection = this;
	var toRemove = [];
	_.each(origCol, function(model, index){
		for (var i=0; i < origCol.length; i++){
			if( _.isEqual(colIn[i], model)){
				return true;
			};
		}
		toRemove.push(collection.at(index));
	});
  
	this.remove(toRemove);
	return this;
};

Backbone.Model.prototype.update = function(modelIn){
//	console.log("updating...");
	if (typeof(modelIn) != "object"){
		try{
			modelIn = JSON.parse(modelIn);
		}catch(e){
			console.log(e.message);
			return false;
		}
	}
	for (var key in modelIn){
//		console.log(key);
		if (this.get(key) instanceof Backbone.Collection){
			this.get(key).update(modelIn[key]);
		}
	}
	return this;
};