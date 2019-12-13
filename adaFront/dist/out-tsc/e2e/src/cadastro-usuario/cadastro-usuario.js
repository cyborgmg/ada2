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
var CadastroUsuario = /** @class */ (function (_super) {
    __extends(CadastroUsuario, _super);
    function CadastroUsuario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CadastroUsuario.prototype.getUserMenu = function () {
        return protractor_1.element(protractor_1.by.className('usermenu')).element(protractor_1.by.className('ui-panelmenu-header-link'));
    };
    CadastroUsuario.prototype.getUseritem = function () {
        return protractor_1.element(protractor_1.by.id('useritem'));
    };
    CadastroUsuario.prototype.getBoxTitle = function () {
        return protractor_1.element(protractor_1.by.className('box-title'));
    };
    return CadastroUsuario;
}(base_1.Base));
exports.CadastroUsuario = CadastroUsuario;
//# sourceMappingURL=cadastro-usuario.js.map