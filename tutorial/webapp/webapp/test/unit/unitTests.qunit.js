/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/cp/webapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
