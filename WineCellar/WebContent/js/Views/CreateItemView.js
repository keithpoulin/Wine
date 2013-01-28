/**
 * A form for creating a new object and saving it to the server
 * @param modelType - a Backbone.Model type
 * @param template - the template you wish to use
 */
var CreateItemView = Backbone.View.extend({
	tagName: "div",
	template: null,
	modelType: null,
	initialize: function(){
		this.modelType = this.options.modelType;
		this.template = this.options.template;
		this.wineId = this.options.wineId;
		for (var key in this.attributes){
			this.$el.attr(key, this.attributes[key]);
		}		
	},
	render: function(){
		var html = this.template();
		this.$el.html(html);
		this.$el.trigger("create");		
		this.$("input.author").val(user.get("userName"));
		this.setEvents();
		return this;
	},
	open: function(){
		this.render();
		this.$el.show();
	}, 
	close: function(){
		this.$el.dialog("close");
	},
	submit: function(){		
		var item = new this.modelType();
		this.$("input, textarea").each(function(){			
			var obj = $(this);
			var name = obj.attr("name");
			var value=  obj.val();
			if (obj.attr("type") == "date"){
				value = $.datepicker.formatDate("M dd, yy", new Date(value));
			}
			item.set(name, value);			
		});
		item.set("wineId", this.wineId);
		console.log(item);
		item.save();
//		this.close();
	}, setEvents: function(){
		var context = this;
		
		this.$("input.currency").on("blur", function(){
			$(this).val(accounting.formatMoney($(this).val(), {symbol : "",decimal : ".",	thousand: "",precision : 2,format: "%s%v"}));
		});	
		
		this.$(".formSubmit").on("click", function(){
			context.submit();
		});
	}, setWineId: function(id){
		this.wineId = id;
	}

});


