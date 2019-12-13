"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseCadastro = /** @class */ (function () {
    function BaseCadastro() {
    }
    BaseCadastro.prototype.getFormGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': isInvalid && isDirty
        };
    };
    BaseCadastro.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    BaseCadastro.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    return BaseCadastro;
}());
exports.BaseCadastro = BaseCadastro;
//# sourceMappingURL=base-cadastro.js.map