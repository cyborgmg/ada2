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
var shared_service_1 = require("./../../services/shared.service");
var core_1 = require("@angular/core");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
        this.shared = shared_service_1.SharedService.getInstance();
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var auhtRequest;
        if (this.shared.isLoggedIn()) {
            auhtRequest = req.clone({
                setHeaders: {
                    'Authorization': this.shared.token
                }
            });
            return next.handle(auhtRequest);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=auth.interceptor.js.map