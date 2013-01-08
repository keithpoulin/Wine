var UserModel = Backbone.RelationalModel.extend({
	urlRoot: "/rest/login",
	idAttribute: "userId",
	defaults: {	},
	relations: [{
		type: Backbone.HasOne,
		relatedModel: "UserRoleModel",
		key: "userRole",
		keyDestination: "userRole",
		keySource: "userRoleId",
		includeInJSON: ["userRole", "userRoleId"],
		reverseRelation: {
			type: Backbone.HasMany,
			key: "users"
//			collectionType: "WineCollection"			 
		}	
	}],  
	getRole: function(){
		var role = null;
		if (this.get("userRole") != undefined){
			role = this.get("userRole").get("userRole");
		}
		return role;
	},
	isAdmin: function(){
		var role = this.getRole();
		return role == "ADMIN";
	}
});
