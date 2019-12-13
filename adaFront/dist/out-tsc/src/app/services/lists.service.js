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
var color_service_1 = require("./color.service");
var ListsService = /** @class */ (function () {
    function ListsService(colorService) {
        var _this = this;
        this.colorService = colorService;
        this.status = [
            { label: 'Select Status', value: null },
            { label: 'Basic', value: 'B' },
            { label: 'Simple', value: 'S' },
            { label: 'Plus', value: 'P' }
        ];
        this.profiles = [
            { label: 'Selecione um Perfil', value: null },
            { label: 'ADMIN', value: 'ROLE_ADMIN' },
            { label: 'CUSTUMER', value: 'ROLE_CUSTUMER' },
            { label: 'TECHNICIAN', value: 'ROLE_TECHNICIAN' }
        ];
        if (colorService != null) {
            this.colorService.findAllDropDown().subscribe(function (responseApi) {
                _this.colors = responseApi['data'];
            }, function (err) {
                console.log(err['error']['errors'][0]);
            });
        }
    }
    ListsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [color_service_1.ColorService])
    ], ListsService);
    return ListsService;
}());
exports.ListsService = ListsService;
//# sourceMappingURL=lists.service.js.map