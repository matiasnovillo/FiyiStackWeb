"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usermodelQuery = exports.UserModel = void 0;
var Rx = require("rxjs");
var ajax_1 = require("rxjs/ajax");
/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 * Licensed to a unique person with this Token:IAmTheOwnerOfThis
 *
 * Coded by www.fiyistack.com
 * Copyright © 2021
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * Auto generated code. Add your custom code after the last line of auto generation
*/
//11 fields | 0 models depend on this model | Last modification on: 15/12/2022 12:55:00 | Stack: 9
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    //Queries
    UserModel.Select1ByUserId = function (UserId) {
        var URL = "/api/CMSCore/User/1/Select1ByUserIdToJSON/" + UserId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    UserModel.SelectAll = function () {
        var URL = "/api/CMSCore/User/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    UserModel.SelectAllPaged = function (usermodelQuery) {
        var URL = "/api/CMSCore/User/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: usermodelQuery.QueryString,
            ActualPageNumber: usermodelQuery.ActualPageNumber,
            RowsPerPage: usermodelQuery.RowsPerPage,
            SorterColumn: usermodelQuery.SorterColumn,
            SortToggler: usermodelQuery.SortToggler,
            RowCount: usermodelQuery.TotalRows,
            TotalPages: usermodelQuery.TotalPages,
            lstUserModel: usermodelQuery.lstUserModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.put(URL, Body, Header));
    };
    //Non-Queries
    UserModel.DeleteByUserId = function (UserId) {
        var URL = "/api/CMSCore/User/1/DeleteByUserId/" + UserId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    UserModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/CMSCore/User/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    UserModel.CopyByUserId = function (UserId) {
        var URL = "/api/CMSCore/User/1/CopyByUserId/" + UserId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    UserModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/Usering/User/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return UserModel;
}());
exports.UserModel = UserModel;
var usermodelQuery = /** @class */ (function () {
    function usermodelQuery() {
    }
    return usermodelQuery;
}());
exports.usermodelQuery = usermodelQuery;
//# sourceMappingURL=User_TsModel.js.map