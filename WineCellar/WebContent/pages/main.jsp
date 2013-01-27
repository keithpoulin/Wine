<!DOCTYPE html>

<html>
	<head>
		<title>Wine Cellar</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">				
		<link rel="stylesheet" href="/css/jquery.mobile-1.3.0-beta.1/jquery.mobile-1.3.0-beta.1.css" />
		<link rel="stylesheet/less" href="/templates/css/template_styles.less" />
		<link rel="stylesheet" href="/css/main.css" />
	</head>
	
	<body>		
		<div id="login" data-role="page">
			<div data-role="header">
				<a data-rel="back" data-icon="arrow-l">Back</a>
				<h1>Login</h1>
			</div>
			<div data-role="content">
				<p id="notice"></p>
				<label for="userId" class="ui-hidden-accessible">UserID</label>
				<input type="text" id="userId" placeholder="User ID"/>
								
				<label for="password" class="ui-hidden-accessible">Password</label>
				<input type="password" id="password" placeholder="Password" disabled="disabled"/>	
							
				<button id="submitLogin">Login</button>				
				<a href="#mainMenu" id="continue" data-role="button" data-icon="home" class="hidden">Main Menu</a>
			</div>
			
		</div>				
		
		<div id="mainMenu" data-role="page" data-title="Main Menu">
			<div data-role="header">
				<a data-rel="back" data-icon="arrow-l">Back</a>
				<h1>Menu</h1>
			</div>
			<div data-role="content">
				<ul data-role="listview" data-inset="true">
					<li><a href="#login" id="menu_login">Login</a></li>
					<li><a href="#wineSummaries" id="menu_wineSummaries">Wine Summaries</a></li>
					<li><a href="#components" id="menu_components">Components</a></li>
				</ul>
			</div>
			<div data-role="footer"></div>
		</div>
		
		<div id="components" data-role="page">
			<div data-role="header">
				<a data-rel="back" data-icon="arrow-l">Back</a>
				<h1>Components</h1>
			</div>
			<label for="select_brands">Brands: </label><br/>
			<select class="select_brands" id="select_brands"></select><br/>
			
			<label for="select_vineyards">Vineyards: </label><br/>
			<select class="select_vineyards" id="select_vineyards"></select><br/>
			
			<label for="select_varietals">Varietals:</label><br/>
			<select class="select_varietals" id="select_varietals"></select><br/>
			
			<label for="select_regions">Regions:</label><br/>
			<select class="select_regions" id="select_regions"></select><br/>
		</div>
		<!-- <h1 class="msg_loading">Loading Models... Please wait</h1> -->
		
		<div id="wineSummaries" data-role="page">
			<div data-role="header">
				<a data-rel="back" data-icon="arrow-l">Back</a>
				<h1>Wines</h1>
			</div>
			<div data-role="content" class="content">
				<ul id="wineSummaryList" data-role="listview"></ul>
			</div>
			<div data-role="footer"></div>
		</div>
		
		<div id="wineDetail" data-role="page">
			<div data-role="header">
				<a data-rel="back" data-icon="arrow-l">Back</a>
				<h1>Wine Details</h1>
			</div>
			<div data-role="content" class="content"></div>
		</div>
						
		<div id="addDialog" data-role="page">
			<div data-role="header">
				<h1>Create Item</h1>
			</div>
			<div data-role="content" class="content"></div>
		</div>				
						
		<jsp:include page="winecellar_core.jsp"/>
		<script src="/js/main.js" type="text/javascript"></script>
		
	</body>	
</html>