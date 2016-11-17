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
var core_1 = require('@angular/core');
var user_1 = require('../shared/models/user');
var user_service_1 = require('../user.service');
var NuevoUsuarioComponent = (function () {
    function NuevoUsuarioComponent(userService) {
        this.userService = userService;
        this.userCreated = new core_1.EventEmitter();
        this.newUser = new user_1.User();
        this.active = true;
    }
    NuevoUsuarioComponent.prototype.onSubmit = function () {
        /*console.log(this.newUser);
    
        this.newUser;
        this.active = false;
        setTimeout(() => this.active = true, 0);*/
    };
    NuevoUsuarioComponent.prototype.createUser = function () {
        console.log(this.newUser.coche);
        if (this.newUser.coche)
            this.newUser.coche = "si";
        else
            this.newUser.coche = "no";
        this.userService.addUserService(this.newUser);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NuevoUsuarioComponent.prototype, "userCreated", void 0);
    NuevoUsuarioComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            styleUrls: ['./app/users/nuevousuario.component.css'],
            templateUrl: './app/users/nuevousuario.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], NuevoUsuarioComponent);
    return NuevoUsuarioComponent;
}());
exports.NuevoUsuarioComponent = NuevoUsuarioComponent;
//# sourceMappingURL=nuevousuario.component.js.map