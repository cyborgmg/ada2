"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var car_component_1 = require("./car.component");
var forms_1 = require("@angular/forms");
var table_1 = require("primeng/table");
var calendar_1 = require("primeng/calendar");
var inputtext_1 = require("primeng/inputtext");
var spinner_1 = require("primeng/spinner");
var dropdown_1 = require("primeng/dropdown");
var ngx_currency_1 = require("ngx-currency");
var dialog_1 = require("primeng/dialog");
var panelmenu_1 = require("primeng/panelmenu");
var blockui_1 = require("primeng/blockui");
var currency_format_pipe_1 = require("src/app/pipes/currency-format.pipe");
var status_label_pipe_1 = require("src/app/pipes/status-label.pipe");
var profile_label_pipe_1 = require("src/app/pipes/profile-label.pipe");
var div_p_calendar_component_1 = require("src/app/pattern/div-p-calendar/div-p-calendar.component");
var button_confirm_component_1 = require("src/app/pattern/button-confirm/button-confirm.component");
var http_1 = require("@angular/common/http");
var lists_service_1 = require("src/app/services/lists.service");
var car_service_1 = require("src/app/services/car.service");
var lists_mock_service_1 = require("src/app/services/lists-mock.service");
var car_mok_service_1 = require("src/app/services/car-mok.service");
var color_1 = require("src/app/model/color");
var moment = require("moment");
describe('CarComponent', function () {
    var component;
    var fixture;
    beforeAll(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                car_component_1.CarComponent,
                currency_format_pipe_1.CurrencyFormatPipe,
                status_label_pipe_1.StatusLabelPipe,
                profile_label_pipe_1.ProfileLabelPipe,
                div_p_calendar_component_1.DivPCalendarComponent,
                button_confirm_component_1.ButtonConfirmComponent
            ],
            imports: [
                forms_1.FormsModule,
                table_1.TableModule,
                calendar_1.CalendarModule,
                inputtext_1.InputTextModule,
                spinner_1.SpinnerModule,
                dropdown_1.DropdownModule,
                ngx_currency_1.NgxCurrencyModule,
                dialog_1.DialogModule,
                panelmenu_1.PanelMenuModule,
                blockui_1.BlockUIModule,
                http_1.HttpClientModule
            ],
            providers: [
                { provide: car_service_1.CarService, useClass: car_mok_service_1.CarMokService },
                { provide: lists_service_1.ListsService, useClass: lists_mock_service_1.ListsMockService }
            ],
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(car_component_1.CarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('espera que component esteja instanciado', function () {
        expect(component).toBeTruthy();
    });
    afterAll(function () {
        fixture.destroy();
    });
    function camposVazios(novo) {
        describe('campos', function () {
            it("id null", function () {
                expect(component.selectedCar.id).toBeNull();
            });
            it('brand null', function () {
                expect(component.selectedCar.brand).toBeNull();
            });
            it('status null', function () {
                expect(component.selectedCar.status).toBeNull();
            });
            it('year null', function () {
                expect(component.selectedCar.year).toBeNull();
            });
            it('color null', function () {
                expect(component.selectedCar.color).toBeNull();
            });
            it('price null', function () {
                expect(component.selectedCar.price).toBeNull();
            });
            it('saleDate null', function () {
                expect(component.selectedCar.saleDate).toBeNull();
            });
            it("cars.length = " + (novo ? '1' : '0'), function () {
                expect(component.cars.length).toEqual(novo ? 1 : 0);
            });
        });
    }
    function camposPopulados() {
        describe('campos', function () {
            it('id not null', function () {
                expect(component.selectedCar.id).not.toBeNull();
            });
            it('brand = BMW', function () {
                expect(component.selectedCar.brand).toEqual('BMW');
            });
            it('status = S', function () {
                expect(component.selectedCar.status).toEqual('S');
            });
            it('year = 2000', function () {
                expect(component.selectedCar.year).toEqual(2000);
            });
            it('color = Orange', function () {
                expect(JSON.stringify(component.selectedCar.color)).toEqual(JSON.stringify(new color_1.Color(1, 'Orange')));
            });
            it('price = 10.000,00', function () {
                expect(component.selectedCar.price).toEqual(1000000);
            });
            it('saleDate = 10/10/2018', function () {
                expect(moment(component.selectedCar.saleDate).format('DD/MM/YYYY')).toEqual(moment(new Date('10/10/2018')).format('DD/MM/YYYY'));
            });
            it('cars.length = 1', function () {
                expect(component.cars.length).toEqual(1);
            });
        });
    }
    function botoesEstaoVazio() {
        describe('botões', function () {
            it('btnPrint false', function () {
                expect(component.btnPrint).toBe(false);
            });
            it('btnDeletar false', function () {
                expect(component.btnDeletar).toBe(false);
            });
            it('btnNovo true', function () {
                expect(component.btnNovo).toBe(true);
            });
            it('btnCancelar false', function () {
                expect(component.btnCancelar).toBe(false);
            });
            it('btnSalvar false', function () {
                expect(component.btnSalvar).toBe(false);
            });
        });
    }
    function botoesEstaoCheio() {
        describe('botões', function () {
            it('btnPrint true', function () {
                expect(component.btnPrint).toBe(true);
            });
            it('btnDeletar true', function () {
                expect(component.btnDeletar).toBe(true);
            });
            it('btnNovo true', function () {
                expect(component.btnNovo).toBe(true);
            });
            it('btnCancelar false', function () {
                expect(component.btnCancelar).toBe(false);
            });
            it('btnSalvar false', function () {
                expect(component.btnSalvar).toBe(false);
            });
        });
    }
    /*********************************************************************************** */
    describe('espera estado inicial', function () {
        camposVazios(false);
        botoesEstaoVazio();
    });
    describe('espera estado de novo -> cancelar', function () {
        beforeAll(function () {
            component.novo();
        });
        afterAll(function () {
            component.cancel();
        });
        camposVazios(true);
        describe('botões', function () {
            it('btnPrint false', function () {
                expect(component.btnPrint).toBe(false);
            });
            it('btnDeletar false', function () {
                expect(component.btnDeletar).toBe(false);
            });
            it('btnNovo false', function () {
                expect(component.btnNovo).toBe(false);
            });
            it('btnCancelar true', function () {
                expect(component.btnCancelar).toBe(true);
            });
            it('btnSalvar false', function () {
                expect(component.btnSalvar).toBe(false);
            });
        });
    });
    describe('espera estado de novo -> save', function () {
        beforeAll(function () {
            component.novo();
            // component.selectedCar.id = 10;
            component.selectedCar.brand = 'BMW';
            component.selectedCar.status = 'S';
            component.selectedCar.year = 2000;
            component.selectedCar.color = new color_1.Color(1, 'Orange');
            component.selectedCar.price = 1000000;
            component.selectedCar.saleDate = new Date('10/10/2018');
            component.saveCar();
        });
        camposPopulados();
        botoesEstaoCheio();
    });
    describe('espera estado de find', function () {
        beforeAll(function () {
            component.clear();
            component.findCarParams();
        });
        camposPopulados();
        botoesEstaoCheio();
    });
    describe('espera estado de clear -> find -> delete', function () {
        beforeAll(function () {
            component.clear();
            component.findCarParams();
            component.deleteCar();
        });
        camposVazios(false);
        botoesEstaoVazio();
    });
});
//# sourceMappingURL=car.component.d.spec.js.map