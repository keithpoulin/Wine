/*
 * WineCellar 
 */
var WineCellar = function(brands, locations, locationTypes, purchases, regions, tastingNotes, varietals, vineyards, wines) {
	this.brands= brands;
	this.locations = locations;
	this.locationTypes = locationTypes;
	this.purchases = purchases;
	this.regions = regions;
	this.tastingNotes = tastingNotes;
	this.varietals = varietals;
	this.vineyards= vineyards;
	this.wines = wines;
};

WineCellar.fromJson = function(json) {
	var obj = JSON.parse (json);
	return new WineCellar(obj.brands, obj.locations, obj.locationTypes, obj.purchases, obj.regions, obj.tastingNotes, obj.varietals, obj.vineyards, obj.wines);
};

WineCellar.prototype.toJson = function() {
	JSON.stringify(this);
};

WineCellar.prototype.getBrand = function(id){
	if (this.brandMap == undefined || this.brandMap == null) {
		this.brandMap = new Map(this.brands, "brandId");
	}
	var brand = this.brandMap.get(id);
	return brand;
};

WineCellar.prototype.getLocation = function(id){
	if (this.locationMap == undefined || this.locationMap == null) {
		this.locationMap = new Map(this.locations, "locationId");
	}
	var location = this.locationMap.get(id);
	return location;
};

WineCellar.prototype.getLocationType = function(id){
	if (this.locationTypeMap == undefined || this.locationMap == null) {
		this.locationTypeMap = new Map(this.locationTypes, "locationTypeId");
	}
	var locationType = this.locationTypeMap.get(id);
	return locationType;
};

WineCellar.prototype.getPurchase = function(id){
	if (this.purchaseMap == undefined || this.purchaseMap == null) {
		this.purchaseMap = new Map(this.purchases, "purchaseId");
	}
	var purchase = this.purchaseMap.get(id);
	return purchase;
};

WineCellar.prototype.getRegion = function(id){
	if (this.regionMap == undefined || this.regionMap == null) {
		this.regionMap = new Map(this.regions, "regionId");
	}
	var region = this.regionMap.get(id);
	return region;
};

WineCellar.prototype.getTastingNote = function(id){
	if (this.tastingNoteMap == undefined || this.tastingNoteMap == null) {
		this.tastingNoteMap = new Map(this.tastingNotes, "tastingNoteId");
	}
	var tastingNote = this.tastingNoteMap.get(id);
	return tastingNote;
};

WineCellar.prototype.getVarietal = function(id){
	if (this.varietalMap == undefined || this.varietalMap == null) {
		this.varietalMap = new Map(this.varietals, "varietalId");
	}
	var varietal = this.varietalMap.get(id);
	return varietal;
};

WineCellar.prototype.getVineyard = function(id){
	if (this.vineyardMap == undefined || this.vineyardMap == null) {
		this.vineyardMap = new Map(this.vineyards, "vineyardId");
	}
	var vineyard = this.vineyardMap.get(id);
	return vineyard;
};

WineCellar.prototype.getWine = function(id){
	if (this.wineMap == undefined || this.wineMap == null) {
		this.wineMap = new Map(this.wines, "wineId");
	}
	var wine = this.wineMap.get(id);
	return wine;
};

/*
 * Map
 */
var Map = function(objects, keyPropertyName) {
	for (var i=0; i< objects.length; i++){
		this[objects[i][keyPropertyName]] = objects[i];	
	}	
};
Map.prototype.put = function(key, value) {
	this[key] = value;
};
Map.prototype.get = function(key) {
	return this[key];
};
Map.prototype.remove = function(key) {
	delete this[key];
};
