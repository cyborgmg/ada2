"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var car_service_1 = require("./car.service");
describe('CarService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [car_service_1.CarService]
        });
    });
    it('should be created', testing_1.inject([car_service_1.CarService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=car.service.spec.js.map