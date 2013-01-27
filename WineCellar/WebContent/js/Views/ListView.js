/**
 * A View for a ListView. You must pass a model and a template for it to function properly. 
 * It is also recommended that you pass an "el" element as well
 * @params Hash of options. 
 * @requires template
 */
var ListView = Backbone.View.extend({
	initialize: function(){
		if (this.options.modelType != undefined){
			this.model = Backbone.Relational.store.getCollection(this.options.modelType);
		}	

		this.template = this.options.template;
		for (var key in this.attributes){
			this.$el.attr(key, this.attributes[key]);
		}
	},
	render: function(){
		// I'm setting the element here because of some "strange" behaviour where the element isn't set to the correct tag, 
		//so the UI never got updated with the correct data, even though the template does compile correclty.
		this.setElement(this.options.selector);
		var data = this.model.toJSON();
		this.$el.html(this.template( data ));
		return this;
	},
	events: {
		
	}, setModel: function( model ){
		this.model = model;
		this.model.bind("change", this.render, this);
		this.render();
	}
});
