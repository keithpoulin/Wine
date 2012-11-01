<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="/styles/main.css" />
		<link rel="stylesheet" href="/styles/jquery-ui-active/jquery-ui.css" />
	</head>
	
	<body>
		<h1 id="title">Poulin Wine Cellar</h1>

		<div id="wineSummary" class="main">
			<button id="getWineSummaries">Get Wine List</button>
			<ul class="results" id="wineSummaries"></ul>
		</div>

		<div id="wineDetail" class="main">
			<button id="getWineDetails">Get Wine Details</button>
			<br/><input id="wineDetailsArg_WineId" placeholder='wineId' value="117"/>			
		</div>
		<div class="results invisible" id="wineDetails"></div>

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.min.js"></script>
		<script src="/js/lib/prefix-free.js" type="text/javascript"></script>
		<script src="/js/lib/accounting.min.js" type="text/javascript"></script>
		<script src="/js/data.js" type="text/javascript"></script>
		<script src="/js/main.js" type="text/javascript"></script>
	</body>
</html>
