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

WineCellar.prototype.getBrand = function(brandId){
	if (this.brandMap == undefined || this.brandMap == null) {
		this.brandMap = this.brands.toMap(function getKey(obj) { return obj.brandId; });
	}
	var brand = this.brandMap[brandId];
	return brand;
};

WineCellar.prototype.getLocation = function(locationId){
	if (this.locationMap == undefined || this.locationMap == null) {
		this.locationMap = this.locations.toMap(function getKey(obj) { return obj.locationId; });
	}
	var location = this.locationMap[locationId];
	return location;
};

WineCellar.prototype.getLocationType = function(locationTypeId){
	if (this.locationTypeMap == undefined || this.locationMap == null) {
		this.locationTypeMap = this.locationTypes.toMap(function getKey(obj) { return obj.locationTypeId; });
	}
	var locationType = this.locationTypeMap[locationTypeId];
	return locationType;
};

WineCellar.prototype.getPurchase = function(purchaseId){
	if (this.purchaseMap == undefined || this.purchaseMap == null) {
		this.purchaseMap = this.purchases.toMap(function getKey(obj) { return obj.purchaseId; });
	}
	var purchase = this.purchaseMap[purchaseId];
	return purchase;
};

WineCellar.prototype.getRegion = function(regionId){
	if (this.regionMap == undefined || this.regionMap == null) {
		this.regionMap = this.regions.toMap(function getKey(obj) { return obj.regionId; });
	}
	var region = this.regionMap[regionId];
	return region;
};

WineCellar.prototype.getTastingNote = function(tastingNoteId){
	if (this.tastingNoteMap == undefined || this.tastingNoteMap == null) {
		this.tastingNoteMap = this.tastingNotes.toMap(function getKey(obj) { return obj.tastingNoteId; });
	}
	var tastingNote = this.tastingNoteMap[tastingNoteId];
	return tastingNote;
};

WineCellar.prototype.getVarietal = function(varietalId){
	if (this.varietalMap == undefined || this.varietalMap == null) {
		this.varietalMap = this.varietals.toMap(function getKey(obj) { return obj.varietalId; });
	}
	var varietal = this.varietalMap[varietalId];
	return varietal;
};

WineCellar.prototype.getVineyard = function(vineyardId){
	if (this.vineyardMap == undefined || this.vineyardMap == null) {
		this.vineyardMap = this.vineyards.toMap(function getKey(obj) { return obj.vineyardId; });
	}
	var vineyard = this.vineyardMap[vineyardId];
	return vineyard;
};

WineCellar.prototype.getWine = function(idwineId){
	if (this.wineMap == undefined || this.wineMap == null) {
		this.wineMap = this.wines.toMap(function getKey(obj) { return obj.wineId; });
	}
	var wine = this.wineMap[wineId];
	return wine;
};

WineCellar.prototype.getWineTastingNotes = function(wineId){
	if (this.wineTastingNotesMappedArray == undefined || this.wineTastingNotesMappedArray == null) {
		this.wineTastingNotesMappedArray = this.tastingNotes.toMappedArray(function getKey(obj) { return obj.wineId; }, function getValueKey(obj) { return obj.tastingNoteId; });
	}
	var tastingNoteIds = this.wineTastingNotesMappedArray[wineId];
	var tastingNotes = [];
	for (var i=0; i< tastingNoteIds.length; i++){
		var tastingNote = this.getTastingNote(tastingNoteIds[i]);
		if(tastingNote != undefined) {
			tastingNotes.push(tastingNote);
		}
	}
	return tastingNotes;
};

WineCellar.prototype.getWinePurchases = function(wineId){
	if (this.winePurchasesMappedArray == undefined || this.winePurchasesMappedArray == null) {
		this.winePurchasesMappedArray = this.purchases.toMappedArray(function getKey(obj) { return obj.wineId; }, function getValueKey(obj) { return obj.purchaseId; });
	}
	var purchaseIds = this.winePurchasesMappedArray[wineId];
	var purchases = [];
	for (var i=0; i< purchaseIds.length; i++){
		var purchase = this.getPurchase(purchaseIds[i]);
		if(purchase != undefined) {
			purchases.push(purchase);
		}
	}
	return purchases;
};

WineCellar.prototype.refreshMaps = function(){
	this.brandMap = null;
	this.locationMap = null;
	this.locationTypeMap = null;
	this.purchaseMap = null;
	this.regionMap = null;
	this.tastingNoteMap = null;
	this.wineTastingNotesMap = null;
	this.varietalMap = null;
	this.vineyardMap = null;
	this.wineMap = null;
	this.wineTastingNotesMappedArray = null;
	this.winePurchasesMappedArray = null;
};

WineCellar.prototype.getWineAvgPrice = function(wineId, pricePer){
	var totalQuantity = 0;
	var totalPrice = 0;
	var purchases = this.getWinePurchases(wineId);
	for (var i=0; i< purchases.length; i++){
		var purchase = purchases[i];
		if(purchase.pricePer == pricePer) {
			totalPrice += (purchase.price * purchase.qtyPurchased);
			totalQuantity +=purchase.qtyPurchased;
		}
	}
	return totalPrice/totalQuantity;
};

WineCellar.prototype.getWineQtyOnHand = function(wineId, pricePer){
	var qtyOnHand = 0;
	var purchases = this.getWinePurchases(wineId);
	for (var i=0; i< purchases.length; i++){
		var purchase = purchases[i];
		if(purchase.pricePer == pricePer) {
			qtyOnHand += bottlesOnHand;
		}
	}
	return qtyOnHand;
};

WineCellar.prototype.getAvgRating = function(wineId){
	var totalRating = 0;
	var ratingCount = 0;
	var tastingNotes = this.getWineTastingNotes(wineId);
	for (var i=0; i< tastingNotes.length; i++){
		var tastingNote = tastingNotes[i];
		if(tastingNote != undefined && tastingNote != null) {
			totalRating += tastingNote.rating;
			ratingCount++;
		}
	}
	return totalRating/ratingCount;
};

WineCellar.prototype.getWineSummaries = function(){
	var wineSummaries = [];
	for (var i=0; i< this.wines.length; i++){
		var wine = this.wines[i];
		if(wine != undefined && wine != null) {
			var wineSummary = new WineSummary(this, wine);
			wineSummaries.push(wineSummary);
		}
	}
	return wineSummaries;
};

/*
 * Brand
 */
var Brand = function(brandId, brandName) {
	this.brandId = brandId;
	this.bandName = brandName;
};

/*
 * Location
 */
var Location = function(locationId, locationName, locationCity, locationState, LocationTypeId) {
	this.locationId = locationId;
	this.locationName = locationName;
	this.locationCity = locationCity;
	this.locationState = locationState;
	this.LocationTypeId = LocationTypeId;
};

/*
 * LocationType
 */
var LocationType = function(locationTypeId, locationType) {
	this.locationTypeId = locationTypeId;
	this.locationType = locationType;
};

/*
 * LocationType
 */
var Purchase = function(purchaseId, locationId, wineId, purchaseDate, price, pricePer, qtyPurchased, priceNotes, bottlesOnHand, invLocation) {
	this.purchaseId = purchaseId;
	this.locationId = locationId;
	this.wineId = wineId;
	this.purchaseDate = purchaseDate;
	this.price = price;
	this.pricePer = pricePer;
	this.qtyPurchased = qtyPurchased;
	this.priceNotes = priceNotes;
	this.bottlesOnHand = bottlesOnHand;
	this.invLocation = invLocation;
};

/*
 * Region
 */
var Region = function(regionId, region, subRegion) {
	this.regionId = regionId;
	this.region = region;
	this.subRegion = subRegion;
};

/*
 * TastingNote
 */
var TastingNote = function(tastingNoteId, wineId, tastingDate, reviewedBy, review, rating) {
	this.tastingNoteId = tastingNoteId;
	this.wineId = wineId;
	this.tastingDate = tastingDate;
	this.reviewedBy = reviewedBy;
	this.review = review;
	this.rating = rating;
};

/*
 * Varietal
 */
var Varietal = function(varietalId, varietal, type) {
	this.varietalId = varietalId;
	this.varietal = varietal;
	this.type = type;
};

/*
 * Vineyard
 */
var Vineyard = function(vineyardId, vineyard) {
	this.vineyardId = vineyardId;
	this.vineyard = vineyard;
};

/*
 * Wine
 */
var Wine = function(wineId, vineyardId, brandId, varietalId, regionId, vintageYear, wineDescription, listPrice, inventoryNotes) {
	this.wineId = wineId;
	this.vineyardId = vineyardId;
	this.brandId = brandId;
	this.varietalId = varietalId;
	this.regionId = regionId;
	this.vintageYear = vintageYear;
	this.wineDescription = wineDescription;
	this.listPrice = listPrice;
	this.inventoryNotes = inventoryNotes;
};


/*
 * WineSummary
 */
var WineSummary = function(wineCellar, wine) {
	this.wineId = wine.wineId;
	this.vineyard = wineCellar.getVineyard(wine.vineyardId);
	this.brand = wineCellar.getBrand(wine.brandId);
	this.varietal = wineCellar.getVarietal(wine.varietalId);
	this.region = wineCellar.getRegion(wine.regionId);
	this.pricePer = "bottle";
	this.avgPrice = wineCellar.getWineAvgPrice(wine.wineId, this.pricePer);
	this.qtyOnHand = wineCellar.getWineQtyOnHand(wine.wineId, this.pricePer);
	this.avgRating = wineCellar.getAvgRating(wine.wineId);
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
Array.prototype.toMappedArray = function(getKey, getValue) {
	var map = {};
	for (var i=0; i< this.length; i++){
		var key = getKey(this[i]);
		var value = getValue(this[i]);
		var ary = map[key];
		if(ary == undefined) {
			ary = [];
			map[key] = ary;
		}
		ary.push(value);
	}
	return map;
};
