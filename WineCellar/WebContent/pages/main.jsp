<!DOCTYPE html>
<html>
	<head>
		<title>Wine Cellar</title>
		<link rel="stylesheet" href="/styles/main.css" />
		<link rel="stylesheet" href="/styles/jquery-ui-active/jquery-ui.css" />
		<jsp:include page="/templates/templates.jsp" />
	</head>
	
	<body>
		
		<div id="header" class="">
			<h1 id="title">Poulin Wine Cellar</h1>
		</div>	
		<div id="main" class="">			
			<div id="navigation">
				<div id="toolbar">
					<input type="checkbox" id="toggleSort" for="#sort"/><label for="toggleSort">Sort</label>
					<input type="checkbox" id="toggleSearch" for="#search"/><label for="toggleSearch">Filter</label>
					<input type="checkbox" id="toggleStats" for="#stats" checked="checked" /><label for="toggleStats">Stats</label>
					<input type="checkbox" id="toggleSettings" for="#settings"/><label for="toggleSettings">Settings</label>
				</div>
				
				<fieldset id="sort">
					<legend>Sort</legend>
					<select id="sortField">
						<option value="avgRating">Avg Rating</option>
						<option value="qtyOnHand">Bottles on Hand</option>
						<option value="brandName">Brand</option>
						<option value="avgPrice">Price - Average</option>
						<option value="maxPrice">Price - Maximum</option>
						<option value="minPrice">Price - Minimum</option>
						<option value="region">Region</option>
						<option value="subRegion">Sub Region</option>
						<option value="varietal">Varietal</option>
						<option value="type">Varietal Type</option>
						<option value="vineyard" selected="selected">Vineyard</option>
						<option value="vintageYear">Year</option>
					</select>	
					<input type="checkbox" id="reverseSort"/>
					<label for="reverseSort" >Reverse</label>
				</fieldset>
				
				<fieldset id="search">
					<legend>Filter</legend> 
					
					<button id="removeAllFilters">Show All</button> 
					<br/>
					<label for="filterVineyards" class="bold">Vineyards</label>
					<input type="radio" name="vineyardsFilter" id="vineyardsFilterAdd" value="show" /><label for="vineyardsFilterAdd">Add</label>
					<input type="radio" name="vineyardsFilter" id="vineyardsFilterOnly" value="hide" checked="checked"/><label for="vineyardsFilterOnly">Only</label>			
					<select multiple="multiple" id="filterVineyards"></select>
					<br/>

					<label for="filterBrands" class="bold">Brands</label>
					<input type="radio" name="brandsFilter" id="brandsFilterAdd" value="show" /><label for="brandsFilterAdd">Add</label>
					<input type="radio" name="brandsFilter" id="brandsFilterOnly" value="hide" checked="checked"/><label for="brandsFilterOnly">Only</label>
					<select multiple="multiple" id="filterBrands"></select>
					<br/>
					
					<label for="filterVarietals" class="bold">Varietals</label>
					<input type="radio" name="varietalsFilter" id="varietalsFilterAdd" value="show"/><label for="varietalsFilterAdd">Add</label>
					<input type="radio" name="varietalsFilter" id="varietalsFilterOnly" value="hide" checked="checked"/><label for="varietalsFilterOnly">Only</label>
					<select multiple="multiple" id="filterVarietals"></select>
					<br/>
					
					<label for="filterRegions" class="bold">Regions</label>
					<input type="radio" name="regionsFilter" id="regionsFilterAdd" value="show" /><label for="regionsFilterAdd">Add</label>
					<input type="radio" name="regionsFilter" id="regionsFilterOnly" value="hide" checked="checked"/><label for="regionsFilterOnly">Only</label>
					<select id="filterRegions" multiple="multiple"></select>
					<br/>
					
					<input type="checkbox" id="filterBoh" />
					<label for="filterBoh" class="bold">In Stock</label>		
				</fieldset>
				
				<fieldset id="stats">
					<legend>Stats</legend>
					<p>Bottles On Hand: <span id="totalBottlesOnHand"></span></p>
					<p>Varietals: <span id="totalVarietals"></span></p>
					<p>Vineyards: <span id="totalVineyards"></span></p>
					<p>Bottles Purchased: <span id="totalBottlesPurchased"></span></p>
					<p>Avg. Price: <span id="totalAveragePrice"></span></p>
					<p>Total Expenditure: <span id="totalCost"></span></p>
					<p>Avg. Rating: <span id="totalAverageRating"></span></p>
				</fieldset>
				
				<fieldset id="settings">
					<legend>Settings</legend>
					<input type="checkbox" id="useAdvancedSettings"/><label for="useAdvancedSettings">Advanced Mode</label><br/>
					<button id="updateData">Update Data</button>
					<button id="clearCache" class="hidden">Clear Cache</button>
					<br/>
					<label for="userEmail">Email: </label><input id="userEmail" />
					<br/>
					<label for="userName">Name: </label><input id="userName" />
				</fieldset>
				
			</div>
			<ul class="results" id="wineSummaries"></ul>			
			<div class="results hidden" id="wineDetails">
				<div class="header">
					<button id="wineDetailsBackButton" class="backButton">Back</button>
					<button id="wineDetailsEditButton" class="editButton">Edit</button>
					<h2>Wine Details</h2>
				</div>
				<div class="content"></div>
			</div>
						
			<!-- Hidden and currently unused elements below here-->	
			<div id="wineDetail" class="main hidden">
				<button id="getWineDetails">Get Wine Details</button>
				<br/><input id="wineDetailsArg_WineId" placeholder='wineId' value="117"/>			
			</div>
			<button id="getWineSummaries" class="hidden">Get Wine List</button>	
			<!-- End of unused elements -->		
		</div>
		
		<div id="footer" class=""></div>
		
		<div id="lightbox"></div>
		<div id="tastingNoteForm">
			<label for="reviewedBy">Reviewed By: </label><input id="reviewedBy" /><br/>
			<label for="tastingDate">Date: </label><input id="tastingDate" class="datepicker" /><br/>
			<label for="tastingNote">Note: </label><input id="tastingNote" /><br/>
			<label for="tastingRating">Rating: </label>
			<select id="tastingRating">
				<option value=10>10</option>
				<option value=9>9</option>
				<option value=8>8</option>
				<option value=7>7</option>
				<option value=6>6</option>
				<option value=5>5</option>
				<option value=4>4</option>
				<option value=3>3</option>
				<option value=2>2</option>
				<option value=1>1</option>
				<option value=0>N/A</option>
			</select>
		</div>
		<div id="purchaseDetailForm">
			<label for="purchaseQty">Qty: </label><input id="purchaseQty" /><br/>
			<label for="purchaseUnit">Unit: </label><input id="purchaseUnit" /><br/>
			<label for="purchaseDate">Date: </label><input id="purchaseDate" class="datepicker"/><br/>
			<label for="listPrice">List Price: </label><input id="listPrice" /><br/>
			<label for="purchasePrice">Purchase Price: </label><input id="purchasePrice" /><br/>
<!-- 			<label for="locationName">Location Name: </label><input id="locationName" /> -->
<!-- 			<label for="locationType">Location Type: </label><input id="locationType" /> -->
<!-- 			<label for="locationCity">City: </label><input id="locationCity" /> -->
<!-- 			<label for="locationState">State: </label><input id="locationState" /> -->
			<select id="purchaseLocation"></select>
			
		</div>
		
		<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script> -->
		<script src="/js/lib/jquery-1.8.2.js" type="text/javascript"></script>
		<!-- <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.min.js"></script> -->
		<script src="/js/lib/jquery-ui-1.9.1.custom.js" type="text/javascript"></script>
		<script src="/js/lib/prefix-free.js" type="text/javascript"></script>
		<!-- <script src="/js/lib/accounting.min.js" type="text/javascript"></script> -->
		<script src="/js/lib/jquery.overscroll.min.js" type="text/javascript"></script>
		
		
		
		<script src="/js/data.js" type="text/javascript"></script>
		<script src="/js/filter.js" type="text/javascript"></script>
		<script src="/js/winecellar.js" type="text/javascript"></script>
		<script src="/js/main.js" type="text/javascript"></script>
	</body>
</html>
