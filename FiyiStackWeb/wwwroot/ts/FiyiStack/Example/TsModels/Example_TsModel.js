"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examplemodelQuery = exports.ExampleModel = void 0;
var Rx = require("rxjs");
var ajax_1 = require("rxjs/ajax");
/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 *
 * Coded by fiyistack.com
 * Copyright © 2023
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
*/
//23 fields | Sub-models: 0 models  | Last modification on: 22/02/2023 21:12:24 | Stack: 9
var ExampleModel = /** @class */ (function () {
    function ExampleModel() {
    }
    //Queries
    ExampleModel.Select1ByExampleId = function (ExampleId) {
        var URL = "/api/FiyiStack/Example/1/Select1ByExampleIdToJSON/" + ExampleId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    ExampleModel.SelectAll = function () {
        var URL = "/api/FiyiStack/Example/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    ExampleModel.SelectAllPaged = function (examplemodelQuery) {
        var URL = "/api/FiyiStack/Example/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: examplemodelQuery.QueryString,
            ActualPageNumber: examplemodelQuery.ActualPageNumber,
            RowsPerPage: examplemodelQuery.RowsPerPage,
            SorterColumn: examplemodelQuery.SorterColumn,
            SortToggler: examplemodelQuery.SortToggler,
            RowCount: examplemodelQuery.TotalRows,
            TotalPages: examplemodelQuery.TotalPages,
            lstExampleModel: examplemodelQuery.lstExampleModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    //Non-Queries
    ExampleModel.DeleteByExampleId = function (ExampleId) {
        var URL = "/api/FiyiStack/Example/1/DeleteByExampleId/" + ExampleId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    ExampleModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/FiyiStack/Example/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    ExampleModel.CopyByExampleId = function (ExampleId) {
        var URL = "/api/FiyiStack/Example/1/CopyByExampleId/" + ExampleId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    ExampleModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/Exampleing/Example/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return ExampleModel;
}());
exports.ExampleModel = ExampleModel;
var examplemodelQuery = /** @class */ (function () {
    function examplemodelQuery() {
    }
    return examplemodelQuery;
}());
exports.examplemodelQuery = examplemodelQuery;
//# sourceMappingURL=Example_TsModel.js.map