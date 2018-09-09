/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../button/button.ngfactory";
import * as i2 from "../button/button";
import * as i3 from "../../config/config";
import * as i4 from "@angular/forms";
import * as i5 from "./checkbox";
import * as i6 from "../../util/form";
import * as i7 from "../item/item";
var styles_Checkbox = [];
var RenderType_Checkbox = i0.ɵcrt({ encapsulation: 2, styles: styles_Checkbox, data: {} });
export { RenderType_Checkbox as RenderType_Checkbox };
export function View_Checkbox_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "checkbox-icon"]], [[2, "checkbox-checked", null]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "div", [["class", "checkbox-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 1, "button", [["class", "item-cover"], ["ion-button", "item-cover"], ["role", "checkbox"], ["type", "button"]], [[8, "id", 0], [1, "aria-checked", 0], [1, "aria-labelledby", 0], [1, "aria-disabled", 0]], null, null, i1.View_Button_0, i1.RenderType_Button)), i0.ɵdid(3, 1097728, null, 0, i2.Button, [[8, "item-cover"], i3.Config, i0.ElementRef, i0.Renderer], null, null)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._value; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.id; var currVal_2 = _co._value; var currVal_3 = _co._labelId; var currVal_4 = _co._disabled; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
export function View_Checkbox_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ion-checkbox", [], [[2, "checkbox-disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2)._click($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_Checkbox_0, RenderType_Checkbox)), i0.ɵprd(5120, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i5.Checkbox]), i0.ɵdid(2, 1228800, null, 0, i5.Checkbox, [i3.Config, i6.Form, [2, i7.Item], i0.ElementRef, i0.Renderer], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2)._disabled; _ck(_v, 0, 0, currVal_0); }); }
var CheckboxNgFactory = i0.ɵccf("ion-checkbox", i5.Checkbox, View_Checkbox_Host_0, { color: "color", mode: "mode", disabled: "disabled", checked: "checked" }, { ionFocus: "ionFocus", ionChange: "ionChange", ionBlur: "ionBlur" }, []);
export { CheckboxNgFactory as CheckboxNgFactory };
//# sourceMappingURL=checkbox.ngfactory.js.map