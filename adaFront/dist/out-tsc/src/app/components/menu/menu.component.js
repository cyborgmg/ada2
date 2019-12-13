"use strict";
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
var user_service_1 = require("./../../services/user.service");
var shared_service_1 = require("./../../services/shared.service");
var core_1 = require("@angular/core");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(userService) {
        this.userService = userService;
        this.shared = shared_service_1.SharedService.getInstance();
        this.items = new Array();
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.showTemplate.subscribe(function (show) {
            if (show) {
                _this.populateItems();
            }
        });
    };
    MenuComponent.prototype.populateItems = function () {
        console.log(this.shared.user.profiles);
        /*
    
            this.items = new Array<MenuItem>();
    
            if ( this.userService.containsProfile(this.shared.user.profiles, 'ADMIN') === true ) {
                this.items.push({
                    styleClass: 'usermenu',
                    label: 'User',
                    icon: 'pi pi-pw pi-users',
                    items: [
                        {id: 'useritem', label: 'Usuário', routerLink: ['/user'], icon: 'pi pi-fw pi-circle-off'}
                    ]
                });
            }
            // tslint:disable-next-line:max-line-length
            if (this.userService.containsProfile(this.shared.user.profiles, 'ADMIN') === true || this.userService.containsProfile(this.shared.user.profiles, 'CUSTUMER') === true || this.userService.containsProfile(this.shared.user.profiles, 'TECHNICIAN') === true ) {
                this.items.push({
                    styleClass: 'carmenu',
                    label: 'Cadastro',
                    icon: 'pi pi-fw pi-folder-open',
                    items: [
                        {id: 'cadcaritem', label: 'Car', routerLink: ['/car'], icon: 'pi pi-fw pi-circle-off'}
                    ]
                });
            }
    
            */
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map