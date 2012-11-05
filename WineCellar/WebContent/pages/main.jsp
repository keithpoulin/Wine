<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="/styles/main.css" />
		<link rel="stylesheet" href="/styles/jquery-ui-active/jquery-ui.css" />
	</head>
	
	<body>
		<div id="header" class="">
			<h1 id="title">Poulin Wine Cellar</h1>
		</div>	
		<div id="main" class="">			
			<div id="navigation">
				<fieldset id="search">
					<legend>Search</legend> 
					
					<label for="filterVineyards">Vineyards</label>			
					<select multiple="multiple" id="filterVineyards"></select>
					
					<input type="checkbox" id="filterBoh" />
					<label for="filterBoh">In Stock</label>					
				</fieldset>
				
			</div>
			<ul class="results" id="wineSummaries"></ul>			
			<div class="results invisible" id="wineDetails"></div>
						
			<!-- Hidden and currently unused elements below here-->	
			<div id="wineDetail" class="main hidden">
				<button id="getWineDetails">Get Wine Details</button>
				<br/><input id="wineDetailsArg_WineId" placeholder='wineId' value="117"/>			
			</div>
			<button id="getWineSummaries" class="hidden">Get Wine List</button>	
			<!-- End of unused elements -->		
		</div>
		<div id="footer" class="">
			<button id="refreshData">Update Data</button>
		</div>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.min.js"></script>
		<script src="/js/lib/prefix-free.js" type="text/javascript"></script>
		<script src="/js/lib/accounting.min.js" type="text/javascript"></script>
		<script src="/js/lib/jquery.overscroll.min.js" type="text/javascript"></script>
		<script src="/js/data.js" type="text/javascript"></script>
		<script src="/js/filter.js" type="text/javascript"></script>
		<script src="/js/main.js" type="text/javascript"></script>
	</body>
</html>
