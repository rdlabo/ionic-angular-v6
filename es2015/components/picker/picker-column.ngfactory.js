/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./picker-column";
import * as i3 from "../../config/config";
import * as i4 from "../../platform/platform";
import * as i5 from "../../tap-click/haptic";
import * as i6 from "../../platform/dom-controller";
var styles_PickerColumnCmp = [];
var RenderType_PickerColumnCmp = i0.ɵcrt({ encapsulation: 2, styles: styles_PickerColumnCmp, data: {} });
export { RenderType_PickerColumnCmp as RenderType_PickerColumnCmp };
function View_PickerColumnCmp_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "picker-prefix"]], [[4, "width", null]], null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.col.prefixWidth; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.col.prefix; _ck(_v, 1, 0, currVal_1); }); }
function View_PickerColumnCmp_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "button", [["class", "picker-opt"], ["disable-activated", ""]], [[2, "picker-opt-disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.optClick($event, _v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.disabled; _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.text; _ck(_v, 1, 0, currVal_1); }); }
function View_PickerColumnCmp_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "picker-suffix"]], [[4, "width", null]], null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.col.suffixWidth; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.col.suffix; _ck(_v, 1, 0, currVal_1); }); }
export function View_PickerColumnCmp_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { colEle: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_PickerColumnCmp_1)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(3, 0, [[1, 0], ["colEle", 1]], null, 2, "div", [["class", "picker-opts"]], [[4, "max-width", null]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_PickerColumnCmp_2)), i0.ɵdid(5, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_PickerColumnCmp_3)), i0.ɵdid(7, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.col.prefix; _ck(_v, 2, 0, currVal_0); var currVal_2 = _co.col.options; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.col.suffix; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.col.optionsWidth; _ck(_v, 3, 0, currVal_1); }); }
export function View_PickerColumnCmp_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "picker-col"]], [[4, "max-width", null], [2, "picker-opts-left", null], [2, "picker-opts-right", null]], null, null, View_PickerColumnCmp_0, RenderType_PickerColumnCmp)), i0.ɵdid(1, 4374528, null, 0, i2.PickerColumnCmp, [i3.Config, i4.Platform, i0.ElementRef, i0.NgZone, i5.Haptic, i4.Platform, i6.DomController], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).col.columnWidth; var currVal_1 = (i0.ɵnov(_v, 1).col.align == "left"); var currVal_2 = (i0.ɵnov(_v, 1).col.align == "right"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var PickerColumnCmpNgFactory = i0.ɵccf(".picker-col", i2.PickerColumnCmp, View_PickerColumnCmp_Host_0, { col: "col" }, { ionChange: "ionChange" }, []);
export { PickerColumnCmpNgFactory as PickerColumnCmpNgFactory };
//# sourceMappingURL=picker-column.ngfactory.js.map