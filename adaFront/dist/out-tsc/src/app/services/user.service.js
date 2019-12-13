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
var http_1 = require("@angular/common/http");
var url_api_1 = require("./url.api");
var http_resp_pdf_req_json_service_1 = require("./http-resp-pdf-req-json.service");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        return this.http.post(url_api_1.URL_API + "/api/auth", user);
    };
    UserService.prototype.save = function (user) {
        return this.http.post(url_api_1.URL_API + "/api/user", user);
    };
    UserService.prototype.findUserParams = function (user) {
        return this.http.post(url_api_1.URL_API + "/api/user/find", user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(url_api_1.URL_API + "/api/user/" + id);
    };
    UserService.prototype.getUser = function () {
        return this.http.get(url_api_1.URL_API + "/api/token");
    };
    UserService.prototype.print = function (data) {
        return http_resp_pdf_req_json_service_1.HttpRespPdfReqJsonService.post(url_api_1.URL_API + "/api/user/print", data);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map