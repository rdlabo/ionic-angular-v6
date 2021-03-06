(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./content", "../../config/config", "../../platform/platform", "../../platform/dom-controller", "../app/app", "../../platform/keyboard", "../../navigation/view-controller", "../../navigation/nav-controller"], factory);
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
    var i1 = require("./content");
    var i2 = require("../../config/config");
    var i3 = require("../../platform/platform");
    var i4 = require("../../platform/dom-controller");
    var i5 = require("../app/app");
    var i6 = require("../../platform/keyboard");
    var i7 = require("../../navigation/view-controller");
    var i8 = require("../../navigation/nav-controller");
    var styles_Content = [];
    var RenderType_Content = i0.ɵcrt({ encapsulation: 2, styles: styles_Content, data: {} });
    exports.RenderType_Content = RenderType_Content;
    function View_Content_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { _fixedContent: 0 }), i0.ɵqud(402653184, 2, { _scrollContent: 0 }), (_l()(), i0.ɵeld(2, 0, [[1, 0], ["fixedContent", 1]], null, 1, "div", [["class", "fixed-content"]], null, null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(4, 0, [[2, 0], ["scrollContent", 1]], null, 1, "div", [["class", "scroll-content"]], null, null, null, null, null)), i0.ɵncd(null, 1), i0.ɵncd(null, 2)], null, null); }
    exports.View_Content_0 = View_Content_0;
    function View_Content_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, View_Content_0, RenderType_Content)), i0.ɵdid(1, 4374528, null, 0, i1.Content, [i2.Config, i3.Platform, i4.DomController, i0.ElementRef, i0.Renderer, i5.App, i6.Keyboard, i0.NgZone, [2, i7.ViewController], [2, i8.NavController]], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).statusbarPadding; var currVal_1 = i0.ɵnov(_v, 1)._hasRefresher; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    exports.View_Content_Host_0 = View_Content_Host_0;
    var ContentNgFactory = i0.ɵccf("ion-content", i1.Content, View_Content_Host_0, { color: "color", mode: "mode", fullscreen: "fullscreen", scrollDownOnLoad: "scrollDownOnLoad" }, { ionScrollStart: "ionScrollStart", ionScroll: "ionScroll", ionScrollEnd: "ionScrollEnd" }, ["[ion-fixed],ion-fab", "*", "ion-refresher"]);
    exports.ContentNgFactory = ContentNgFactory;
});
//# sourceMappingURL=content.ngfactory.js.map