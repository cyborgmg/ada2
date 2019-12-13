"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var base_1 = require("../base");
var LoginPo = /** @class */ (function (_super) {
    __extends(LoginPo, _super);
    function LoginPo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPo.prototype.navigate = function () {
        return protractor_1.browser.get('/login');
    };
    LoginPo.prototype.setEmail = function (email) {
        protractor_1.element(protractor_1.by.id('email')).sendKeys(email);
    };
    LoginPo.prototype.getEmail = function () {
        return protractor_1.element(protractor_1.by.id('email'));
    };
    LoginPo.prototype.getEmailProfile = function () {
        return protractor_1.element(protractor_1.by.id('emailprofile'));
    };
    LoginPo.prototype.setPassword = function (password) {
        protractor_1.element(protractor_1.by.id('password')).sendKeys(password);
    };
    LoginPo.prototype.login = function () {
        return protractor_1.element(protractor_1.by.id('btnlogin')).click();
    };
    return LoginPo;
}(base_1.Base));
exports.LoginPo = LoginPo;
//# sourceMappingURL=login.po.js.map