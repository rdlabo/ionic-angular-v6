(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../button/button.ngfactory", "../button/button", "../../config/config", "./radio-button", "../../util/form", "../item/item", "./radio-group"], factory);
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
    var i1 = require("../button/button.ngfactory");
    var i2 = require("../button/button");
    var i3 = require("../../config/config");
    var i4 = require("./radio-button");
    var i5 = require("../../util/form");
    var i6 = require("../item/item");
    var i7 = require("./radio-group");
    var styles_RadioButton = [];
    var RenderType_RadioButton = i0.ɵcrt({ encapsulation: 2, styles: styles_RadioButton, data: {} });
    exports.RenderType_RadioButton = RenderType_RadioButton;
    function View_RadioButton_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "radio-icon"]], [[2, "radio-checked", null]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 0, "div", [["class", "radio-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 1, "button", [["class", "item-cover"], ["ion-button", "item-cover"], ["role", "radio"], ["type", "button"]], [[8, "id", 0], [1, "aria-checked", 0], [1, "aria-labelledby", 0], [1, "aria-disabled", 0]], null, null, i1.View_Button_0, i1.RenderType_Button)), i0.ɵdid(3, 1097728, null, 0, i2.Button, [[8, "item-cover"], i3.Config, i0.ElementRef, i0.Renderer], null, null)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._checked; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.id; var currVal_2 = _co._checked; var currVal_3 = _co._labelId; var currVal_4 = _co._disabled; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
    exports.View_RadioButton_0 = View_RadioButton_0;
    function View_RadioButton_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-radio", [], [[2, "radio-disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
            var pd_0 = (i0.ɵnov(_v, 1)._click($event) !== false);
            ad = (pd_0 && ad);
        } return ad; }, View_RadioButton_0, RenderType_RadioButton)), i0.ɵdid(1, 245760, null, 0, i4.RadioButton, [i5.Form, i3.Config, i0.ElementRef, i0.Renderer, [2, i6.Item], [2, i7.RadioGroup]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._disabled; _ck(_v, 0, 0, currVal_0); }); }
    exports.View_RadioButton_Host_0 = View_RadioButton_Host_0;
    var RadioButtonNgFactory = i0.ɵccf("ion-radio", i4.RadioButton, View_RadioButton_Host_0, { color: "color", mode: "mode", value: "value", checked: "checked", disabled: "disabled" }, { ionSelect: "ionSelect" }, []);
    exports.RadioButtonNgFactory = RadioButtonNgFactory;
});
//# sourceMappingURL=radio-button.ngfactory.js.map