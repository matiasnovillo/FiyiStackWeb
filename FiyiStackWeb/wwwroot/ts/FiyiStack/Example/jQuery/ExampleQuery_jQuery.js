"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import libraries to use
var Example_TsModel_1 = require("../../Example/TsModels/Example_TsModel");
var $ = require("jquery");
var Rx = require("rxjs");
var ajax_1 = require("rxjs/ajax");
require("bootstrap-notify");
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
//Stack: 10
//Last modification on: 19/02/2023 11:08:32
//Set default values
var LastTopDistance = 0;
var QueryString = "";
var ActualPageNumber = 1;
var RowsPerPage = 50;
var SorterColumn = "";
var SortToggler = false;
var TotalPages = 0;
var TotalRows = 0;
var ViewToggler = "List";
var ScrollDownNSearchFlag = false;
var ExampleQuery = /** @class */ (function () {
    function ExampleQuery() {
    }
    ExampleQuery.SelectAllPagedToHTML = function (request_examplemodelQuery) {
        //Used for list view
        $(window).off("scroll");
        //Load some part of table
        var TableContent = "<thead class=\"thead-light\">\n    <tr>\n        <th scope=\"col\">\n            <div>\n                <input id=\"example-table-check-all\" type=\"checkbox\">\n            </div>\n        </th>\n        <th scope=\"col\">\n            <button value=\"ExampleId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                ExampleId\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Active\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Active\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeCreation\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                DateTimeCreation\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeLastModification\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                DateTimeLastModification\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserCreationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                UserCreationId\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserLastModificationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                UserLastModificationId\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Boolean\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Boolean\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTime\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                DateTime\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Decimal\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Decimal\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DropDown\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                DropDown\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Options\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Options\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Integer\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Integer\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"TextBasic\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                TextBasic\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Email\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Email\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"FileUpload\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                FileUpload\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"HexColour\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                HexColour\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Password\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Password\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"PhoneNumber\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                PhoneNumber\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Tag\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Tag\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"TextArea\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                TextArea\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"TextEditor\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                TextEditor\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"URL\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                URL\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Time\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Time\n            </button>\n        </th>\n        \n        <th scope=\"col\"></th>\n    </tr>\n</thead>\n<tbody>";
        var ListContent = "";
        Example_TsModel_1.ExampleModel.SelectAllPaged(request_examplemodelQuery).subscribe({
            next: function (newrow) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                //Only works when there is data available
                if (newrow.status != 204) {
                    var response_exampleQuery = newrow.response;
                    //Set to default values if they are null
                    QueryString = (_a = response_exampleQuery.QueryString) !== null && _a !== void 0 ? _a : "";
                    ActualPageNumber = (_b = response_exampleQuery.ActualPageNumber) !== null && _b !== void 0 ? _b : 0;
                    RowsPerPage = (_c = response_exampleQuery.RowsPerPage) !== null && _c !== void 0 ? _c : 0;
                    SorterColumn = (_d = response_exampleQuery.SorterColumn) !== null && _d !== void 0 ? _d : "";
                    SortToggler = (_e = response_exampleQuery.SortToggler) !== null && _e !== void 0 ? _e : false;
                    TotalRows = (_f = response_exampleQuery.TotalRows) !== null && _f !== void 0 ? _f : 0;
                    TotalPages = (_g = response_exampleQuery.TotalPages) !== null && _g !== void 0 ? _g : 0;
                    //Query string
                    $("#fiyistack-example-query-string").attr("placeholder", "Search... (" + TotalRows + " records)");
                    //Total pages of pagination
                    $("#fiyistack-example-total-pages-lg, #fiyistack-example-total-pages").html(TotalPages.toString());
                    //Actual page number of pagination
                    $("#fiyistack-example-actual-page-number-lg, #fiyistack-example-actual-page-number").html(ActualPageNumber.toString());
                    //If we are at the final of book disable next and last buttons in pagination
                    if (ActualPageNumber === TotalPages) {
                        $("#fiyistack-example-lnk-next-page-lg, #fiyistack-example-lnk-next-page").attr("disabled", "disabled");
                        $("#fiyistack-example-lnk-last-page-lg, #fiyistack-example-lnk-last-page").attr("disabled", "disabled");
                        $("#fiyistack-example-search-more-button-in-list").html("");
                    }
                    else {
                        $("#fiyistack-example-lnk-next-page-lg, #fiyistack-example-lnk-next-page").removeAttr("disabled");
                        $("#fiyistack-example-lnk-last-page-lg, #fiyistack-example-lnk-last-page").removeAttr("disabled");
                        //Scroll arrow for list view
                        $("#fiyistack-example-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                    }
                    //If we are at the begining of the book disable previous and first buttons in pagination
                    if (ActualPageNumber === 1) {
                        $("#fiyistack-example-lnk-previous-page-lg, #fiyistack-example-lnk-previous-page").attr("disabled", "disabled");
                        $("#fiyistack-example-lnk-first-page-lg, #fiyistack-example-lnk-first-page").attr("disabled", "disabled");
                    }
                    else {
                        $("#fiyistack-example-lnk-previous-page-lg, #fiyistack-example-lnk-previous-page").removeAttr("disabled");
                        $("#fiyistack-example-lnk-first-page-lg, #fiyistack-example-lnk-first-page").removeAttr("disabled");
                    }
                    //If book is empty set to default pagination values
                    if (((_h = response_exampleQuery === null || response_exampleQuery === void 0 ? void 0 : response_exampleQuery.lstExampleModel) === null || _h === void 0 ? void 0 : _h.length) === 0) {
                        $("#fiyistack-example-lnk-previous-page-lg, #fiyistack-example-lnk-previous-page").attr("disabled", "disabled");
                        $("#fiyistack-example-lnk-first-page-lg, #fiyistack-example-lnk-first-page").attr("disabled", "disabled");
                        $("#fiyistack-example-lnk-next-page-lg, #fiyistack-example-lnk-next-page").attr("disabled", "disabled");
                        $("#fiyistack-example-lnk-last-page-lg, #fiyistack-example-lnk-last-page").attr("disabled", "disabled");
                        $("#fiyistack-example-total-pages-lg, #fiyistack-example-total-pages").html("1");
                        $("#fiyistack-example-actual-page-number-lg, #fiyistack-example-actual-page-number").html("1");
                    }
                    //Read data book
                    (_j = response_exampleQuery === null || response_exampleQuery === void 0 ? void 0 : response_exampleQuery.lstExampleModel) === null || _j === void 0 ? void 0 : _j.forEach(function (row) {
                        var _a, _b;
                        TableContent += "<tr>\n    <!-- Checkbox -->\n    <td>\n        <div>\n            <input class=\"example-table-checkbox-for-row\" value=\"" + row.ExampleId + "\" type=\"checkbox\">\n        </div>\n    </td>\n    <!-- Data -->\n    <td class=\"text-left text-light\">\n        <i class=\"fas fa-key\"></i> " + row.ExampleId + "\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-toggle-on\"></i> " + (row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>") + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> " + row.DateTimeCreation + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> " + row.DateTimeLastModification + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> " + row.UserCreationId + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> " + row.UserLastModificationId + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-toggle-on\"></i> " + (row.Boolean == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>") + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> " + row.DateTime + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-divide\"></i> " + row.Decimal + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> " + row.DropDown + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> " + row.Options + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong><i class=\"fas fa-divide\">\n            </i> " + row.Integer + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong><i class=\"fas fa-font\">\n            </i> " + row.TextBasic + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <a href=\"mailto:" + row.Email + "\">\n            <strong>\n                <i class=\"fas fa-at\"></i> " + row.Email + "\n            </strong>\n        </a>\n    </td>\n    <td class=\"text-left\">\n        <a href=\"" + row.FileUpload + "\">\n            <strong>\n                <i class=\"fas fa-file\"></i> " + row.FileUpload + "\n            </strong>\n        </a>\n    </td>\n    <td class=\"text-left\" >\n        <strong style=\"color:#" + row.HexColour + "\">\n            <i class=\"fas fa-palette\"></i> " + row.HexColour + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-asterisk\"></i> " + row.Password + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <a href=\"tel:" + row.PhoneNumber + "\">\n            <strong>\n                <i class=\"fas fa-phone\"></i> " + row.PhoneNumber + "\n            </strong>\n        </a>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-tag\"></i> " + row.Tag + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-font\"></i> " + row.TextArea + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <i class=\"fas fa-font\"></i> " + row.TextEditor + "\n    </td>\n    <td class=\"text-left\">\n        <a href=\"" + row.URL + "\" target=\"_blank\">\n            <strong>\n                <i class=\"fas fa-globe\"></i> " + row.URL + "\n            </strong>\n        </a>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-clock\"></i> " + ((_a = row.Time) === null || _a === void 0 ? void 0 : _a.substring(0, 12)) + "\n        </strong>\n    </td>\n    \n    <!-- Actions -->\n    <td class=\"text-right\">\n        <a class=\"btn btn-icon-only text-primary\" href=\"/FiyiStack/ExampleNonQueryPage?ExampleId=" + row.ExampleId + "\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\n            <i class=\"fas fa-edit\"></i>\n        </a>\n        <div class=\"dropdown\">\n            <button class=\"btn btn-icon-only text-danger\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-trash\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                <button class=\"dropdown-item text-danger fiyistack-example-table-delete-button\" value=\"" + row.ExampleId + "\" type=\"button\">\n                    <i class=\"fas fa-exclamation-triangle\"></i> Yes, delete\n                </button>\n            </div>\n        </div>\n        <div class=\"dropdown\">\n            <button class=\"btn btn-sm btn-icon-only text-primary\" href=\"#\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-ellipsis-v\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                <button type=\"button\" class=\"dropdown-item fiyistack-example-table-copy-button\" value=\"" + row.ExampleId + "\">\n                    <i class=\"fas fa-copy text-primary\"></i>&nbsp;Copy\n                </button>\n            </div>\n        </div>\n    </td>\n</tr>";
                        ListContent += "<div class=\"row mx-2\">\n    <div class=\"col-sm\">\n        <div class=\"card bg-gradient-primary mb-2\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col text-truncate\">\n                        <span class=\"text-white text-light mb-4\">\n                           ExampleId <i class=\"fas fa-key\"></i> " + row.ExampleId + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Active <i class=\"fas fa-toggle-on\"></i> " + (row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>") + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           DateTimeCreation <i class=\"fas fa-calendar\"></i> " + row.DateTimeCreation + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           DateTimeLastModification <i class=\"fas fa-calendar\"></i> " + row.DateTimeLastModification + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           UserCreationId <i class=\"fas fa-key\"></i> " + row.UserCreationId + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           UserLastModificationId <i class=\"fas fa-key\"></i> " + row.UserLastModificationId + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Boolean <i class=\"fas fa-toggle-on\"></i> " + (row.Boolean == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>") + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           DateTime <i class=\"fas fa-calendar\"></i> " + row.DateTime + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Decimal <i class=\"fas fa-divide\"></i> " + row.Decimal + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           DropDown <i class=\"fas fa-key\"></i> " + row.DropDown + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Options <i class=\"fas fa-key\"></i> " + row.Options + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                            Integer <i class=\"fas fa-divide\"></i> " + row.Integer + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           TextBasic <i class=\"fas fa-font\"></i> " + row.TextBasic + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                            <a style=\"color:#FFFFFF\" href=\"mailto:" + row.Email + "\">\n                               Email <i class=\"fas fa-at\"></i> " + row.Email + "\n                            <a/>\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           FileUpload <i class=\"fas fa-file\"></i> " + row.FileUpload + "\n                        </span>\n                        <br/>\n                        <span class=\"mb-4\" style=\"color:#" + row.HexColour + "\">\n                           HexColour <i class=\"fas fa-palette\"></i>\n                            <strong>" + row.HexColour + "</strong>\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Password <i class=\"fas fa-asterisk\"></i> " + row.Password + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                            <a style=\"color:#FFFFFF\" href=\"tel:" + row.PhoneNumber + "\">\n                               PhoneNumber <i class=\"fas fa-phone\"></i> " + row.PhoneNumber + "\n                            </a>\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Tag <i class=\"fas fa-tag\"></i> " + row.Tag + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           TextArea <i class=\"fas fa-font\"></i> " + row.TextArea + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           TextEditor <i class=\"fas fa-font\"></i> " + row.TextEditor + "\n                        </span>\n                        <br/>\n                        <span class=\"mb-4\">\n                            <a href=\"" + row.URL + "\" style=\"color:#FFFFFF\" target=\"_blank\">\n                               URL <i class=\"fas fa-globe\"></i> " + row.URL + "\n                            </a>\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Time <i class=\"fas fa-clock\"></i> " + ((_b = row.Time) === null || _b === void 0 ? void 0 : _b.substring(0, 12)) + "\n                        </span>\n                        <br/>\n                        \n                    </div>\n                    <div class=\"col-auto\">\n                    </div>\n                </div>\n                <!-- Actions -->\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"justify-content-end text-right mt-2\">\n                            <div class=\"mb-2\">\n                                <a class=\"fiyistack-example-checkbox-list list-row-unchecked icon icon-shape bg-white icon-sm rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"Check\">\n                                    <i class=\"fas fa-circle text-white\"></i>\n                                </a>\n                                <input type=\"hidden\" value=\"" + row.ExampleId + "\"/>\n                            </div>\n                            <a class=\"icon icon-shape bg-white icon-sm rounded-circle shadow\" href=\"/FiyiStack/ExampleNonQueryPage?ExampleId=" + row.ExampleId + "\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"edit\">\n                                <i class=\"fas fa-edit text-primary\"></i>\n                            </a>\n                            <div class=\"dropup\">\n                                <a class=\"icon icon-shape bg-white icon-sm text-primary rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    <i class=\"fas fa-ellipsis-v\"></i>\n                                </a>\n                                <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                                    <button value=\"" + row.ExampleId + "\" class=\"dropdown-item text-primary fiyistack-example-list-copy-button\" type=\"button\">\n                                        <i class=\"fas fa-copy\"></i>&nbsp;Copy\n                                    </button>\n                                    <button value=\"" + row.ExampleId + "\" class=\"dropdown-item text-danger fiyistack-example-list-delete-button\" type=\"button\">\n                                        <i class=\"fas fa-trash\"></i>&nbsp;Delete\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
                    });
                    //If view table is activated, clear table view, if not, clear list view
                    if (ViewToggler === "Table") {
                        $("#fiyistack-example-body-and-head-table").html("");
                        $("#fiyistack-example-body-and-head-table").html(TableContent);
                    }
                    else {
                        //Used for list view
                        if (ScrollDownNSearchFlag) {
                            $("#fiyistack-example-body-list").append(ListContent);
                            ScrollDownNSearchFlag = false;
                        }
                        else {
                            //Clear list view
                            $("#fiyistack-example-body-list").html("");
                            $("#fiyistack-example-body-list").html(ListContent);
                        }
                    }
                }
                else {
                    //ERROR
                    // @ts-ignore
                    $.notify({ icon: "fas fa-exclamation-triangle", message: "No registers found" }, { type: "warning", placement: { from: "bottom", align: "center" } });
                }
            },
            complete: function () {
                //Execute ScrollDownNSearch function when the user scroll the page
                $(window).on("scroll", ScrollDownNSearch);
                //Add final content to TableContent
                TableContent += "</tbody>\n                                </table>";
                //Check button inside list view
                $(".fiyistack-example-checkbox-list").on("click", function (e) {
                    //Toggler
                    if ($(this).hasClass("list-row-checked")) {
                        $(this).html("<a class=\"icon icon-shape bg-white icon-sm rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"check\">\n                                                            <i class=\"fas fa-circle text-white\"></i>\n                                                        </a>");
                        $(this).removeClass("list-row-checked").addClass("list-row-unchecked");
                    }
                    else {
                        $(this).html("<a class=\"icon icon-shape bg-white icon-sm text-primary rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"check\">\n                                                            <i class=\"fas fa-check\"></i>\n                                                        </a>");
                        $(this).removeClass("list-row-unchecked").addClass("list-row-checked");
                    }
                });
                //Check all button inside table
                $("#example-table-check-all").on("click", function (e) {
                    //Toggler
                    if ($("tr td div input.example-table-checkbox-for-row").is(":checked")) {
                        $("tr td div input.example-table-checkbox-for-row").removeAttr("checked");
                    }
                    else {
                        $("tr td div input.example-table-checkbox-for-row").attr("checked", "checked");
                    }
                });
                //Buttons inside head of table
                $("tr th button").one("click", function (e) {
                    //Toggler
                    if (SorterColumn == $(this).attr("value")) {
                        SorterColumn = "";
                        SortToggler = true;
                    }
                    else {
                        SorterColumn = $(this).attr("value");
                        SortToggler = false;
                    }
                    ValidateAndSearch();
                });
                //Delete button in table and list
                $("div.dropdown-menu button.fiyistack-example-table-delete-button, div.dropdown-menu button.fiyistack-example-list-delete-button").on("click", function (e) {
                    var ExampleId = $(this).val();
                    Example_TsModel_1.ExampleModel.DeleteByExampleId(ExampleId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            //SUCCESS
                            // @ts-ignore
                            $.notify({ icon: "fas fa-check", message: "Row deleted successfully" }, { type: "success", placement: { from: "bottom", align: "center" } });
                            ValidateAndSearch();
                        },
                        error: function (err) {
                            //ERROR
                            // @ts-ignore
                            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to delete data" }, { type: "danger", placement: { from: "bottom", align: "center" } });
                            console.log(err);
                        }
                    });
                });
                //Copy button in table and list
                $("div.dropdown-menu button.fiyistack-example-table-copy-button, div.dropdown-menu button.fiyistack-example-list-copy-button").on("click", function (e) {
                    var ExampleId = $(this).val();
                    Example_TsModel_1.ExampleModel.CopyByExampleId(ExampleId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            //SUCCESS
                            // @ts-ignore
                            $.notify({ icon: "fas fa-check", message: "Row copied successfully" }, { type: "success", placement: { from: "bottom", align: "center" } });
                            ValidateAndSearch();
                        },
                        error: function (err) {
                            //ERROR
                            // @ts-ignore
                            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to copy data" }, { type: "danger", placement: { from: "bottom", align: "center" } });
                            console.log(err);
                        }
                    });
                });
            },
            error: function (err) {
                //ERROR
                // @ts-ignore
                $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to get data" }, { type: "danger", placement: { from: "bottom", align: "center" } });
                console.log(err);
            }
        });
    };
    return ExampleQuery;
}());
function ValidateAndSearch() {
    var _examplemodelQuery = {
        QueryString: QueryString,
        ActualPageNumber: ActualPageNumber,
        RowsPerPage: RowsPerPage,
        SorterColumn: SorterColumn,
        SortToggler: SortToggler,
        TotalRows: TotalRows,
        TotalPages: TotalPages
    };
    ExampleQuery.SelectAllPagedToHTML(_examplemodelQuery);
}
//LOAD EVENT
if ($("#fiyistack-example-title-page").html().includes("Query example")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "ExampleId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Disable first and previous links in pagination
    $("#fiyistack-example-lnk-first-page-lg, #fiyistack-example-lnk-first-page").attr("disabled", "disabled");
    $("#fiyistack-example-lnk-previous-page-lg, #fiyistack-example-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#fiyistack-example-export-message").html("");
    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#fiyistack-example-search-button")).on("click", function () {
    ValidateAndSearch();
});
//Query string
$("#fiyistack-example-query-string").on("change keyup input", function (e) {
    var _a, _b;
    //If undefined, set QueryString to "" value
    QueryString = (_b = ((_a = $(this).val()) === null || _a === void 0 ? void 0 : _a.toString())) !== null && _b !== void 0 ? _b : "";
    ValidateAndSearch();
});
//First page link in pagination
$("#fiyistack-example-lnk-first-page-lg, #fiyistack-example-lnk-first-page").on("click", function (e) {
    ActualPageNumber = 1;
    ValidateAndSearch();
});
//Previous page link in pagination
$("#fiyistack-example-lnk-previous-page-lg, #fiyistack-example-lnk-previous-page").on("click", function (e) {
    ActualPageNumber -= 1;
    ValidateAndSearch();
});
//Next page link in pagination
$("#fiyistack-example-lnk-next-page-lg, #fiyistack-example-lnk-next-page").on("click", function (e) {
    ActualPageNumber += 1;
    ValidateAndSearch();
});
//Last page link in pagination
$("#fiyistack-example-lnk-last-page-lg, #fiyistack-example-lnk-last-page").on("click", function (e) {
    ActualPageNumber = TotalPages;
    ValidateAndSearch();
});
//Table view button
$("#fiyistack-example-table-view-button").on("click", function (e) {
    $("#fiyistack-example-view-toggler").val("Table");
    ViewToggler = "Table";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear table view
    $("#fiyistack-example-body-and-head-table").html("");
    ValidateAndSearch();
});
//List view button
$("#fiyistack-example-list-view-button").on("click", function (e) {
    $("#fiyistack-example-view-toggler").val("List");
    ViewToggler = "List";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear list view
    $("#fiyistack-example-body-list").html("");
    ValidateAndSearch();
});
//Used to list view
function ScrollDownNSearch() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var WindowsTopDistance = (_a = $(window).scrollTop()) !== null && _a !== void 0 ? _a : 0;
    var WindowsBottomDistance = ((_b = $(window).scrollTop()) !== null && _b !== void 0 ? _b : 0) + ((_c = $(window).innerHeight()) !== null && _c !== void 0 ? _c : 0);
    var CardsFooterTopPosition = (_e = (_d = $("#fiyistack-example-search-more-button-in-list").offset()) === null || _d === void 0 ? void 0 : _d.top) !== null && _e !== void 0 ? _e : 0;
    var CardsFooterBottomPosition = ((_g = (_f = $("#fiyistack-example-search-more-button-in-list").offset()) === null || _f === void 0 ? void 0 : _f.top) !== null && _g !== void 0 ? _g : 0) + ((_h = $("#fiyistack-example-search-more-button-in-list").outerHeight()) !== null && _h !== void 0 ? _h : 0);
    if (WindowsTopDistance > LastTopDistance) {
        //Scroll down
        if ((WindowsBottomDistance > CardsFooterTopPosition) && (WindowsTopDistance < CardsFooterBottomPosition)) {
            //Search More button visible
            if (ActualPageNumber !== TotalPages) {
                ScrollDownNSearchFlag = true;
                ActualPageNumber += 1;
                ValidateAndSearch();
            }
        }
        else { /*Card footer not visible*/ }
    }
    else { /*Scroll up*/ }
    LastTopDistance = WindowsTopDistance;
}
//Used to list view
$(window).on("scroll", ScrollDownNSearch);
//Export as PDF button
$("#fiyistack-example-export-as-pdf").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    var ExportationType = "";
    var DateTimeNow;
    var Body = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    var Header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };
    if ($("#fiyistack-example-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        var CheckedRows_1 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.example-table-checkbox-for-row:checked").each(function () {
                CheckedRows_1.push($(this).val());
            });
            Body = {
                AjaxForString: CheckedRows_1.toString()
            };
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows_1.push($(this).next().val());
            });
            Body = {
                AjaxForString: CheckedRows_1.toString()
            };
        }
    }
    Rx.from(ajax_1.ajax.post("/api/FiyiStack/Example/1/ExportAsPDF/" + ExportationType, Body, Header)).subscribe({
        next: function (newrow) {
            $("#fiyistack-example-export-message").html("<strong>Exporting as PDF</strong>");
            DateTimeNow = newrow.response;
        },
        complete: function () {
            //SUCCESS
            // @ts-ignore
            $.notify({ icon: "fas fa-check", message: "Conversion completed" }, { type: "success", placement: { from: "bottom", align: "center" } });
            //Show download button for PDF file
            $("#fiyistack-example-export-message").html("<a class=\"btn btn-icon btn-success\" href=\"/PDFFiles/FiyiStack/Example/Example_" + DateTimeNow.AjaxForString + ".pdf\" type=\"button\" download>\n                                            <span class=\"btn-inner--icon\"><i class=\"fas fa-file-pdf\"></i></span>\n                                            <span class=\"btn-inner--text\">Download</span>\n                                        </a>");
        },
        error: function (err) {
            //ERROR
            // @ts-ignore
            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to convert" }, { type: "danger", placement: { from: "bottom", align: "center" } });
            console.log(err);
        }
    });
});
//Export as Excel button
$("#fiyistack-example-export-as-excel").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    var ExportationType = "";
    var DateTimeNow;
    var Body = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    var Header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };
    if ($("#fiyistack-example-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        var CheckedRows_2 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.example-table-checkbox-for-row:checked").each(function () {
                CheckedRows_2.push($(this).val());
            });
            Body = {
                AjaxForString: CheckedRows_2.toString()
            };
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows_2.push($(this).next().val());
            });
            Body = {
                AjaxForString: CheckedRows_2.toString()
            };
        }
    }
    Rx.from(ajax_1.ajax.post("/api/FiyiStack/Example/1/ExportAsExcel/" + ExportationType, Body, Header)).subscribe({
        next: function (newrow) {
            $("#fiyistack-example-export-message").html("<strong>Exporting as Excel</strong>");
            DateTimeNow = newrow.response;
        },
        complete: function () {
            //SUCCESS
            // @ts-ignore
            $.notify({ icon: "fas fa-check", message: "Conversion completed" }, { type: "success", placement: { from: "bottom", align: "center" } });
            //Show download button for Excel file
            $("#fiyistack-example-export-message").html("<a class=\"btn btn-icon btn-success\" href=\"/ExcelFiles/FiyiStack/Example/Example_" + DateTimeNow.AjaxForString + ".xlsx\" type=\"button\" download>\n                                            <span class=\"btn-inner--icon\"><i class=\"fas fa-file-excel\"></i></span>\n                                            <span class=\"btn-inner--text\">Download</span>\n                                        </a>");
        },
        error: function (err) {
            //ERROR
            // @ts-ignore
            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to convert" }, { type: "danger", placement: { from: "bottom", align: "center" } });
            console.log(err);
        }
    });
});
//Export as CSV button
$("#fiyistack-example-export-as-csv").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    var ExportationType = "";
    var DateTimeNow;
    var Body = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    var Header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };
    if ($("#fiyistack-example-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        var CheckedRows_3 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.example-table-checkbox-for-row:checked").each(function () {
                CheckedRows_3.push($(this).val());
            });
            Body = {
                AjaxForString: CheckedRows_3.toString()
            };
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows_3.push($(this).next().val());
            });
            Body = {
                AjaxForString: CheckedRows_3.toString()
            };
        }
    }
    Rx.from(ajax_1.ajax.post("/api/FiyiStack/Example/1/ExportAsCSV/" + ExportationType, Body, Header)).subscribe({
        next: function (newrow) {
            $("#fiyistack-example-export-message").html("<strong>Exporting as CSV</strong>");
            DateTimeNow = newrow.response;
        },
        complete: function () {
            //SUCCESS
            // @ts-ignore
            $.notify({ icon: "fas fa-check", message: "Conversion completed" }, { type: "success", placement: { from: "bottom", align: "center" } });
            //Show download button for CSV file
            $("#fiyistack-example-export-message").html("<a class=\"btn btn-icon btn-success\" href=\"/CSVFiles/FiyiStack/Example/Example_" + DateTimeNow.AjaxForString + ".csv\" type=\"button\" download>\n                                            <span class=\"btn-inner--icon\"><i class=\"fas fa-file-csv\"></i></span>\n                                            <span class=\"btn-inner--text\">Download</span>\n                                        </a>");
        },
        error: function (err) {
            //ERROR
            // @ts-ignore
            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to convert" }, { type: "danger", placement: { from: "bottom", align: "center" } });
            console.log(err);
        }
    });
});
//Export close button in modal
$("#fiyistack-example-export-close-button").on("click", function (e) {
    $("#fiyistack-example-export-message").html("");
});
//Massive action Copy
$("#fiyistack-example-massive-action-copy").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    var CopyType = "";
    var Body = {};
    if ($("#fiyistack-example-copy-rows-all-checkbox").is(":checked")) {
        CopyType = "All";
    }
    else {
        CopyType = "JustChecked";
        var CheckedRows_4 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.example-table-checkbox-for-row:checked").each(function () {
                CheckedRows_4.push($(this).val());
            });
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows_4.push($(this).next().val());
            });
        }
        Body = {
            AjaxForString: CheckedRows_4.toString()
        };
    }
    Example_TsModel_1.ExampleModel.CopyManyOrAll(CopyType, Body).subscribe({
        next: function (newrow) {
        },
        complete: function () {
            //SUCCESS
            // @ts-ignore
            $.notify({ icon: "fas fa-check", message: "Completed copy" }, { type: "success", placement: { from: "bottom", align: "center" } });
            ValidateAndSearch();
        },
        error: function (err) {
            //ERROR
            // @ts-ignore
            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to copy" }, { type: "danger", placement: { from: "bottom", align: "center" } });
            console.log(err);
        }
    });
});
//Massive action Delete
$("#fiyistack-example-massive-action-delete").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    var DeleteType = "";
    var Body = {};
    if ($("#fiyistack-example-copy-rows-all-checkbox").is(":checked")) {
        DeleteType = "All";
    }
    else {
        DeleteType = "JustChecked";
        var CheckedRows_5 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.example-table-checkbox-for-row:checked").each(function () {
                CheckedRows_5.push($(this).val());
            });
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows_5.push($(this).next().val());
            });
        }
        Body = {
            AjaxForString: CheckedRows_5.toString()
        };
    }
    Example_TsModel_1.ExampleModel.DeleteManyOrAll(DeleteType, Body).subscribe({
        next: function (newrow) {
        },
        complete: function () {
            //SUCCESS
            // @ts-ignore
            $.notify({ icon: "fas fa-check", message: "Completed deletion" }, { type: "success", placement: { from: "bottom", align: "center" } });
            ValidateAndSearch();
        },
        error: function (err) {
            //ERROR
            // @ts-ignore
            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to delete" }, { type: "danger", placement: { from: "bottom", align: "center" } });
            console.log(err);
        }
    });
});
//# sourceMappingURL=ExampleQuery_jQuery.js.map