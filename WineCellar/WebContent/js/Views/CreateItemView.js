/**
 * A form for creating a new object and saving it to the server
 * @param modelType - a Backbone.Model type
 * @param template - the template you wish to use
 */
var CreateItemView = Backbone.View.extend({
	tagName: "div",
	template: null,
	modelType: null,
	className: "createItemView",
	initialize: function(){
		_.bindAll(this);
		this.modelType = this.options.modelType;
		
		this.template = this.options.template;
		
		for (var key in this.attributes){
			this.$el.attr(key, this.attributes[key]);
		}
	},
	render: function(){
		var html = this.template();
		this.$el.html(html);
		this.$("button.formClose").on("click", this.close);
		this.$("button.formSubmit").on("click", this.submit);
		
		this.$("input.author").val(user.get("userName"));
		
		
		return this;
	},
	open: function(){
		this.render();
		this.$el.show();
	}, 
	close: function(){
		this.$el.hide();
	},
	submit: function(){
		alert("you submitted your data");
		this.close();
	}

});
