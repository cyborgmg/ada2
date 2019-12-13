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
var user_model_1 = require("../../../model/user.model");
var shared_service_1 = require("../../../services/shared.service");
var user_service_1 = require("../../../services/user.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = user_model_1.User.getInstance();
        this.shared = shared_service_1.SharedService.getInstance();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = '';
        this.userService.login(this.user).subscribe(function (userAuthentication) {
            _this.shared.token = userAuthentication.token;
            _this.shared.user = userAuthentication.user;
            window.location.reload();
        }, function (err) {
            _this.shared.token = null;
            _this.shared.user = null;
            _this.shared.showTemplate.emit(false);
            _this.message = 'Erro';
        });
    };
    LoginComponent.prototype.cancelLogin = function () {
        this.message = '';
        this.user = user_model_1.User.getInstance();
        window.location.href = '/login';
        window.location.reload();
    };
    LoginComponent.prototype.getFormGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': isInvalid && isDirty
        };
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map