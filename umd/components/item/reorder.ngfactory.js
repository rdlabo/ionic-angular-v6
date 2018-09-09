(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../icon/icon", "../../config/config", "./reorder"], factory);
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
    var i1 = require("../icon/icon");
    var i2 = require("../../config/config");
    var i3 = require("./reorder");
    var styles_Reorder = [];
    var RenderType_Reorder = i0.ɵcrt({ encapsulation: 2, styles: styles_Reorder, data: {} });
    exports.RenderType_Reorder = RenderType_Reorder;
    function View_Reorder_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-icon", [["name", "reorder"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(1, 147456, null, 0, i1.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_1 = "reorder"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._hidden; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_Reorder_0 = View_Reorder_0;
    function View_Reorder_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-reorder", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 1).onClick($event) !== false);
            ad = (pd_0 && ad);
        } return ad; }, View_Reorder_0, RenderType_Reorder)), i0.ɵdid(1, 49152, null, 0, i3.Reorder, [i0.ElementRef], null, null)], null, null); }
    exports.View_Reorder_Host_0 = View_Reorder_Host_0;
    var ReorderNgFactory = i0.ɵccf("ion-reorder", i3.Reorder, View_Reorder_Host_0, {}, {}, []);
    exports.ReorderNgFactory = ReorderNgFactory;
});
//# sourceMappingURL=reorder.ngfactory.js.map