"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_po_1 = require("./login.po");
describe('Login', function () {
    var page;
    beforeEach(function () {
        page = new login_po_1.LoginPo();
    });
    it('espera que sistema esteja logado', function () {
        page.maximize();
        page.navigate().then(function () {
            page.waitVisibilityOf(page.getEmail()).then(function () {
                page.setEmail('admin@helpdesk.com');
                page.setPassword('123456');
                page.login().then(function () {
                    page.waitVisibilityOf(page.getEmailProfile()).then(function () {
                        expect(page.getEmailProfile().getText()).toContain('admin@helpdesk.com');
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=login.spec.js.map