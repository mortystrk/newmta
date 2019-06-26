sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel"
], function (Controller, ODataModel) {
	"use strict";

	return Controller.extend("test.ui.controller.View1", {
		onInit: function () {
			var oParams = {};
			oParams.json = true;
			oParams.useBatch = true;
			var oModel = new ODataModel("/xsodata/service.xsodata", oParams);
			var i = 5;
		}
	});
});