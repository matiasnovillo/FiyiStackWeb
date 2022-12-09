"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provincemodelQuery = exports.ProvinceModel = void 0;
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
//10 fields | 1 models depend on this model | Last modification on: 09/12/2022 19:23:16 | Stack: 9
var ProvinceModel = /** @class */ (function () {
    function ProvinceModel() {
    }
    //Queries
    ProvinceModel.Select1ByProvinceId = function (ProvinceId) {
        var URL = "/api/BasicCulture/Province/1/Select1ByProvinceIdToJSON/" + ProvinceId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    ProvinceModel.SelectAll = function () {
        var URL = "/api/BasicCulture/Province/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    ProvinceModel.SelectAllPaged = function (provincemodelQuery) {
        var URL = "/api/BasicCulture/Province/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: provincemodelQuery.QueryString,
            ActualPageNumber: provincemodelQuery.ActualPageNumber,
            RowsPerPage: provincemodelQuery.RowsPerPage,
            SorterColumn: provincemodelQuery.SorterColumn,
            SortToggler: provincemodelQuery.SortToggler,
            RowCount: provincemodelQuery.TotalRows,
            TotalPages: provincemodelQuery.TotalPages,
            lstProvinceModel: provincemodelQuery.lstProvinceModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.put(URL, Body, Header));
    };
    //Non-Queries
    ProvinceModel.DeleteByProvinceId = function (ProvinceId) {
        var URL = "/api/BasicCulture/Province/1/DeleteByProvinceId/" + ProvinceId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    ProvinceModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/BasicCulture/Province/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    ProvinceModel.CopyByProvinceId = function (ProvinceId) {
        var URL = "/api/BasicCulture/Province/1/CopyByProvinceId/" + ProvinceId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    ProvinceModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/Provinceing/Province/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return ProvinceModel;
}());
exports.ProvinceModel = ProvinceModel;
var provincemodelQuery = /** @class */ (function () {
    function provincemodelQuery() {
    }
    return provincemodelQuery;
}());
exports.provincemodelQuery = provincemodelQuery;
//# sourceMappingURL=Province_TsModel.js.map