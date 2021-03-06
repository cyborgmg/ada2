"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var auth_guard_1 = require("./components/security/auth.guard");
var auth_interceptor_1 = require("./components/security/auth.interceptor");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header/header.component");
var menu_component_1 = require("./components/menu/menu.component");
var footer_component_1 = require("./components/footer/footer.component");
var login_component_1 = require("./components/security/login/login.component");
var home_component_1 = require("./components/home/home.component");
var app_routes_1 = require("./app.routes");
var user_service_1 = require("./services/user.service");
var shared_service_1 = require("./services/shared.service");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var table_1 = require("primeng/table");
var car_component_1 = require("./components/car/car.component");
var calendar_1 = require("primeng/calendar");
var inputtext_1 = require("primeng/inputtext");
var spinner_1 = require("primeng/spinner");
var dropdown_1 = require("primeng/dropdown");
var div_p_calendar_component_1 = require("./pattern/div-p-calendar/div-p-calendar.component");
var ngx_currency_1 = require("ngx-currency");
var dialog_1 = require("primeng/dialog");
var button_confirm_component_1 = require("./pattern/button-confirm/button-confirm.component");
var panelmenu_1 = require("primeng/panelmenu");
var currency_format_pipe_1 = require("./pipes/currency-format.pipe");
var status_label_pipe_1 = require("./pipes/status-label.pipe");
var cadastro_usuario_component_1 = require("./components/cadastro-usuario/cadastro-usuario.component");
var blockui_1 = require("primeng/blockui");
var profile_label_pipe_1 = require("./pipes/profile-label.pipe");
var lists_service_1 = require("./services/lists.service");
describe('AppComponent', function () {
    var app;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                menu_component_1.MenuComponent,
                footer_component_1.FooterComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                car_component_1.CarComponent,
                div_p_calendar_component_1.DivPCalendarComponent,
                button_confirm_component_1.ButtonConfirmComponent,
                currency_format_pipe_1.CurrencyFormatPipe,
                status_label_pipe_1.StatusLabelPipe,
                cadastro_usuario_component_1.CadastroUsuarioComponent,
                profile_label_pipe_1.ProfileLabelPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                app_routes_1.routes,
                table_1.TableModule,
                calendar_1.CalendarModule,
                inputtext_1.InputTextModule,
                spinner_1.SpinnerModule,
                dropdown_1.DropdownModule,
                ngx_currency_1.NgxCurrencyModule,
                dialog_1.DialogModule,
                panelmenu_1.PanelMenuModule,
                blockui_1.BlockUIModule
            ],
            providers: [
                user_service_1.UserService,
                shared_service_1.SharedService,
                auth_guard_1.AuthGuard,
                lists_service_1.ListsService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true
                }
            ],
        }).compileComponents();
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        app = fixture.debugElement.componentInstance;
    }));
    it('should create the app', testing_1.async(function () {
        expect(app).toBeTruthy();
    }));
    /*
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to ada!');
    }));
    */
});
//# sourceMappingURL=app.component.spec.js.map