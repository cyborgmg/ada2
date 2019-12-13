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
var SharedService = /** @class */ (function () {
    function SharedService() {
        this.showTemplate = new core_1.EventEmitter();
        return SharedService_1.instance = SharedService_1.instance || this;
    }
    SharedService_1 = SharedService;
    SharedService.getInstance = function () {
        if (this.instance === null) {
            this.instance = new SharedService_1();
        }
        return this.instance;
    };
    SharedService.prototype.isLoggedIn = function () {
        try {
            return this.user.email !== '';
        }
        catch (err) {
            return false;
        }
    };
    Object.defineProperty(SharedService.prototype, "token", {
        get: function () {
            this._token = localStorage.getItem('token');
            return this._token;
        },
        set: function (value) {
            this._token = value;
            localStorage.setItem('token', this._token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "user", {
        get: function () {
            this._user = JSON.parse(localStorage.getItem('user'));
            return this._user;
        },
        set: function (value) {
            this._user = value;
            /*if (this._user != null) {
             this._user.profile = this._user.profile.substring(5);
            }*/
            localStorage.setItem('user', JSON.stringify(this._user));
        },
        enumerable: true,
        configurable: true
    });
    SharedService.instance = null;
    SharedService = SharedService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
    var SharedService_1;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map