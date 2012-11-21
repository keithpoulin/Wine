<!DOCTYPE html>
<html>
	<head>
		<title>Wine Cellar</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="/styles/mobile.css" />
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
		<jsp:include page="/templates/templates.jsp" />
	</head>
	
	<body>
		
		<!-- Start of #page_MainMenu -->
		<div data-role="page" id="page_MainMenu">
			<div data-role="header">
				<h1>Wine Cellar Menu</h1>
			</div>
			<div data-role="content">
				<a href="#page_WineSummaries" data-role="button">Wine List</a>
				<a href="#page_AddWine" data-icon="plus" data-rel="dialog" data-role="button">Add Wine</a>
			</div>
		</div><!-- /page_MainMenu -->
		
		
		<!-- Start of #page_WineSummaries -->
		<div data-role="page" id="page_WineSummaries">
			<div data-role="header">
				<a href="#page_MainMenu" data-icon="arrow-l" data-theme="b">Back</a>
				<h1>Wine Summaries</h1>
				<a href="#page_Search" data-role="button" data-icon="search" data-theme="b">Search</a>
			</div>
			<div data-role="content" >	
				<div id="buttonDiv"><button id="updateData" data-icon="refresh" data-role="button">Update Data</button></div>
				<ul data-role="listview" id="wineSummaries" data-theme="d" data-divider-theme="d"><li>test</li></ul>
			</div>
		</div><!-- /page page_WineSummaries -->
		
		
		<!-- Start of #page_WineDetails -->
		<div data-role="page" id="page_WineDetails" data-theme="a" data-add-back-btn="true">
			<div data-role="header" >
				<a data-icon="arrow-l" href="#page_WineSummaries" data-theme="b" data-transition="slide" data-direction="reverse">Back</a>
				<h1>WineDetails</h1>
				<a href="#page_EditDetail" data-theme="b">Edit</a>
			</div>
			<div data-role="content" data-theme="a">	
				<div id="wineDetail"></div>
				<div id="purchaseDetails" data-role="collapsible" data-content-theme="c">
					<h3>Purchase Details</h3>
					<ul data-role="listview"></ul>
				</div>
				<div id="tastingNotes" data-role="collapsible">
					<h3>Tasting Notes</h3>
				</div>
			</div>
		</div><!-- /page_WineDetails -->
		
		
		<!-- Start of #page_AddWine -->
		<div data-role="page" id="page_AddWine">
			<div data-role="header" data-theme="e">
				<h1>Add New Wine</h1>
			</div>
			<div data-role="content" data-theme="d">	
				<h2>Add Wine</h2>
				<p><a href="#page_MainMenu" data-rel="back" data-role="button" data-inline="true" data-icon="back">Cancel</a></p>	
			</div><!-- /content -->
		</div><!-- /page page_AddWine -->
				

		<script src="/js/lib/jquery-1.8.2.js" type="text/javascript"></script>
		<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>

		<script src="/js/data.js" type="text/javascript"></script>
		<script src="/js/filter.js" type="text/javascript"></script>
		<script src="/js/winecellar.js" type="text/javascript"></script>
		<script src="/js/mobile.js" type="text/javascript"></script>
	</body>
</html>
