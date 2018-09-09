(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./fab-container", "../../platform/platform"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */ 
    Object.defineProperty(exports, "__esModule", { value: true });
    var i0 = require("@angular/core");
    var i1 = require("./fab-container");
    var i2 = require("../../platform/platform");
    var styles_FabContainer = [];
    var RenderType_FabContainer = i0.ɵcrt({ encapsulation: 2, styles: styles_FabContainer, data: {} });
    exports.RenderType_FabContainer = RenderType_FabContainer;
    function View_FabContainer_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
    exports.View_FabContainer_0 = View_FabContainer_0;
    function View_FabContainer_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "ion-fab", [], null, null, null, View_FabContainer_0, RenderType_FabContainer)), i0.ɵdid(1, 1228800, null, 2, i1.FabContainer, [i2.Platform], null, null), i0.ɵqud(335544320, 1, { _mainButton: 0 }), i0.ɵqud(603979776, 2, { _fabLists: 1 })], null, null); }
    exports.View_FabContainer_Host_0 = View_FabContainer_Host_0;
    var FabContainerNgFactory = i0.ɵccf("ion-fab", i1.FabContainer, View_FabContainer_Host_0, {}, {}, ["*"]);
    exports.FabContainerNgFactory = FabContainerNgFactory;
});
//# sourceMappingURL=fab-container.ngfactory.js.map