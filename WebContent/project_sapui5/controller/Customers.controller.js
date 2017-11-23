sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/m/Popover',
		'sap/m/Button'
	], function(jQuery, Controller, Popover, Button) {
	"use strict";
 
	var CController = Controller.extend("project_sapui5.controller.Customers", {
 
		onInit: function () {
 
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
 
 
	return CController;
 
});