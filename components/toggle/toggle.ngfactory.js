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
import * as i5 from "./toggle";
import * as i6 from "../../util/form";
import * as i7 from "../../platform/platform";
import * as i8 from "../../tap-click/haptic";
import * as i9 from "../item/item";
import * as i10 from "../../gestures/gesture-controller";
import * as i11 from "../../platform/dom-controller";
var styles_Toggle = [];
var RenderType_Toggle = i0.ɵcrt({ encapsulation: 2, styles: styles_Toggle, data: {} });
export { RenderType_Toggle as RenderType_Toggle };
export function View_Toggle_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "toggle-icon"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "div", [["class", "toggle-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 1, "button", [["class", "item-cover"], ["disable-activated", ""], ["ion-button", "item-cover"], ["role", "checkbox"], ["type", "button"]], [[8, "id", 0], [1, "aria-checked", 0], [1, "aria-labelledby", 0], [1, "aria-disabled", 0]], null, null, i1.View_Button_0, i1.RenderType_Button)), i0.ɵdid(3, 1097728, null, 0, i2.Button, [[8, "item-cover"], i3.Config, i0.ElementRef, i0.Renderer], null, null)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; var currVal_1 = _co._value; var currVal_2 = _co._labelId; var currVal_3 = _co._disabled; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
export function View_Toggle_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ion-toggle", [], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null]], [[null, "keyup"]], function (_v, en, $event) { var ad = true; if (("keyup" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2)._keyup($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_Toggle_0, RenderType_Toggle)), i0.ɵprd(5120, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i5.Toggle]), i0.ɵdid(2, 1228800, null, 0, i5.Toggle, [i6.Form, i3.Config, i7.Platform, i0.ElementRef, i0.Renderer, i8.Haptic, [2, i9.Item], i10.GestureController, i11.DomController, i0.NgZone], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2)._disabled; var currVal_1 = i0.ɵnov(_v, 2)._value; var currVal_2 = i0.ɵnov(_v, 2)._activated; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var ToggleNgFactory = i0.ɵccf("ion-toggle", i5.Toggle, View_Toggle_Host_0, { color: "color", mode: "mode", disabled: "disabled", checked: "checked" }, { ionFocus: "ionFocus", ionChange: "ionChange", ionBlur: "ionBlur" }, []);
export { ToggleNgFactory as ToggleNgFactory };
//# sourceMappingURL=toggle.ngfactory.js.map