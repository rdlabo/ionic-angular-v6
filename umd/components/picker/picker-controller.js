(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../app/app", "../../config/config", "./picker"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var app_1 = require("../app/app");
    var config_1 = require("../../config/config");
    var picker_1 = require("./picker");
    /**
     * @hidden
     * @name PickerController
     * @description
     *
     */
    var PickerController = /** @class */ (function () {
        function PickerController(_app, config) {
            this._app = _app;
            this.config = config;
        }
        /**
         * Open a picker.
         */
        PickerController.prototype.create = function (opts) {
            if (opts === void 0) { opts = {}; }
            return new picker_1.Picker(this._app, opts, this.config);
        };
        PickerController.decorators = [
            { type: core_1.Injectable },
        ];
        /** @nocollapse */
        PickerController.ctorParameters = function () { return [
            { type: app_1.App },
            { type: config_1.Config }
        ]; };
        return PickerController;
    }());
    exports.PickerController = PickerController;
});
//# sourceMappingURL=picker-controller.js.map