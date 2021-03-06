(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../button/button.ngfactory", "../button/button", "../../config/config", "../icon/icon", "./searchbar", "../../platform/platform", "@angular/forms"], factory);
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
    var i4 = require("../icon/icon");
    var i5 = require("./searchbar");
    var i6 = require("../../platform/platform");
    var i7 = require("@angular/forms");
    var styles_Searchbar = [];
    var RenderType_Searchbar = i0.ɵcrt({ encapsulation: 2, styles: styles_Searchbar, data: {} });
    exports.RenderType_Searchbar = RenderType_Searchbar;
    function View_Searchbar_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { _searchbarInput: 0 }), i0.ɵqud(402653184, 2, { _searchbarIcon: 0 }), i0.ɵqud(402653184, 3, { _cancelButton: 0 }), (_l()(), i0.ɵeld(3, 0, null, null, 8, "div", [["class", "searchbar-input-container"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 3, "button", [["class", "searchbar-md-cancel"], ["clear", ""], ["color", "dark"], ["ion-button", ""], ["mode", "md"], ["type", "button"]], null, [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
            var pd_0 = (_co.cancelSearchbar($event) !== false);
            ad = (pd_0 && ad);
        } if (("mousedown" === en)) {
            var pd_1 = (_co.cancelSearchbar($event) !== false);
            ad = (pd_1 && ad);
        } return ad; }, i1.View_Button_0, i1.RenderType_Button)), i0.ɵdid(5, 1097728, null, 0, i2.Button, [[8, ""], i3.Config, i0.ElementRef, i0.Renderer], { color: [0, "color"], mode: [1, "mode"], clear: [2, "clear"] }, null), (_l()(), i0.ɵeld(6, 0, null, 0, 1, "ion-icon", [["name", "md-arrow-back"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(7, 147456, null, 0, i4.Icon, [i3.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵeld(8, 0, [[2, 0], ["searchbarIcon", 1]], null, 0, "div", [["class", "searchbar-search-icon"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, [[1, 0], ["searchbarInput", 1]], null, 0, "input", [["class", "searchbar-input"], ["dir", "auto"]], [[1, "placeholder", 0], [1, "type", 0], [1, "autocomplete", 0], [1, "autocorrect", 0], [1, "spellcheck", 0]], [[null, "input"], [null, "blur"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
            var pd_0 = (_co.inputChanged($event) !== false);
            ad = (pd_0 && ad);
        } if (("blur" === en)) {
            var pd_1 = (_co.inputBlurred() !== false);
            ad = (pd_1 && ad);
        } if (("focus" === en)) {
            var pd_2 = (_co.inputFocused() !== false);
            ad = (pd_2 && ad);
        } return ad; }, null, null)), (_l()(), i0.ɵeld(10, 0, null, null, 1, "button", [["class", "searchbar-clear-icon"], ["clear", ""], ["ion-button", ""], ["type", "button"]], null, [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
            var pd_0 = (_co.clearInput($event) !== false);
            ad = (pd_0 && ad);
        } if (("mousedown" === en)) {
            var pd_1 = (_co.clearInput($event) !== false);
            ad = (pd_1 && ad);
        } return ad; }, i1.View_Button_0, i1.RenderType_Button)), i0.ɵdid(11, 1097728, null, 0, i2.Button, [[8, ""], i3.Config, i0.ElementRef, i0.Renderer], { mode: [0, "mode"], clear: [1, "clear"] }, null), (_l()(), i0.ɵeld(12, 0, [[3, 0]], null, 2, "button", [["class", "searchbar-ios-cancel"], ["clear", ""], ["ion-button", ""], ["mode", "ios"], ["type", "button"]], [[8, "tabIndex", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
            var pd_0 = (_co.cancelSearchbar($event) !== false);
            ad = (pd_0 && ad);
        } if (("mousedown" === en)) {
            var pd_1 = (_co.cancelSearchbar($event) !== false);
            ad = (pd_1 && ad);
        } return ad; }, i1.View_Button_0, i1.RenderType_Button)), i0.ɵdid(13, 1097728, [["cancelButton", 4]], 0, i2.Button, [[8, ""], i3.Config, i0.ElementRef, i0.Renderer], { mode: [0, "mode"], clear: [1, "clear"] }, null), (_l()(), i0.ɵted(14, 0, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "dark"; var currVal_1 = "md"; var currVal_2 = ""; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = "md-arrow-back"; _ck(_v, 7, 0, currVal_4); var currVal_10 = _co._mode; var currVal_11 = ""; _ck(_v, 11, 0, currVal_10, currVal_11); var currVal_13 = "ios"; var currVal_14 = ""; _ck(_v, 13, 0, currVal_13, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = i0.ɵnov(_v, 7)._hidden; _ck(_v, 6, 0, currVal_3); var currVal_5 = _co.placeholder; var currVal_6 = _co.type; var currVal_7 = _co._autocomplete; var currVal_8 = _co._autocorrect; var currVal_9 = _co._spellcheck; _ck(_v, 9, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_12 = (_co._isActive ? 1 : (0 - 1)); _ck(_v, 12, 0, currVal_12); var currVal_15 = _co.cancelButtonText; _ck(_v, 14, 0, currVal_15); }); }
    exports.View_Searchbar_0 = View_Searchbar_0;
    function View_Searchbar_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-searchbar", [], [[2, "searchbar-animated", null], [2, "searchbar-has-value", null], [2, "searchbar-active", null], [2, "searchbar-show-cancel", null], [2, "searchbar-left-aligned", null], [2, "searchbar-has-focus", null]], null, null, View_Searchbar_0, RenderType_Searchbar)), i0.ɵdid(1, 1294336, null, 0, i5.Searchbar, [i3.Config, i6.Platform, i0.ElementRef, i0.Renderer, [2, i7.NgControl]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._animated; var currVal_1 = i0.ɵnov(_v, 1)._value; var currVal_2 = i0.ɵnov(_v, 1)._isActive; var currVal_3 = i0.ɵnov(_v, 1)._showCancelButton; var currVal_4 = i0.ɵnov(_v, 1)._shouldAlignLeft; var currVal_5 = i0.ɵnov(_v, 1)._isFocus; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
    exports.View_Searchbar_Host_0 = View_Searchbar_Host_0;
    var SearchbarNgFactory = i0.ɵccf("ion-searchbar", i5.Searchbar, View_Searchbar_Host_0, { color: "color", mode: "mode", disabled: "disabled", cancelButtonText: "cancelButtonText", showCancelButton: "showCancelButton", debounce: "debounce", placeholder: "placeholder", autocomplete: "autocomplete", autocorrect: "autocorrect", spellcheck: "spellcheck", type: "type", animated: "animated" }, { ionFocus: "ionFocus", ionChange: "ionChange", ionBlur: "ionBlur", ionInput: "ionInput", ionCancel: "ionCancel", ionClear: "ionClear" }, []);
    exports.SearchbarNgFactory = SearchbarNgFactory;
});
//# sourceMappingURL=searchbar.ngfactory.js.map