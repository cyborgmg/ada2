"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./components/home/home.component");
var router_1 = require("@angular/router");
var login_component_1 = require("./components/security/login/login.component");
var auth_guard_1 = require("./components/security/auth.guard");
var car_component_1 = require("./components/car/car.component");
var cadastro_usuario_component_1 = require("./components/cadastro-usuario/cadastro-usuario.component");
exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'user', component: cadastro_usuario_component_1.CadastroUsuarioComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'car', component: car_component_1.CarComponent, canActivate: [auth_guard_1.AuthGuard] }
];
exports.routes = router_1.RouterModule.forRoot(exports.ROUTES);
//# sourceMappingURL=app.routes.js.map