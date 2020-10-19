sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("sap.cp.webapp.controller.List", {
            handleListItemPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
                oRouter.navTo("detail", {
                    productId: selectedProductId
                });
            }
        });
});