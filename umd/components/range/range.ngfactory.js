(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./range-knob.ngfactory", "./range-knob", "@angular/common", "@angular/forms", "./range", "../../util/form", "../../tap-click/haptic", "../item/item", "../../config/config", "../../platform/platform", "../../platform/dom-controller"], factory);
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
    var i1 = require("./range-knob.ngfactory");
    var i2 = require("./range-knob");
    var i3 = require("@angular/common");
    var i4 = require("@angular/forms");
    var i5 = require("./range");
    var i6 = require("../../util/form");
    var i7 = require("../../tap-click/haptic");
    var i8 = require("../item/item");
    var i9 = require("../../config/config");
    var i10 = require("../../platform/platform");
    var i11 = require("../../platform/dom-controller");
    var styles_Range = [];
    var RenderType_Range = i0.ɵcrt({ encapsulation: 2, styles: styles_Range, data: {} });
    exports.RenderType_Range = RenderType_Range;
    function View_Range_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "range-tick"], ["role", "presentation"]], [[4, "left", null], [2, "range-tick-active", null]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.left; var currVal_1 = _v.context.$implicit.active; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
    function View_Range_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "range-knob-handle"], ["role", "slider"]], [[2, "range-knob-pressed", null], [2, "range-knob-min", null], [2, "range-knob-max", null], [4, "left", null], [1, "aria-valuenow", 0], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-disabled", 0], [1, "aria-labelledby", 0], [8, "tabIndex", 0]], [[null, "ionIncrease"], [null, "ionDecrease"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
            var pd_0 = (i0.ɵnov(_v, 1)._keyup($event) !== false);
            ad = (pd_0 && ad);
        } if (("ionIncrease" === en)) {
            var pd_1 = (_co._keyChg(true, true) !== false);
            ad = (pd_1 && ad);
        } if (("ionDecrease" === en)) {
            var pd_2 = (_co._keyChg(false, true) !== false);
            ad = (pd_2 && ad);
        } return ad; }, i1.View_RangeKnob_0, i1.RenderType_RangeKnob)), i0.ɵdid(1, 49152, null, 0, i2.RangeKnob, [], { ratio: [0, "ratio"], pressed: [1, "pressed"], pin: [2, "pin"], min: [3, "min"], max: [4, "max"], val: [5, "val"], disabled: [6, "disabled"], labelId: [7, "labelId"] }, { ionIncrease: "ionIncrease", ionDecrease: "ionDecrease" })], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co._ratioB; var currVal_11 = _co._pressedB; var currVal_12 = _co._pin; var currVal_13 = _co._min; var currVal_14 = _co._max; var currVal_15 = _co._valB; var currVal_16 = _co._disabled; var currVal_17 = _co._labelId; _ck(_v, 1, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).pressed; var currVal_1 = ((i0.ɵnov(_v, 1).val === i0.ɵnov(_v, 1).min) || (i0.ɵnov(_v, 1).val === undefined)); var currVal_2 = (i0.ɵnov(_v, 1).val === i0.ɵnov(_v, 1).max); var currVal_3 = i0.ɵnov(_v, 1)._x; var currVal_4 = i0.ɵnov(_v, 1).val; var currVal_5 = i0.ɵnov(_v, 1).min; var currVal_6 = i0.ɵnov(_v, 1).max; var currVal_7 = i0.ɵnov(_v, 1).disabled; var currVal_8 = i0.ɵnov(_v, 1).labelId; var currVal_9 = (i0.ɵnov(_v, 1).disabled ? (0 - 1) : 0); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
    function View_Range_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { _slider: 0 }), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(2, 0, [[1, 0], ["slider", 1]], null, 8, "div", [["class", "range-slider"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Range_1)), i0.ɵdid(4, 278528, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 0, "div", [["class", "range-bar"], ["role", "presentation"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, [["bar", 1]], null, 0, "div", [["class", "range-bar range-bar-active"], ["role", "presentation"]], [[4, "left", null], [4, "right", null]], null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 1, "div", [["class", "range-knob-handle"], ["role", "slider"]], [[2, "range-knob-pressed", null], [2, "range-knob-min", null], [2, "range-knob-max", null], [4, "left", null], [1, "aria-valuenow", 0], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-disabled", 0], [1, "aria-labelledby", 0], [8, "tabIndex", 0]], [[null, "ionIncrease"], [null, "ionDecrease"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
            var pd_0 = (i0.ɵnov(_v, 8)._keyup($event) !== false);
            ad = (pd_0 && ad);
        } if (("ionIncrease" === en)) {
            var pd_1 = (_co._keyChg(true, false) !== false);
            ad = (pd_1 && ad);
        } if (("ionDecrease" === en)) {
            var pd_2 = (_co._keyChg(false, false) !== false);
            ad = (pd_2 && ad);
        } return ad; }, i1.View_RangeKnob_0, i1.RenderType_RangeKnob)), i0.ɵdid(8, 49152, null, 0, i2.RangeKnob, [], { ratio: [0, "ratio"], pressed: [1, "pressed"], pin: [2, "pin"], min: [3, "min"], max: [4, "max"], val: [5, "val"], disabled: [6, "disabled"], labelId: [7, "labelId"] }, { ionIncrease: "ionIncrease", ionDecrease: "ionDecrease" }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Range_2)), i0.ɵdid(10, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 1)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._ticks; _ck(_v, 4, 0, currVal_0); var currVal_13 = _co._ratioA; var currVal_14 = _co._pressedA; var currVal_15 = _co._pin; var currVal_16 = _co._min; var currVal_17 = _co._max; var currVal_18 = _co._valA; var currVal_19 = _co._disabled; var currVal_20 = _co._labelId; _ck(_v, 8, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_21 = _co._dual; _ck(_v, 10, 0, currVal_21); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co._barL; var currVal_2 = _co._barR; _ck(_v, 6, 0, currVal_1, currVal_2); var currVal_3 = i0.ɵnov(_v, 8).pressed; var currVal_4 = ((i0.ɵnov(_v, 8).val === i0.ɵnov(_v, 8).min) || (i0.ɵnov(_v, 8).val === undefined)); var currVal_5 = (i0.ɵnov(_v, 8).val === i0.ɵnov(_v, 8).max); var currVal_6 = i0.ɵnov(_v, 8)._x; var currVal_7 = i0.ɵnov(_v, 8).val; var currVal_8 = i0.ɵnov(_v, 8).min; var currVal_9 = i0.ɵnov(_v, 8).max; var currVal_10 = i0.ɵnov(_v, 8).disabled; var currVal_11 = i0.ɵnov(_v, 8).labelId; var currVal_12 = (i0.ɵnov(_v, 8).disabled ? (0 - 1) : 0); _ck(_v, 7, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); }); }
    exports.View_Range_0 = View_Range_0;
    function View_Range_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ion-range", [], [[2, "range-disabled", null], [2, "range-pressed", null], [2, "range-has-pin", null]], null, null, View_Range_0, RenderType_Range)), i0.ɵprd(5120, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i5.Range]), i0.ɵdid(2, 1228800, null, 0, i5.Range, [i6.Form, i7.Haptic, [2, i8.Item], i9.Config, i10.Platform, i0.ElementRef, i0.Renderer, i11.DomController, i0.ChangeDetectorRef], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2)._disabled; var currVal_1 = i0.ɵnov(_v, 2)._pressed; var currVal_2 = i0.ɵnov(_v, 2)._pin; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
    exports.View_Range_Host_0 = View_Range_Host_0;
    var RangeNgFactory = i0.ɵccf("ion-range", i5.Range, View_Range_Host_0, { color: "color", mode: "mode", disabled: "disabled", min: "min", max: "max", step: "step", snaps: "snaps", pin: "pin", debounce: "debounce", dualKnobs: "dualKnobs" }, { ionFocus: "ionFocus", ionChange: "ionChange", ionBlur: "ionBlur" }, ["[range-left]", "[range-right]"]);
    exports.RangeNgFactory = RangeNgFactory;
});
//# sourceMappingURL=range.ngfactory.js.map