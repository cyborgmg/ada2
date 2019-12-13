"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(id, year, brand, color, price, saleDate, status) {
        this.id = id;
        this.year = year;
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.saleDate = saleDate;
        this.status = status;
    }
    Car.getInstance = function () {
        return new Car(null, null, null, null, null, null, null);
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=car.js.map