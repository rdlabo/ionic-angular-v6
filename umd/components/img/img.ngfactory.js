(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./img", "../../platform/platform", "../content/content", "../../platform/dom-controller"], factory);
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
    var i1 = require("./img");
    var i2 = require("../../platform/platform");
    var i3 = require("../content/content");
    var i4 = require("../../platform/dom-controller");
    var styles_Img = [];
    var RenderType_Img = i0.ɵcrt({ encapsulation: 2, styles: styles_Img, data: {} });
    exports.RenderType_Img = RenderType_Img;
    function View_Img_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "img", [], null, null, null, null, null))], null, null); }
    exports.View_Img_0 = View_Img_0;
    function View_Img_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-img", [], null, null, null, View_Img_0, RenderType_Img)), i0.ɵdid(1, 1228800, null, 0, i1.Img, [i0.ElementRef, i0.Renderer, i2.Platform, [2, i3.Content], i4.DomController], null, null)], null, null); }
    exports.View_Img_Host_0 = View_Img_Host_0;
    var ImgNgFactory = i0.ɵccf("ion-img", i1.Img, View_Img_Host_0, { src: "src", bounds: "bounds", cache: "cache", width: "width", height: "height", alt: "alt" }, {}, []);
    exports.ImgNgFactory = ImgNgFactory;
});
//# sourceMappingURL=img.ngfactory.js.map