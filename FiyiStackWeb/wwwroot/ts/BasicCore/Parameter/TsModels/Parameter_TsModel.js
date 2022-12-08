"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parametermodelQuery = exports.ParameterModel = void 0;
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
//9 fields | 0 models depend on this model | Last modification on: 08/12/2022 8:07:23 | Stack: 9
var ParameterModel = /** @class */ (function () {
    function ParameterModel() {
    }
    //Queries
    ParameterModel.Select1ByParameterId = function (ParameterId) {
        var URL = "/api/BasicCore/Parameter/1/Select1ByParameterIdToJSON/" + ParameterId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    ParameterModel.SelectAll = function () {
        var URL = "/api/BasicCore/Parameter/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    ParameterModel.SelectAllPaged = function (parametermodelQuery) {
        var URL = "/api/BasicCore/Parameter/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: parametermodelQuery.QueryString,
            ActualPageNumber: parametermodelQuery.ActualPageNumber,
            RowsPerPage: parametermodelQuery.RowsPerPage,
            SorterColumn: parametermodelQuery.SorterColumn,
            SortToggler: parametermodelQuery.SortToggler,
            RowCount: parametermodelQuery.TotalRows,
            TotalPages: parametermodelQuery.TotalPages,
            lstParameterModel: parametermodelQuery.lstParameterModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.put(URL, Body, Header));
    };
    //Non-Queries
    ParameterModel.DeleteByParameterId = function (ParameterId) {
        var URL = "/api/BasicCore/Parameter/1/DeleteByParameterId/" + ParameterId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    ParameterModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/BasicCore/Parameter/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    ParameterModel.CopyByParameterId = function (ParameterId) {
        var URL = "/api/BasicCore/Parameter/1/CopyByParameterId/" + ParameterId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    ParameterModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/Parametering/Parameter/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return ParameterModel;
}());
exports.ParameterModel = ParameterModel;
var parametermodelQuery = /** @class */ (function () {
    function parametermodelQuery() {
    }
    return parametermodelQuery;
}());
exports.parametermodelQuery = parametermodelQuery;
//# sourceMappingURL=Parameter_TsModel.js.map