"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var car_1 = require("../../model/car");
var car_service_1 = require("../../services/car.service");
var lists_service_1 = require("../../services/lists.service");
var table_1 = require("primeng/table");
var utils_1 = require("src/app/utils");
var base_cadastro_1 = require("src/app/pattern/base-cadastro");
var CarComponent = /** @class */ (function (_super) {
    __extends(CarComponent, _super);
    function CarComponent(carService, listsService) {
        var _this = _super.call(this) || this;
        _this.carService = carService;
        _this.listsService = listsService;
        // tslint:disable-next-line:no-inferrable-types
        _this.blockedPtable = false;
        _this.cars = new Array();
        _this.selectedCar = car_1.Car.getInstance();
        _this.oldSelectedCar = car_1.Car.getInstance();
        return _this;
    }
    CarComponent.prototype.ngOnInit = function () {
        this.copy();
        this.navigate();
    };
    CarComponent.prototype.findCarParams = function () {
        var _this = this;
        this.carService.findCarParams(this.selectedCar).subscribe(function (responseApi) {
            _this.cars = responseApi['data'];
            _this.selectedCar = _this.cars.length > 0 ? _this.cars[0] : car_1.Car.getInstance();
            _this.copy();
            _this.navigate();
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    CarComponent.prototype.saveCar = function () {
        var _this = this;
        this.carService.saveCar(this.selectedCar).subscribe(function (responseApi) {
            _this.selectedCar = responseApi['data'];
            _this.cars = new Array();
            _this.cars.push(_this.selectedCar);
            _this.copy();
            _this.navigate();
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    CarComponent.prototype.deleteCar = function () {
        var _this = this;
        this.carService.deleteCar(this.selectedCar.id).subscribe(function () {
            utils_1.Utils.arrayRemoveItem(_this.cars, _this.selectedCar, 'id');
            _this.selectedCar = _this.cars.length > 0 ? _this.cars[0] : car_1.Car.getInstance();
            _this.copy();
            _this.navigate();
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    CarComponent.prototype.printCars = function () {
        var _this = this;
        this.carService.printCars(this.cars).subscribe(function (data) {
            var blob = new Blob([data], { type: 'application/pdf' });
            var url = window.URL.createObjectURL(blob);
            window.open(url);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err
            });
        });
    };
    CarComponent.prototype.onRowUnselect = function (event) {
        this.selectedCar = utils_1.Utils.clone(this.oldSelectedCar);
    };
    CarComponent.prototype.copy = function () {
        this.oldSelectedCar = utils_1.Utils.clone(this.selectedCar);
    };
    CarComponent.prototype.novo = function () {
        var car = car_1.Car.getInstance();
        this.cars.push(car);
        this.selectedCar = car;
        utils_1.Utils.cleanObject(this.selectedCar);
        this.navigate();
    };
    CarComponent.prototype.cancel = function () {
        if (this.selectedCar.id === null) {
            utils_1.Utils.arrayRemoveItem(this.cars, this.selectedCar, 'id');
        }
        this.selectedCar = utils_1.Utils.clone(this.oldSelectedCar);
        utils_1.Utils.arraySetItem(this.cars, this.selectedCar, 'id');
        this.navigate();
    };
    CarComponent.prototype.clear = function () {
        utils_1.Utils.cleanObject(this.selectedCar, 'id');
        this.navigate();
    };
    CarComponent.prototype.navigate = function () {
        var edit = (JSON.stringify(this.oldSelectedCar) !== JSON.stringify(this.selectedCar));
        var idIsNull = (this.selectedCar.id == null);
        var full = (this.cars.length > 0);
        var required = !utils_1.Utils.strIsEmpty(this.selectedCar.brand);
        // tslint:disable-next-line:max-line-length
        var novo = (JSON.stringify(this.cars[this.cars.indexOf(this.selectedCar)]) === JSON.stringify(this.selectedCar)) && (idIsNull);
        this.btnSalvar = full && edit && required;
        this.btnCancelar = full && (novo || edit);
        this.btnNovo = !novo && !edit;
        this.btnDeletar = full && !idIsNull && !edit;
        this.btnPrint = full && !this.btnCancelar;
        this.blockedPtable = this.btnCancelar;
        // this.ptable.selectionMode = !this.btnCancelar ? 'single' : 'none';
        // console.log(`this.cars.length=${this.cars.length}`);
        // console.log(`this.selectedCar.id=${this.selectedCar.id}`);
        // console.log(`this.selectedCar=${JSON.stringify(this.selectedCar)}`);
        // console.log(`this.oldSelectedCar=${JSON.stringify(this.oldSelectedCar)}`);
        // console.log(`!novo=${!novo} && !edit=${!edit}`);
        // console.log(`===============================================================================================`);
    };
    __decorate([
        core_1.ViewChild('ptable'),
        __metadata("design:type", table_1.Table)
    ], CarComponent.prototype, "ptable", void 0);
    CarComponent = __decorate([
        core_1.Component({
            selector: 'app-car',
            templateUrl: './car.component.html',
            styleUrls: ['./car.component.css']
        }),
        __metadata("design:paramtypes", [car_service_1.CarService, lists_service_1.ListsService])
    ], CarComponent);
    return CarComponent;
}(base_cadastro_1.BaseCadastro));
exports.CarComponent = CarComponent;
//# sourceMappingURL=car.component.js.map