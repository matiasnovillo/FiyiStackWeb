"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sexmodelQuery = exports.SexModel = void 0;
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
//7 fields | 0 models depend on this model | Last modification on: 09/12/2022 19:23:30 | Stack: 9
var SexModel = /** @class */ (function () {
    function SexModel() {
    }
    //Queries
    SexModel.Select1BySexId = function (SexId) {
        var URL = "/api/BasicCulture/Sex/1/Select1BySexIdToJSON/" + SexId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    SexModel.SelectAll = function () {
        var URL = "/api/BasicCulture/Sex/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    SexModel.SelectAllPaged = function (sexmodelQuery) {
        var URL = "/api/BasicCulture/Sex/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: sexmodelQuery.QueryString,
            ActualPageNumber: sexmodelQuery.ActualPageNumber,
            RowsPerPage: sexmodelQuery.RowsPerPage,
            SorterColumn: sexmodelQuery.SorterColumn,
            SortToggler: sexmodelQuery.SortToggler,
            RowCount: sexmodelQuery.TotalRows,
            TotalPages: sexmodelQuery.TotalPages,
            lstSexModel: sexmodelQuery.lstSexModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.put(URL, Body, Header));
    };
    //Non-Queries
    SexModel.DeleteBySexId = function (SexId) {
        var URL = "/api/BasicCulture/Sex/1/DeleteBySexId/" + SexId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    SexModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/BasicCulture/Sex/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    SexModel.CopyBySexId = function (SexId) {
        var URL = "/api/BasicCulture/Sex/1/CopyBySexId/" + SexId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    SexModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/Sexing/Sex/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return SexModel;
}());
exports.SexModel = SexModel;
var sexmodelQuery = /** @class */ (function () {
    function sexmodelQuery() {
    }
    return sexmodelQuery;
}());
exports.sexmodelQuery = sexmodelQuery;
//# sourceMappingURL=Sex_TsModel.js.map