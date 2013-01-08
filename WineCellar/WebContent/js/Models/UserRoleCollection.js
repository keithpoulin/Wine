var UserRoleCollection = Backbone.Collection.extend({
	url: "/rest/userRoles",
	model: UserRoleModel,
	initialize: function(){
		
	}
});
