"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var ButtonConfirmComponent = /** @class */ (function () {
    function ButtonConfirmComponent() {
        this.confiormClick = new core_2.EventEmitter();
        // tslint:disable-next-line:no-inferrable-types
        this.display = false;
    }
    ButtonConfirmComponent.prototype.ngOnInit = function () {
    };
    ButtonConfirmComponent.prototype.confirmation = function () {
        this.confiormClick.emit();
        this.display = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonConfirmComponent.prototype, "btnid", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonConfirmComponent.prototype, "dlgid", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonConfirmComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonConfirmComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonConfirmComponent.prototype, "message", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ButtonConfirmComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ButtonConfirmComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_2.EventEmitter)
    ], ButtonConfirmComponent.prototype, "confiormClick", void 0);
    ButtonConfirmComponent = __decorate([
        core_1.Component({
            selector: 'app-button-confirm',
            templateUrl: './button-confirm.component.html',
            styleUrls: ['./button-confirm.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ButtonConfirmComponent);
    return ButtonConfirmComponent;
}());
exports.ButtonConfirmComponent = ButtonConfirmComponent;
//# sourceMappingURL=button-confirm.component.js.map