function UpdateManager(data){
	this.count = 0;
	this.data = data;
}

UpdateManager.prototype.start = function(){
	this.count++;
};

UpdateManager.prototype.end = function(){
	if (this.count > 0){
		this.count --;
	}
	if (this.count == 0){
		this.data.refresh();
		this.data.callback();
	}
};

function Data(){
	window.updateManager = new UpdateManager(this);
	this.varietals = ("varietals" in localStorage) ? (JSON.parse(localStorage.varietals)) : [] ;
	this.vineyards = ("vineyards" in localStorage) ? (JSON.parse(localStorage.vineyards)) : [] ;
	this.wines = ("wines" in localStorage) ? (JSON.parse(localStorage.wines)) : [] ;
	this.wineSummaries = ("wineSummaries" in localStorage) ? (JSON.parse(localStorage.wineSummaries)) : [] ;
	this.wineDetails = ("wineDetails" in localStorage) ? (JSON.parse(localStorage.wineDetails)) : [] ;
	this.lastUpdate = ("lastUpdate" in localStorage) ? localStorage.lastUpdate : 0 ;
	this.regions = ("regions" in localStorage) ? (JSON.parse(localStorage.regions)) : [] ;
	this.brands = ("brands" in localStorage) ? (JSON.parse(localStorage.brands)) : [] ;
	this.userName = ("userName" in localStorage) ? (localStorage.userName) : "" ;
	this.userEmail = ("userEmail" in localStorage) ? (localStorage.userEmail) : "" ;
	this.locations = ("locations" in localStorage) ? (JSON.parse(localStorage.locations)) : [] ;
	this.wineCellar = ("wineCellar" in localStorage) ? (JSON.parse(localStorage.wineCellar)) : [] ;
	
	
	this.callback = function(){};
	
	this.$wineSummaries = null;
	
	if (this.varietals.length == 0 ||
	this.vineyards.length == 0||
	this.wineDetails.length == 0 ||this.wines.length == 0 ||
	this.wineSummaries.length == 0 || this.wineCellar.length == 0){
		this.updateAll();
	}
}

Data.prototype.updateAll = function(){
	updateAll();
	localStorage.lastUpdate = new Date().getTime();
	this.refresh();
};
Data.prototype.setDisplayWineSummaries = function(funct){
	this.displayWineSummaries = function(){funct(this.$wineSummaries, this.wineSummaries);};
};
Data.prototype.displayWineSummaries = function(){};

Data.prototype.sortAll = function(){
	this.varietals.sort(sort_by("varietal", true, function(a){return a.toUpperCase();}));
	this.vineyards.sort(sort_by("vineyard", true, function(a){return a.toUpperCase();}));
	this.regions.sort(sort_by("region", true, function(a){return a.toUpperCase();}));
	this.brands.sort(sort_by("brandName", true, function(a){return a.toUpperCase();}));
	this.wineSummaries.sort(sort_WineSummaries("vineyard", true, function(a){return a.toUpperCase();}));
	this.locations.sort(sort_by("locationName", true, function(a){return a.toUpperCase();}));
};

Data.prototype.sortWineSummaries = function(field, descending, display){
	this.wineSummaries.sort(sort_WineSummaries(field, descending, function(a){return typeof(a) == "string" ? a.toUpperCase() : Number(a);}));
	if (display){
		this.displayWineSummaries();
	}
//	this.save();
};

window.sort_WineSummaries = function(field, reverse, primer){
	var key = function (x) {
		if (x != undefined){
			if (field == "brandName"){
				x = x["brand"];
			}else if(field=="region" || field == "subRegion"){
				x = x["region"];
			}else if (field=="varietal" || field=="type"){
				x = x["varietal"];
			}else if(field == "vineyard"){
				x = x["vineyard"];
			}
			if (x[field] == undefined){
				return "";
			}
		}else{
			return "";
		}		
		return primer ? primer(x[field]) : x[field];
	};
	
	return function (a,b) {
		var A = key(a), B = key(b);
		return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
	};
};

window.sort_by = function(field, reverse, primer){
	 var key = function (x) {		 
		 if (x[field] == undefined){
			 return "";
		 }
		 return primer ? primer(x[field]) : x[field];
   };
   
   return function (a,b) {
	   var A = key(a), B = key(b);
	   return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
   };
};

function updateAll(){
	updateVarietals();
	updateVineyards();
	updateWines();
	updateWineSummaries();
	updateWineDetails();
	updateRegions();
	updateBrands();
	updateLocations();
	updateWineCellar();
}

Data.prototype.refresh = function(){
	this.varietals = ("varietals" in localStorage) ? (JSON.parse(localStorage.varietals)) : [] ;
	this.vineyards = ("vineyards" in localStorage) ? (JSON.parse(localStorage.vineyards)) : [] ;
	this.wines = ("wines" in localStorage) ? (JSON.parse(localStorage.wines)) : [] ;
	this.wineSummaries = ("wineSummaries" in localStorage) ? (JSON.parse(localStorage.wineSummaries)) : [] ;
	this.wineDetails = ("wineDetails" in localStorage) ? (JSON.parse(localStorage.wineDetails)) : [] ;
	this.lastUpdate = ("lastUpdate" in localStorage) ? localStorage.lastUpdate : 0 ;
	this.regions = ("regions" in localStorage) ? (JSON.parse(localStorage.regions)) : [] ;
	this.brands = ("brands" in localStorage) ? (JSON.parse(localStorage.brands)) : [] ;
	this.locations = ("locations" in localStorage) ? (JSON.parse(localStorage.locations)) : [] ;
	this.wineCellar = ("wineCellar" in localStorage) ? (JSON.parse(localStorage.wineCellar)) : [] ;

	this.sortAll();
	this.save();
	this.callback();
	console.log("refreshed Data");
};

Data.prototype.getLastUpdate = function(){
	var date = new Date(this.lastUpdate);
	return date.toString();
};

Data.prototype.setLastUpdate = function(){
	var date = new Date().getTime(); 
	localStorage.lastUpdate = new Date().getTime();
	this.lastUpdate = date;
};

Data.prototype.setWineSummaries = function(json){
	this.wineSummaries = json;
};

Data.prototype.addWineDetails = function(args){
	if ("wineId" in args){
		updateWineDetails({wineId: wineId});
	}else if ("data" in args){
		addWineDetailsToLS(args.data);
	}
	this.refresh();
};

Data.prototype.save = function(){
	for (key in this){
		if (this.hasOwnProperty(key)){
			if (key != "lastUpdate" && key != "$wineSummaries" && key != "callback" && key != "displayWineSummaries" && key != "userName" && key != "userEmail"){
				localStorage[key] = JSON.stringify(this[key]);
			}else if (key == "lastUpdate" || key == "userName" || key == "userEmail"){
				localStorage[key] = this[key];
			}
		}	
	}
};

Data.prototype.resetWineDetails = function(){
	this.wineDetails = [];
};

Data.prototype.getLocation = function(id){
	for (var i=0; i< this.locations.length; i++){
		if (Number(this.locations[i].locationId) == Number(id)){
			return this.locations[i];
		}
	}
	return null;
};

Data.prototype.getWineDetail = function(wineId){
	for (var i=0; i< this.wineDetails.length; i++){
		if (Number(this.wineDetails[i].wineId) == Number(wineId)){
			return this.wineDetails[i];
		}
	}
	return null;
};

Data.prototype.getWineSummary = function(wineId){
	for (var i=0; i< this.wineSummaries.length; i++){
		if (Number(this.wineSummaries[i].wineId) == Number(wineId)){
			return this.wineSummaries[i];
		}
	}
	return null;
};

Data.prototype.hasWineDetail = function(args){
	var wineId = null;
	if ( typeof(args) == "string" || typeof(args) == "number"){
		wineId = args;
	}else if (typeof(args) == "object" && "wineId" in args){
		wineId = args.wineId;
	}else if (typeof(args) == "object" && "data" in args){
		wineId = args.data.wineId;
	}
	wineId = Number(wineId);
	for (var i=0; i< this.wineDetails.length; i++){
		var d = this.wineDetails[i];
		if (Number(d.wineId) == wineId){
			return true;
		}
	}
	return false;
};

function addWineDetailsToLS(details){
	var ls = [];
	var lsWD = lsWineDetails();
	if (lsWD != null){
		if (lsWD instanceof Array){			
			ls = lsWD;
		}else{
			ls.push(lsWD);
		}
	}
	if (!isWineDetailInlocalStorage({"data": details})){
		ls.push(details);
		localStorage.wineDetails = JSON.stringify(ls);
	}		
};

function isWineDetailInlocalStorage(args){
	var wineId = null;
	if ("wineId" in args){
		wineId = args.wineId;
	} else if ( "data" in args){
		wineId = args.data.wineId;
	}
	if ("wineDetails" in localStorage){
		var details = JSON.parse(localStorage.wineDetails);
		for (var i=0; i<details.length; i++){
			if (details[i].wineId == wineId){
				return true;
			}
		}
	}
	return false;
}

function getWineSummaries(args){
	$("#wineSummaries").html(msgPleaseWait());
	$("#wineDetails").addClass("invisible");
	args == undefined ? args = {} : args;
	$.ajax({
		url: "/getWineSummary",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.wineSummaries = JSON.stringify(resp);					
			displayWineSummaries($("#wineSummaries"), resp);
			data.refresh();
		}
	});
}

function getWineDetails(args){
	$("#wineDetails").html(msgPleaseWait());
	args == undefined ? args = {} : args;
	$.ajax({
		url: "/getWineDetails",
		data: args,
		dataType: "json",
		success: function(resp){
			data.addWineDetails({data: resp});
			displayWineDetails($("#wineDetails"), resp);
		}
	});
}

function getLookupArgs(type){
	var args = {};
	args["lookupDataType"] = type;
	return args;
}

function getVarietalsArgs(){
	var args = {};
	args["lookupDataType"] = "Varietals";
	return args;
}

function getVineyardsArgs(){
	var args = {};
	args["lookupDataType"] = "Vineyards";
	return args;
}

function getWinesArgs(){
	var args = {};
	/**
	 * TODO: get params code goes here
	 * 	args[param.toLowerCase()] = value;
	 */
	return args;
}

function getWineSummariesArgs(){
	var args = {};
	/**
	 * TODO: get params code goes here;
	 * 	args[param.toLowerCase()] = value;
	 */
	return args;
}

function getWineDetailsArgs(){
	var args = {};
	$wineId = $("#wineDetailsArg_WineId");
	args["wineId"] = $wineId.val();
	return args;
}

function updateBrands(args){
	updateManager.start();
	args == undefined ? args = {} : args;
	args["lookupDataType"] = getLookupArgs("brands").lookupDataType;
	$.ajax({
		url: "/getLookupData",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.brands = JSON.stringify(resp);
			updateManager.end();
		}
	});
}

function updateVarietals(args){
	updateManager.start();
	args == undefined ? args = {} : args;
	args["lookupDataType"] = getVarietalsArgs().lookupDataType;
	$.ajax({
		url: "/getLookupData",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.varietals = JSON.stringify(resp);
			updateManager.end();
		}
	});
}

function updateRegions(args){
	updateManager.start();
	args == undefined ? args = {} : args;
	args["lookupDataType"] = getLookupArgs("regions").lookupDataType;
	$.ajax({
		url: "/getLookupData",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.regions = JSON.stringify(resp);
			updateManager.end();
		}
	});
}

function updateLocations(args){
	updateManager.start();
	args == undefined ? args = {} : args;
	args["lookupDataType"] = getLookupArgs("locations").lookupDataType;
	$.ajax({
		url: "/getLookupData",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.locations = JSON.stringify(resp);
			updateManager.end();
		}
	});
}

function updateVineyards(args){
	updateManager.start();
	args == undefined ? args = {} : args;
	args["lookupDataType"] = getVineyardsArgs().lookupDataType;
	$.ajax({
		url: "/getLookupData",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.vineyards = JSON.stringify(resp);
			updateManager.end();
		}
	});
}

function updateWines(args){
	updateManager.start();
	$.ajax({
		url: "/getWines",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.wines = JSON.stringify(resp);
			updateManager.end();
		}
	});
}

function updateWineSummaries(args){
	args == undefined ? args = {} : args;
	updateManager.start();
	$.ajax({
		url: "/getWineSummary",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.wineSummaries = JSON.stringify(resp);	
			updateManager.end();
		}
	});
}

function updateWineDetails(args){
	args == undefined ? args = {} : args;
	updateManager.start();
	$.ajax({
		url: "/getWineDetails",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.wineDetails = JSON.stringify(resp);
//			addWineDetailsToLS(resp);
			updateManager.end();
		}
	});
}
function updateWineCellar(args){
	args == undefined ? args = {} : args;
	args["dataType"] = "wine_cellar";
	updateManager.start();
	$.ajax({
		url: "/WineCellar",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.wineCellar = JSON.stringify(resp);
			updateManager.end();
		}
	});
}

Data.prototype.getTotalBoh = function(){
	return this.getTotalWineDetailInfo().totalBoh;
};

Data.prototype.getTotalVarietals = function(){
	return this.varietals.length;
};

Data.prototype.getTotalVineyards = function(){
	return this.vineyards.length;
};

function hasBrand(wineSummary){
	if (wineSummary.brand == null || wineSummary.brand == undefined || wineSummary.brand.brandId == 0){
		return false;
	}else{
		return true;
	}
}

/*
Data.prototype.getTotalWineDetailInfo = function(){
	var bottles = 0;
	var cost = 0;
	var ratingTotal = 0;
	var ratingCount = 0;
	var totalPurchases = 0;
	var totalTastings = 0;
	var totalBoh = 0;
	for (var i=0; i<this.wineDetails.length; i++){
		var wineDetail = this.wineDetails[i];
		for (var j=0; j<wineDetail.purchaseDetails.length; j++){
			var purchase = wineDetail.purchaseDetails[j];
			if (purchase.pricePer.toLowerCase() == "bottle"){
				bottles = bottles + Number(purchase.qtyPurchased);
				if (purchase.price != undefined){
					cost = cost + Number(purchase.price);
				}
				if (purchase.qtyOnHand != undefined){
					totalBoh = totalBoh + Number(purchase.qtyOnHand);
				}
			}
		}
		totalPurchases = totalPurchases + wineDetail.purchaseDetails.length;
		for (var k=0; k<wineDetail.tastingNotes.length; k++){
			var note = wineDetail.tastingNotes[k];
			if (Number(note.rating) >0){
				ratingTotal = ratingTotal + Number(note.rating);
				ratingCount++;
				totalTastings++;
			}
		}
	}
	return {
		totalBottles: bottles,
		totalCost: cost.toFixed(2),
		ratingTotal: ratingTotal,
		ratingCount: ratingCount,
		avgRating: (ratingTotal/ratingCount).toFixed(2),
		totalPurchases: totalPurchases,
		totalTastings: totalTastings,
		avgBottlesPerPurchase: (bottles/totalPurchases).toFixed(2),
		avgCost: (cost/bottles).toFixed(2),
		totalBoh: totalBoh
	};
};
*/
Data.prototype.getWineCellarStats = function(){
	var bottles = 0;
	var cost = 0;
	var ratingTotal = 0;
	var ratingCount = 0;
	var totalPurchases = 0;
	var totalTastings = 0;
	var totalBoh = 0;
	for (var i=0; i<this.wineCellar.purchases.length; i++){
		var purchase = this.wineCellar.purchases[i];
		if (purchase.pricePer.toLowerCase() == "bottle"){
			bottles = bottles + Number(purchase.qtyPurchased);
			if (purchase.price != undefined){
				cost = cost + Number(purchase.price) * Number(purchase.qtyPurchased);
			}
			if (purchase.qtyOnHand != undefined){
				totalBoh = totalBoh + Number(purchase.qtyOnHand);
			}
		}
		totalPurchases++;
	}
	for (var k=0; k<this.wineCellar.tastingNotes.length; k++){
		var note = this.wineCellar.tastingNotes[k];
		if (Number(note.rating) >0){
			ratingTotal = ratingTotal + Number(note.rating);
			ratingCount++;
			totalTastings++;
		}
	}

	return {
		totalBottles: bottles,
		totalCost: cost.toFixed(2),
		ratingTotal: ratingTotal,
		ratingCount: ratingCount,
		avgRating: (ratingTotal/ratingCount).toFixed(2),
		totalPurchases: totalPurchases,
		totalTastings: totalTastings,
		avgBottlesPerPurchase: (bottles/totalPurchases).toFixed(2),
		avgCost: (cost/bottles).toFixed(2),
		totalBoh: totalBoh
	};
};

Data.prototype.getPurchaseDetail = function(purchaseId){
	for (var i=0; i< this.wineDetails.length; i++){
		for (var j=0; j< this.wineDetails[i].purchaseDetails.length; j++){
			var purchaseDetail = this.wineDetails[i].purchaseDetails[j];
			if (purchaseDetail.purchaseId == purchaseId){
				return purchaseDetail;
			}
		}
	}
	return null;
};

Data.prototype.getTastingNote = function(tastingNoteId){
	for (var i=0; i < this.wineDetails.length; i++){
		for (var j=0; j < this.wineDetails[i].tastingNotes.length; j++){
			var tastingNote = this.wineDetails[i].tastingNotes[j];
			if (tastingNote.tastingNoteId == tastingNoteId){
				return tastingNote;
			}
		}
	}
	return null;
};

Data.prototype.submitPurchase = function (purchase, callback){
	if (callback == undefined){
		callback = function(){};
	}
	var arg = {
		lookupDataType: "PURCHASES",	
		data: purchase
	};
	var datasource = this;
	var updateId = function(purchaseId){
		datasource.getPurchaseDetail(0).purchaseId = purchaseId;
		datasource.save();
		datasource.refresh();
	};
	$.ajax({
		url: "/getLookupData",
		type: "PUT",
		data: JSON.stringify(arg),
		success: function(purchaseId){
			updateId(purchaseId);
			callback(purchaseId);
			console.log("entered purchase detail id " + purchaseId);
		}
	});
	
	var wineDetail = this.getWineDetail(purchase.wineId);
	purchase.purchaseId = 0;
	wineDetail.purchaseDetails.push(purchase);
};

Data.prototype.submitTastingNote = function (note, callback){
	if (callback == undefined){
		callback = function(){};
	}
	var datasource = this;
	var updateId = function(tastingId){
		datasource.getTastingNote(0).tastingNoteId = tastingId;
		datasource.save();
		datasource.refresh();
	};
	var arg = {
		lookupDataType: "TASTING_NOTES",	
		data: note
	};
	$.ajax({
		url: "/getLookupData",
		type: "PUT",
		data: JSON.stringify(arg), 
		success: function(tastingId){	
			updateId(tastingId);
			callback(tastingId);
			console.log("entered tasting note id " + tastingId);
		}
	});
	var wineDetail = this.getWineDetail(note.wineId);
	note.tastingNoteId = 0;
	wineDetail.tastingNotes.push(note);
};

function lsVarietals(){
	return ("varietals" in localStorage) ? (JSON.parse(localStorage.varietals)) : null ; 
}
function lsVineyards(){	
	return ("vineyards" in localStorage) ? (JSON.parse(localStorage.vineyards)) : null ; 
}
function lsWines(){
	return ("wines" in localStorage) ? (JSON.parse(localStorage.wines)) : null ; 
}
function lsWineSummaries(){
	return ("wineSummaries" in localStorage) ? (JSON.parse(localStorage.wineSummaries)) : null ; 
}
function lsWineDetails(){
	return ("wineDetails" in localStorage) ? (JSON.parse(localStorage.wineDetails)) : null ; 
}
