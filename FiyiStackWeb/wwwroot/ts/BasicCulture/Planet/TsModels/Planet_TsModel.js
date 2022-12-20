"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planetmodelQuery = exports.PlanetModel = void 0;
var Rx = require("rxjs");
var ajax_1 = require("rxjs/ajax");
/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 *
 * Coded by fiyistack.com
 * Copyright © 2022
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
*/
//8 fields | Last modification on: 20/12/2022 20:12:21 | Stack: 9
var PlanetModel = /** @class */ (function () {
    function PlanetModel() {
    }
    //Queries
    PlanetModel.Select1ByPlanetId = function (PlanetId) {
        var URL = "/api/BasicCulture/Planet/1/Select1ByPlanetIdToJSON/" + PlanetId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    PlanetModel.SelectAll = function () {
        var URL = "/api/BasicCulture/Planet/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    PlanetModel.SelectAllPaged = function (planetmodelQuery) {
        var URL = "/api/BasicCulture/Planet/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: planetmodelQuery.QueryString,
            ActualPageNumber: planetmodelQuery.ActualPageNumber,
            RowsPerPage: planetmodelQuery.RowsPerPage,
            SorterColumn: planetmodelQuery.SorterColumn,
            SortToggler: planetmodelQuery.SortToggler,
            RowCount: planetmodelQuery.TotalRows,
            TotalPages: planetmodelQuery.TotalPages,
            lstPlanetModel: planetmodelQuery.lstPlanetModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.put(URL, Body, Header));
    };
    //Non-Queries
    PlanetModel.DeleteByPlanetId = function (PlanetId) {
        var URL = "/api/BasicCulture/Planet/1/DeleteByPlanetId/" + PlanetId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    PlanetModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/BasicCulture/Planet/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    PlanetModel.CopyByPlanetId = function (PlanetId) {
        var URL = "/api/BasicCulture/Planet/1/CopyByPlanetId/" + PlanetId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    PlanetModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/Planeting/Planet/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return PlanetModel;
}());
exports.PlanetModel = PlanetModel;
var planetmodelQuery = /** @class */ (function () {
    function planetmodelQuery() {
    }
    return planetmodelQuery;
}());
exports.planetmodelQuery = planetmodelQuery;
//# sourceMappingURL=Planet_TsModel.js.map