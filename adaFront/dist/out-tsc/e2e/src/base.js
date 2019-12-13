"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.waitVisibilityOf = function (el) {
        return protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(el));
    };
    Base.prototype.sleep = function (ms) {
        protractor_1.browser.sleep(ms);
    };
    Base.prototype.waitForAngular = function () {
        protractor_1.browser.waitForAngular();
    };
    Base.prototype.maximize = function () {
        protractor_1.browser.driver.manage().window().maximize();
    };
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=base.js.map