"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadastro_usuario_1 = require("./cadastro-usuario");
describe('CadastroUsuario', function () {
    var page;
    beforeEach(function () {
        page = new cadastro_usuario_1.CadastroUsuario();
    });
    it('espera abrir cadastro de usuários', function () {
        page.getUserMenu().click().then(function () {
            page.waitVisibilityOf(page.getUseritem()).then(function () {
                page.getUseritem().click().then(function () {
                    page.waitVisibilityOf(page.getBoxTitle()).then(function () {
                        expect(page.getBoxTitle().getText()).toContain('Cadastro de Usuários');
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=cadastro-usuario.spec.js.map