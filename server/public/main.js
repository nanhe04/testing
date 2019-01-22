(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-users/admin-user-add/admin-user-add.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin-users/admin-user-add/admin-user-add.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-users/admin-user-add/admin-user-add.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin-users/admin-user-add/admin-user-add.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n<div class=\"row wrapper border-bottom page-heading\">\n  <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Add</i></h2>   \n  </div>\n  <hr/>        \n  <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/admin-users\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n  </div>\n</div>\n<!-- form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n              <div class=\"ibox-content\">\n                  <form method=\"get\" class=\"form-horizontal\">\n\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Name</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" name=\"name\" class=\"form-control\">\n                        </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">UserName</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"text\" name=\"username\" class=\"form-control\">\n                          </div>\n                        </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Password</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"password\" name=\"password\" class=\"form-control\">\n                          </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Email</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"email\" name=\"email\" class=\"form-control\">\n                          </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Contact Number</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"number\" name=\"contact\" class=\"form-control\">\n                          </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Address</label>\n                          <div class=\"col-sm-10\">\n                          <textarea type=\"text\" name=\"address\" class=\"form-control\"></textarea>\n                          </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Select City</label>\n  \n                          <div class=\"col-sm-10\">\n                            <select class=\"form-control m-b\" name=\"city\">\n                                <option>Select City</option>\n                                <option>City1</option>\n                                <option>City1</option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n                      \n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Image</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"file\" name=\"image\" class=\"form-control\">\n                          </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n\n                      <div class=\"ibox-content\">\n                         \n                              <div class=\"table-responsive-sm\">\n                                  <table class=\"table\">\n                                      <caption>List of Modules</caption>\n                                      <thead>\n                                        <tr>\n                                          <th scope=\"col\">#</th>\n                                          <th scope=\"col\">Module</th>\n                                          <th scope=\"col\">Permission</th>                                         \n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr>\n                                          <th scope=\"row\">1</th>\n                                          <td>\tDashboard </td>\n                                          <td><input type=\"checkbox\" value=\"\" ></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">2</th>\n                                          <td> Users </td>\n                                          <td><input type=\"checkbox\" value=\"\" ></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">3</th>\n                                          <td> Drivers </td>\n                                          <td><input type=\"checkbox\" value=\"\" ></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">4</th>\n                                          <td>Advertisements</td>\n                                          <td><input type=\"checkbox\" value=\"\" ></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">5</th>\n                                          <td>Settings</td>\n                                          <td><input type=\"checkbox\" value=\"\" > City <br/>\n                                              <input type=\"checkbox\" value=\"\" > Commission<br/>\n                                              <input type=\"checkbox\" value=\"\" > Vehicles<br/>\n                                              <input type=\"checkbox\" value=\"\" > Price Management<br/>\n                                              <input type=\"checkbox\" value=\"\" > Special Delivery Rule<br/>\n                                          </td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">6</th>\n                                          <td>Orders Placed</td>\n                                          <td><input type=\"checkbox\" value=\"\" ></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">7</th>\n                                          <td>View Order Reports</td>\n                                          <td><input type=\"checkbox\" value=\"\" ></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">8</th>\n                                          <td>View User Contacts</td>\n                                          <td><input type=\"checkbox\" value=\"\" ></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">9</th>\n                                          <td>Admin Users</td>\n                                          <td><input type=\"checkbox\" value=\"\" ></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">10</th>\n                                          <td>Place Order</td>\n                                          <td><input type=\"checkbox\" value=\"\" ></td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">11</th>\n                                          <td>Shared</td>\n                                          <td><input type=\"checkbox\" value=\"\" ></td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                              </div>\n  \n                      </div>\n                      \n                      <div class=\"hr-line-dashed\"></div>\n                      <div class=\"form-group\">\n                          <div class=\"col-sm-4 col-sm-offset-2\">\n                              <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin-users/admin-user-add/admin-user-add.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin-users/admin-user-add/admin-user-add.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminUserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserAddComponent", function() { return AdminUserAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminUserAddComponent = /** @class */ (function () {
    function AdminUserAddComponent() {
    }
    AdminUserAddComponent.prototype.ngOnInit = function () {
    };
    AdminUserAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-user-add',
            template: __webpack_require__(/*! ./admin-user-add.component.html */ "./src/app/admin-users/admin-user-add/admin-user-add.component.html"),
            styles: [__webpack_require__(/*! ./admin-user-add.component.css */ "./src/app/admin-users/admin-user-add/admin-user-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminUserAddComponent);
    return AdminUserAddComponent;
}());



/***/ }),

/***/ "./src/app/admin-users/admin-user-details/admin-user-details.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/admin-users/admin-user-details/admin-user-details.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-users/admin-user-details/admin-user-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin-users/admin-user-details/admin-user-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"container\">\n<div class=\"row wrapper border-bottom page-heading\">\n  <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Details</i></h2>   \n  </div>\n  <hr/>        \n  <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/admin-users\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n  </div>\n</div>\n<div class=\"wrapper wrapper-content animated fadeInRight white-bg\">\n\n\n    <div class=\"row m-b-lg m-t-lg\">\n        <div class=\"col-md-6\">\n\n            <div class=\"profile-image\">\n                <img src=\"img/a4.jpg\" class=\"img-circle circle-border m-b-md\" alt=\"profile\">\n            </div>\n            <div class=\"profile-info\">\n                <div class=\"\">\n                    <div>\n                        <h2 class=\"no-margins\">\n                            Alex Smith\n                        </h2>\n                        <h4>Founder of Groupeq</h4>\n                        <small>\n                            There are many variations of passages of Lorem Ipsum available, but the majority\n                            have suffered alteration in some form Ipsum available.\n                        </small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <table class=\"table small m-b-xs\">\n                <tbody>\n                <tr>\n                    <td>\n                        <strong>Username</strong> xyz\n                    </td>\n                    <td>\n                        <strong>Password</strong> 123234\n                    </td>\n\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Email</strong> xyz@gmail.com\n                    </td>\n                    <td>\n                        <strong>Contact</strong> 4545454545545\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Address</strong> 121,dfsdfdsf,dsfdsfds,dfadsfadsf\n                    </td>\n                    <td>\n                        <strong>City</strong> city\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"col-md-3\">\n            <small>Permissions</small>\n            <h2 class=\"no-margins\">206 480</h2>\n            <div id=\"sparkline1\"></div>\n        </div>\n\n\n    </div>\n    \n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/admin-users/admin-user-details/admin-user-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin-users/admin-user-details/admin-user-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserDetailsComponent", function() { return AdminUserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminUserDetailsComponent = /** @class */ (function () {
    function AdminUserDetailsComponent() {
    }
    AdminUserDetailsComponent.prototype.ngOnInit = function () {
    };
    AdminUserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-user-details',
            template: __webpack_require__(/*! ./admin-user-details.component.html */ "./src/app/admin-users/admin-user-details/admin-user-details.component.html"),
            styles: [__webpack_require__(/*! ./admin-user-details.component.css */ "./src/app/admin-users/admin-user-details/admin-user-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminUserDetailsComponent);
    return AdminUserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/admin-users/admin-users.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-users/admin-users.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row wrapper border-bottom page-heading\">\n        <div class=\"col-sm-12\">\n            <h2><i class=\"fa fa-bars\"> Admin Users</i></h2>   \n        </div>\n        <hr/>        \n        <div class=\"col-sm-2\">\n            <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"add\"><i class=\"fa fa-plus\"> Add </i></button>\n        </div>\n      </div>\n      <div class=\"wrapper wrapper-content animated fadeInRight\">\n\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <div class=\"ibox float-e-margins\">\n                      <div class=\"ibox-title\">\n                          <h5>AdminTable with row toggler, sorting and pagination</h5>\n  \n                      </div>\n                      <div class=\"ibox-content\">\n                          <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                              placeholder=\"Search in table\">\n                              <div class=\"table-responsive-sm\">\n                                  <table class=\"table\">\n                                      <caption>List of users</caption>\n                                      <thead>\n                                        <tr>\n                                          <th scope=\"col\">#</th>\n                                          <th scope=\"col\">First</th>\n                                          <th scope=\"col\">Last</th>\n                                          <th scope=\"col\">Handle</th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr>\n                                          <th scope=\"row\">1</th>\n                                          <td>Mark</td>\n                                          <td>Otto</td>\n                                          <td>@mdo</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">2</th>\n                                          <td>Jacob</td>\n                                          <td>Thornton</td>\n                                          <td>@fat</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">3</th>\n                                          <td>Larry</td>\n                                          <td>the Bird</td>\n                                          <td>@twitter</td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                              </div>\n  \n                      </div>\n                  </div>\n              </div>\n          </div>\n  </div>   \n      \n</div>\n"

/***/ }),

/***/ "./src/app/admin-users/admin-users.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.ts ***!
  \******************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent() {
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
    };
    AdminUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! ./admin-users.component.html */ "./src/app/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin-users/admin-users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/advertisement/advertisement-add/advertisement-add.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/advertisement/advertisement-add/advertisement-add.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/advertisement/advertisement-add/advertisement-add.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/advertisement/advertisement-add/advertisement-add.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n<div class=\"row wrapper border-bottom page-heading\">\n  <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Add</i></h2>   \n  </div>\n  <hr/>        \n  <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/advertisements\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n  </div>\n</div>\n<!-- form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n              <div class=\"ibox-content\">\n                  <form method=\"get\" class=\"form-horizontal\">\n                    \n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Image</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"file\" name=\"image\" class=\"form-control\">\n                          </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Name</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" name=\"name\" class=\"form-control\">\n                        </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Link</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"text\" name=\"link\" class=\"form-control\">\n                          </div>\n                        </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Start Date</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"date\" name=\"sdate\" class=\"form-control\">\n                          </div>\n                        </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Start Time</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"time\" name=\"stime\" class=\"form-control\">\n                          </div>\n                        </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">End Date</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"date\" name=\"edate\" class=\"form-control\">\n                          </div>\n                        </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">End Time</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"time\" name=\"etime\" class=\"form-control\">\n                          </div>\n                        </div>\n                     \n  \n                      <div class=\"hr-line-dashed\"></div>\n                      <div class=\"form-group\">\n                          <div class=\"col-sm-4 col-sm-offset-2\">\n                              <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/advertisement/advertisement-add/advertisement-add.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/advertisement/advertisement-add/advertisement-add.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdvertisementAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementAddComponent", function() { return AdvertisementAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvertisementAddComponent = /** @class */ (function () {
    function AdvertisementAddComponent() {
    }
    AdvertisementAddComponent.prototype.ngOnInit = function () {
    };
    AdvertisementAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advertisement-add',
            template: __webpack_require__(/*! ./advertisement-add.component.html */ "./src/app/advertisement/advertisement-add/advertisement-add.component.html"),
            styles: [__webpack_require__(/*! ./advertisement-add.component.css */ "./src/app/advertisement/advertisement-add/advertisement-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvertisementAddComponent);
    return AdvertisementAddComponent;
}());



/***/ }),

/***/ "./src/app/advertisement/advertisement.component.css":
/*!***********************************************************!*\
  !*** ./src/app/advertisement/advertisement.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/advertisement/advertisement.component.html":
/*!************************************************************!*\
  !*** ./src/app/advertisement/advertisement.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row wrapper border-bottom page-heading\">\n        <div class=\"col-sm-12\">\n            <h2><i class=\"fa fa-bars\"> Advertisements</i></h2>   \n        </div>\n        <hr/>        \n        <div class=\"col-sm-2\">\n            <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"add\"><i class=\"fa fa-plus\"> Add Advertisement</i></button>\n        </div>\n    </div>\n    <div class=\"wrapper wrapper-content animated fadeInRight\">\n    \n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                        <h5>AdvertisementsTable with row toggler, sorting and pagination</h5>\n    \n                    </div>\n                    <div class=\"ibox-content\">\n                        <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                            placeholder=\"Search in table\">\n                            <div class=\"table-responsive-sm\">\n                                <table class=\"table\">\n                                    <caption>List of Advertisements</caption>\n                                    <thead>\n                                      <tr>\n                                        <th scope=\"col\">#</th>\n                                        <th scope=\"col\">First</th>\n                                        <th scope=\"col\">Last</th>\n                                        <th scope=\"col\">Handle</th>\n                                      </tr>\n                                    </thead>\n                                    <tbody>\n                                      <tr>\n                                        <th scope=\"row\">1</th>\n                                        <td>Mark</td>\n                                        <td>Otto</td>\n                                        <td>@mdo</td>\n                                      </tr>\n                                      <tr>\n                                        <th scope=\"row\">2</th>\n                                        <td>Jacob</td>\n                                        <td>Thornton</td>\n                                        <td>@fat</td>\n                                      </tr>\n                                      <tr>\n                                        <th scope=\"row\">3</th>\n                                        <td>Larry</td>\n                                        <td>the Bird</td>\n                                        <td>@twitter</td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                            </div>\n    \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    \n</div>\n"

/***/ }),

/***/ "./src/app/advertisement/advertisement.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/advertisement/advertisement.component.ts ***!
  \**********************************************************/
/*! exports provided: AdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementComponent", function() { return AdvertisementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvertisementComponent = /** @class */ (function () {
    function AdvertisementComponent() {
    }
    AdvertisementComponent.prototype.ngOnInit = function () {
    };
    AdvertisementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advertisement',
            template: __webpack_require__(/*! ./advertisement.component.html */ "./src/app/advertisement/advertisement.component.html"),
            styles: [__webpack_require__(/*! ./advertisement.component.css */ "./src/app/advertisement/advertisement.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvertisementComponent);
    return AdvertisementComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>\n<navbar *ngIf=\"auth.isLoggedIn()\"></navbar>\n<router-outlet></router-outlet>\n<footer></footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(translate, route, auth) {
        this.translate = translate;
        this.route = route;
        this.auth = auth;
        translate.setDefaultLang("esp");
        translate.use("esp");
        //console.log(this.route);
    }
    AppComponent.prototype.ngOnInit = function () {
        var storage = localStorage.getItem("token");
        if (storage) {
            this.token = true;
        }
        else {
            this.token = false;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, MaterialModules, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModules", function() { return MaterialModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./drivers/drivers.component */ "./src/app/drivers/drivers.component.ts");
/* harmony import */ var _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./advertisement/advertisement.component */ "./src/app/advertisement/advertisement.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _settings_city_city_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./settings/city/city.component */ "./src/app/settings/city/city.component.ts");
/* harmony import */ var _settings_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./settings/vehicles/vehicles.component */ "./src/app/settings/vehicles/vehicles.component.ts");
/* harmony import */ var _settings_commission_commission_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./settings/commission/commission.component */ "./src/app/settings/commission/commission.component.ts");
/* harmony import */ var _settings_price_management_price_management_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./settings/price-management/price-management.component */ "./src/app/settings/price-management/price-management.component.ts");
/* harmony import */ var _settings_delivery_range_delivery_range_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./settings/delivery-range/delivery-range.component */ "./src/app/settings/delivery-range/delivery-range.component.ts");
/* harmony import */ var _settings_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./settings/terms-conditions/terms-conditions.component */ "./src/app/settings/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _settings_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./settings/privacy-policy/privacy-policy.component */ "./src/app/settings/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _settings_special_delivery_rule_special_delivery_rule_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./settings/special-delivery-rule/special-delivery-rule.component */ "./src/app/settings/special-delivery-rule/special-delivery-rule.component.ts");
/* harmony import */ var _settings_service_charge_service_charge_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./settings/service-charge/service-charge.component */ "./src/app/settings/service-charge/service-charge.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");
/* harmony import */ var _place_order_place_order_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./place-order/place-order.component */ "./src/app/place-order/place-order.component.ts");
/* harmony import */ var _shared_shared_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/shared.component */ "./src/app/shared/shared.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./users/user-add/user-add.component */ "./src/app/users/user-add/user-add.component.ts");
/* harmony import */ var _users_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./users/user-details/user-details.component */ "./src/app/users/user-details/user-details.component.ts");
/* harmony import */ var _drivers_driver_add_driver_add_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./drivers/driver-add/driver-add.component */ "./src/app/drivers/driver-add/driver-add.component.ts");
/* harmony import */ var _drivers_driver_details_driver_details_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./drivers/driver-details/driver-details.component */ "./src/app/drivers/driver-details/driver-details.component.ts");
/* harmony import */ var _drivers_driver_shared_driver_shared_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./drivers/driver-shared/driver-shared.component */ "./src/app/drivers/driver-shared/driver-shared.component.ts");
/* harmony import */ var _drivers_driver_history_driver_history_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./drivers/driver-history/driver-history.component */ "./src/app/drivers/driver-history/driver-history.component.ts");
/* harmony import */ var _drivers_driver_earning_driver_earning_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./drivers/driver-earning/driver-earning.component */ "./src/app/drivers/driver-earning/driver-earning.component.ts");
/* harmony import */ var _advertisement_advertisement_add_advertisement_add_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./advertisement/advertisement-add/advertisement-add.component */ "./src/app/advertisement/advertisement-add/advertisement-add.component.ts");
/* harmony import */ var _admin_users_admin_user_add_admin_user_add_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./admin-users/admin-user-add/admin-user-add.component */ "./src/app/admin-users/admin-user-add/admin-user-add.component.ts");
/* harmony import */ var _admin_users_admin_user_details_admin_user_details_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./admin-users/admin-user-details/admin-user-details.component */ "./src/app/admin-users/admin-user-details/admin-user-details.component.ts");
/* harmony import */ var _settings_city_city_add_city_add_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./settings/city/city-add/city-add.component */ "./src/app/settings/city/city-add/city-add.component.ts");
/* harmony import */ var _settings_vehicles_vehicle_add_vehicle_add_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./settings/vehicles/vehicle-add/vehicle-add.component */ "./src/app/settings/vehicles/vehicle-add/vehicle-add.component.ts");
/* harmony import */ var _settings_vehicles_vehicle_sort_vehicle_sort_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./settings/vehicles/vehicle-sort/vehicle-sort.component */ "./src/app/settings/vehicles/vehicle-sort/vehicle-sort.component.ts");
/* harmony import */ var _settings_service_charge_service_charge_add_service_charge_add_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./settings/service-charge/service-charge-add/service-charge-add.component */ "./src/app/settings/service-charge/service-charge-add/service-charge-add.component.ts");
/* harmony import */ var _settings_price_management_price_management_add_price_management_add_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./settings/price-management/price-management-add/price-management-add.component */ "./src/app/settings/price-management/price-management-add/price-management-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// material angular.

// services




// components








































//Aot require an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http);
}
var MaterialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTreeModule"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_21__["UsersComponent"],
                _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_22__["DriversComponent"],
                _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_23__["AdvertisementComponent"],
                _settings_city_city_component__WEBPACK_IMPORTED_MODULE_25__["CityComponent"],
                _settings_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_26__["VehiclesComponent"],
                _settings_commission_commission_component__WEBPACK_IMPORTED_MODULE_27__["CommissionComponent"],
                _settings_price_management_price_management_component__WEBPACK_IMPORTED_MODULE_28__["PriceManagementComponent"],
                _settings_delivery_range_delivery_range_component__WEBPACK_IMPORTED_MODULE_29__["DeliveryRangeComponent"],
                _settings_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_30__["TermsConditionsComponent"],
                _settings_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_31__["PrivacyPolicyComponent"],
                _settings_special_delivery_rule_special_delivery_rule_component__WEBPACK_IMPORTED_MODULE_32__["SpecialDeliveryRuleComponent"],
                _settings_service_charge_service_charge_component__WEBPACK_IMPORTED_MODULE_33__["ServiceChargeComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_34__["OrdersComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_35__["ReportsComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_36__["ContactsComponent"],
                _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_37__["AdminUsersComponent"],
                _place_order_place_order_component__WEBPACK_IMPORTED_MODULE_38__["PlaceOrderComponent"],
                _shared_shared_component__WEBPACK_IMPORTED_MODULE_39__["SharedComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_40__["ProfileComponent"],
                _users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_41__["UserAddComponent"],
                _users_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_42__["UserDetailsComponent"],
                _drivers_driver_add_driver_add_component__WEBPACK_IMPORTED_MODULE_43__["DriverAddComponent"],
                _drivers_driver_details_driver_details_component__WEBPACK_IMPORTED_MODULE_44__["DriverDetailsComponent"],
                _drivers_driver_shared_driver_shared_component__WEBPACK_IMPORTED_MODULE_45__["DriverSharedComponent"],
                _drivers_driver_history_driver_history_component__WEBPACK_IMPORTED_MODULE_46__["DriverHistoryComponent"],
                _drivers_driver_earning_driver_earning_component__WEBPACK_IMPORTED_MODULE_47__["DriverEarningComponent"],
                _advertisement_advertisement_add_advertisement_add_component__WEBPACK_IMPORTED_MODULE_48__["AdvertisementAddComponent"],
                _admin_users_admin_user_add_admin_user_add_component__WEBPACK_IMPORTED_MODULE_49__["AdminUserAddComponent"],
                _admin_users_admin_user_details_admin_user_details_component__WEBPACK_IMPORTED_MODULE_50__["AdminUserDetailsComponent"],
                _settings_city_city_add_city_add_component__WEBPACK_IMPORTED_MODULE_51__["CityAddComponent"],
                _settings_vehicles_vehicle_add_vehicle_add_component__WEBPACK_IMPORTED_MODULE_52__["VehicleAddComponent"],
                _settings_vehicles_vehicle_sort_vehicle_sort_component__WEBPACK_IMPORTED_MODULE_53__["VehicleSortComponent"],
                _settings_service_charge_service_charge_add_service_charge_add_component__WEBPACK_IMPORTED_MODULE_54__["ServiceChargeAddComponent"],
                _settings_price_management_price_management_add_price_management_add_component__WEBPACK_IMPORTED_MODULE_55__["PriceManagementAddComponent"]
            ],
            imports: [
                MaterialModules,
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([]),
                _agm_core__WEBPACK_IMPORTED_MODULE_24__["AgmCoreModule"].forRoot({
                    apiKey: "AIzaSyBE2fg2RpvmGQFNlp0nQDHiWNU2j9TQpXQ"
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
                    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"] },
                    { path: "users/add", component: _users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_41__["UserAddComponent"] },
                    { path: "users/edit/:id", component: _users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_41__["UserAddComponent"] },
                    { path: "users/details", component: _users_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_42__["UserDetailsComponent"] },
                    { path: "users", component: _users_users_component__WEBPACK_IMPORTED_MODULE_21__["UsersComponent"] },
                    { path: "drivers/add", component: _drivers_driver_add_driver_add_component__WEBPACK_IMPORTED_MODULE_43__["DriverAddComponent"] },
                    { path: "drivers/shared", component: _drivers_driver_shared_driver_shared_component__WEBPACK_IMPORTED_MODULE_45__["DriverSharedComponent"] },
                    { path: "drivers/earning", component: _drivers_driver_earning_driver_earning_component__WEBPACK_IMPORTED_MODULE_47__["DriverEarningComponent"] },
                    { path: "drivers/history", component: _drivers_driver_history_driver_history_component__WEBPACK_IMPORTED_MODULE_46__["DriverHistoryComponent"] },
                    { path: "drivers/:id", component: _drivers_driver_details_driver_details_component__WEBPACK_IMPORTED_MODULE_44__["DriverDetailsComponent"] },
                    { path: "drivers", component: _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_22__["DriversComponent"] },
                    { path: "advertisements/add", component: _advertisement_advertisement_add_advertisement_add_component__WEBPACK_IMPORTED_MODULE_48__["AdvertisementAddComponent"] },
                    { path: "advertisements", component: _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_23__["AdvertisementComponent"] },
                    { path: "city/add", component: _settings_city_city_add_city_add_component__WEBPACK_IMPORTED_MODULE_51__["CityAddComponent"] },
                    { path: "city", component: _settings_city_city_component__WEBPACK_IMPORTED_MODULE_25__["CityComponent"] },
                    { path: "vehicles/add", component: _settings_vehicles_vehicle_add_vehicle_add_component__WEBPACK_IMPORTED_MODULE_52__["VehicleAddComponent"] },
                    { path: "vehicles/sort", component: _settings_vehicles_vehicle_sort_vehicle_sort_component__WEBPACK_IMPORTED_MODULE_53__["VehicleSortComponent"] },
                    { path: "vehicles", component: _settings_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_26__["VehiclesComponent"] },
                    { path: "commission", component: _settings_commission_commission_component__WEBPACK_IMPORTED_MODULE_27__["CommissionComponent"] },
                    { path: "price-management/add", component: _settings_price_management_price_management_add_price_management_add_component__WEBPACK_IMPORTED_MODULE_55__["PriceManagementAddComponent"] },
                    { path: "price-management", component: _settings_price_management_price_management_component__WEBPACK_IMPORTED_MODULE_28__["PriceManagementComponent"] },
                    { path: "delivery-range", component: _settings_delivery_range_delivery_range_component__WEBPACK_IMPORTED_MODULE_29__["DeliveryRangeComponent"] },
                    { path: "terms-conditions", component: _settings_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_30__["TermsConditionsComponent"] },
                    { path: "privacy-policy", component: _settings_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_31__["PrivacyPolicyComponent"] },
                    {
                        path: "special-delivery-rule",
                        component: _settings_special_delivery_rule_special_delivery_rule_component__WEBPACK_IMPORTED_MODULE_32__["SpecialDeliveryRuleComponent"]
                    },
                    { path: "service-charge/add", component: _settings_service_charge_service_charge_add_service_charge_add_component__WEBPACK_IMPORTED_MODULE_54__["ServiceChargeAddComponent"] },
                    { path: "service-charge", component: _settings_service_charge_service_charge_component__WEBPACK_IMPORTED_MODULE_33__["ServiceChargeComponent"] },
                    { path: "orders", component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_34__["OrdersComponent"] },
                    { path: "reports", component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_35__["ReportsComponent"] },
                    { path: "contacts", component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_36__["ContactsComponent"] },
                    { path: "admin-users/add", component: _admin_users_admin_user_add_admin_user_add_component__WEBPACK_IMPORTED_MODULE_49__["AdminUserAddComponent"] },
                    { path: "admin-users/:id", component: _admin_users_admin_user_details_admin_user_details_component__WEBPACK_IMPORTED_MODULE_50__["AdminUserDetailsComponent"] },
                    { path: "admin-users", component: _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_37__["AdminUsersComponent"] },
                    { path: "place-order", component: _place_order_place_order_component__WEBPACK_IMPORTED_MODULE_38__["PlaceOrderComponent"] },
                    { path: "shared", component: _shared_shared_component__WEBPACK_IMPORTED_MODULE_39__["SharedComponent"] },
                    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_40__["ProfileComponent"] },
                    { path: "**", component: _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] }
                ]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                })
            ],
            providers: [_services_admin_service__WEBPACK_IMPORTED_MODULE_12__["AdminService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _services_toaster_service__WEBPACK_IMPORTED_MODULE_15__["ToasterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class=\"row wrapper border-bottom page-heading\">\n  <div class=\"col-sm-12\">\n      <h2><i class=\"fa fa-bars\"> Contacts</i></h2>   \n  </div>\n  <hr/>        \n</div>\n\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n  \n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <div class=\"ibox float-e-margins\">\n                  <div class=\"ibox-title\">\n                      <h5>ReportsTable with row toggler, sorting and pagination</h5>\n  \n                  </div>\n                  <div class=\"ibox-content\">\n                      <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                          placeholder=\"Search in table\">\n                          <div class=\"table-responsive-sm\">\n                              <table class=\"table\">\n                                  <caption>List of users</caption>\n                                  <thead>\n                                    <tr>\n                                      <th scope=\"col\">#</th>\n                                      <th scope=\"col\">First</th>\n                                      <th scope=\"col\">Last</th>\n                                      <th scope=\"col\">Handle</th>\n                                    </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr>\n                                      <th scope=\"row\">1</th>\n                                      <td>Mark</td>\n                                      <td>Otto</td>\n                                      <td>@mdo</td>\n                                    </tr>\n                                    <tr>\n                                      <th scope=\"row\">2</th>\n                                      <td>Jacob</td>\n                                      <td>Thornton</td>\n                                      <td>@fat</td>\n                                    </tr>\n                                    <tr>\n                                      <th scope=\"row\">3</th>\n                                      <td>Larry</td>\n                                      <td>the Bird</td>\n                                      <td>@twitter</td>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                          </div>\n  \n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>   \n </div>  \n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 500px;\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(toastr) {
        this.toastr = toastr;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //this.toastr.info('Delmond Express , Welcomes You!');
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_toaster_service__WEBPACK_IMPORTED_MODULE_0__["ToasterService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/drivers/driver-add/driver-add.component.css":
/*!*************************************************************!*\
  !*** ./src/app/drivers/driver-add/driver-add.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\n  visibility: hidden;\n}\n\n.image-preview {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview img {\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/drivers/driver-add/driver-add.component.html":
/*!**************************************************************!*\
  !*** ./src/app/drivers/driver-add/driver-add.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- header -->\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Add</i></h2>\n    </div>\n    <hr />\n    <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/drivers\">\n        <i class=\"fa fa-arrow-left\"> Back</i>\n      </button>\n    </div>\n  </div>\n  <!-- form -->\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-content\">\n            <form [formGroup]=\"form\" (submit)=\"saveDriver()\" class=\"form-horizontal\">\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Name</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" formControlName=\"name\" class=\"form-control\" />\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('name').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">UserName</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\" />\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('username').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Password</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"password\" formControlName=\"password\" class=\"form-control\" />\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('password').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Email</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"email\" formControlName=\"email\" class=\"form-control\" />\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('email').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Contact Number</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"number\" formControlName=\"contact\" class=\"form-control\" />\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('contact').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Address</label>\n                <div class=\"col-sm-10\">\n                  <textarea type=\"text\" formControlName=\"address\" class=\"form-control\"></textarea>\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('address').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Select City</label>\n\n                <div class=\"col-sm-10\">\n                  <select class=\"form-control m-b\" formControlName=\"city\">\n                    <option>Select City</option>\n                    <option>City1</option>\n                    <option>City1</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('city').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Select Vehicle</label>\n\n                <div class=\"col-sm-10\">\n                  <select class=\"form-control m-b\" formControlName=\"vehicle\">\n                    <option>Select Vehicle</option>\n                    <option>Vehicle1</option>\n                    <option>Vehicle2</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('vehicle').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Image</label>\n                <div class=\"col-sm-10\">\n                  <button class=\"btn btn-outline btn-success  dim\" type=\"button\" (click)=\"filePicker1.click()\"><i class=\"fa fa-upload\"></i></button>\n                  <input type=\"file\" #filePicker1 formControlName=\"image1\" (change)=\"onImagePicked1($event)\">\n                </div>\n                <!-- image preview -->\n                <div class=\"image-preview\" *ngIf=\"imagePreview1 !== '' && imagePreview1 && form.get('image1').value\">\n                  <img [src]=\"imagePreview1\" [alt]=\"form.value.title\">\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('image1').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Driving License</label>\n                <div class=\"col-sm-10\">\n                  <button class=\"btn btn-outline btn-success  dim\" type=\"button\" (click)=\"filePicker2.click()\"><i class=\"fa fa-upload\"></i></button>\n                  <input type=\"file\" #filePicker2 formControlName=\"image2\" (change)=\"onImagePicked2($event)\">\n                </div>\n                <!-- image preview -->\n                <div class=\"image-preview\" *ngIf=\"imagePreview2 !== '' && imagePreview2 && form.get('image2').value\">\n                  <img [src]=\"imagePreview2\" [alt]=\"form.value.title\">\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('image2').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n\n              <div class=\"form-group\">\n                <div class=\"col-sm-4 col-sm-offset-2\">\n                  <button class=\"btn btn-primary\" type=\"submit\">\n                    Save changes\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/drivers/driver-add/driver-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/drivers/driver-add/driver-add.component.ts ***!
  \************************************************************/
/*! exports provided: DriverAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverAddComponent", function() { return DriverAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/drivers/driver-add/mime-type.validator.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/driver.service */ "./src/app/services/driver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DriverAddComponent = /** @class */ (function () {
    function DriverAddComponent(driver, route, aroute, toastr) {
        this.driver = driver;
        this.route = route;
        this.aroute = aroute;
        this.toastr = toastr;
        this.selectedFile = null;
        this.mode = "create";
    }
    DriverAddComponent.prototype.ngOnInit = function () {
        // settings up validations.
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            vehicle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            image1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_4__["mimeType"]]
            }),
            image2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_4__["mimeType"]]
            })
        });
        // getting params for add or edit page.
        this.aroute.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("id")) {
                _this.mode = "edit";
                _this.driverID = paramMap.get("id");
                // this.driver.getDriverDetails(this.driverID).subscribe(resultData => {
                //   console.log(resultData);
                // });
            }
            else {
                _this.mode = "create";
                _this.driverID = null;
            }
        });
    };
    DriverAddComponent.prototype.onImagePicked1 = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: File });
        this.form.get("image1").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview1 = reader.result;
            //console.log(this.imagePreview1);
        };
        reader.readAsDataURL(file);
    };
    DriverAddComponent.prototype.onImagePicked2 = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: File });
        this.form.get("image2").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview2 = reader.result;
            //console.log(this.imagePreview2);
        };
        reader.readAsDataURL(file);
    };
    DriverAddComponent.prototype.saveDriver = function () {
        var _this = this;
        if (this.form.invalid) {
            console.log("invalid validations");
        }
        if (this.mode === "create") {
            var data = {
                name: this.form.value.name,
                username: this.form.value.username,
                password: this.form.value.password,
                email: this.form.value.email,
                contact: this.form.value.contact,
                address: this.form.value.address,
                city: this.form.value.city,
                vehicle: this.form.value.vehicle,
                image1: this.form.value.image1,
                image2: this.form.value.image2
            };
            this.driver.addDriver(data).subscribe(function (response) {
                console.log(response);
                _this.toastr.success("driver Added successfully");
                _this.route.navigate(["/drivers"]);
            }, function (error) {
                _this.err = true;
                console.log(error);
                //this.err_msg = JSON.parse(error._body).message;
                //this.toastr.error(this.err_msg);
            });
        }
        else {
        }
    };
    DriverAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-driver-add",
            template: __webpack_require__(/*! ./driver-add.component.html */ "./src/app/drivers/driver-add/driver-add.component.html"),
            styles: [__webpack_require__(/*! ./driver-add.component.css */ "./src/app/drivers/driver-add/driver-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], DriverAddComponent);
    return DriverAddComponent;
}());



/***/ }),

/***/ "./src/app/drivers/driver-add/mime-type.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/drivers/driver-add/mime-type.validator.ts ***!
  \***********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof control.value === "string") {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/drivers/driver-details/driver-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/drivers/driver-details/driver-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drivers/driver-details/driver-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/drivers/driver-details/driver-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class=\"row wrapper border-bottom page-heading\">\n  <div class=\"col-sm-6\">\n      <h2><i class=\"fa fa-bars\"> Details</i></h2>   \n  </div>\n  <hr/>\n  <div class=\"col-sm-2\">\n    <button class=\"btn btn-info dim btn-small-dim\" type=\"button\" routerLink=\"/drivers/history\"><i class=\"fa fa-eye\"> History</i></button>\n  </div>  \n  <div class=\"col-sm-2\">\n    <button class=\"btn btn-info dim btn-small-dim\" type=\"button\" routerLink=\"/drivers/earning\"><i class=\"fa fa-eye\"> Earning</i></button>\n  </div>      \n  <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/drivers\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n  </div>\n</div>\n<div class=\"wrapper wrapper-content animated fadeInRight white-bg\">\n\n\n    <div class=\"row m-b-lg m-t-lg\">\n        <div class=\"col-md-6\">\n\n            <div class=\"profile-image\">\n                <img src=\"img/a4.jpg\" class=\"img-circle circle-border m-b-md\" alt=\"profile\">\n            </div>\n            <div class=\"profile-info\">\n                <div class=\"\">\n                    <div>\n                        <h2 class=\"no-margins\">\n                            Alex Smith\n                        </h2>\n                        <h4>Founder of Groupeq</h4>\n                        <small>\n                            There are many variations of passages of Lorem Ipsum available, but the majority\n                            have suffered alteration in some form Ipsum available.\n                        </small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <table class=\"table small m-b-xs\">\n                <tbody>\n                <tr>\n                    <td>\n                        <strong>Username</strong> xyz\n                    </td>\n                    <td>\n                        <strong>Password</strong> 123234\n                    </td>\n\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Email</strong> xyz@gmail.com\n                    </td>\n                    <td>\n                        <strong>Contact</strong> 4545454545545\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <strong>Address</strong> 121,dfsdfdsf,dsfdsfds,dfadsfadsf\n                    </td>\n                    <td>\n                        <strong>City</strong> city\n                    </td>\n                </tr>\n                <tr>\n                   <td>\n                       <strong>Vehicle</strong> Vehicle1222\n                   </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n        <!-- <div class=\"col-md-3\">\n            <small>Sales in last 24h</small>\n            <h2 class=\"no-margins\">206 480</h2>\n            <div id=\"sparkline1\"></div>\n        </div> -->\n\n\n    </div>\n    \n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/drivers/driver-details/driver-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/drivers/driver-details/driver-details.component.ts ***!
  \********************************************************************/
/*! exports provided: DriverDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverDetailsComponent", function() { return DriverDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverDetailsComponent = /** @class */ (function () {
    function DriverDetailsComponent() {
    }
    DriverDetailsComponent.prototype.ngOnInit = function () {
    };
    DriverDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-details',
            template: __webpack_require__(/*! ./driver-details.component.html */ "./src/app/drivers/driver-details/driver-details.component.html"),
            styles: [__webpack_require__(/*! ./driver-details.component.css */ "./src/app/drivers/driver-details/driver-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DriverDetailsComponent);
    return DriverDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drivers/driver-earning/driver-earning.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/drivers/driver-earning/driver-earning.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drivers/driver-earning/driver-earning.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/drivers/driver-earning/driver-earning.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-10\">\n        <h2><i class=\"fa fa-bars\"> Earning</i></h2>   \n    </div>\n    <hr/>        \n    <div class=\"col-sm-2\">\n        <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/drivers\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n    </div>\n  </div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>DriversTable with row toggler, sorting and pagination</h5>\n                    iscon\n                </div>\n                <div class=\"ibox-content\">\n                    <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                        placeholder=\"Search in table\">\n                        <div class=\"table-responsive-sm\">\n                            <table class=\"table\">\n                                <caption>List of Drivers</caption>\n                                <thead>\n                                  <tr>\n                                    <th scope=\"col\">#</th>\n                                    <th scope=\"col\">First</th>\n                                    <th scope=\"col\">Last</th>\n                                    <th scope=\"col\">Handle</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/drivers/driver-earning/driver-earning.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/drivers/driver-earning/driver-earning.component.ts ***!
  \********************************************************************/
/*! exports provided: DriverEarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverEarningComponent", function() { return DriverEarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverEarningComponent = /** @class */ (function () {
    function DriverEarningComponent() {
    }
    DriverEarningComponent.prototype.ngOnInit = function () {
    };
    DriverEarningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-earning',
            template: __webpack_require__(/*! ./driver-earning.component.html */ "./src/app/drivers/driver-earning/driver-earning.component.html"),
            styles: [__webpack_require__(/*! ./driver-earning.component.css */ "./src/app/drivers/driver-earning/driver-earning.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DriverEarningComponent);
    return DriverEarningComponent;
}());



/***/ }),

/***/ "./src/app/drivers/driver-history/driver-history.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/drivers/driver-history/driver-history.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drivers/driver-history/driver-history.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/drivers/driver-history/driver-history.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-10\">\n        <h2><i class=\"fa fa-bars\"> History</i></h2>   \n    </div>\n    <hr/>        \n    <div class=\"col-sm-2\">\n        <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/drivers\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n    </div>\n  </div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>DriversTable with row toggler, sorting and pagination</h5>\n                    iscon\n                </div>\n                <div class=\"ibox-content\">\n                    <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                        placeholder=\"Search in table\">\n                        <div class=\"table-responsive-sm\">\n                            <table class=\"table\">\n                                <caption>List of Drivers</caption>\n                                <thead>\n                                  <tr>\n                                    <th scope=\"col\">#</th>\n                                    <th scope=\"col\">First</th>\n                                    <th scope=\"col\">Last</th>\n                                    <th scope=\"col\">Handle</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/drivers/driver-history/driver-history.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/drivers/driver-history/driver-history.component.ts ***!
  \********************************************************************/
/*! exports provided: DriverHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHistoryComponent", function() { return DriverHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverHistoryComponent = /** @class */ (function () {
    function DriverHistoryComponent() {
    }
    DriverHistoryComponent.prototype.ngOnInit = function () {
    };
    DriverHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-history',
            template: __webpack_require__(/*! ./driver-history.component.html */ "./src/app/drivers/driver-history/driver-history.component.html"),
            styles: [__webpack_require__(/*! ./driver-history.component.css */ "./src/app/drivers/driver-history/driver-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DriverHistoryComponent);
    return DriverHistoryComponent;
}());



/***/ }),

/***/ "./src/app/drivers/driver-shared/driver-shared.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/drivers/driver-shared/driver-shared.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drivers/driver-shared/driver-shared.component.html":
/*!********************************************************************!*\
  !*** ./src/app/drivers/driver-shared/driver-shared.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-10\">\n        <h2><i class=\"fa fa-bars\"> Shared</i></h2>   \n    </div>\n    <hr/>        \n    <div class=\"col-sm-2\">\n        <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/drivers\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n    </div>\n  </div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>DriversTable with row toggler, sorting and pagination</h5>\n                    iscon\n                </div>\n                <div class=\"ibox-content\">\n                    <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                        placeholder=\"Search in table\">\n                        <div class=\"table-responsive-sm\">\n                            <table class=\"table\">\n                                <caption>List of Drivers</caption>\n                                <thead>\n                                  <tr>\n                                    <th scope=\"col\">#</th>\n                                    <th scope=\"col\">First</th>\n                                    <th scope=\"col\">Last</th>\n                                    <th scope=\"col\">Handle</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/drivers/driver-shared/driver-shared.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/drivers/driver-shared/driver-shared.component.ts ***!
  \******************************************************************/
/*! exports provided: DriverSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverSharedComponent", function() { return DriverSharedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverSharedComponent = /** @class */ (function () {
    function DriverSharedComponent() {
    }
    DriverSharedComponent.prototype.ngOnInit = function () {
    };
    DriverSharedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-shared',
            template: __webpack_require__(/*! ./driver-shared.component.html */ "./src/app/drivers/driver-shared/driver-shared.component.html"),
            styles: [__webpack_require__(/*! ./driver-shared.component.css */ "./src/app/drivers/driver-shared/driver-shared.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DriverSharedComponent);
    return DriverSharedComponent;
}());



/***/ }),

/***/ "./src/app/drivers/drivers.component.css":
/*!***********************************************!*\
  !*** ./src/app/drivers/drivers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drivers/drivers.component.html":
/*!************************************************!*\
  !*** ./src/app/drivers/drivers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-12\">\n        <h2><i class=\"fa fa-bars\"> Registered Drivers</i></h2>   \n    </div>\n    <hr/>        \n    <div class=\"col-sm-6\">\n        <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"add\"><i class=\"fa fa-plus\"> Add Driver</i></button>\n        <button class=\"btn btn-info dim btn-small-dim\" type=\"button\" routerLink=\"shared\"><i class=\"fa fa-eye\"> Shared</i></button>\n    </div>\n</div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>DriversTable with row toggler, sorting and pagination</h5>\n                    iscon\n                </div>\n                <div class=\"ibox-content\">\n                    <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                        placeholder=\"Search in table\">\n                        <div class=\"table-responsive-sm\">\n                            <table class=\"table\">\n                                <caption>List of Drivers</caption>\n                                <thead>\n                                  <tr>\n                                    <th scope=\"col\">#</th>\n                                    <th scope=\"col\">First</th>\n                                    <th scope=\"col\">Last</th>\n                                    <th scope=\"col\">Handle</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/drivers/drivers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/drivers/drivers.component.ts ***!
  \**********************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriversComponent = /** @class */ (function () {
    function DriversComponent() {
    }
    DriversComponent.prototype.ngOnInit = function () {
    };
    DriversComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drivers',
            template: __webpack_require__(/*! ./drivers.component.html */ "./src/app/drivers/drivers.component.html"),
            styles: [__webpack_require__(/*! ./drivers.component.css */ "./src/app/drivers/drivers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DriversComponent);
    return DriversComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen animated fadeInDown\">\n  <p class=\"m-t\"> <small>Delmond Express <span class=\"badge badge-warning\">2.0</span> &copy; 2019</small> </p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav > li > a {\n    color: #a7b1c2;\n    font-weight: 1400;\n    padding: 14px 20px 14px 25px;\n}\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n    color: #fff;\n    background-color: #9CC63F;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"navbar navbar-dark\">\n\n  <a class=\"navbar-brand\" routerLink=\"\"><img [src]=\"logo\">\n  </a>\n  <p>{{today | date:'medium'}} </p>\n  <!-- <p *ngIf=\"name\">{{name}}</p> -->\n  <ul class=\"nav nav-pills\">\n\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">Language</a>\n      <div class=\"dropdown-menu\">\n        <!-- <img (click)=\"translate.use('esp')\" class=\"lang\" [src]=\"esp_logo\"> -->\n        <!-- <img (click)=\"translate.use('en')\" class=\"lang\" [src]=\"en_logo\"> -->\n        <a class=\"dropdown-item\" (click)=\"translate.use('esp')\">español</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"translate.use('en')\">english</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n\n\n      </div>\n    </li>\n    <li class=\"nav-item dropdown\" *ngIf=\"auth.isLoggedIn()\">\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Logout</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" routerLink=\"/profile\">Profile</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" (click)=\"logout()\">Logout</a>\n      </div>\n    </li>\n  </ul>\n</nav>\n<hr />\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, auth, route, toastr) {
        var _this = this;
        this.translate = translate;
        this.auth = auth;
        this.route = route;
        this.toastr = toastr;
        this.logo = "assets/logo.png";
        this.en_logo = "assets/lang_english.png";
        this.esp_logo = "assets/lang_spanish.png";
        translate.setDefaultLang('esp');
        translate.use('esp');
        setInterval(function () {
            _this.today = Date.now();
        }, 1000);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getToken()
            .subscribe(function (response) {
            //console.log(response.data[0].name);
            _this.name = response.data[0].name;
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function (response) {
            _this.toastr.success('You logged Out Successfully', '');
            _this.route.navigate(['']);
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_toaster_service__WEBPACK_IMPORTED_MODULE_0__["ToasterService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen animated fadeInDown\">\n  <div>\n      \n      <h3>{{ 'LOGIN.welcome' | translate }}</h3>\n      \n      <p>\n         {{ 'LOGIN.message' | translate }} \n      </p>\n      <p>Login in. To see it in action.</p>\n      <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">Invalid username and/or password.</div>\n      <form class=\"m-t\" role=\"form\" [formGroup]=\"form\" (ngSubmit)=\"login()\">\n          <div class=\"form-group\">\n              <input \n                     formControlName=\"username\"\n                     type=\"email\" \n                     class=\"form-control\" \n                     placeholder=\"{{'LOGIN.username' | translate}}\">\n                     <div *ngIf=\"username.touched && username.invalid\" class=\"alert alert-danger\">Username Required</div>\n          </div>\n          <div class=\"form-group\">\n              <input \n                     formControlName=\"password\"\n                     type=\"password\" \n                     class=\"form-control\" \n                     placeholder=\"{{'LOGIN.password' | translate}}\">\n                     <div *ngIf=\"password.touched && password.invalid\" class=\"alert alert-danger\">Password Required</div>\n          </div>\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-primary block full-width m-b\">{{'LOGIN.login' | translate}}</button>\n      </form>\n      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(translate, auth, router, toastr) {
        this.translate = translate;
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.logo = "/assets/logo_icon.png";
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        translate.setDefaultLang('esp');
        translate.use('esp');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        var username = this.form.value.username;
        var password = this.form.value.password;
        this.credentials = { 'username': username, 'password': password };
        this.auth.login(this.credentials)
            .subscribe(function (response) {
            if (response) {
                _this.toastr.success('Welcomes You!!', 'Delmond Express');
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.invalidLogin = true;
            }
        }, function (error) {
            //console.log(typeof(error.json()));
            _this.invalidLogin = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav > li > a {\n    color: #a7b1c2;\n    font-weight: 1400;\n    padding: 14px 20px 14px 25px;\n}\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n    color: #fff;\n    background-color: #9CC63F;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"navbar navbar-dark bg-dark\">\n  <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active current\" routerLink=\"/dashboard\">Dashboard</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active current\" routerLink=\"/users\">Users</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active current\" routerLink=\"/drivers\">Drivers</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active current\" routerLink=\"/advertisements\">Advertisement</a>\n    </li>\n    \n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" routerLink=\"/city\">City</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" routerLink=\"/vehicles\">Vehicle</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" routerLink=\"/commission\">Commission</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" routerLink=\"/price-management\">Price Management</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" routerLink=\"/delivery-range\">Delivery Range</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" routerLink=\"/terms-conditions\">Terms and Conditions</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" routerLink=\"/privacy-policy\">Privacy and Policy</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" routerLink=\"/special-delivery-rule\">Special Delivery Rule</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLinkActive=\"active current\" routerLink=\"/service-charge\">Service Charge</a>\n        <div role=\"separator\" class=\"dropdown-divider\"></div>\n        \n      </div>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active current\" routerLink=\"/orders\">Orders Placed</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active current\" routerLink=\"/reports\">View Order Reports</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active current\" routerLink=\"/contacts\">View User Contacts</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active current\" routerLink=\"/admin-users\">Admin Users</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active current\" routerLink=\"/place-order\">Place Order</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active current\" routerLink=\"/shared\">Shared</a>\n    </li>\n  </ul>\n</nav>\n<hr/>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    <div class=\"row wrapper border-bottom page-heading\">\n        <div class=\"col-sm-8\">\n            <h2><i class=\"fa fa-bars\"> Orders</i></h2>   \n        </div>\n        <hr/>        \n        <div class=\"col-sm-2\">\n            <button class=\"btn btn-warning dim btn-small-dim\" type=\"button\"><i class=\"fa fa-recycle\"> Clear All Order</i></button>\n        </div>\n      </div>\n      <div class=\"wrapper wrapper-content animated fadeInRight\">\n\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <div class=\"ibox float-e-margins\">\n                      <div class=\"ibox-title\">\n                          <h5>OrdersTable with row toggler, sorting and pagination</h5>\n  \n                      </div>\n                      <div class=\"ibox-content\">\n                          <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                              placeholder=\"Search in table\">\n                              <div class=\"table-responsive-sm\">\n                                  <table class=\"table\">\n                                      <caption>List of users</caption>\n                                      <thead>\n                                        <tr>\n                                          <th scope=\"col\">#</th>\n                                          <th scope=\"col\">First</th>\n                                          <th scope=\"col\">Last</th>\n                                          <th scope=\"col\">Handle</th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr>\n                                          <th scope=\"row\">1</th>\n                                          <td>Mark</td>\n                                          <td>Otto</td>\n                                          <td>@mdo</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">2</th>\n                                          <td>Jacob</td>\n                                          <td>Thornton</td>\n                                          <td>@fat</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">3</th>\n                                          <td>Larry</td>\n                                          <td>the Bird</td>\n                                          <td>@twitter</td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                              </div>\n  \n                      </div>\n                  </div>\n              </div>\n          </div>\n  </div>   \n      \n</div>\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/place-order/place-order.component.css":
/*!*******************************************************!*\
  !*** ./src/app/place-order/place-order.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/place-order/place-order.component.html":
/*!********************************************************!*\
  !*** ./src/app/place-order/place-order.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-12\">\n        <h2><i class=\"fa fa-bars\"> Place Order</i></h2>   \n    </div>\n    <hr/>        \n  </div>\n<!-- form -->\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <form method=\"get\" class=\"form-horizontal\">\n\n                        <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Select Country</label>\n\n                          <div class=\"col-sm-10\">\n                            <select class=\"form-control m-b\" name=\"country\">\n                                <option>Select Country</option>\n                                <option>Country1</option>\n                                <option>Country2</option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n\n                        <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Select Vehicle</label>\n    \n                            <div class=\"col-sm-10\">\n                              <select class=\"form-control m-b\" name=\"vehicle\">\n                                  <option>Select Vehicle</option>\n                                  <option>Vehicle1</option>\n                                  <option>Vehicle2</option>\n                              </select>\n                            </div>\n                          </div>\n                        <div class=\"hr-line-dashed\"></div>\n\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label\">Special Delivery <br/><small class=\"text-navy\">Special Delivery</small>\n                            </label>\n\n                        <div class=\"col-sm-10\">\n\n                              <div class=\"i-checks\"><label> <input type=\"radio\" value=\"\" name=\"special\"> <i></i> Off </label></div>\n                              <div class=\"i-checks\"><label> <input type=\"radio\" value=\"\" name=\"special\"> <i></i> On </label></div>\n                              \n                        </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label\">Pickup Location</label>\n                            <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"pickup\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label\">Drop Location</label>\n                            <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"drop\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label\">Special Location</label>\n                            <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"special\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n\n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label\">Note</label>\n                            <div class=\"col-sm-10\">\n                            <textarea type=\"text\" name=\"note\" class=\"form-control\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n                        \n                        <div class=\"hr-line-dashed\"></div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4 col-sm-offset-2\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/place-order/place-order.component.ts":
/*!******************************************************!*\
  !*** ./src/app/place-order/place-order.component.ts ***!
  \******************************************************/
/*! exports provided: PlaceOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceOrderComponent", function() { return PlaceOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaceOrderComponent = /** @class */ (function () {
    function PlaceOrderComponent() {
    }
    PlaceOrderComponent.prototype.ngOnInit = function () {
    };
    PlaceOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-place-order',
            template: __webpack_require__(/*! ./place-order.component.html */ "./src/app/place-order/place-order.component.html"),
            styles: [__webpack_require__(/*! ./place-order.component.css */ "./src/app/place-order/place-order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlaceOrderComponent);
    return PlaceOrderComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    <div class=\"row wrapper border-bottom page-heading\">\n        <div class=\"col-sm-12\">\n            <h2><i class=\"fa fa-bars\"> Profile</i></h2>   \n        </div>\n        <hr/>        \n        \n      </div>\n     <!-- form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <form method=\"get\" class=\"form-horizontal\">\n  \n                        <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Name</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"text\" name=\"name\" class=\"form-control\">\n                          </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n  \n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label\">UserName</label>\n                            <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"username\" class=\"form-control\">\n                            </div>\n                          </div>\n                        <div class=\"hr-line-dashed\"></div>\n  \n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label\">Password</label>\n                            <div class=\"col-sm-10\">\n                            <input type=\"password\" name=\"password\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n  \n                        <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label\">Image</label>\n                            <div class=\"col-sm-10\">\n                            <input type=\"file\" name=\"image\" class=\"form-control\">\n                            </div>\n                        </div>\n  \n                        \n                        <div class=\"hr-line-dashed\"></div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4 col-sm-offset-2\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n      \n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    <div class=\"row wrapper border-bottom page-heading\">\n        <div class=\"col-sm-12\">\n            <h2><i class=\"fa fa-bars\"> Reports</i></h2>   \n        </div>\n        <hr/>        \n        \n      </div>\n      <div class=\"wrapper wrapper-content animated fadeInRight\">\n      \n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <div class=\"ibox float-e-margins\">\n                      <div class=\"ibox-title\">\n                          <h5>ReportsTable with row toggler, sorting and pagination</h5>\n      \n                      </div>\n                      <div class=\"ibox-content\">\n                          <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                              placeholder=\"Search in table\">\n                              <div class=\"table-responsive-sm\">\n                                  <table class=\"table\">\n                                      <caption>List of users</caption>\n                                      <thead>\n                                        <tr>\n                                          <th scope=\"col\">#</th>\n                                          <th scope=\"col\">First</th>\n                                          <th scope=\"col\">Last</th>\n                                          <th scope=\"col\">Handle</th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr>\n                                          <th scope=\"row\">1</th>\n                                          <td>Mark</td>\n                                          <td>Otto</td>\n                                          <td>@mdo</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">2</th>\n                                          <td>Jacob</td>\n                                          <td>Thornton</td>\n                                          <td>@fat</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">3</th>\n                                          <td>Larry</td>\n                                          <td>the Bird</td>\n                                          <td>@twitter</td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                              </div>\n      \n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>   \n      \n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function (_super) {
    __extends(AdminService, _super);
    function AdminService(http) {
        return _super.call(this, '', http) || this;
    }
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AdminService);
    return AdminService;
}(_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]));



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (credentials) {
        console.log(credentials);
        console.log(typeof credentials);
        return this.http.post("admin/login", credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            var result = response.json();
            result.token = "dfdsfdsfdsf23213";
            //console.log(result.token);
            if (result && result.token) {
                localStorage.setItem("token", result.token);
                return true;
            }
            else {
                return false;
            }
        }));
    };
    AuthService.prototype.logout = function () {
        var token = localStorage.getItem("token");
        var tokenId = { tokenId: token };
        return this.http.post("admin/logout", tokenId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            var result = response.json();
            console.log(result);
            localStorage.removeItem("token");
            return true;
        }));
    };
    AuthService.prototype.getToken = function () {
        var token = localStorage.getItem("token");
        return this.http.get("tokens", { params: { id: token } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            var result = response.json();
            return result;
        }));
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.tokenNotExpired();
    };
    AuthService.prototype.tokenNotExpired = function () {
        var token = localStorage.getItem("token");
        if (!token) {
            return false;
        }
        else {
            return true;
        }
        //  let get_token = this.getToken();
        //   get_token.subscribe(response=>{
        //     console.log(response.expires);
        //   },error=>{
        //     console.log(error);
        //   });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.getAuthenticated = function () {
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [String, _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/driver.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/driver.service.ts ***!
  \********************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverService = /** @class */ (function () {
    function DriverService(http) {
        this.http = http;
        this.url = "";
    }
    DriverService.prototype.addDriver = function (data) {
        var fd = new FormData();
        fd.append("name", data.name);
        fd.append("username", data.username);
        fd.append("password", data.password);
        fd.append("email", data.email);
        fd.append("address", data.address);
        fd.append("city", data.city);
        fd.append("vehicle", data.vehicle);
        fd.append("image1", data.image1);
        fd.append("image2", data.image2);
        return this.http.post(this.url + "/driver/add", fd).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var result = response.json();
            return result;
        }));
    };
    DriverService.prototype.updateDriver = function () { };
    DriverService.prototype.getAllDriver = function () { };
    DriverService.prototype.getDriverDetails = function (id) { };
    DriverService.prototype.delete = function () { };
    DriverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], DriverService);
    return DriverService;
}());



/***/ }),

/***/ "./src/app/services/toaster.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/toaster.service.ts ***!
  \*********************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToasterService = /** @class */ (function () {
    function ToasterService() {
        this.setting();
    }
    ToasterService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToasterService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    ToasterService.prototype.warning = function (title, message) {
        toastr.warning(message, title);
    };
    ToasterService.prototype.info = function (message) {
        toastr.info(message);
    };
    ToasterService.prototype.setting = function () {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
    };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = "";
    }
    UserService.prototype.addUser = function (data) {
        var fd = new FormData();
        fd.append("name", data.name);
        fd.append("username", data.username);
        fd.append("password", data.password);
        fd.append("email", data.email);
        fd.append("contact", data.contact);
        fd.append("address", data.address);
        fd.append("city", data.city);
        fd.append("image", data.image);
        return this.http.post("/user/add", fd).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var result = response.json();
            return result;
        }));
    };
    UserService.prototype.updateUser = function (data) {
        var fd = new FormData();
        fd.append("id", data.id);
        fd.append("name", data.name);
        fd.append("username", data.username);
        fd.append("password", data.password);
        fd.append("email", data.email);
        fd.append("contact", data.contact);
        fd.append("address", data.address);
        fd.append("city", data.city);
        fd.append("image", data.image);
        return this.http.put("/user/" + data.id, fd).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var result = response.json();
            return result;
        }));
    };
    UserService.prototype.getAllUser = function () {
        return this.http.get("/user/getAll").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var result = response.json();
            //console.log(result);
            return result;
        }));
    };
    UserService.prototype.getUserDetails = function (id) {
        return this.http.get("/user/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var result = response.json();
            //console.log(result);
            return result;
        }));
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete("/user/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var result = response.json();
            console.log(result);
            return result.doc;
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/settings/city/city-add/city-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/settings/city/city-add/city-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/city/city-add/city-add.component.html":
/*!****************************************************************!*\
  !*** ./src/app/settings/city/city-add/city-add.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n<div class=\"row wrapper border-bottom page-heading\">\n  <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Add</i></h2>   \n  </div>\n  <hr/>        \n  <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/city\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n  </div>\n</div>\n<!-- form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n              <div class=\"ibox-content\">\n                  <form method=\"get\" class=\"form-horizontal\">\n\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Name</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" name=\"name\" class=\"form-control\">\n                        </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n                      \n                      <div class=\"hr-line-dashed\"></div>\n                      <div class=\"form-group\">\n                          <div class=\"col-sm-4 col-sm-offset-2\">\n                              <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/settings/city/city-add/city-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/settings/city/city-add/city-add.component.ts ***!
  \**************************************************************/
/*! exports provided: CityAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityAddComponent", function() { return CityAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CityAddComponent = /** @class */ (function () {
    function CityAddComponent() {
    }
    CityAddComponent.prototype.ngOnInit = function () {
    };
    CityAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city-add',
            template: __webpack_require__(/*! ./city-add.component.html */ "./src/app/settings/city/city-add/city-add.component.html"),
            styles: [__webpack_require__(/*! ./city-add.component.css */ "./src/app/settings/city/city-add/city-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CityAddComponent);
    return CityAddComponent;
}());



/***/ }),

/***/ "./src/app/settings/city/city.component.css":
/*!**************************************************!*\
  !*** ./src/app/settings/city/city.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/city/city.component.html":
/*!***************************************************!*\
  !*** ./src/app/settings/city/city.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <!-- header -->\n    <div class=\"row wrapper border-bottom page-heading\">\n        <div class=\"col-sm-12\">\n            <h2><i class=\"fa fa-bars\"> City</i></h2>   \n        </div>\n        <hr/>        \n        <div class=\"col-sm-2\">\n            <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"add\"><i class=\"fa fa-plus\"> Add City</i></button>\n        </div>\n    </div>\n    <!-- table -->\n    <div class=\"wrapper wrapper-content animated fadeInRight\">\n\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                        <h5>SharedTable with row toggler, sorting and pagination</h5>\n\n                    </div>\n                    <div class=\"ibox-content\">\n                        <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                            placeholder=\"Search in table\">\n                            <div class=\"table-responsive-sm\">\n                                <table class=\"table\">\n                                    <caption>List of users</caption>\n                                    <thead>\n                                      <tr>\n                                        <th scope=\"col\">#</th>\n                                        <th scope=\"col\">First</th>\n                                        <th scope=\"col\">Last</th>\n                                        <th scope=\"col\">Handle</th>\n                                      </tr>\n                                    </thead>\n                                    <tbody>\n                                      <tr>\n                                        <th scope=\"row\">1</th>\n                                        <td>Mark</td>\n                                        <td>Otto</td>\n                                        <td>@mdo</td>\n                                      </tr>\n                                      <tr>\n                                        <th scope=\"row\">2</th>\n                                        <td>Jacob</td>\n                                        <td>Thornton</td>\n                                        <td>@fat</td>\n                                      </tr>\n                                      <tr>\n                                        <th scope=\"row\">3</th>\n                                        <td>Larry</td>\n                                        <td>the Bird</td>\n                                        <td>@twitter</td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                            </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n  </div>\n      \n</div>\n"

/***/ }),

/***/ "./src/app/settings/city/city.component.ts":
/*!*************************************************!*\
  !*** ./src/app/settings/city/city.component.ts ***!
  \*************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CityComponent = /** @class */ (function () {
    function CityComponent() {
    }
    CityComponent.prototype.ngOnInit = function () {
    };
    CityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! ./city.component.html */ "./src/app/settings/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.css */ "./src/app/settings/city/city.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/settings/commission/commission.component.css":
/*!**************************************************************!*\
  !*** ./src/app/settings/commission/commission.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/commission/commission.component.html":
/*!***************************************************************!*\
  !*** ./src/app/settings/commission/commission.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-12\">\n        <h2><i class=\"fa fa-bars\"> Commission</i></h2>   \n    </div>\n    <hr/>        \n    \n  </div>\n<!-- form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n              <div class=\"ibox-content\">\n                  <form method=\"get\" class=\"form-horizontal\">\n\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Commission</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" name=\"commission\" class=\"form-control\">\n                        </div>\n                      </div>\n                      \n                      \n                      <div class=\"hr-line-dashed\"></div>\n                      <div class=\"form-group\">\n                          <div class=\"col-sm-4 col-sm-offset-2\">\n                              <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/settings/commission/commission.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/settings/commission/commission.component.ts ***!
  \*************************************************************/
/*! exports provided: CommissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommissionComponent", function() { return CommissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommissionComponent = /** @class */ (function () {
    function CommissionComponent() {
    }
    CommissionComponent.prototype.ngOnInit = function () {
    };
    CommissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commission',
            template: __webpack_require__(/*! ./commission.component.html */ "./src/app/settings/commission/commission.component.html"),
            styles: [__webpack_require__(/*! ./commission.component.css */ "./src/app/settings/commission/commission.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommissionComponent);
    return CommissionComponent;
}());



/***/ }),

/***/ "./src/app/settings/delivery-range/delivery-range.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/settings/delivery-range/delivery-range.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/delivery-range/delivery-range.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/settings/delivery-range/delivery-range.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-12\">\n        <h2><i class=\"fa fa-bars\"> Delivery Range</i></h2>   \n    </div>\n    <hr/>        \n  </div>\n  <!-- form -->\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <form method=\"get\" class=\"form-horizontal\">\n  \n                        <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Range</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"text\" name=\"range\" class=\"form-control\">\n                          </div>\n                        </div>\n                        \n                        \n                        <div class=\"hr-line-dashed\"></div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4 col-sm-offset-2\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/settings/delivery-range/delivery-range.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/delivery-range/delivery-range.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeliveryRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryRangeComponent", function() { return DeliveryRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeliveryRangeComponent = /** @class */ (function () {
    function DeliveryRangeComponent() {
    }
    DeliveryRangeComponent.prototype.ngOnInit = function () {
    };
    DeliveryRangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delivery-range',
            template: __webpack_require__(/*! ./delivery-range.component.html */ "./src/app/settings/delivery-range/delivery-range.component.html"),
            styles: [__webpack_require__(/*! ./delivery-range.component.css */ "./src/app/settings/delivery-range/delivery-range.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeliveryRangeComponent);
    return DeliveryRangeComponent;
}());



/***/ }),

/***/ "./src/app/settings/price-management/price-management-add/price-management-add.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/settings/price-management/price-management-add/price-management-add.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/price-management/price-management-add/price-management-add.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/settings/price-management/price-management-add/price-management-add.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n<div class=\"row wrapper border-bottom page-heading\">\n  <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Add</i></h2>   \n  </div>\n  <hr/>        \n  <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/price-management\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n  </div>\n</div>\n<!-- form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n              <div class=\"ibox-content\">\n                  <form method=\"get\" class=\"form-horizontal\">\n\n                      <div class=\"form-group\">\n                      <label class=\"col-sm-2 control-label\">Select Country</label>\n\n                        <div class=\"col-sm-10\">\n                          <select class=\"form-control m-b\" name=\"country\">\n                              <option>Select Country</option>\n                              <option>Country1</option>\n                              <option>Country2</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Select Vehicle</label>\n    \n                            <div class=\"col-sm-10\">\n                              <select class=\"form-control m-b\" name=\"vehicle\">\n                                  <option>Select Vehicle</option>\n                                  <option>Vehicle1</option>\n                                  <option>Vehicle2</option>\n                              </select>\n                            </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Set Range With Price</label>\n                          <div class=\"col-sm-3\">\n                          from  <input type=\"number\" name=\"from\" class=\"form-control\">\n                          </div>\n                          <div class=\"col-sm-3\">\n                           to    <input type=\"number\" name=\"to\" class=\"form-control\">\n                          </div>\n                          <div class=\"col-sm-3\">\n                          price  <input type=\"number\" name=\"price\" class=\"form-control\">\n                          </div>\n                          <div class=\"col-sm-3\">\n                              <button class=\"btn btn-info\" type=\"submit\">Add</button>\n                          </div>\n                      </div>\n                      \n                      \n                      <div class=\"hr-line-dashed\"></div>\n                      <div class=\"form-group\">\n                          <div class=\"col-sm-4 col-sm-offset-2\">\n                              <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/settings/price-management/price-management-add/price-management-add.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/settings/price-management/price-management-add/price-management-add.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PriceManagementAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceManagementAddComponent", function() { return PriceManagementAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceManagementAddComponent = /** @class */ (function () {
    function PriceManagementAddComponent() {
    }
    PriceManagementAddComponent.prototype.ngOnInit = function () {
    };
    PriceManagementAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-price-management-add',
            template: __webpack_require__(/*! ./price-management-add.component.html */ "./src/app/settings/price-management/price-management-add/price-management-add.component.html"),
            styles: [__webpack_require__(/*! ./price-management-add.component.css */ "./src/app/settings/price-management/price-management-add/price-management-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceManagementAddComponent);
    return PriceManagementAddComponent;
}());



/***/ }),

/***/ "./src/app/settings/price-management/price-management.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/settings/price-management/price-management.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/price-management/price-management.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/settings/price-management/price-management.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row wrapper border-bottom page-heading\">\n        <div class=\"col-sm-12\">\n            <h2><i class=\"fa fa-bars\"> Price Management</i></h2>   \n        </div>\n        <hr/>        \n        <div class=\"col-sm-2\">\n            <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"add\"><i class=\"fa fa-plus\"> Add Driver</i></button>\n        </div>\n      </div>\n      <div class=\"wrapper wrapper-content animated fadeInRight\">\n\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <div class=\"ibox float-e-margins\">\n                      <div class=\"ibox-title\">\n                          <h5>Price Management with row toggler, sorting and pagination</h5>\n      \n                      </div>\n                      <div class=\"ibox-content\">\n                                <div class=\"form-group\">\n                                    <div class=\"col-sm-10\">\n                                      <select class=\"form-control m-b\" name=\"country\">\n                                          <option>Select Country</option>\n                                          <option>Country1</option>\n                                          <option>Country2</option>\n                                      </select>\n                                    </div>\n                                  </div>\n                                  <div class=\"table-responsive-sm\">\n                                  <table class=\"table\">\n                                      <caption>List of users</caption>\n                                      <thead>\n                                        <tr>\n                                          <th scope=\"col\">#</th>\n                                          <th scope=\"col\">First</th>\n                                          <th scope=\"col\">Last</th>\n                                          <th scope=\"col\">Handle</th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr>\n                                          <th scope=\"row\">1</th>\n                                          <td>Mark</td>\n                                          <td>Otto</td>\n                                          <td>@mdo</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">2</th>\n                                          <td>Jacob</td>\n                                          <td>Thornton</td>\n                                          <td>@fat</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">3</th>\n                                          <td>Larry</td>\n                                          <td>the Bird</td>\n                                          <td>@twitter</td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                              </div>\n      \n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>  \n      \n</div>\n"

/***/ }),

/***/ "./src/app/settings/price-management/price-management.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/settings/price-management/price-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: PriceManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceManagementComponent", function() { return PriceManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceManagementComponent = /** @class */ (function () {
    function PriceManagementComponent() {
    }
    PriceManagementComponent.prototype.ngOnInit = function () {
    };
    PriceManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-price-management',
            template: __webpack_require__(/*! ./price-management.component.html */ "./src/app/settings/price-management/price-management.component.html"),
            styles: [__webpack_require__(/*! ./price-management.component.css */ "./src/app/settings/price-management/price-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceManagementComponent);
    return PriceManagementComponent;
}());



/***/ }),

/***/ "./src/app/settings/privacy-policy/privacy-policy.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/settings/privacy-policy/privacy-policy.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/privacy-policy/privacy-policy.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/settings/privacy-policy/privacy-policy.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-12\">\n        <h2><i class=\"fa fa-bars\"> Privacy policy</i></h2>   \n    </div>\n    <hr/>        \n  </div>\n  <!-- form -->\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <form method=\"get\" class=\"form-horizontal\">\n  \n                        <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Contents(English)</label>\n                          <div class=\"col-sm-10\">\n                          <textarea type=\"text\" name=\"con-eng\" class=\"form-control\" style=\"height:400px;\"></textarea>\n                          </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n                        <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Contents(Spanish)</label>\n                          <div class=\"col-sm-10\">\n                          <textarea type=\"text\" name=\"con-spn\" class=\"form-control\" style=\"height:400px;\"></textarea>\n                          </div>\n                        </div>\n                        \n                        <div class=\"hr-line-dashed\"></div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4 col-sm-offset-2\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/settings/privacy-policy/privacy-policy.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/privacy-policy/privacy-policy.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/settings/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/settings/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/settings/service-charge/service-charge-add/service-charge-add.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/settings/service-charge/service-charge-add/service-charge-add.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/service-charge/service-charge-add/service-charge-add.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/settings/service-charge/service-charge-add/service-charge-add.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n<div class=\"row wrapper border-bottom page-heading\">\n  <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Add</i></h2>   \n  </div>\n  <hr/>        \n  <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/service-charge\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n  </div>\n</div>\n<!-- form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n              <div class=\"ibox-content\">\n                  <form method=\"get\" class=\"form-horizontal\">\n\n                    <div class=\"form-group\">\n                    <label class=\"col-sm-2 control-label\">Select Country</label>\n\n                      <div class=\"col-sm-10\">\n                        <select class=\"form-control m-b\" name=\"country\">\n                            <option>Select Country</option>\n                            <option>Country1</option>\n                            <option>Country2</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"hr-line-dashed\"></div>\n                    \n                      <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Price</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"number\" name=\"price\" class=\"form-control\">\n                        </div>\n                      </div>\n                      \n\n                      <div class=\"hr-line-dashed\"></div>\n                      <div class=\"form-group\">\n                          <div class=\"col-sm-4 col-sm-offset-2\">\n                              <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/settings/service-charge/service-charge-add/service-charge-add.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/settings/service-charge/service-charge-add/service-charge-add.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ServiceChargeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceChargeAddComponent", function() { return ServiceChargeAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceChargeAddComponent = /** @class */ (function () {
    function ServiceChargeAddComponent() {
    }
    ServiceChargeAddComponent.prototype.ngOnInit = function () {
    };
    ServiceChargeAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-charge-add',
            template: __webpack_require__(/*! ./service-charge-add.component.html */ "./src/app/settings/service-charge/service-charge-add/service-charge-add.component.html"),
            styles: [__webpack_require__(/*! ./service-charge-add.component.css */ "./src/app/settings/service-charge/service-charge-add/service-charge-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceChargeAddComponent);
    return ServiceChargeAddComponent;
}());



/***/ }),

/***/ "./src/app/settings/service-charge/service-charge.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/settings/service-charge/service-charge.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/service-charge/service-charge.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/settings/service-charge/service-charge.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-12\">\n        <h2><i class=\"fa fa-bars\"> Service Charge</i></h2>   \n    </div>\n    <hr/>  \n    <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"add\"><i class=\"fa fa-plus\"> Add</i></button>\n    </div>      \n  </div>\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>Service Charge with row toggler, sorting and pagination</h5>\n\n                </div>\n                <div class=\"ibox-content\">\n                          <div class=\"form-group\">\n                              <div class=\"col-sm-10\">\n                                <select class=\"form-control m-b\" name=\"country\">\n                                    <option>Select Country</option>\n                                    <option>Country1</option>\n                                    <option>Country2</option>\n                                </select>\n                              </div>\n                            </div>\n                            <div class=\"table-responsive-sm\">\n                            <table class=\"table\">\n                                <caption>List of users</caption>\n                                <thead>\n                                  <tr>\n                                    <th scope=\"col\">#</th>\n                                    <th scope=\"col\">First</th>\n                                    <th scope=\"col\">Last</th>\n                                    <th scope=\"col\">Handle</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>  \n  \n</div>\n"

/***/ }),

/***/ "./src/app/settings/service-charge/service-charge.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/service-charge/service-charge.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServiceChargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceChargeComponent", function() { return ServiceChargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceChargeComponent = /** @class */ (function () {
    function ServiceChargeComponent() {
    }
    ServiceChargeComponent.prototype.ngOnInit = function () {
    };
    ServiceChargeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-charge',
            template: __webpack_require__(/*! ./service-charge.component.html */ "./src/app/settings/service-charge/service-charge.component.html"),
            styles: [__webpack_require__(/*! ./service-charge.component.css */ "./src/app/settings/service-charge/service-charge.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceChargeComponent);
    return ServiceChargeComponent;
}());



/***/ }),

/***/ "./src/app/settings/special-delivery-rule/special-delivery-rule.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/settings/special-delivery-rule/special-delivery-rule.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/special-delivery-rule/special-delivery-rule.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/settings/special-delivery-rule/special-delivery-rule.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row wrapper border-bottom page-heading\">\n        <div class=\"col-sm-12\">\n            <h2><i class=\"fa fa-bars\"> Special Delivery Rules</i></h2>   \n        </div>\n        <hr/>        \n      </div>\n      <div class=\"wrapper wrapper-content animated fadeInRight\">\n\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <div class=\"ibox float-e-margins\">\n                      <div class=\"ibox-title\">\n                          <h5>Special Delivery Rule with row toggler, sorting and pagination</h5>\n      \n                      </div>\n                      <div class=\"ibox-content\">\n                                <div class=\"form-group\">\n                                    <div class=\"col-sm-10\">\n                                      <select class=\"form-control m-b\" name=\"country\">\n                                          <option>Select Country</option>\n                                          <option>Country1</option>\n                                          <option>Country2</option>\n                                      </select>\n                                    </div>\n                                  </div>\n                                  \n                                  <div class=\"form-group\">\n                                      <div class=\"col-sm-10\">\n                                        <select class=\"form-control m-b\" name=\"vehicle\">\n                                            <option>Select Vehicle</option>\n                                            <option>Vehicle1</option>\n                                            <option>Vehicle2</option>\n                                        </select>\n                                      </div>\n                                    </div>\n                                  <div class=\"table-responsive-sm\">\n                                  <table class=\"table\">\n                                      <caption>List of users</caption>\n                                      <thead>\n                                        <tr>\n                                          <th scope=\"col\">#</th>\n                                          <th scope=\"col\">First</th>\n                                          <th scope=\"col\">Last</th>\n                                          <th scope=\"col\">Handle</th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr>\n                                          <th scope=\"row\">1</th>\n                                          <td>Mark</td>\n                                          <td>Otto</td>\n                                          <td>@mdo</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">2</th>\n                                          <td>Jacob</td>\n                                          <td>Thornton</td>\n                                          <td>@fat</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">3</th>\n                                          <td>Larry</td>\n                                          <td>the Bird</td>\n                                          <td>@twitter</td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                              </div>\n      \n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>  \n      \n</div>\n"

/***/ }),

/***/ "./src/app/settings/special-delivery-rule/special-delivery-rule.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/settings/special-delivery-rule/special-delivery-rule.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SpecialDeliveryRuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialDeliveryRuleComponent", function() { return SpecialDeliveryRuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpecialDeliveryRuleComponent = /** @class */ (function () {
    function SpecialDeliveryRuleComponent() {
    }
    SpecialDeliveryRuleComponent.prototype.ngOnInit = function () {
    };
    SpecialDeliveryRuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-special-delivery-rule',
            template: __webpack_require__(/*! ./special-delivery-rule.component.html */ "./src/app/settings/special-delivery-rule/special-delivery-rule.component.html"),
            styles: [__webpack_require__(/*! ./special-delivery-rule.component.css */ "./src/app/settings/special-delivery-rule/special-delivery-rule.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpecialDeliveryRuleComponent);
    return SpecialDeliveryRuleComponent;
}());



/***/ }),

/***/ "./src/app/settings/terms-conditions/terms-conditions.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/settings/terms-conditions/terms-conditions.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/terms-conditions/terms-conditions.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/settings/terms-conditions/terms-conditions.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-12\">\n        <h2><i class=\"fa fa-bars\"> Terms and Conditions</i></h2>   \n    </div>\n    <hr/>        \n  </div>\n   <!-- form -->\n   <div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-content\">\n                    <form method=\"get\" class=\"form-horizontal\">\n  \n                        <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Contents(English)</label>\n                          <div class=\"col-sm-10\">\n                          <textarea type=\"text\" name=\"con-eng\" class=\"form-control\" style=\"height:400px;\"></textarea>\n                          </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n                        <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Contents(Spanish)</label>\n                          <div class=\"col-sm-10\">\n                          <textarea type=\"text\" name=\"con-spn\" class=\"form-control\" style=\"height:400px;\"></textarea>\n                          </div>\n                        </div>\n                        \n                        <div class=\"hr-line-dashed\"></div>\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-4 col-sm-offset-2\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/settings/terms-conditions/terms-conditions.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/settings/terms-conditions/terms-conditions.component.ts ***!
  \*************************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent() {
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsConditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__(/*! ./terms-conditions.component.html */ "./src/app/settings/terms-conditions/terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-conditions.component.css */ "./src/app/settings/terms-conditions/terms-conditions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
}());



/***/ }),

/***/ "./src/app/settings/vehicles/vehicle-add/vehicle-add.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/settings/vehicles/vehicle-add/vehicle-add.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/vehicles/vehicle-add/vehicle-add.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/settings/vehicles/vehicle-add/vehicle-add.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n<div class=\"row wrapper border-bottom page-heading\">\n  <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Add</i></h2>   \n  </div>\n  <hr/>        \n  <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/vehicles\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n  </div>\n</div>\n<!-- form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n              <div class=\"ibox-content\">\n                  <form method=\"get\" class=\"form-horizontal\">\n                      \n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Select Country</label>\n    \n                            <div class=\"col-sm-10\">\n                              <select class=\"form-control m-b\" name=\"country\">\n                                  <option>Select Country</option>\n                                  <option>Country1</option>\n                                  <option>Country2</option>\n                              </select>\n                            </div>\n                          </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Name (English)</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" name=\"ename\" class=\"form-control\">\n                        </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Name (Spanish)</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"text\" name=\"sname\" class=\"form-control\">\n                          </div>\n                        </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Capacity</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"number\" name=\"contact\" class=\"form-control\">\n                          </div>\n                      </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-2 control-label\">Select Unit</label>\n  \n                          <div class=\"col-sm-10\">\n                            <select class=\"form-control m-b\" name=\"unit\">\n                                <option>Select Unit</option>\n                                <option>Kg</option>\n                                <option>Quintal</option>\n                                <option>Ton</option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"hr-line-dashed\"></div>\n                      \n\n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Image</label>\n                          <div class=\"col-sm-10\">\n                          <input type=\"file\" name=\"image\" class=\"form-control\">\n                          </div>\n                      </div>\n\n                      \n                      <div class=\"hr-line-dashed\"></div>\n                      <div class=\"form-group\">\n                          <div class=\"col-sm-4 col-sm-offset-2\">\n                              <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/settings/vehicles/vehicle-add/vehicle-add.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/settings/vehicles/vehicle-add/vehicle-add.component.ts ***!
  \************************************************************************/
/*! exports provided: VehicleAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleAddComponent", function() { return VehicleAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VehicleAddComponent = /** @class */ (function () {
    function VehicleAddComponent() {
    }
    VehicleAddComponent.prototype.ngOnInit = function () {
    };
    VehicleAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-add',
            template: __webpack_require__(/*! ./vehicle-add.component.html */ "./src/app/settings/vehicles/vehicle-add/vehicle-add.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-add.component.css */ "./src/app/settings/vehicles/vehicle-add/vehicle-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VehicleAddComponent);
    return VehicleAddComponent;
}());



/***/ }),

/***/ "./src/app/settings/vehicles/vehicle-sort/vehicle-sort.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/settings/vehicles/vehicle-sort/vehicle-sort.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/vehicles/vehicle-sort/vehicle-sort.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/settings/vehicles/vehicle-sort/vehicle-sort.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n<div class=\"row wrapper border-bottom page-heading\">\n  <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Sort</i></h2>   \n  </div>\n  <hr/>        \n  <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/vehicles\"><i class=\"fa fa-arrow-left\"> Back</i></button>\n  </div>\n</div>\n<!-- form -->\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n              <div class=\"ibox-content\">\n                  <form method=\"get\" class=\"form-horizontal\">\n                      \n                      <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Select Country</label>\n    \n                            <div class=\"col-sm-10\">\n                              <select class=\"form-control m-b\" name=\"country\">\n                                  <option>Select Country</option>\n                                  <option>Country1</option>\n                                  <option>Country2</option>\n                              </select>\n                            </div>\n                          </div>\n                      <div class=\"hr-line-dashed\"></div>\n\n                     \n\n                      \n                      <div class=\"hr-line-dashed\"></div>\n                      <div class=\"form-group\">\n                          <div class=\"col-sm-4 col-sm-offset-2\">\n                              <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/settings/vehicles/vehicle-sort/vehicle-sort.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/settings/vehicles/vehicle-sort/vehicle-sort.component.ts ***!
  \**************************************************************************/
/*! exports provided: VehicleSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleSortComponent", function() { return VehicleSortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VehicleSortComponent = /** @class */ (function () {
    function VehicleSortComponent() {
    }
    VehicleSortComponent.prototype.ngOnInit = function () {
    };
    VehicleSortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-sort',
            template: __webpack_require__(/*! ./vehicle-sort.component.html */ "./src/app/settings/vehicles/vehicle-sort/vehicle-sort.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-sort.component.css */ "./src/app/settings/vehicles/vehicle-sort/vehicle-sort.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VehicleSortComponent);
    return VehicleSortComponent;
}());



/***/ }),

/***/ "./src/app/settings/vehicles/vehicles.component.css":
/*!**********************************************************!*\
  !*** ./src/app/settings/vehicles/vehicles.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/vehicles/vehicles.component.html":
/*!***********************************************************!*\
  !*** ./src/app/settings/vehicles/vehicles.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-12\">\n        <h2><i class=\"fa fa-bars\"> Vehicles</i></h2>   \n    </div>\n    <hr/>        \n    <div class=\"col-sm-6\">\n        <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"add\"><i class=\"fa fa-plus\"> Add Vehicle</i></button>\n        <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"sort\"><i class=\"fa fa-bars\"> Sort Vehicle</i></button>\n    </div>\n  </div>\n  <!-- table -->\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"ibox float-e-margins\">\n                <div class=\"ibox-title\">\n                    <h5>VehicleTable with row toggler, sorting and pagination</h5>\n\n                </div>\n                <div class=\"ibox-content\">\n                    <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                        placeholder=\"Search in table\">\n                        <div class=\"table-responsive-sm\">\n                            <table class=\"table\">\n                                <caption>List of users</caption>\n                                <thead>\n                                  <tr>\n                                    <th scope=\"col\">#</th>\n                                    <th scope=\"col\">First</th>\n                                    <th scope=\"col\">Last</th>\n                                    <th scope=\"col\">Handle</th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                  </tr>\n                                  <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                        </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>  \n  \n</div>\n"

/***/ }),

/***/ "./src/app/settings/vehicles/vehicles.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/settings/vehicles/vehicles.component.ts ***!
  \*********************************************************/
/*! exports provided: VehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesComponent", function() { return VehiclesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VehiclesComponent = /** @class */ (function () {
    function VehiclesComponent() {
    }
    VehiclesComponent.prototype.ngOnInit = function () {
    };
    VehiclesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicles',
            template: __webpack_require__(/*! ./vehicles.component.html */ "./src/app/settings/vehicles/vehicles.component.html"),
            styles: [__webpack_require__(/*! ./vehicles.component.css */ "./src/app/settings/vehicles/vehicles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VehiclesComponent);
    return VehiclesComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.component.css":
/*!*********************************************!*\
  !*** ./src/app/shared/shared.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/shared.component.html":
/*!**********************************************!*\
  !*** ./src/app/shared/shared.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <!-- header -->\n    <div class=\"row wrapper border-bottom page-heading\">\n        <div class=\"col-sm-12\">\n            <h2><i class=\"fa fa-bars\"> Shared</i></h2>   \n        </div>\n        <hr/>        \n    </div>\n  \n \n  <!-- form -->\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <div class=\"ibox float-e-margins\">\n                  <div class=\"ibox-content\">\n                      <form method=\"get\" class=\"form-horizontal\">\n  \n                          <div class=\"form-group\">\n                          <label class=\"col-sm-2 control-label\">Select Country</label>\n  \n                            <div class=\"col-sm-10\">\n                              <select class=\"form-control m-b\" name=\"country\">\n                                  <option>Select Country</option>\n                                  <option>Country1</option>\n                                  <option>Country2</option>\n                              </select>\n                            </div>\n                          </div>\n                          <div class=\"hr-line-dashed\"></div>\n  \n                          <div class=\"form-group\">\n                            <label class=\"col-sm-2 control-label\">Select Vehicle</label>\n      \n                              <div class=\"col-sm-10\">\n                                <select class=\"form-control m-b\" name=\"vehicle\">\n                                    <option>Select Vehicle</option>\n                                    <option>Vehicle1</option>\n                                    <option>Vehicle2</option>\n                                </select>\n                              </div>\n                            </div>\n                          <div class=\"hr-line-dashed\"></div>\n                            \n                          <div class=\"hr-line-dashed\"></div>\n                          <div class=\"form-group\">\n                              <div class=\"col-sm-4 col-sm-offset-2\">\n                                  <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                              </div>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </div>\n    \n  <!-- table -->\n    <div class=\"wrapper wrapper-content animated fadeInRight\">\n\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <div class=\"ibox float-e-margins\">\n                      <div class=\"ibox-title\">\n                          <h5>SharedTable with row toggler, sorting and pagination</h5>\n  \n                      </div>\n                      <div class=\"ibox-content\">\n                          <input type=\"text\" class=\"form-control input-sm m-b-xs\" id=\"filter\"\n                              placeholder=\"Search in table\">\n                              <div class=\"table-responsive-sm\">\n                                  <table class=\"table\">\n                                      <caption>List of users</caption>\n                                      <thead>\n                                        <tr>\n                                          <th scope=\"col\">#</th>\n                                          <th scope=\"col\">First</th>\n                                          <th scope=\"col\">Last</th>\n                                          <th scope=\"col\">Handle</th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr>\n                                          <th scope=\"row\">1</th>\n                                          <td>Mark</td>\n                                          <td>Otto</td>\n                                          <td>@mdo</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">2</th>\n                                          <td>Jacob</td>\n                                          <td>Thornton</td>\n                                          <td>@fat</td>\n                                        </tr>\n                                        <tr>\n                                          <th scope=\"row\">3</th>\n                                          <td>Larry</td>\n                                          <td>the Bird</td>\n                                          <td>@twitter</td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                              </div>\n  \n                      </div>\n                  </div>\n              </div>\n          </div>\n    </div>  \n      \n</div>\n"

/***/ }),

/***/ "./src/app/shared/shared.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/shared.component.ts ***!
  \********************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedComponent = /** @class */ (function () {
    function SharedComponent() {
    }
    SharedComponent.prototype.ngOnInit = function () {
    };
    SharedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shared',
            template: __webpack_require__(/*! ./shared.component.html */ "./src/app/shared/shared.component.html"),
            styles: [__webpack_require__(/*! ./shared.component.css */ "./src/app/shared/shared.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SharedComponent);
    return SharedComponent;
}());



/***/ }),

/***/ "./src/app/users/user-add/mime-type.validator.ts":
/*!*******************************************************!*\
  !*** ./src/app/users/user-add/mime-type.validator.ts ***!
  \*******************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof control.value === "string") {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/users/user-add/user-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/user-add/user-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\n  visibility: hidden;\n}\n\n.image-preview {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview img {\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/users/user-add/user-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/user-add/user-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- header -->\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Add</i></h2>\n    </div>\n    <hr />\n    <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/users\"><i class=\"fa fa-arrow-left\">\n          Back</i></button>\n    </div>\n    <div *ngIf=\"err\" class=\"alert alert-danger\">{{err_msg}}</div>\n  </div>\n  <!-- form -->\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-content\">\n            <form [formGroup]=\"form\" (submit)=\"saveUser()\" class=\"form-horizontal\" enctype=\"multipart/form-data\">\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Name</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('name').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">UserName</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('username').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Password</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" formControlName=\"password\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('password').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Email</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"email\" formControlName=\"email\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('email').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Contact Number</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" formControlName=\"contact\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('contact').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Address</label>\n                <div class=\"col-sm-10\">\n                  <textarea type=\"text\" formControlName=\"address\" class=\"form-control\"> </textarea>\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('address').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\">\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Select City</label>\n\n                <div class=\"col-sm-10\">\n                  <select class=\"form-control m-b\" formControlName=\"city\">\n                    <option value=\"city1\">City1</option>\n                    <option value=\"city2\">City2</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('city').invalid\">\n                Please complete all validations.\n              </div>\n              <div class=\"hr-line-dashed\"></div>\n\n\n              <div class=\"form-group\">\n                <label class=\"col-sm-2 control-label\">Image</label>\n                <div class=\"col-sm-10\">\n                  <button class=\"btn btn-outline btn-success  dim\" type=\"button\" (click)=\"filePicker.click()\"><i class=\"fa fa-upload\"></i></button>\n                  <input type=\"file\" #filePicker class=\"form-control\" (change)=\"onImagePicked($event)\">\n                </div>\n                <!-- image preview -->\n                <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n                  <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n                </div>\n              </div>\n\n              <div class=\"alert alert-danger\" *ngIf=\"form.get('image').invalid\">\n                Please complete all validations.\n              </div>\n\n              <div class=\"hr-line-dashed\"></div>\n\n              <div class=\"form-group\">\n                <div class=\"col-sm-4 col-sm-offset-2\">\n                  <button class=\"btn btn-primary\" type=\"submit\">Save changes</button>\n                </div>\n              </div>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/users/user-add/user-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/user-add/user-add.component.ts ***!
  \******************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/users/user-add/mime-type.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(user, route, aroute, toastr) {
        this.user = user;
        this.route = route;
        this.aroute = aroute;
        this.toastr = toastr;
        this.selectedFile = null;
        this.mode = "create";
    }
    UserAddComponent.prototype.ngOnInit = function () {
        // setting up validations.
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]
            }),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            })
        });
        this.aroute.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("id")) {
                _this.mode = "edit";
                _this.userID = paramMap.get("id");
                _this.user.getUserDetails(_this.userID).subscribe(function (resultData) {
                    console.log(resultData);
                    _this.imagePreview = resultData.doc.image;
                    _this.form.setValue({
                        name: resultData.doc.name,
                        username: resultData.doc.username,
                        password: resultData.doc.password,
                        email: resultData.doc.email,
                        contact: resultData.doc.mobile,
                        address: resultData.doc.address,
                        city: resultData.doc.city,
                        image: resultData.doc.image
                    });
                });
            }
            else {
                _this.mode = "create";
                _this.userID = null;
                //console.log(this.mode);
            }
        });
    };
    UserAddComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get("image").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    UserAddComponent.prototype.saveUser = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        if (this.mode === "create") {
            var data = {
                name: this.form.value.name,
                username: this.form.value.username,
                password: this.form.value.password,
                email: this.form.value.email,
                contact: this.form.value.contact,
                address: this.form.value.address,
                city: this.form.value.city,
                image: this.form.value.image
            };
            this.user.addUser(data).subscribe(function (response) {
                //console.log(response);
                _this.toastr.success("user added successfully");
                _this.route.navigate(["/users"]);
            }, function (error) {
                _this.err = true;
                _this.err_msg = JSON.parse(error._body).message;
                _this.toastr.error(_this.err_msg);
            });
        }
        else {
            var data = {
                id: this.userID,
                name: this.form.value.name,
                username: this.form.value.username,
                password: this.form.value.password,
                email: this.form.value.email,
                contact: this.form.value.contact,
                address: this.form.value.address,
                city: this.form.value.city,
                image: this.form.value.image
            };
            this.user.updateUser(data).subscribe(function (response) {
                //console.log(response);
                _this.toastr.success("user updated successfully");
                _this.route.navigate(["/users"]);
            }, function (error) {
                _this.err = true;
                _this.err_msg = JSON.parse(error._body).message;
                _this.toastr.error(_this.err_msg);
            });
        }
    };
    UserAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-user-add",
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/users/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/users/user-add/user-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_0__["ToasterService"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/users/user-details/user-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/users/user-details/user-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-image {\n  width: 100%;\n}\n\n.user-image img {\n  width: 150px;\n  height: 150px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n"

/***/ }),

/***/ "./src/app/users/user-details/user-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/users/user-details/user-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-10\">\n      <h2><i class=\"fa fa-bars\"> Details</i></h2>\n    </div>\n    <hr />\n    <div class=\"col-sm-2\">\n      <button class=\"btn btn-primary dim btn-small-dim\" type=\"button\" routerLink=\"/users\"><i class=\"fa fa-arrow-left\">\n          Back</i></button>\n    </div>\n  </div>\n  <div class=\"wrapper wrapper-content animated fadeInRight white-bg\">\n\n\n    <div class=\"row m-b-lg m-t-lg\">\n      <div class=\"col-md-6\">\n\n        <div class=\"profile-image\">\n          <img src=\"{{data.image}}\" class=\"img-circle circle-border m-b-md\" alt=\"profile\">\n        </div>\n        <div class=\"profile-info\">\n          <div class=\"\">\n            <div>\n              <h2 class=\"no-margins\">\n                {{data.name}}\n              </h2>\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <table class=\"table small m-b-xs\">\n          <tbody>\n            <tr>\n              <td>\n                <strong>Username</strong> {{data.username}}\n              </td>\n              <td>\n                <strong>Password</strong> {{data.password}}\n              </td>\n\n            </tr>\n            <tr>\n              <td>\n                <strong>Email</strong> {{data.email}}\n              </td>\n              <td>\n                <strong>Contact</strong> {{data.mobile}}\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <strong>Address</strong> {{data.address}}\n              </td>\n              <td>\n                <strong>City</strong> {{data.city}}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!-- <div class=\"col-md-3\">\n            <small>Sales in last 24h</small>\n            <h2 class=\"no-margins\">206 480</h2>\n            <div id=\"sparkline1\"></div>\n        </div> -->\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/user-details/user-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/user-details/user-details.component.ts ***!
  \**************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(user, route) {
        this.user = user;
        this.route = route;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (params) { return params.id; })).subscribe(function (params) {
            _this.id = params.id;
        }, function (error) {
            console.log(error);
        });
        this.user.getUserDetails(this.id).subscribe(function (response) {
            _this.data = response.doc;
            console.log(_this.data);
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-user-details",
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/users/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/users/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd,\nth {\n  width: 20%;\n}\n\n.user-image {\n  width: 100%;\n}\n\n.user-image img {\n  width: 50px;\n  height: 50px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row wrapper border-bottom page-heading\">\n    <div class=\"col-sm-12\">\n      <h2><i class=\"fa fa-bars\"> Registered Users</i></h2>\n    </div>\n    <hr />\n    <div class=\"col-sm-2\">\n      <button\n        class=\"btn btn-primary dim btn-small-dim\"\n        type=\"button\"\n        routerLink=\"add\"\n      >\n        <i class=\"fa fa-plus\"> Add User</i>\n      </button>\n    </div>\n  </div>\n  <div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\"><h5></h5></div>\n          <div class=\"ibox-content\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <div class=\"ibox float-e-margins\">\n                  <div class=\"ibox-content\">\n                    <div class=\"table-responsive\">\n                      <mat-form-field>\n                        <input\n                          matInput\n                          (keyup)=\"applyFilter($event.target.value)\"\n                          placeholder=\"Search\"\n                        />\n                      </mat-form-field>\n\n                      <div class=\"mat-elevation-z8\">\n                        <table mat-table [dataSource]=\"dataSource\" matSort>\n                          <!-- ID Column -->\n                          <ng-container matColumnDef=\"#\">\n                            <th\n                              mat-header-cell\n                              *matHeaderCellDef\n                              mat-sort-header\n                            >\n                              #\n                            </th>\n                            <td mat-cell *matCellDef=\"let row\">\n                              {{ row.index }}\n                            </td>\n                          </ng-container>\n\n                          <!-- Name Column -->\n                          <ng-container matColumnDef=\"name\">\n                            <th\n                              mat-header-cell\n                              *matHeaderCellDef\n                              mat-sort-header\n                            >\n                              Name\n                            </th>\n                            <td mat-cell *matCellDef=\"let row\">\n                              {{ row.name }}\n                            </td>\n                          </ng-container>\n\n                          <!-- Image Column -->\n                          <ng-container matColumnDef=\"image\">\n                            <th\n                              mat-header-cell\n                              *matHeaderCellDef\n                              mat-sort-header\n                            >\n                              Image\n                            </th>\n                            <td mat-cell *matCellDef=\"let row\">\n                              <div class=\"user-image\">\n                                <img [src]=\"row.image\" />\n                              </div>\n                            </td>\n                          </ng-container>\n\n                          <!-- City Column -->\n                          <ng-container matColumnDef=\"city\">\n                            <th\n                              mat-header-cell\n                              *matHeaderCellDef\n                              mat-sort-header\n                            >\n                              City\n                            </th>\n                            <td\n                              mat-cell\n                              *matCellDef=\"let row\"\n                              [style.color]=\"row.color\"\n                            >\n                              {{ row.city }}\n                            </td>\n                          </ng-container>\n\n                          <!-- Action Column -->\n                          <ng-container matColumnDef=\"action\">\n                            <th\n                              mat-header-cell\n                              *matHeaderCellDef\n                              mat-sort-header\n                            >\n                              Action\n                            </th>\n                            <td\n                              mat-cell\n                              *matCellDef=\"let row\"\n                              [style.color]=\"row.color\"\n                            >\n                              <a\n                                ><button (click)=\"view(row._id)\">\n                                  <i class=\"fa fa-eye text-navy\"></i></button\n                              ></a>\n                              |\n                              <a\n                                ><button\n                                  [routerLink]=\"['/users/edit', row._id]\"\n                                >\n                                  <i class=\"fa fa-pencil text-navy\"></i></button\n                              ></a>\n                              |\n                              <a\n                                ><button (click)=\"delete(row._id)\">\n                                  <i class=\"fa fa-trash text-navy\"></i></button\n                              ></a>\n                            </td>\n                          </ng-container>\n\n                          <tr\n                            mat-header-row\n                            *matHeaderRowDef=\"displayedColumns\"\n                          ></tr>\n                          <tr\n                            mat-row\n                            *matRowDef=\"let row; columns: displayedColumns\"\n                          ></tr>\n                        </table>\n\n                        <mat-paginator\n                          [pageSizeOptions]=\"[5, 10, 25, 100]\"\n                        ></mat-paginator>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = /** @class */ (function () {
    function UsersComponent(user, route, toastr) {
        this.user = user;
        this.route = route;
        this.toastr = toastr;
        this.displayedColumns = ["#", "name", "image", "city", "action"];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getAllUser().subscribe(function (response) {
            _this.rowData = response.data;
            _this.rowData = _this.rowData.map(function (element, index) {
                var data = {};
                data = {
                    index: index + 1,
                    _id: element._id,
                    name: element.name,
                    image: element.image,
                    city: element.city
                };
                return data;
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.rowData);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            console.log(_this.dataSource);
        }, function (error) {
            console.log(error);
        });
    };
    UsersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    UsersComponent.prototype.view = function (id) {
        this.route.navigate(["/users/details"], { queryParams: { id: id } });
    };
    UsersComponent.prototype.edit = function (id) {
        //console.log(id);
        this.route.navigate(["/users/edit/"], { queryParams: { id: id } });
    };
    UsersComponent.prototype.delete = function (id) {
        var _this = this;
        this.user.deleteUser(id).subscribe(function (response) {
            _this.toastr.success("user name " + response.name + " deleted successfully!");
            _this.ngOnInit();
        }, function (error) {
            console.log(error);
            _this.toastr.error(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-users",
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_0__["ToasterService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/guru/Desktop/admin-panel/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map