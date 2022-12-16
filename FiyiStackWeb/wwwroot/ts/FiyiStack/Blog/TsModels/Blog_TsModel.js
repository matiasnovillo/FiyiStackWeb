"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogmodelQuery = exports.BlogModel = void 0;
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
//9 fields | Last modification on: 16/12/2022 10:50:10 | Stack: 9
var BlogModel = /** @class */ (function () {
    function BlogModel() {
    }
    //Queries
    BlogModel.Select1ByBlogId = function (BlogId) {
        var URL = "/api/FiyiStack/Blog/1/Select1ByBlogIdToJSON/" + BlogId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    BlogModel.SelectAll = function () {
        var URL = "/api/FiyiStack/Blog/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    BlogModel.SelectAllPaged = function (blogmodelQuery) {
        var URL = "/api/FiyiStack/Blog/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: blogmodelQuery.QueryString,
            ActualPageNumber: blogmodelQuery.ActualPageNumber,
            RowsPerPage: blogmodelQuery.RowsPerPage,
            SorterColumn: blogmodelQuery.SorterColumn,
            SortToggler: blogmodelQuery.SortToggler,
            RowCount: blogmodelQuery.TotalRows,
            TotalPages: blogmodelQuery.TotalPages,
            lstBlogModel: blogmodelQuery.lstBlogModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.put(URL, Body, Header));
    };
    //Non-Queries
    BlogModel.DeleteByBlogId = function (BlogId) {
        var URL = "/api/FiyiStack/Blog/1/DeleteByBlogId/" + BlogId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    BlogModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/FiyiStack/Blog/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    BlogModel.CopyByBlogId = function (BlogId) {
        var URL = "/api/FiyiStack/Blog/1/CopyByBlogId/" + BlogId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    BlogModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/Bloging/Blog/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return BlogModel;
}());
exports.BlogModel = BlogModel;
var blogmodelQuery = /** @class */ (function () {
    function blogmodelQuery() {
    }
    return blogmodelQuery;
}());
exports.blogmodelQuery = blogmodelQuery;
//# sourceMappingURL=Blog_TsModel.js.map