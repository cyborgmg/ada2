"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
var page;
function botoesEmptyNotEdit(desc) {
    describe(desc, function () {
        it('find(enable)', function () {
            expect(page.getBtnFind().isEnabled()).toBe(true);
        });
        it('clean(enable)', function () {
            expect(page.getBtnClean().isEnabled()).toBe(true);
        });
        it('print(disable)', function () {
            expect(page.getBtnPrint().isEnabled()).toBe(false);
        });
        it('delete(disable)', function () {
            expect(page.getBtnDelete().isEnabled()).toBe(false);
        });
        it('new(enable)', function () {
            expect(page.getBtnNew().isEnabled()).toBe(true);
        });
        it('cancel(disable)', function () {
            expect(page.getBtnCancel().isEnabled()).toBe(false);
        });
        it('save(disable)', function () {
            expect(page.getBtnSave().isEnabled()).toBe(false);
        });
    });
}
function botoesFullNotEdit(desc) {
    describe(desc, function () {
        it('find(enable)', function () {
            expect(page.getBtnFind().isEnabled()).toBe(true);
        });
        it('clean(enable)', function () {
            expect(page.getBtnClean().isEnabled()).toBe(true);
        });
        it('print(enable)', function () {
            expect(page.getBtnPrint().isEnabled()).toBe(true);
        });
        it('delete(enable)', function () {
            expect(page.getBtnDelete().isEnabled()).toBe(true);
        });
        it('new(enable)', function () {
            expect(page.getBtnNew().isEnabled()).toBe(true);
        });
        it('cancel(disable)', function () {
            expect(page.getBtnCancel().isEnabled()).toBe(false);
        });
        it('save(disable)', function () {
            expect(page.getBtnSave().isEnabled()).toBe(false);
        });
    });
}
function botoesFullEdit(desc) {
    describe(desc, function () {
        it('find(enable)', function () {
            expect(page.getBtnFind().isEnabled()).toBe(true);
        });
        it('clean(enable)', function () {
            expect(page.getBtnClean().isEnabled()).toBe(true);
        });
        it('print(disable)', function () {
            expect(page.getBtnPrint().isEnabled()).toBe(false);
        });
        it('delete(disable)', function () {
            expect(page.getBtnDelete().isEnabled()).toBe(false);
        });
        it('new(disable)', function () {
            expect(page.getBtnNew().isEnabled()).toBe(false);
        });
        it('cancel(enable)', function () {
            expect(page.getBtnCancel().isEnabled()).toBe(true);
        });
        it('save(enable)', function () {
            expect(page.getBtnSave().isEnabled()).toBe(true);
        });
    });
}
function camposEmpty(desc) {
    describe(desc, function () {
        it('inputid Empty and Disable', function () {
            expect(page.getInputId().getAttribute('value')).toEqual('');
            expect(page.getInputId().isDisplayed()).toBe(true);
        });
        it('inputbrand Empty', function () {
            expect(page.getInputBrand().getAttribute('value')).toEqual('');
        });
        it('inputstatus Empty', function () {
            expect(page.getInputStatus().getAttribute('value')).toEqual('null');
        });
        it('inputyear Empty', function () {
            expect(page.getInputYear().getAttribute('value')).toEqual('');
        });
        it('inputcolor Empty', function () {
            expect(page.getInputColor().getAttribute('value')).toEqual('null');
        });
        it('inputprice Empty', function () {
            expect(page.getInputPrice().getAttribute('value')).toEqual('');
        });
        it('inputsaleDate Empty', function () {
            expect(page.getInputSaleDate().getAttribute('value')).toEqual('');
        });
        it('ptable.rowns = 0', function () {
            expect(page.getPTableRows().count()).toEqual(0);
        });
    });
}
function campoFull(desc, novo) {
    describe(desc, function () {
        it("inputid" + (novo ? '' : 'not') + " Empty and Disable", function () {
            if (novo) {
                expect(page.getInputId().getAttribute('value')).toEqual('');
            }
            else {
                expect(page.getInputId().getAttribute('value')).not.toEqual('');
            }
            expect(page.getInputId().isDisplayed()).toBe(true);
        });
        it('inputbrand="brand car"', function () {
            expect(page.getInputBrand().getAttribute('value')).toEqual('brand car');
        });
        it('inputstatus="B"', function () {
            expect(page.getInputStatus().getAttribute('value')).toEqual('B');
        });
        it('inputyear="2000"', function () {
            expect(page.getInputYear().getAttribute('value')).toEqual('2000');
        });
        it('inputcolor not Empty', function () {
            expect(page.getInputColor().getAttribute('value')).not.toBeNull();
        });
        it('inputprice="10.000,00"', function () {
            expect(page.getInputPrice().getAttribute('value')).toEqual('10.000,00');
        });
        it('inputsaleDate="01/01/2018"', function () {
            expect(page.getInputSaleDate().getAttribute('value')).toEqual('01/01/2018');
        });
        it('ptable.rowns=1', function () {
            expect(page.getPTableRows().count()).toEqual(1);
        });
    });
}
describe('Car', function () {
    beforeAll(function () {
        page = new car_1.Car();
        page.getCarMenu().click().then(function () {
            page.waitVisibilityOf(page.getCaritem()).then(function () {
                page.getCaritem().click().then(function () {
                    page.waitVisibilityOf(page.getBoxTitle());
                });
            });
        });
    });
    /*********************************************************************************************************** */
    describe('espera tela em estado inicial', function () {
        botoesEmptyNotEdit('espera botões em estado inicial');
        camposEmpty('espera campos em estado inicial');
    });
    /*********************************************************************************************************** */
    describe('espera tela em estado de novo', function () {
        beforeAll(function () {
            page.getBtnNew().click().then(function () {
                page.getBtnNewDlgOk().click().then(function () {
                    page.getInputBrand().sendKeys('brand car');
                    page.getPDropDownStatus().click().then(function () {
                        page.getPDropDownStatusOptin0().click();
                    });
                    page.getInputYear().sendKeys('2000');
                    page.getPDropDownColor().click().then(function () {
                        page.getPDropDownColorOptin0().click();
                    });
                    page.getInputPrice().sendKeys('1000000');
                    page.getInputSaleDate().sendKeys('01/01/2018');
                    page.getInputId().click();
                    page.waitForAngular();
                });
            });
        });
        botoesFullEdit('espera botões em estado de novo');
        campoFull('espera campos em estado de novo', true);
    });
    /*********************************************************************************************************** */
    describe('espera tela em estado de save após novo', function () {
        beforeAll(function () {
            page.getBtnSave().click().then(function () {
                page.getBtnSaveDlgOk().click().then(function () {
                    page.getInputId().click();
                    page.waitForAngular();
                });
            });
        });
        botoesFullNotEdit('espera botões em estado de save após novo');
        campoFull('espera campos em estado de save após novo', false);
    });
    /*********************************************************************************************************** */
    describe('espera tela em estado de find', function () {
        beforeAll(function () {
            page.getBtnClean().click().then(function () {
                page.getBtnFind().click().then(function () {
                    page.waitForAngular();
                });
            });
        });
        botoesFullNotEdit('espera botões em estado de find');
        campoFull('espera campos em estado de save após novo', false);
    });
    /*********************************************************************************************************** */
    describe('espera tela em estado de delete', function () {
        beforeAll(function () {
            page.getBtnDelete().click().then(function () {
                page.getBtnDeleteDlgOk().click().then(function () {
                    page.waitForAngular();
                });
            });
        });
        botoesEmptyNotEdit('espera botões em estado de delete');
        camposEmpty('espera campos em estado de delete');
    });
    /*********************************************************************************************************** */
});
//# sourceMappingURL=car.spec.js.map