<!-- Styles and DOM elements (No JavaScript) -->
<div id="templates"><jsp:include page="/templates/templates.jsp" /></div>	

<!-- Libraries/Dependencies -->
<script src="/js/lib/jquery.js" type="text/javascript"></script>
<!-- <script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script> -->
<script src="/js/lib/backbone/underscore-min.js" type="text/javascript"></script>
<script src="/js/lib/backbone/backbone.js" type="text/javascript"></script>
<script src="/js/lib/backbone/backbone-relational.js" type="text/javascript"></script>

<!-- Extensions -->
<script src="/js/Extensions/backbone-relational-extension.js" type="text/javascript" ></script>

<!-- Template Resources -->
<script src="/js/lib/less.js" type="text/javascript" ></script>
<script src="/js/lib/accounting.min.js" type="text/javascript" ></script>
<script src="/js/lib/handlebars.js" type="text/javascript"></script>
<script src="/templates/js/handlebarsHelpers.js" type="text/javascript" ></script>
<script src="/templates/js/templates.js" type="text/javascript"></script>
<script type="text/javascript">
	$("#templates").remove();
</script>
<!-- Routers -->
<script src="/js/Routers/router.js" type="text/javascript"></script>

<!-- Models -->
<script src="/js/Models/BrandModel.js" type="text/javascript"></script>
<script src="/js/Models/LocationModel.js" type="text/javascript"></script>
<script src="/js/Models/LocationTypeModel.js" type="text/javascript"></script>
<script src="/js/Models/PurchaseModel.js" type="text/javascript"></script>
<script src="/js/Models/RegionModel.js" type="text/javascript"></script>
<script src="/js/Models/TastingNoteModel.js" type="text/javascript"></script>
<script src="/js/Models/VarietalModel.js" type="text/javascript"></script>
<script src="/js/Models/VineyardModel.js" type="text/javascript"></script>
<script src="/js/Models/WineModel.js" type="text/javascript"></script>
<script src="/js/Models/WineCellarModel.js" type="text/javascript"></script>
<script src="/js/Models/UserModel.js" type="text/javascript"></script>
<script src="/js/Models/UserRoleModel.js" type="text/javascript"></script>

<!-- Collections -->
<script src="/js/Models/BrandCollection.js" type="text/javascript"></script>
<script src="/js/Models/LocationCollection.js" type="text/javascript"></script>
<script src="/js/Models/LocationTypeCollection.js" type="text/javascript"></script>
<script src="/js/Models/PurchaseCollection.js" type="text/javascript"></script>
<script src="/js/Models/RegionCollection.js" type="text/javascript"></script>
<script src="/js/Models/TastingNoteCollection.js" type="text/javascript"></script>
<script src="/js/Models/VarietalCollection.js" type="text/javascript"></script>
<script src="/js/Models/VineyardCollection.js" type="text/javascript"></script>
<script src="/js/Models/WineCollection.js" type="text/javascript"></script>
<script src="/js/Models/UserRoleCollection.js" type="text/javascript"></script>

<!-- Views -->
<script src="/js/Views/WineAppView.js" type="text/javascript"></script>
<script src="/js/Views/WineSummaryList.js" type="text/javascript"></script>
<script src="/js/Views/WineSummaryView.js" type="text/javascript"></script>
<script src="/js/Views/WineDetailView.js" type="text/javascript"></script>
<script src="/js/Views/Select.js" type="text/javascript"></script>
<script src="/js/Views/ListView.js" type="text/javascript"></script>
<script src="/js/Views/CreateItemView.js" type="text/javascript"></script>
