"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_cadastro_1 = require("src/app/pattern/base-cadastro");
var user_model_1 = require("src/app/model/user.model");
var user_service_1 = require("src/app/services/user.service");
var lists_service_1 = require("src/app/services/lists.service");
var utils_1 = require("src/app/utils");
var CadastroUsuarioComponent = /** @class */ (function (_super) {
    __extends(CadastroUsuarioComponent, _super);
    function CadastroUsuarioComponent(userService, listsService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this.listsService = listsService;
        // tslint:disable-next-line:no-inferrable-types
        _this.blockedPtable = false;
        _this.users = new Array();
        _this.selectedUser = user_model_1.User.getInstance();
        _this.oldSelectedUser = user_model_1.User.getInstance();
        // tslint:disable-next-line:no-inferrable-types
        _this.dlgPasswdDisplay = false;
        // tslint:disable-next-line:no-inferrable-types
        _this.senhaMatch = false;
        return _this;
    }
    CadastroUsuarioComponent.prototype.ngOnInit = function () {
        this.copy();
        this.navigate();
    };
    CadastroUsuarioComponent.prototype.findCarParams = function () {
        var _this = this;
        this.userService.findUserParams(this.selectedUser).subscribe(function (responseApi) {
            _this.users = responseApi['data'];
            _this.selectedUser = _this.users.length > 0 ? _this.users[0] : user_model_1.User.getInstance();
            _this.copy();
            _this.navigate();
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    CadastroUsuarioComponent.prototype.saveCar = function () {
        var _this = this;
        this.userService.save(this.selectedUser).subscribe(function (responseApi) {
            _this.selectedUser = responseApi['data'];
            _this.users = new Array();
            _this.users.push(_this.selectedUser);
            _this.copy();
            _this.navigate();
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    CadastroUsuarioComponent.prototype.deleteCar = function () {
        var _this = this;
        this.userService.delete(this.selectedUser.id).subscribe(function () {
            utils_1.Utils.arrayRemoveItem(_this.users, _this.selectedUser, 'id');
            _this.selectedUser = _this.users.length > 0 ? _this.users[0] : user_model_1.User.getInstance();
            _this.copy();
            _this.navigate();
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    CadastroUsuarioComponent.prototype.printCars = function () {
        var _this = this;
        this.userService.print(this.users).subscribe(function (data) {
            var blob = new Blob([data], { type: 'application/pdf' });
            var url = window.URL.createObjectURL(blob);
            window.open(url);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err
            });
        });
    };
    CadastroUsuarioComponent.prototype.onRowUnselect = function (event) {
        this.selectedUser = utils_1.Utils.clone(this.oldSelectedUser);
    };
    CadastroUsuarioComponent.prototype.copy = function () {
        this.oldSelectedUser = utils_1.Utils.clone(this.selectedUser);
    };
    CadastroUsuarioComponent.prototype.novo = function () {
        var user = user_model_1.User.getInstance();
        this.users.push(user);
        this.selectedUser = user;
        utils_1.Utils.cleanObject(this.selectedUser);
        this.navigate();
    };
    CadastroUsuarioComponent.prototype.cancel = function () {
        if (this.selectedUser.id === null) {
            utils_1.Utils.arrayRemoveItem(this.users, this.selectedUser, 'id');
        }
        this.selectedUser = utils_1.Utils.clone(this.oldSelectedUser);
        utils_1.Utils.arraySetItem(this.users, this.selectedUser, 'id');
        this.navigate();
    };
    CadastroUsuarioComponent.prototype.clear = function () {
        utils_1.Utils.cleanObject(this.selectedUser, 'id');
        this.navigate();
    };
    CadastroUsuarioComponent.prototype.navigate = function () {
        var edit = (JSON.stringify(this.oldSelectedUser) !== JSON.stringify(this.selectedUser));
        var idIsNull = (this.selectedUser.id == null);
        var full = (this.users.length > 0);
        // tslint:disable-next-line:max-line-length
        var required = !utils_1.Utils.strIsEmpty(this.selectedUser.email) && (this.selectedUser.profiles.length > 0) && !utils_1.Utils.strIsEmpty(this.selectedUser.password);
        // tslint:disable-next-line:max-line-length
        var novo = (JSON.stringify(this.users[this.users.indexOf(this.selectedUser)]) === JSON.stringify(this.selectedUser)) && (idIsNull);
        this.btnSalvar = full && edit && required;
        this.btnCancelar = full && (novo || edit);
        this.btnNovo = !novo && !edit;
        this.btnDeletar = full && !idIsNull && !edit;
        this.btnPrint = full && !this.btnCancelar;
        this.btnSenha = full;
        this.blockedPtable = this.btnCancelar;
        // this.ptable.selectionMode = !this.btnCancelar ? 'single' : 'none';
        // console.log(`this.cars.length=${this.cars.length}`);
        // console.log(`this.selectedCar.id=${this.selectedCar.id}`);
        // console.log(`this.selectedCar=${JSON.stringify(this.selectedCar)}`);
        // console.log(`this.oldSelectedCar=${JSON.stringify(this.oldSelectedCar)}`);
        // console.log(`!novo=${!novo} && !edit=${!edit}`);
        // console.log(`===============================================================================================`);
    };
    CadastroUsuarioComponent.prototype.navigateSenhas = function () {
        this.senhaMatch = !utils_1.Utils.strIsEmpty(this.senha1) && !utils_1.Utils.strIsEmpty(this.senha2) && utils_1.Utils.equal(this.senha1, this.senha2);
    };
    CadastroUsuarioComponent.prototype.okSenhas = function () {
        this.selectedUser.password = utils_1.Utils.clone(this.senha2);
        this.dlgPasswdDisplay = false;
        this.senha1 = null;
        this.senha2 = null;
        this.navigate();
    };
    CadastroUsuarioComponent.prototype.showDldSenhas = function () {
        this.senha1 = null;
        this.senha2 = null;
        this.dlgPasswdDisplay = true;
    };
    CadastroUsuarioComponent = __decorate([
        core_1.Component({
            selector: 'app-cadastro-usuario',
            templateUrl: './cadastro-usuario.component.html',
            styleUrls: ['./cadastro-usuario.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, lists_service_1.ListsService])
    ], CadastroUsuarioComponent);
    return CadastroUsuarioComponent;
}(base_cadastro_1.BaseCadastro));
exports.CadastroUsuarioComponent = CadastroUsuarioComponent;
//# sourceMappingURL=cadastro-usuario.component.js.map