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
		data.displayWineSummaries();
		setFilterVineyards();
		setFilterBrands();
		setFilterRegions();
		setFilterVarietals();
		setStats();
	};
	data.$wineSummaries = $("#wineSummaries");
	data.setDisplayWineSummaries(displayWineSummaries);
	filterManager = new FilterManager($("#wineSummaries"));
	try{
		setStats();
	}catch(e){
		console.log(e);
	}
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
		clearWineCache();
		data.updateAll();
	});
	
	$("#sortField, #reverseSort").on("change", function(){
		data.sortWineSummaries($("#sortField").val(), !$("#reverseSort").is(":checked"), true);
	});
	
	$("#clearCache").click(function(){
		clearWineCache();
	});
	
	$("#removeAllFilters").click(function(){
		$("#search select option").removeAttr("selected");
		$("#search input:checkbox").removeAttr("checked");
		filterManager.disableAll();
	});
	
	$("#toolbar input").change(function(){
		if( $(this).is(":checked") ){
			$($(this).attr("for")).slideDown();
		}else{
			$($(this).attr("for")).slideUp();
		}
	});
}

function setWineDetailsListHeight(){
	$("#wineDetails ul").css({maxHeight: ($(window).height() - 133 - 150)});
}

function initializeAppearance(){
	$("#getVarietals, #getVineyards, #getWines, #getWineSummaries, #getWineDetails").button();
	$("#toolbar").buttonset();
	$("#toggleSearch").button( {icons: {primary:'ui-icon-search'}, text: false });
	$("#toggleSort").button( {icons: {primary:'ui-icon-transferthick-e-w'}, text: false });
	$("#toggleStats").button( {icons: {primary:'ui-icon-clipboard'}, text: false });
	$("#toggleSettings").button( {icons: {primary:'ui-icon-gear'}, text: false });
	
	if (data.wineSummaries.length > 0){
		displayWineSummaries($("#wineSummaries"), JSON.parse(localStorage.wineSummaries));
	}else {
		getWineSummaries();
	}
	$("#toolbar input").each(function(){
		if( $(this).is(":checked") ){
			$($(this).attr("for")).show();
		}else{
			$($(this).attr("for")).hide();
		}
	});
	
	setFilterVineyards();
	setFilterBrands();
	setFilterRegions();
	setFilterVarietals();
}



function setStats(){
	var wineInfo = data.getTotalWineDetailInfo();
	$("#totalBottlesOnHand").html(data.getTotalBoh());
	$("#totalVarietals").html(data.getTotalVarietals());
	$("#totalVineyards").html(data.getTotalVineyards());
	$("#totalBottlesPurchased").html(wineInfo.totalBottles);
	$("#totalAveragePrice").html(accounting.formatMoney(wineInfo.avgCost));
	$("#totalAverageRating").html(wineInfo.avgRating);
	$("#totalCost").html(accounting.formatMoney(wineInfo.totalCost));
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
				+ "<p class='" + r.varietal.type.toLowerCase() + "'>" 
					+ "<span class='varietal' varietalId='" + r.varietal.varietalId + "'>" + r.varietal.varietal 
					+ "<span class='varietalType'>" + " ("  + r.varietal.type + ")" + "</span>"  + "</span>" 
				+ "</p>"
				+ "<p>" + getRegionHtml(r.region) + "</p>"					
				+ "<p>" + "Avg. Price: " + "<span class='price avgPrice'>" + accounting.formatMoney(r.avgPrice) + "</span>" + " / " + "<span class='priceUnit'>" + r.pricePer + "</span>" +"</p>"
				+ "<p>" + getListPriceHtml(r, "List Price: ") + "</p>"
				+ "<p>" + "Bottles On Hand: " + "<span class='inventory'>" + r.qtyOnHand + "</span>" + "</p>"
				+ "<p>Avg Rating: " + getAvgRatingHtml(r) + "</p>";
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
	filterManager.applyAll();
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
	if (isNaN(avg) || avg <= 0 || avg == "" || avg == null){
		return "--";
	}else{
		return avg.toFixed(1);
	}
}

function getAvgRatingHtml(wineSummary){
	if ("avgRating" in wineSummary && wineSummary.avgRating != undefined && wineSummary != null){
		return "<span class='rating'>" + wineSummary.avgRating + "</span>";
	}else {
		return "<span class='rating'>--</span>";
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
	html = "<span class='brand' brandId='";
	if (brand == undefined || brand.brandName == "" || brand.brandName == undefined || brand.brandName == null){
		return html + "'> -- </span>";
	}
	
	html += brand.brandId + "'>";
	if ("brandName" in brand){
		html += brand.brandName;
	}	
	html += "</span>";
	return html;
	
}

function getRegionHtml(region){
	var html = "<span class='region' regionId='";
	if (region == undefined){
		return html + "'></span>";
	}
	html += region.regionId + "'>";
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
		$("#wineSummaries").stop().animate({scrollTop:  $(this).position().top + $("#wineSummaries").scrollTop() - 25 + "px"}, 500, function(){
			$("#wineSummaries li").removeClass("hover");
		});
		if (!data.hasWineDetail(wineId)) {
			getWineDetails({wineId: wineId});
		}else {
			displayWineDetails($("#wineDetails"), data.getWineDetail(wineId));
		}	
	}).hover(function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
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

function setFilterBrands(){
	$brands = $("#filterBrands");
	for (var i=0; i< data.brands.length; i++){
		var brand = data.brands[i];
		$brands.append(
			$("<option>").html(brand.brandName).val(brand.brandId)
		);
	}
	setFilterBrandsEvents();
}

function setFilterVarietals(){
	$varietals = $("#filterVarietals");
	for (var i=0; i< data.varietals.length; i++){
		var varietal = data.varietals[i];
		$varietals.append(
			$("<option>").html(varietal.varietal + " (" + varietal.type + ")").val(varietal.varietalId)
		);
	}
	setFilterVarietalsEvents();
}

function setFilterRegions(){
	$regions = $("#filterRegions");
	for (var i=0; i< data.regions.length; i++){
		var region = data.regions[i];
		$regions.append(
			$("<option>").html(region.region + " - " + region.subRegion).val(region.regionId)
		);
	}
	setFilterRegionsEvents();
}

function setFilterVineyardsEvents(){
	$("#filterVineyards, input[name='vineyardsFilter']").change(function(){
		var filter = filterManager.filters.vineyards;
		filter.reset();
		filter.setType($("input[name='vineyardsFilter']:checked").val());
		if ($("#filterVineyards").val() != null){
			for ( var i=0; i< $("#filterVineyards").val().length; i++){
				var val = $("#filterVineyards").val()[i];
				var selector = "";
				if (filter.type == "show"){
					selector = "li:has(p span.vineyard[vineyardId='" + val + "'])";
				}else{
					selector = "li:not(:has(p span.vineyard[vineyardId='" + val + "']))";
				}
				filter.addFilter(selector);
				filter.enable();
			}
		}else{
			filter.disable();
		}
		filterManager.applyAll();
	});
}

function setFilterBrandsEvents(){
	$("#filterBrands, input[name='brandsFilter']").change(function(){
		var filter = filterManager.filters.brands;
		filter.reset();
		filter.setType($("input[name='brandsFilter']:checked").val());
		if ($("#filterBrands").val() != null){
			for ( var i=0; i< $("#filterBrands").val().length; i++){
				var val = $("#filterBrands").val()[i];
				var selector = "";
				if (filter.type == "show"){
					var selector = "li:has(p span.brand[brandId='" + val + "'])";
				}else{
					selector = "li:not(:has(p span.brand[brandId='" + val + "']))";
				}
				filter.addFilter(selector);
				filter.enable();
			}
		}else{
			filter.disable();
		}
		filterManager.applyAll();
	});
}

function setFilterVarietalsEvents(){
	$("#filterVarietals, input[name='varietalsFilter']").change(function(){
		var filter = filterManager.filters.varietals;
		filter.reset();
		filter.setType($("input[name='varietalsFilter']:checked").val());
		if ($("#filterVarietals").val() != null){
			for ( var i=0; i< $("#filterVarietals").val().length; i++){
				var val = $("#filterVarietals").val()[i];
				var selector = "";				
				if(filter.type == "show"){
					selector = "li:has(p span.varietal[varietalId='" + val + "'])";
				}else{
					selector = "li:not(:has(p span.varietal[varietalId='" + val + "']))";
				}
				filter.addFilter(selector);
				filter.enable();
			}
		}else{
			filter.disable();
		}
		filterManager.applyAll();
	});
}

function setFilterRegionsEvents(){
	$("#filterRegions, input[name='regionsFilter']").change(function(){
		var filter = filterManager.filters.regions;
		filter.reset();
		filter.setType($("input[name='regionsFilter']:checked").val());
		if ($("#filterRegions").val() != null){
			for ( var i=0; i< $("#filterRegions").val().length; i++){
				var val = $("#filterRegions").val()[i];
				var selector = "";
				if(filter.type == "show"){
					selector = "li:has(p span.region[regionId='" + val + "'])";
				}else{
					selector = "li:not(:has(p span.region[regionId='" + val + "']))";
				}
				filter.addFilter(selector);
				filter.enable();
			}
		}else{
			filter.disable();
		}
		filterManager.applyAll();
		console.log(filter);
	});
}

function clearWineCache(){
	localStorage.removeItem("wines");
	localStorage.removeItem("varietals");
	localStorage.removeItem("vineyards");
	localStorage.removeItem("wineSummaries");
	localStorage.removeItem("wineDetails");
	localStorage.removeItem("lastUpdate");
	localStorage.removeItem("callback");
	localStorage.removeItem("$wineSummaries");
}

