"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var shared_service_1 = require("./shared.service");
var HttpRespPdfReqJsonService = /** @class */ (function () {
    function HttpRespPdfReqJsonService() {
    }
    HttpRespPdfReqJsonService.post = function (url, data) {
        return rxjs_1.Observable.create(function (observer) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', shared_service_1.SharedService.getInstance().token);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.responseType = 'blob';
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var contentType = 'application/pdf';
                        var blob = new Blob([xhr.response], { type: contentType });
                        observer.next(blob);
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.send(JSON.stringify(data));
        });
    };
    HttpRespPdfReqJsonService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpRespPdfReqJsonService);
    return HttpRespPdfReqJsonService;
}());
exports.HttpRespPdfReqJsonService = HttpRespPdfReqJsonService;
//# sourceMappingURL=http-resp-pdf-req-json.service.js.map