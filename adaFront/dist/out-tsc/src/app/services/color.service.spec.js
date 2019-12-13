"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var color_service_1 = require("./color.service");
describe('ColorService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [color_service_1.ColorService]
        });
    });
    it('should be created', testing_1.inject([color_service_1.ColorService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=color.service.spec.js.map