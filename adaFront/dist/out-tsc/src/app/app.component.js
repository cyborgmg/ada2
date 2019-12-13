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
var shared_service_1 = require("./services/shared.service");
var user_service_1 = require("./services/user.service");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.showTemplate = false;
        this.shared = shared_service_1.SharedService.getInstance();
        if (this.shared.isLoggedIn()) {
            this.userService.getUser().subscribe(function (userAuthentication) {
                _this.shared.user = userAuthentication.user;
                _this.shared.showTemplate.emit(true);
                _this.router.navigate(['/']);
            }, function (err) {
                console.log(err);
                _this.shared.token = null;
                _this.shared.user = null;
                _this.shared.showTemplate.emit(false);
            });
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.showTemplate.subscribe(function (show) {
            _this.showTemplate = show;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map