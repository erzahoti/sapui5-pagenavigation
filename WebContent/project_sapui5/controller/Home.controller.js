sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/m/Popover',
		'sap/m/Button'
	], function(jQuery, Controller, Popover, Button) {
	"use strict";
 
	var cController = Controller.extend("project_sapui5.controller.Home", {
 
		onInit: function () {
 
		},
		
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);	
		},
		
		navToProduct: function(oEvent){
			this.getRouter().navTo("product");
		},
		
		navToHome: function(oEvent){
			this.getRouter().navTo("home_content");
		},
		navToCustomers: function(oEvent){
			this.getRouter().navTo("customers");
		},
		
		navToContactUs: function(oEvent){
			this.getRouter().navTo("contactus");
		},
		
		 
		handleUserNamePress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
				
					new Button({
						text: 'Help',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
 
			popover.openBy(event.getSource());
		}
	});
 
 
	return cController;
 
});