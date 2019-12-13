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
var rxjs_1 = require("rxjs");
var response_api_1 = require("../model/response-api");
var utils_1 = require("../utils");
var CarMokService = /** @class */ (function () {
    function CarMokService() {
        this.cars = new Array();
        this.cars = new Array();
    }
    CarMokService.prototype.findCarParams = function (car) {
        if ((car.brand == null) && (car.status == null) && (car.year == null) &&
            (car.color == null) && (car.price == null) && (car.saleDate == null)) {
            return rxjs_1.of(new response_api_1.ResponseApi(this.cars, []));
        }
        else {
            return rxjs_1.of(new response_api_1.ResponseApi(new Array(), []));
        }
    };
    CarMokService.prototype.saveCar = function (car) {
        var carclone = utils_1.Utils.clone(car);
        carclone.id = Math.round((Math.random() * 10000));
        this.cars.push(utils_1.Utils.clone(carclone));
        return rxjs_1.of(new response_api_1.ResponseApi(carclone, []));
    };
    CarMokService.prototype.deleteCar = function (id) {
        var _this = this;
        var idx = 0;
        this.cars.forEach(function (element) {
            if (element.id === id) {
                _this.cars.splice(idx, 1);
            }
            idx++;
        });
        return rxjs_1.of(null);
    };
    CarMokService.prototype.printCars = function (data) {
        return rxjs_1.of(new Blob());
    };
    CarMokService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CarMokService);
    return CarMokService;
}());
exports.CarMokService = CarMokService;
//# sourceMappingURL=car-mok.service.js.map