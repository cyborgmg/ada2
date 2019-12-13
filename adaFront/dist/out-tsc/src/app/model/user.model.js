"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, email, password, profiles) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.profiles = profiles;
    }
    User.getInstance = function () {
        return new User(null, null, null, null);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map