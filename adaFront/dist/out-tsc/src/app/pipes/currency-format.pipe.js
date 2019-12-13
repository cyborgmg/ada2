"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var CurrencyFormatPipe = /** @class */ (function () {
    function CurrencyFormatPipe() {
    }
    CurrencyFormatPipe.prototype.transform = function (value, locale, currency_symbol, number_format) {
        if (number_format === void 0) { number_format = '1.2-2'; }
        if (value) {
            var currencyPipe = new common_1.CurrencyPipe('pt-BR');
            return currencyPipe.transform(value, locale, currency_symbol, number_format);
        }
    };
    CurrencyFormatPipe = __decorate([
        core_1.Pipe({
            name: 'currencyFormat'
        })
    ], CurrencyFormatPipe);
    return CurrencyFormatPipe;
}());
exports.CurrencyFormatPipe = CurrencyFormatPipe;
//# sourceMappingURL=currency-format.pipe.js.map