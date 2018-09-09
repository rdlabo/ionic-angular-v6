(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    /**
     * @hidden
     */
    var ItemContent = /** @class */ (function () {
        function ItemContent() {
        }
        ItemContent.decorators = [
            { type: core_1.Directive, args: [{
                        selector: 'ion-item,[ion-item]',
                        host: {
                            'class': 'item-block'
                        }
                    },] },
        ];
        return ItemContent;
    }());
    exports.ItemContent = ItemContent;
});
//# sourceMappingURL=item-content.js.map