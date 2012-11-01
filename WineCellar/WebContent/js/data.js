function Data(){
	this.varietals = ("varietals" in localStorage) ? (JSON.parse(localStorage.varietals)) : [] ;
	this.vineyards = ("vineyards" in localStorage) ? (JSON.parse(localStorage.vineyards)) : [] ;
	this.wines = ("wines" in localStorage) ? (JSON.parse(localStorage.wines)) : [] ;
	this.wineSummaries = ("wineSummaries" in localStorage) ? (JSON.parse(localStorage.wineSummaries)) : [] ;
	this.wineDetails = ("wineDetails" in localStorage) ? (JSON.parse(localStorage.wineDetails)) : [] ;
	this.lastUpdate = ("lastUpdate" in localStorage) ? localStorage.lastUpdate : 0 ;
}

Data.prototype.updateAll = function(){
	updateAll();
	localStorage.lastUpdate = new Date().getTime();
	this.refresh();
};

function updateAll(){
	updateVarietals();
	updateVineyards();
	updateWines();
	updateWineSummaries();
	updateWineDetails();
}

Data.prototype.refresh = function(){
	this.varietals = ("varietals" in localStorage) ? (JSON.parse(localStorage.varietals)) : [] ;
	this.vineyards = ("vineyards" in localStorage) ? (JSON.parse(localStorage.vineyards)) : [] ;
	this.wines = ("wines" in localStorage) ? (JSON.parse(localStorage.wines)) : [] ;
	this.wineSummaries = ("wineSummaries" in localStorage) ? (JSON.parse(localStorage.wineSummaries)) : [] ;
	this.wineDetails = ("wineDetails" in localStorage) ? (JSON.parse(localStorage.wineDetails)) : [] ;
	this.lastUpdate = ("lastUpdate" in localStorage) ? localStorage.lastUpdate : 0 ;
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
			if (key != "lastUpdate"){
				localStorage[key] = JSON.stringify(this[key]);
			}else{
				localStorage[key] = this[key];
			}
		}	
	}
};

Data.prototype.resetWineDetails = function(){
	this.wineDetails = [];
};

Data.prototype.getWineDetail = function(wineId){
	for (var i=0; i< this.wineDetails.length; i++){
		if (Number(this.wineDetails[i].wineId) == Number(wineId)){
			return this.wineDetails[i];
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



function updateVarietals(args){
	args == undefined ? args = {} : args;
	args["lookupDataType"] = getVarietalsArgs().lookupDataType;
	$.ajax({
		url: "/getLookupData",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.varietals = JSON.stringify(resp);
		}
	});
}

function updateVineyards(args){
	args == undefined ? args = {} : args;
	args["lookupDataType"] = getVineyardsArgs().lookupDataType;
	$.ajax({
		url: "/getLookupData",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.vineyards = JSON.stringify(resp);
		}
	});
}

function updateWines(args){
	$.ajax({
		url: "/getWines",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.wines = JSON.stringify(resp);
		}
	});
}

function updateWineSummaries(args){
	args == undefined ? args = {} : args;
	$.ajax({
		url: "/getWineSummary",
		data: args,
		dataType: "json",
		success: function(resp){
			localStorage.wineSummaries = JSON.stringify(resp);					
		}
	});
}

function updateWineDetails(args){
	args == undefined ? args = {wineId: 1} : args;
	$.ajax({
		url: "/getWineDetails",
		data: args,
		dataType: "json",
		success: function(resp){
//			localStorage.wineDetails = JSON.stringify(resp);
			addWineDetailsToLS(resp);
		}
	});
}

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
