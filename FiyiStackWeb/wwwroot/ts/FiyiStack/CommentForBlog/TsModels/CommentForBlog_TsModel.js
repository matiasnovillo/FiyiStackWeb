"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentforblogmodelQuery = exports.CommentForBlogModel = void 0;
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
//8 fields | Last modification on: 16/12/2022 10:50:17 | Stack: 9
var CommentForBlogModel = /** @class */ (function () {
    function CommentForBlogModel() {
    }
    //Queries
    CommentForBlogModel.Select1ByCommentForBlogId = function (CommentForBlogId) {
        var URL = "/api/FiyiStack/CommentForBlog/1/Select1ByCommentForBlogIdToJSON/" + CommentForBlogId;
        return Rx.from(ajax_1.ajax(URL));
    };
    CommentForBlogModel.SelectAll = function () {
        var URL = "/api/FiyiStack/CommentForBlog/1/SelectAllToJSON";
        return Rx.from(ajax_1.ajax(URL));
    };
    CommentForBlogModel.SelectAllPaged = function (commentforblogmodelQuery) {
        var URL = "/api/FiyiStack/CommentForBlog/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: commentforblogmodelQuery.QueryString,
            ActualPageNumber: commentforblogmodelQuery.ActualPageNumber,
            RowsPerPage: commentforblogmodelQuery.RowsPerPage,
            SorterColumn: commentforblogmodelQuery.SorterColumn,
            SortToggler: commentforblogmodelQuery.SortToggler,
            RowCount: commentforblogmodelQuery.TotalRows,
            TotalPages: commentforblogmodelQuery.TotalPages,
            lstCommentForBlogModel: commentforblogmodelQuery.lstCommentForBlogModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.put(URL, Body, Header));
    };
    //Non-Queries
    CommentForBlogModel.DeleteByCommentForBlogId = function (CommentForBlogId) {
        var URL = "/api/FiyiStack/CommentForBlog/1/DeleteByCommentForBlogId/" + CommentForBlogId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    CommentForBlogModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/FiyiStack/CommentForBlog/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    CommentForBlogModel.CopyByCommentForBlogId = function (CommentForBlogId) {
        var URL = "/api/FiyiStack/CommentForBlog/1/CopyByCommentForBlogId/" + CommentForBlogId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    CommentForBlogModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/CommentForBloging/CommentForBlog/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return CommentForBlogModel;
}());
exports.CommentForBlogModel = CommentForBlogModel;
var commentforblogmodelQuery = /** @class */ (function () {
    function commentforblogmodelQuery() {
    }
    return commentforblogmodelQuery;
}());
exports.commentforblogmodelQuery = commentforblogmodelQuery;
//# sourceMappingURL=CommentForBlog_TsModel.js.map