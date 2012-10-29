<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="/styles/main.css" />
		<link rel="stylesheet" href="/styles/jquery-ui-active/jquery-ui.css" />
	</head>
	
	<body>
		<h1>Poulin Wine Cellar</h1>
		
		<div id="vineyard" class="main">
			<button id="getVineyards">Get Vineyards</button>
			<div class="results" id="vineyards"></div>
		</div>
		
		<div id="varietal" class="main">
			<button id="getVarietals">Get Varietals</button>
			<div class="results" id="varietals"></div>
		</div>
		
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/jquery-ui.min.js"></script>
		<script src="/js/lib/prefix-free.js" type="text/javascript"></script>
		<script src="/js/main.js" type="text/javascript"></script>
	</body>
</html>
