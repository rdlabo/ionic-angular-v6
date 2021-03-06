/**
 * @name NavParams
 * @description
 * NavParams are an object that exists on a page and can contain data for that particular view.
 * Similar to how data was pass to a view in V1 with `$stateParams`, NavParams offer a much more flexible
 * option with a simple `get` method.
 *
 * @usage
 * ```ts
 * import { NavParams } from 'ionic-angular';
 *
 * export class MyClass{
 *
 *  constructor(navParams: NavParams){
 *    // userParams is an object we have in our nav-parameters
 *    navParams.get('userParams');
 *  }
 *
 * }
 * ```
 * @demo /docs/demos/src/nav-params/
 * @see {@link /docs/components#navigation Navigation Component Docs}
 * @see {@link ../NavController/ NavController API Docs}
 * @see {@link /docs/api/components/nav/Nav/ Nav API Docs}
 * @see {@link /docs/api/components/nav/NavPush/ NavPush API Docs}
 */
var NavParams = /** @class */ (function () {
    /**
     * @hidden
     * @param {TODO} data  TODO
     */
    function NavParams(data) {
        if (data === void 0) { data = {}; }
        this.data = data;
    }
    /**
     * Get the value of a nav-parameter for the current view
     *
     * ```ts
     * import { NavParams } from 'ionic-angular';
     *
     * export class MyClass{
     *  constructor(public navParams: NavParams){
     *    // userParams is an object we have in our nav-parameters
     *    this.navParams.get('userParams');
     *  }
     * }
     * ```
     *
     *
     * @param {string} param Which param you want to look up
     */
    NavParams.prototype.get = function (param) {
        return this.data[param];
    };
    return NavParams;
}());
export { NavParams };
//# sourceMappingURL=nav-params.js.map