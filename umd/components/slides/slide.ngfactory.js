(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./slide", "./slides"], factory);
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
    var i1 = require("./slide");
    var i2 = require("./slides");
    var styles_Slide = [];
    var RenderType_Slide = i0.ɵcrt({ encapsulation: 2, styles: styles_Slide, data: {} });
    exports.RenderType_Slide = RenderType_Slide;
    function View_Slide_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "slide-zoom"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
    exports.View_Slide_0 = View_Slide_0;
    function View_Slide_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-slide", [], null, null, null, View_Slide_0, RenderType_Slide)), i0.ɵdid(1, 180224, null, 0, i1.Slide, [i0.ElementRef, i0.Renderer, i2.Slides], null, null)], null, null); }
    exports.View_Slide_Host_0 = View_Slide_Host_0;
    var SlideNgFactory = i0.ɵccf("ion-slide", i1.Slide, View_Slide_Host_0, {}, {}, ["*"]);
    exports.SlideNgFactory = SlideNgFactory;
});
//# sourceMappingURL=slide.ngfactory.js.map