"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var lists_service_1 = require("./lists.service");
describe('ListsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [lists_service_1.ListsService]
        });
    });
    it('should be created', testing_1.inject([lists_service_1.ListsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=lists.service.spec.js.map