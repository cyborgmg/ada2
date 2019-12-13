"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_label_pipe_1 = require("./profile-label.pipe");
var lists_mock_service_1 = require("../services/lists-mock.service");
describe('ProfileLabelPipe', function () {
    var pipe;
    beforeEach(function () {
        pipe = new profile_label_pipe_1.ProfileLabelPipe(new lists_mock_service_1.ListsMockService());
    });
    it('transform ROLE_ADMIN to ADMIN', function () {
        expect(pipe.transform('ROLE_ADMIN')).toEqual('ADMIN');
    });
    it('transform ROLE_CUSTUMER to CUSTUMER', function () {
        expect(pipe.transform('ROLE_CUSTUMER')).toEqual('CUSTUMER');
    });
    it('transform ROLE_TECHNICIAN to TECHNICIAN', function () {
        expect(pipe.transform('ROLE_TECHNICIAN')).toEqual('TECHNICIAN');
    });
});
//# sourceMappingURL=profile-label.pipe.d.spec.js.map