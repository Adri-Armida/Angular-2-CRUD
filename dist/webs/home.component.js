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
var user_service_1 = require('../user.service');
var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.message = 'Hello!';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    HomeComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (usersreturn) { return _this.users = usersreturn; });
    };
    HomeComponent.prototype.addUser = function () {
    };
    HomeComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    HomeComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.users.forEach(function (u, i) {
            if (u.dni === user.dni) {
                _this.users.splice(i, 1);
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/webs/home.component.html',
            styleUrls: ['./app/webs/home.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map