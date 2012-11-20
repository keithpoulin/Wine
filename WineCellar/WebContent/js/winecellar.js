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
		this.brandMap = this.brands.toMap(function getKey(obj) { return obj.brandId; });
	}
	var brand = this.brandMap[id];
	return brand;
};

WineCellar.prototype.getLocation = function(id){
	if (this.locationMap == undefined || this.locationMap == null) {
		this.locationMap = this.locations.toMap(function getKey(obj) { return obj.locationId; });
	}
	var location = this.locationMap[id];
	return location;
};

WineCellar.prototype.getLocationType = function(id){
	if (this.locationTypeMap == undefined || this.locationMap == null) {
		this.locationTypeMap = this.locationTypes.toMap(function getKey(obj) { return obj.locationTypeId; });
	}
	var locationType = this.locationTypeMap[id];
	return locationType;
};

WineCellar.prototype.getPurchase = function(id){
	if (this.purchaseMap == undefined || this.purchaseMap == null) {
		this.purchaseMap = this.purchases.toMap(function getKey(obj) { return obj.purchaseId; });
	}
	var purchase = this.purchaseMap[id];
	return purchase;
};

WineCellar.prototype.getRegion = function(id){
	if (this.regionMap == undefined || this.regionMap == null) {
		this.regionMap = this.regions.toMap(function getKey(obj) { return obj.regionId; });
	}
	var region = this.regionMap[id];
	return region;
};

WineCellar.prototype.getTastingNote = function(id){
	if (this.tastingNoteMap == undefined || this.tastingNoteMap == null) {
		this.tastingNoteMap = this.tastingNotes.toMap(function getKey(obj) { return obj.tastingNoteId; });
	}
	var tastingNote = this.tastingNoteMap[id];
	return tastingNote;
};

WineCellar.prototype.getVarietal = function(id){
	if (this.varietalMap == undefined || this.varietalMap == null) {
		this.varietalMap = this.varietals.toMap(function getKey(obj) { return obj.varietalId; });
	}
	var varietal = this.varietalMap[id];
	return varietal;
};

WineCellar.prototype.getVineyard = function(id){
	if (this.vineyardMap == undefined || this.vineyardMap == null) {
		this.vineyardMap = this.vineyards.toMap(function getKey(obj) { return obj.vineyardId; });
	}
	var vineyard = this.vineyardMap[id];
	return vineyard;
};

WineCellar.prototype.getWine = function(id){
	if (this.wineMap == undefined || this.wineMap == null) {
		this.wineMap = this.wines.toMap(function getKey(obj) { return obj.wineId; });
	}
	var wine = this.wineMap[id];
	return wine;
};

WineCellar.prototype.refreshMaps = function(){
	this.brandMap = null;
	this.locationMap = null;
	this.locationTypeMap = null;
	this.purchaseMap = null;
	this.regionMap = null;
	this.tastingNoteMap = null;
	this.varietalMap = null;
	this.vineyardMap = null;
	this.wineMap = null;
};


/*
 * Extend Array
 */
Array.prototype.toMap = function(getKey) {
	var map = {};
	for (var i=0; i< this.length; i++){
		map[getKey(this[i])] = this[i];	
	}
	return map;
};
