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
var shared_service_1 = require("../../services/shared.service");
var user_model_1 = require("../../model/user.model");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.share = shared_service_1.SharedService.getInstance();
        this.share.user = new user_model_1.User('', '', '', new Array());
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.singOut = function () {
        this.share.token = null;
        this.share.user = null;
        window.location.href = '/login';
        window.location.reload();
    };
    HeaderComponent.prototype.getEmailProfile = function () {
        if (this.share.user !== null) {
            return "" + this.share.user.email;
        }
        else {
            return '';
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map