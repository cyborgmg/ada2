"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_label_pipe_1 = require("./status-label.pipe");
var testing_1 = require("@angular/core/testing");
var lists_service_1 = require("../services/lists.service");
describe('StatusLabelPipe', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                status_label_pipe_1.StatusLabelPipe
            ],
            providers: [
                lists_service_1.ListsService
            ]
        }).compileComponents();
    }));
    it('should create the ProfileLabelPipe', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(status_label_pipe_1.StatusLabelPipe);
        var statusLabelPipe = fixture.debugElement.componentInstance;
        expect(statusLabelPipe).toBeTruthy();
    }));
});
//# sourceMappingURL=status-label.pipe.spec.js.map