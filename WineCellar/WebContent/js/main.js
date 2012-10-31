$(document).ready(function(){
	initializeEvents();
	initializeAppearance();
});

function initializeEvents(){
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
	
	var $scrollingDiv = $("#wineDetails");
	var origTop = $scrollingDiv.offset().top;
	$(window).scroll(function(){			
		if ($(window).scrollTop() > origTop){
			$scrollingDiv
				.stop()
				.animate({"marginTop": ($(window).scrollTop() - origTop) + "px"}, 500 );
		}	
	});
	$(window).resize(function(){
		setWineDetailsListHeight();
	});
}

function setWineDetailsListHeight(){
	$("#wineDetails ul").css({height: ($(window).height() - 133 - 150)});
}

function initializeAppearance(){
	$("#getVarietals, #getVineyards, #getWines, #getWineSummaries, #getWineDetails").button();	
}

function getVarietals(args){
	$("#varietals").html(msgPleaseWait());
	$.ajax({
		url: "/getVarietals",
		data: args,
		dataType: "json",
		success: function(resp){
			$varietals = $("#varietals");
			displayVarietals($varietals, resp);
			$("#getVarietals").button('option', 'label', "Refresh Varietals");
			$("#getVarietals").button("refresh");
		}
	});
}

function getVineyards(args){
	$("#vineyards").html(msgPleaseWait());
	$.ajax({
		url: "/getVineyards",
		data: args,
		dataType: "json",
		success: function(resp){
			$vineyards = $("#vineyards");						
			displayVineyards($vineyards, resp);
			$("#getVineyards").button('option', 'label', "Refresh Vineyards");
			$("#getVineyards").button("refresh");
		}
	});
}

function getWines(args){
	$("#wines").html(msgPleaseWait());
	$.ajax({
		url: "/getWines",
		data: args,
		dataType: "json",
		success: function(resp){
			$wines = $("#wines");						
			displayWines($wines, resp);
			setWinesEvents();
			$("#getWines").button('option', 'label', "Refresh Wines");
			$("#getWines").button("refresh");
		}
	});
}

function getWineSummaries(args){
	$("#wineSummaries").html(msgPleaseWait());
	$.ajax({
		url: "/getWineSummary",
		data: args,
		dataType: "json",
		success: function(resp){
			$wineSummaries = $("#wineSummaries");						
			displayWineSummaries($wineSummaries, resp);
			$("#getWineSummaries").button('option', 'label', "Refresh Wine Summary");
			$("#getWineSummaries").button("refresh");
		}
	});
}

function getWineDetails(args){
	$("#wineDetails").html(msgPleaseWait());
	$.ajax({
		url: "/getWineDetails",
		data: args,
		dataType: "json",
		success: function(resp){
			$wineSummaries = $("#wineDetails");						
			displayWineDetails($wineSummaries, resp);
			$("#getWineDetails").button('option', 'label', "Refresh Wine Details");
			$("#getWineDetails").button("refresh");
		}
	});
}

function getVarietalsArgs(){
//	var param = $("#varietalParams").val();
//	var value = $("#varietalParamValue").val();
	var args = {};
//	args[param.toLowerCase()] = value;
	return args;
}

function getVineyardsArgs(){
//	var param = $("#vineyardParams").val();
//	var value = $("#vineyardParamValue").val();
	var args = {};
//	args[param.toLowerCase()] = value;
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
	var html = "<ul class='results'>";
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
		html += "</ul>";
	}
	$target.html(html);
	$target.hide();
	$target.slideDown(600);
}

function displayWineSummaries($target, json){
	var html = "<ul class='results'>";
	if(json.length == 0){
		html = msgNoResults();
	} else {
		for (var i=0; i<json.length; i++){
			var r = json[i];
			html += "<li>" + r + "</li>";
		}
		html += "</ul>";
	}
	$target.html(html);
	$target.hide();
	$target.slideDown(600);
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
				+ "<p>Rating: " + "<span class='rating'>" + note.rating + "</span>"
				+ "</li>";
		}
		html += "</ul></div>";
		html += "<div id='wineDetailPurchases'><h3>Purchase Details</h3>"
			+ "<h4>Bottles On Hand: " + getTotalBOH(purchaseDetails) + "</h4>";
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
	$target.hide();
	$target.show();
	setWineDetailsListHeight();
	//$target.slideDown(600);
}

function getAvgRating(notes){
	total = 0;
	num = notes.length;
	for (var i=0; i<notes.length; i++){
		if (notes[i].rating == "0"){
			num--;
		}
		total = total + notes[i].rating;
	}
	var avg = total/num;
	if (avg <= 0){
		return "N/A";
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

function setWinesEvents(){
	$("#wine ul li").click(function(){
		var wineId = $(this).attr("wineid");
		$("#wineDetailsArg_WineId").val(wineId);
		getWineDetails({wineId: wineId});
	});
}

function msgNoResults(){
	return "No results were found. Please try again.";
}

function msgPleaseWait(){
	return "Getting Data. Please Wait...";
}