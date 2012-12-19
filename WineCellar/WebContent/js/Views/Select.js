/**
 * A View for a select list. You must pass a model and a template for it to function properly. 
 * It is also recommended that you pass an "el" element as well
 * @params Hash of options. 
 * @requires model OR modelType
 * @requires template
 */
var Select = Backbone.View.extend({
	initialize: function(){
		if (this.options.modelType != undefined){
			this.model = Backbone.Relational.store.getCollection(this.options.modelType);
		}
		this.model.bind("add", this.render, this);
		this.template = this.options.template;
		for (var key in this.attributes){
			this.$el.attr(key, this.attributes[key]);
		}
	},
	render: function(){
		var data = this.model.toJSON();
		this.$el.html(this.template( data ));
		return this;
	},
	events: {
		
	},
	getValue: function(){
		return this.$el.val();
	}
});
