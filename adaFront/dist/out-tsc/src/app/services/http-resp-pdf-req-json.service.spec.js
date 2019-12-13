"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_resp_pdf_req_json_service_1 = require("./http-resp-pdf-req-json.service");
describe('HttpRespPdfReqJsonService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [http_resp_pdf_req_json_service_1.HttpRespPdfReqJsonService]
        });
    });
    it('should be created', testing_1.inject([http_resp_pdf_req_json_service_1.HttpRespPdfReqJsonService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=http-resp-pdf-req-json.service.spec.js.map