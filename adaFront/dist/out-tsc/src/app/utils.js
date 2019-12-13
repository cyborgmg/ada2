"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.strIsEmpty = function (str) {
        return str === null || str === '';
    };
    Utils.arrayRemoveItem = function (array, item, key) {
        var idx = 0;
        array.forEach(function (element) {
            if (element[key] === item[key]) {
                array.splice(idx, 1);
            }
            idx++;
        });
    };
    Utils.arraySetItem = function (array, item, key) {
        var idx = 0;
        array.forEach(function (element) {
            if (element[key] === item[key]) {
                array[idx] = item;
            }
            idx++;
        });
    };
    Utils.cleanObject = function (o, key) {
        if (key === void 0) { key = ''; }
        Object.keys(o).forEach(function (prop) {
            if (JSON.stringify(o[prop]) !== JSON.stringify(o[key])) {
                o[prop] = null;
            }
        });
    };
    Utils.clone = function (o) {
        return JSON.parse(JSON.stringify(o));
    };
    Utils.equal = function (o1, o2) {
        return JSON.stringify(o1) === JSON.stringify(o2);
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map