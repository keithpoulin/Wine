$(document).ready(function(){
	initializeData();
	initializeEvents();
	initializeAppearance();
});

function initializeData(){
	/**
	 * TODO: Finish the Data "class" (data.js) and implement it here. 
	 */
	data = new Data();
	data.callback = function(){
		setFilterVineyards();
	};
	filterManager = new FilterManager($("#wineSummaries"));
}

function initializeEvents(){
	$("#wineSummaries").overscroll();
	
	$("#getVineyards").click(function(){
		$("#vineyards").html("");
		getVineyards(getVineyardsArgs());	
	});
	
	$("#getVarietals").click(function(){
		$("#varietals").html("");
		getVarietals(getVarietalsArgs());
	});
	
	$("#getWines").click(function(){
		$("#wines").html("");
		getWines(getWinesArgs());
	});

	$("#getWineSummaries").click(function(){
		$("#wineSummaries").html("");
		getWineSummaries(getWineSummariesArgs());
	});

	$("#getWineDetails").click(function(){
		$("#wineDetails").html("");
		getWineDetails(getWineDetailsArgs());
	});
		
	$("#wineSummaries").on("overscroll:driftend", function(){
		$(this).mouseout();
	});
	
	$("#filterBoh").click(function(){
		if ($(this).is(":checked")){
			filterManager.filters.inStock.enable();
		}else{
			filterManager.filters.inStock.disable();
		}
		filterManager.applyAll();
	});
	
	$("#updateData").click(function(){
		localStorage.clear();
		data.updateAll();
		
	});
}

function setWineDetailsListHeight(){
	$("#wineDetails ul").css({maxHeight: ($(window).height() - 133 - 150)});
}

function initializeAppearance(){
	$("#getVarietals, #getVineyards, #getWines, #getWineSummaries, #getWineDetails, #filterBoh").button();
	if (data.wineSummaries.length > 0){
		displayWineSummaries($("#wineSummaries"), JSON.parse(localStorage.wineSummaries));
	}else {
		getWineSummaries();
	}
	
	setFilterVineyards();
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

function displayVarietals($target, json){
	var html = "<ul class='results'>";
	if(json.length == 0){
		html = msgNoResults();
	} else {
		for (var i=0; i<json.length; i++){
			var r = json[i];
			html += "<li>" + "<span class='varietal'>" + r.varietal + "(" + r.type + ")" + "</span>" + "</li>";
		}
		html += "</ul>";
	}
	$target.html(html);
	$target.hide();
	$target.slideDown(600);
}

function displayVineyards($target, json){
	var html = "<ul class='results'>";
	if(json.length == 0){
		html = msgNoResults();
	} else {
		for (var i=0; i<json.length; i++){
			var r = json[i];
			html += "<li>" + "<span class='vineyard'>" + r.vineyard + "</span>" + "</li>";
		}
		html += "</ul>";
	}
	$target.html(html);
	$target.hide();
	$target.slideDown(600);
}

function displayWines($target, json){
	var html = "";
	if(json.length == 0){
		html = msgNoResults();
	} else {
		for (var i=0; i<json.length; i++){
			var r = json[i];
			html += "<li wineid='" + r.wineId + "'>"   
					+ "<p>" + "<span class='vineyard'>" + r.vineyard.vineyard + "</span>"
					+ "<span class='vintageYear'>" + " (" + r.vintageYear + ")" + "</span>" + "</p>"
					+ "<p>brand: " + getBrandHtml(r.brand) + "</p>"
					+ "<p class='" + r.varietal.type.toLowerCase() + "'>" + "<span class='varietal'>" + r.varietal.varietal 
					+ "<span class='varietalType'>" + " ("  + r.varietal.type + ")" + "</span>"  + "</span>" + "</p>"
					+ "<p>" + getRegionHtml(r.region) + "</p>"					
				+ "</li>";
		}
	}
	$target.html(html);
	$target.hide();
	$target.slideDown(600);
}

function displayWineSummaries($target, json){
	var html = "";
	if(json.length == 0){
		html = msgNoResults();
	} else {
		for (var i=0; i<json.length; i++){
			var r = json[i];
			html += "<li wineid='" + r.wineId + "'>"   
				+ "<p>" + "<span class='vineyard' vineyardId=" + r.vineyard.vineyardId + ">" + r.vineyard.vineyard + "</span>"
				+ "<span class='vintageYear'>" + " (" + r.vintageYear + ")" + "</span>" + "</p>"
				+ "<p>brand: " + getBrandHtml(r.brand) + "</p>"
				+ "<p class='" + r.varietal.type.toLowerCase() + "'>" + "<span class='varietal'>" + r.varietal.varietal 
				+ "<span class='varietalType'>" + " ("  + r.varietal.type + ")" + "</span>"  + "</span>" + "</p>"
				+ "<p>" + getRegionHtml(r.region) + "</p>"					
				+ "<p>" + "Avg. Price: " + "<span class='price avgPrice'>" + accounting.formatMoney(r.avgPrice) + "</span>" + " / " + "<span class='priceUnit'>" + r.pricePer + "</span>" +"</p>"
				+ "<p>" + getListPriceHtml(r, "List Price: ") + "</p>"
				+ "<p>" + "Bottles On Hand: " + "<span class='inventory'>" + r.qtyOnHand + "</span>" + "</p>"
				+ "</li>";
		}
	}
	
	$target.html(html);
	$target.show();
	setWineSummariesEvents();
	highlightInventory($("#wineSummaries"));
	highlightInventory($("wineSummaries"));
	$("#getWineSummaries").button('option', 'label', "Refresh Wine Summary");
	$("#getWineSummaries").button("refresh");
}

function displayWineDetails($target, json){
	var html = "";
	if(json == null || json == undefined){
		html = msgNoResults();
	}else{
		var tastingNotes = json.tastingNotes;
		var purchaseDetails = json.purchaseDetails;
		html += "<div id='wineDetailNotes'><h3>Tasting Notes</h3>"
			+ "<h4>Average Rating: " + getAvgRating(tastingNotes) + "</h4>";
		html += "<ul class='tastingNotes'>";		
		for (var i=0; i<tastingNotes.length; i++){
			var note = tastingNotes[i];
			html += "<li>"									
				+ "<p>" + "<span class='date'>" + note.tastingDate + "</span>" + "</p>"
				+ "<p>" + (note.reviewedBy != undefined ? ("Reviewed by: <span class='reviewers'>" + note.reviewedBy + "</span>" ) : "") + "</p>"
				+ getTastingReviewHtml(note)
				+ "<p>Rating: " + "<span class='rating'>" + getRating(note) + "</span>"
				+ "</li>";
		}
		html += "</ul></div>";
		html += "<div id='wineDetailPurchases'><h3>Purchase Details</h3>"
			+ "<h4>Bottles On Hand: " + "<span class='inventory'>" + getTotalBOH(purchaseDetails) + "</span>" + "</h4>";
		html += "<ul class='purchaseDetails'>";		
		for (var j=0; j< purchaseDetails.length; j++){
			var buy = purchaseDetails[j];
			html+= 
				"<li>"
				+ "<p>" + "<span class='date'>" + buy.purchaseDate + "</span>" + "</p>"
				+ "<p>Purchased " + buy.qtyPurchased + " at " + "<span class='price'>$" + buy.price + "</span>" + " / " + "<span class='priceUnit'>" + buy.pricePer + "</span>" + "</p>"
				+ getPriceNotesHtml(buy)
				+ "<p class='inventory'>" + "Bottles On Hand: " + buy.qtyOnHand + "</p>"
				+ "<p class='purchaseLocation'>" 
					+ "<span class='name'>" + buy.locationName + "</span>" + "<br/>"
					+ "<span class='city'>" + buy.locationCity + "</span>" + "<br/>"
					+ "<span class='state'>" + buy.locationState + "</span>" + "<br/>"
					+ "<span class='type'>" + buy.locationType + "</span>"
				+ "</p>"
			+ "</li>";
		}
		html +="</ul></div>";
		
	}
	$target.html(html);
	$target.prepend( $("<div class='wineSummary'>").append( $("#wineSummaries li.selected").contents().clone()) );
	$target.hide();
	$target.show();
	setWineDetailsListHeight();
	highlightInventory($("#wineDetails"));
}

function getRating(note){
	if ("rating" in note && note.rating != 0 && note.rating != "0"){
		return note.rating;
	} else {
		return "--";
	}
}

function getAvgRating(notes){
	total = 0;
	num = notes.length;
	for (var i=0; i<notes.length; i++){
		if (!"rating" in notes[i] || notes[i].rating == "0" || notes[i].rating == undefined){
			num--;
		}else {
			total = total + notes[i].rating;
		}		
	}
	var avg = total/num;
	if (isNaN(avg) || avg <= 0 ){
		return "--";
	}else{
		return avg.toFixed(1);
	}
}

function getTotalBOH(purchaseDetails){
	boh = 0;
	for (var i=0; i<purchaseDetails.length; i++){
		boh += purchaseDetails[i].qtyOnHand;
	}
	return boh;
}

function getListPriceHtml(record, label){
	if (record.listPrice == undefined){
		return "<span class='price listPrice'>" + "</span>";
	} else {
		return label + "<span class='price listPrice'>" + accounting.formatMoney(record.listPrice) + "</span>";
	}
}

function getTastingReviewHtml(note){
	if ("review" in note){
		return "<p class='review'>" + note.review + "</p>";
	}else {
		return  ""; //"<p class='review'>" + "</p>";
	}
}

function getPriceNotesHtml(purchaseDetails){
	if ("pricePer" in purchaseDetails){
		return "<p class='purchaseDetails'>Price Notes: " + purchaseDetails.pricePer + "</p>";
	}else {
		return "<p class='purchaseDetails'>" + "</p>";
	}
}

function getBrandHtml(brand){
	html = "<span class='brand'>";
	if (brand == undefined){
		return html + "</span>";
	}
	if ("brandName" in brand){
		html += brand.brandName;
	}	
	html += "</span>";
	return html;
	
}

function getRegionHtml(region){
	var html = "<span class='region'>";
	if (region == undefined){
		return html + "</span>";
	}
	
	if ("subRegion" in region){
		html += region.region + " - " + "<span class='subRegion'>" + region.subRegion + "</span>"; 
	} else{
		html += region.region;
	}
	html += "</span>";
	return html;
}

function setWineSummariesEvents(){
	$("#wineSummaries li").click(function(){
		var wineId = $(this).attr("wineid");
		$("#wineDetailsArg_WineId").val(wineId);
		$("#wineSummaries li.selected").removeClass("selected");
		$("#wineDetails").removeClass("invisible");
		$(this).addClass("selected");
		$("#wineSummaries").stop().animate({scrollTop:  $(this).position().top + $("#wineSummaries").scrollTop() - 25 + "px"}, 500);
		
		if (!data.hasWineDetail(wineId)) {
			getWineDetails({wineId: wineId});
		}else {
			displayWineDetails($("#wineDetails"), data.getWineDetail(wineId));
		}	
		
	});
}

function highlightInventory($target){
	$target.find("span.inventory").each(function(index, obj){		
		$obj = $(obj);
		if ( Number($obj.html().trim()) > 0 ){
			$obj.parent().addClass("inStock");
		}
	});
}

function msgNoResults(){
	return "<p class='message'>No results were found. Please try again.</p>";
}

function msgPleaseWait(){
	return "<p class='message'>Getting Data. Please Wait...</p>";
}

function setFilterVineyards(){
	$vineyards = $("#filterVineyards");
	for (var i=0; i< data.vineyards.length; i++){
		var vineyard = data.vineyards[i];
		$vineyards.append(
			$("<option>").html(vineyard.vineyard).val(vineyard.vineyardId)
		);
	}
	setFilterVineyardsEvents();
}

function setFilterVineyardsEvents(){
	$("#filterVineyards").change(function(){
		var filter = filterManager.filters.vineyards;
		filter.reset();
		if ($("#filterVineyards").val() != null){
			for ( var i=0; i< $("#filterVineyards").val().length; i++){
				var val = $("#filterVineyards").val()[i];
//				var selector = "li:has(p span.vineyard:not([vineyardId='" + val + "']))";
				var selector = "li:has(p span.vineyard[vineyardId='" + val + "'])";
				filter.addFilter(selector);
				filter.enable();
			}
		}else{
//			selector = "li";
//			filter.filter= selector;
			filter.disable();
		}
		filterManager.applyAll();
		console.log(filter);
	});
}

