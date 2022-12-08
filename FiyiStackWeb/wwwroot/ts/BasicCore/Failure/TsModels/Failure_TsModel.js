"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failuremodelQuery = exports.FailureModel = void 0;
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
//12 fields | 0 models depend on this model | Last modification on: 08/12/2022 7:45:13 | Stack: 9
var FailureModel = /** @class */ (function () {
    function FailureModel() {
    }
    //Queries
    FailureModel.Select1ByFailureId = function (FailureId) {
        var URL = "/api/BasicCore/Failure/1/Select1ByFailureIdToJSON/" + FailureId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    FailureModel.SelectAll = function () {
        var URL = "/api/BasicCore/Failure/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    FailureModel.SelectAllPaged = function (failuremodelQuery) {
        var URL = "/api/BasicCore/Failure/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: failuremodelQuery.QueryString,
            ActualPageNumber: failuremodelQuery.ActualPageNumber,
            RowsPerPage: failuremodelQuery.RowsPerPage,
            SorterColumn: failuremodelQuery.SorterColumn,
            SortToggler: failuremodelQuery.SortToggler,
            RowCount: failuremodelQuery.TotalRows,
            TotalPages: failuremodelQuery.TotalPages,
            lstFailureModel: failuremodelQuery.lstFailureModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.put(URL, Body, Header));
    };
    //Non-Queries
    FailureModel.DeleteByFailureId = function (FailureId) {
        var URL = "/api/BasicCore/Failure/1/DeleteByFailureId/" + FailureId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    FailureModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/BasicCore/Failure/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    FailureModel.CopyByFailureId = function (FailureId) {
        var URL = "/api/BasicCore/Failure/1/CopyByFailureId/" + FailureId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    FailureModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/Failureing/Failure/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return FailureModel;
}());
exports.FailureModel = FailureModel;
var failuremodelQuery = /** @class */ (function () {
    function failuremodelQuery() {
    }
    return failuremodelQuery;
}());
exports.failuremodelQuery = failuremodelQuery;
//# sourceMappingURL=Failure_TsModel.js.map