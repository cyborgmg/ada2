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
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.getCarMenu = function () {
        return protractor_1.element(protractor_1.by.className('carmenu')).element(protractor_1.by.className('ui-panelmenu-header-link'));
    };
    Car.prototype.getCaritem = function () {
        return protractor_1.element(protractor_1.by.id('cadcaritem'));
    };
    Car.prototype.getBoxTitle = function () {
        return protractor_1.element(protractor_1.by.className('box-title'));
    };
    Car.prototype.getBtnFind = function () {
        return protractor_1.element(protractor_1.by.id('btnfind'));
    };
    Car.prototype.getBtnClean = function () {
        return protractor_1.element(protractor_1.by.id('btnclean'));
    };
    Car.prototype.getBtnPrint = function () {
        return protractor_1.element(protractor_1.by.id('btnprint'));
    };
    Car.prototype.getBtnDelete = function () {
        return protractor_1.element(protractor_1.by.id('btndelete'));
    };
    Car.prototype.getBtnDeleteDlgOk = function () {
        return protractor_1.element(protractor_1.by.css('p-dialog[id="dlgdelete"] button[id="btnok"]'));
    };
    Car.prototype.getBtnNew = function () {
        return protractor_1.element(protractor_1.by.id('btnnew'));
    };
    Car.prototype.getBtnNewDlgOk = function () {
        return protractor_1.element(protractor_1.by.css('p-dialog[id="dlgnew"] button[id="btnok"]'));
    };
    Car.prototype.getBtnCancel = function () {
        return protractor_1.element(protractor_1.by.id('btncancel'));
    };
    Car.prototype.getBtnSave = function () {
        return protractor_1.element(protractor_1.by.id('btnsave'));
    };
    Car.prototype.getBtnSaveDlgOk = function () {
        return protractor_1.element(protractor_1.by.css('p-dialog[id="dlgsave"] button[id="btnok"]'));
    };
    Car.prototype.getInputId = function () {
        return protractor_1.element(protractor_1.by.css('input[id="inputid"][name="id"]'));
    };
    Car.prototype.getInputBrand = function () {
        return protractor_1.element(protractor_1.by.css('input[id="inputbrand"][name="brand"]'));
    };
    Car.prototype.getPDropDownStatus = function () {
        return protractor_1.element(protractor_1.by.css('p-dropdown[id="inputstatus"][name="status"]'));
    };
    Car.prototype.getInputStatus = function () {
        return protractor_1.element(protractor_1.by.css('p-dropdown[id="inputstatus"][name="status"] select[name="status"]'));
    };
    Car.prototype.getPDropDownStatusOptin0 = function () {
        return protractor_1.element.all(protractor_1.by.css('p-dropdown[id="inputstatus"][name="status"] li')).get(1);
    };
    Car.prototype.getInputYear = function () {
        return protractor_1.element(protractor_1.by.css('p-spinner[id="inputyear"][name="year"] input[name="year"]'));
    };
    Car.prototype.getPDropDownColor = function () {
        return protractor_1.element(protractor_1.by.css('p-dropdown[id="inputcolor"][name="color"]'));
    };
    Car.prototype.getInputColor = function () {
        return protractor_1.element(protractor_1.by.css('p-dropdown[id="inputcolor"][name="color"] select[name="color"]'));
    };
    Car.prototype.getPDropDownColorOptin0 = function () {
        return protractor_1.element.all(protractor_1.by.css('p-dropdown[id="inputcolor"][name="color"] li')).get(1);
    };
    Car.prototype.getInputPrice = function () {
        return protractor_1.element(protractor_1.by.css('input[id="inputprice"][name="price"]'));
    };
    Car.prototype.getInputSaleDate = function () {
        return protractor_1.element(protractor_1.by.css('p-calendar[id="inputsaleDate"][name="saleDate"] input[name="saleDate"]'));
    };
    Car.prototype.getPTableRows = function () {
        return protractor_1.element.all(protractor_1.by.css('p-table[id="ptable"] div[class="ui-table-scrollable-body"] tr'));
    };
    return Car;
}(base_1.Base));
exports.Car = Car;
//# sourceMappingURL=car.js.map