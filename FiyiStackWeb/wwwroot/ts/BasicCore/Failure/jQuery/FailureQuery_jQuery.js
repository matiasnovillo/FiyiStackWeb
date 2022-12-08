"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import libraries to use
var Failure_TsModel_1 = require("../../Failure/TsModels/Failure_TsModel");
var $ = require("jquery");
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
//Stack: 10
//Last modification on: 08/12/2022 7:45:13
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
var FailureQuery = /** @class */ (function () {
    function FailureQuery() {
    }
    FailureQuery.SelectAllPagedToHTML = function (request_failuremodelQuery) {
        //Used for list view
        $(window).off("scroll");
        //Load some part of table
        var TableContent = "<thead class=\"thead-light\">\n    <tr>\n        <th scope=\"col\">\n            <div>\n                <input id=\"failure-table-check-all\" type=\"checkbox\">\n            </div>\n        </th>\n        <th scope=\"col\">\n            <button value=\"FailureId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                FailureId\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"HTTPCode\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                HTTPCode\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"EmergencyLevel\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                EmergencyLevel\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Message\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Message\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"StackTrace\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                StackTrace\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Source\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Source\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Comment\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Comment\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Active\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Active\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserCreationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                UserCreationId\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserLastModificationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                UserLastModificationId\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeCreation\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                DateTimeCreation\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeLastModification\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                DateTimeLastModification\n            </button>\n        </th>\n        \n        <th scope=\"col\"></th>\n    </tr>\n</thead>\n<tbody>";
        var ListContent = "";
        Failure_TsModel_1.FailureModel.SelectAllPaged(request_failuremodelQuery).subscribe({
            next: function (newrow) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                //Only works when there is data available
                if (newrow.status != 204) {
                    var response_failureQuery = newrow.response;
                    //Set to default values if they are null
                    QueryString = (_a = response_failureQuery.QueryString) !== null && _a !== void 0 ? _a : "";
                    ActualPageNumber = (_b = response_failureQuery.ActualPageNumber) !== null && _b !== void 0 ? _b : 0;
                    RowsPerPage = (_c = response_failureQuery.RowsPerPage) !== null && _c !== void 0 ? _c : 0;
                    SorterColumn = (_d = response_failureQuery.SorterColumn) !== null && _d !== void 0 ? _d : "";
                    SortToggler = (_e = response_failureQuery.SortToggler) !== null && _e !== void 0 ? _e : false;
                    TotalRows = (_f = response_failureQuery.TotalRows) !== null && _f !== void 0 ? _f : 0;
                    TotalPages = (_g = response_failureQuery.TotalPages) !== null && _g !== void 0 ? _g : 0;
                    //Query string
                    $("#basiccore-failure-query-string").attr("placeholder", "Search... (" + TotalRows + " records)");
                    //Total pages of pagination
                    $("#basiccore-failure-total-pages-lg, #basiccore-failure-total-pages").html(TotalPages.toString());
                    //Actual page number of pagination
                    $("#basiccore-failure-actual-page-number-lg, #basiccore-failure-actual-page-number").html(ActualPageNumber.toString());
                    //If we are at the final of book disable next and last buttons in pagination
                    if (ActualPageNumber === TotalPages) {
                        $("#basiccore-failure-lnk-next-page-lg, #basiccore-failure-lnk-next-page").attr("disabled", "disabled");
                        $("#basiccore-failure-lnk-last-page-lg, #basiccore-failure-lnk-last-page").attr("disabled", "disabled");
                        $("#basiccore-failure-search-more-button-in-list").html("");
                    }
                    else {
                        $("#basiccore-failure-lnk-next-page-lg, #basiccore-failure-lnk-next-page").removeAttr("disabled");
                        $("#basiccore-failure-lnk-last-page-lg, #basiccore-failure-lnk-last-page").removeAttr("disabled");
                        //Scroll arrow for list view
                        $("#basiccore-failure-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                    }
                    //If we are at the begining of the book disable previous and first buttons in pagination
                    if (ActualPageNumber === 1) {
                        $("#basiccore-failure-lnk-previous-page-lg, #basiccore-failure-lnk-previous-page").attr("disabled", "disabled");
                        $("#basiccore-failure-lnk-first-page-lg, #basiccore-failure-lnk-first-page").attr("disabled", "disabled");
                    }
                    else {
                        $("#basiccore-failure-lnk-previous-page-lg, #basiccore-failure-lnk-previous-page").removeAttr("disabled");
                        $("#basiccore-failure-lnk-first-page-lg, #basiccore-failure-lnk-first-page").removeAttr("disabled");
                    }
                    //If book is empty set to default pagination values
                    if (((_h = response_failureQuery === null || response_failureQuery === void 0 ? void 0 : response_failureQuery.lstFailureModel) === null || _h === void 0 ? void 0 : _h.length) === 0) {
                        $("#basiccore-failure-lnk-previous-page-lg, #basiccore-failure-lnk-previous-page").attr("disabled", "disabled");
                        $("#basiccore-failure-lnk-first-page-lg, #basiccore-failure-lnk-first-page").attr("disabled", "disabled");
                        $("#basiccore-failure-lnk-next-page-lg, #basiccore-failure-lnk-next-page").attr("disabled", "disabled");
                        $("#basiccore-failure-lnk-last-page-lg, #basiccore-failure-lnk-last-page").attr("disabled", "disabled");
                        $("#basiccore-failure-total-pages-lg, #basiccore-failure-total-pages").html("1");
                        $("#basiccore-failure-actual-page-number-lg, #basiccore-failure-actual-page-number").html("1");
                    }
                    //Read data book
                    (_j = response_failureQuery === null || response_failureQuery === void 0 ? void 0 : response_failureQuery.lstFailureModel) === null || _j === void 0 ? void 0 : _j.forEach(function (row) {
                        TableContent += "<tr>\n    <!-- Checkbox -->\n    <td>\n        <div>\n            <input class=\"failure-table-checkbox-for-row\" value=\"" + row.FailureId + "\" type=\"checkbox\">\n        </div>\n    </td>\n    <!-- Data -->\n    <td class=\"text-left text-light text-truncate\">\n        <i class=\"fas fa-key\"></i> " + row.FailureId + "\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong><i class=\"fas fa-divide\">\n            </i> " + row.HTTPCode + "\n        </strong>\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong><i class=\"fas fa-divide\">\n            </i> " + row.EmergencyLevel + "\n        </strong>\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong>\n            <i class=\"fas fa-font\"></i> " + row.Message + "\n        </strong>\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong>\n            <i class=\"fas fa-font\"></i> " + row.StackTrace + "\n        </strong>\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong>\n            <i class=\"fas fa-font\"></i> " + row.Source + "\n        </strong>\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong>\n            <i class=\"fas fa-font\"></i> " + row.Comment + "\n        </strong>\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong>\n            <i class=\"fas fa-toggle-on\"></i> " + (row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>") + "\n        </strong>\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong><i class=\"fas fa-divide\">\n            </i> " + row.UserCreationId + "\n        </strong>\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong><i class=\"fas fa-divide\">\n            </i> " + row.UserLastModificationId + "\n        </strong>\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> " + row.DateTimeCreation + "\n        </strong>\n    </td>\n    <td class=\"text-left text-truncate\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> " + row.DateTimeLastModification + "\n        </strong>\n    </td>\n    \n    <!-- Actions -->\n    <td class=\"text-right\">\n        <a class=\"btn btn-icon-only text-primary\" href=\"/BasicCore/PageFailureNonQuery?FailureId=" + row.FailureId + "\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\n            <i class=\"fas fa-edit\"></i>\n        </a>\n        <div class=\"dropdown\">\n            <button class=\"btn btn-icon-only text-danger\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-trash\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                <button class=\"dropdown-item text-danger basiccore-failure-table-delete-button\" value=\"" + row.FailureId + "\" type=\"button\">\n                    <i class=\"fas fa-exclamation-triangle\"></i> Yes, delete\n                </button>\n            </div>\n        </div>\n        <div class=\"dropdown\">\n            <button class=\"btn btn-sm btn-icon-only text-primary\" href=\"#\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-ellipsis-v\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                <button type=\"button\" class=\"dropdown-item basiccore-failure-table-copy-button\" value=\"" + row.FailureId + "\">\n                    <i class=\"fas fa-copy text-primary\"></i>&nbsp;Copy\n                </button>\n            </div>\n        </div>\n    </td>\n</tr>";
                        ListContent += "<div class=\"row mx-2\">\n    <div class=\"col-sm\">\n        <div class=\"card bg-gradient-primary mb-2\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <span class=\"text-white text-light mb-4 text-truncate\">\n                           FailureId <i class=\"fas fa-key\"></i> " + row.FailureId + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                            HTTPCode <i class=\"fas fa-divide\"></i> " + row.HTTPCode + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                            EmergencyLevel <i class=\"fas fa-divide\"></i> " + row.EmergencyLevel + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                           Message <i class=\"fas fa-font\"></i> " + row.Message + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                           StackTrace <i class=\"fas fa-font\"></i> " + row.StackTrace + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                           Source <i class=\"fas fa-font\"></i> " + row.Source + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                           Comment <i class=\"fas fa-font\"></i> " + row.Comment + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                           Active <i class=\"fas fa-toggle-on\"></i> " + (row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>") + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                            UserCreationId <i class=\"fas fa-divide\"></i> " + row.UserCreationId + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                            UserLastModificationId <i class=\"fas fa-divide\"></i> " + row.UserLastModificationId + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                           DateTimeCreation <i class=\"fas fa-calendar\"></i> " + row.DateTimeCreation + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4 text-truncate\">\n                           DateTimeLastModification <i class=\"fas fa-calendar\"></i> " + row.DateTimeLastModification + "\n                        </span>\n                        <br/>\n                        \n                    </div>\n                    <div class=\"col-auto\">\n                    </div>\n                </div>\n                <!-- Actions -->\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"justify-content-end text-right mt-2\">\n                            <div class=\"basiccore-failure-checkbox-list list-row-unchecked mb-2\">\n                                <a class=\"icon icon-shape bg-white icon-sm rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"check\">\n                                    <i class=\"fas fa-circle text-white\"></i>\n                                </a>\n                            </div>\n                            <input type=\"hidden\" value=\"" + row.FailureId + "\"/>\n                            <a class=\"icon icon-shape bg-white icon-sm rounded-circle shadow\" href=\"/BasicCore/PageFailureNonQuery?FailureId=" + row.FailureId + "\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"edit\">\n                                <i class=\"fas fa-edit text-primary\"></i>\n                            </a>\n                            <div class=\"dropup\">\n                                <a class=\"icon icon-shape bg-white icon-sm text-primary rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    <i class=\"fas fa-ellipsis-v\"></i>\n                                </a>\n                                <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                                    <button value=\"" + row.FailureId + "\" class=\"dropdown-item text-primary basiccore-failure-list-copy-button\" type=\"button\">\n                                        <i class=\"fas fa-copy\"></i>&nbsp;Copy\n                                    </button>\n                                    <button value=\"" + row.FailureId + "\" class=\"dropdown-item text-danger basiccore-failure-list-delete-button\" type=\"button\">\n                                        <i class=\"fas fa-trash\"></i>&nbsp;Delete\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
                    });
                    //If view table is activated, clear table view, if not, clear list view
                    if (ViewToggler === "Table") {
                        $("#basiccore-failure-body-and-head-table").html("");
                        $("#basiccore-failure-body-and-head-table").html(TableContent);
                    }
                    else {
                        //Used for list view
                        if (ScrollDownNSearchFlag) {
                            $("#basiccore-failure-body-list").append(ListContent);
                            ScrollDownNSearchFlag = false;
                        }
                        else {
                            //Clear list view
                            $("#basiccore-failure-body-list").html("");
                            $("#basiccore-failure-body-list").html(ListContent);
                        }
                    }
                }
                else {
                    //Show error message
                    $("#basiccore-failure-error-message-title").html("No registers found");
                    $("#basiccore-failure-error-message-text").html("The server did not found any register. HTTP code 204");
                    $("#basiccore-failure-button-error-message-in-card").show();
                }
            },
            complete: function () {
                //Execute ScrollDownNSearch function when the user scroll the page
                $(window).on("scroll", ScrollDownNSearch);
                //Add final content to TableContent
                TableContent += "</tbody>\n                                </table>";
                //Check button inside list view
                $(".basiccore-failure-checkbox-list").on("click", function (e) {
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
                $("#failure-table-check-all").on("click", function (e) {
                    //Toggler
                    if ($("tr td div input.failure-table-checkbox-for-row").is(":checked")) {
                        $("tr td div input.failure-table-checkbox-for-row").removeAttr("checked");
                    }
                    else {
                        $("tr td div input.failure-table-checkbox-for-row").attr("checked", "checked");
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
                //Hide error message
                $("#basiccore-failure-error-message-title").html("");
                $("#basiccore-failure-error-message-text").html("");
                $("#basiccore-failure-button-error-message-in-card").hide();
                //Delete button in table and list
                $("div.dropdown-menu button.basiccore-failure-table-delete-button, div.dropdown-menu button.basiccore-failure-list-delete-button").on("click", function (e) {
                    var FailureId = $(this).val();
                    Failure_TsModel_1.FailureModel.DeleteByFailureId(FailureId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            ValidateAndSearch();
                            //Show OK message
                            $("#basiccore-failure-button-error-message-in-card").hide();
                            $("#basiccore-failure-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Row deleted successfully");
                            $("#basiccore-failure-button-ok-message-in-card").show();
                        },
                        error: function (err) {
                            //Related to error message
                            $("#basiccore-failure-error-message-title").html("FailureModel.DeleteByFailureId(FailureId).subscribe(...)");
                            $("#basiccore-failure-error-message-text").html(err);
                            $("#basiccore-failure-button-error-message-in-card").show();
                        }
                    });
                });
                //Copy button in table and list
                $("div.dropdown-menu button.basiccore-failure-table-copy-button, div.dropdown-menu button.basiccore-failure-list-copy-button").on("click", function (e) {
                    var FailureId = $(this).val();
                    Failure_TsModel_1.FailureModel.CopyByFailureId(FailureId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            ValidateAndSearch();
                            //Show OK message
                            $("#basiccore-failure-button-error-message-in-card").hide();
                            $("#basiccore-failure-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Row copied successfully");
                            $("#basiccore-failure-button-ok-message-in-card").show();
                        },
                        error: function (err) {
                            //Show error message
                            $("#basiccore-failure-error-message-title").html("FailureModel.CopyByFailureId(FailureId).subscribe(...)");
                            $("#basiccore-failure-error-message-text").html(err);
                            $("#basiccore-failure-button-error-message-in-card").show();
                        }
                    });
                });
            },
            error: function (err) {
                //Show error message
                $("#basiccore-failure-error-message-title").html("FailureModel.SelectAllPaged(request_failuremodelQ).subscribe(...)");
                $("#basiccore-failure-error-message-text").html(err);
                $("#basiccore-failure-button-error-message-in-card").show();
            }
        });
    };
    return FailureQuery;
}());
function ValidateAndSearch() {
    //Hide error and OK message button
    $("#basiccore-failure-button-error-message-in-card").hide();
    $("#basiccore-failure-button-ok-message-in-card").hide();
    var _failuremodelQuery = {
        QueryString: QueryString,
        ActualPageNumber: ActualPageNumber,
        RowsPerPage: RowsPerPage,
        SorterColumn: SorterColumn,
        SortToggler: SortToggler,
        TotalRows: TotalRows,
        TotalPages: TotalPages
    };
    FailureQuery.SelectAllPagedToHTML(_failuremodelQuery);
}
//LOAD EVENT
if ($("#basiccore-failure-title-page").html().includes("Query failure")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "FailureId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Disable first and previous links in pagination
    $("#basiccore-failure-lnk-first-page-lg, #basiccore-failure-lnk-first-page").attr("disabled", "disabled");
    $("#basiccore-failure-lnk-previous-page-lg, #basiccore-failure-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#basiccore-failure-export-message").html("");
    $("#basiccore-failure-button-error-message-in-card").hide();
    $("#basiccore-failure-button-ok-message-in-card").hide();
    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#basiccore-failure-search-button")).on("click", function () {
    ValidateAndSearch();
});
//Query string
$("#basiccore-failure-query-string").on("change keyup input", function (e) {
    var _a, _b;
    //If undefined, set QueryString to "" value
    QueryString = (_b = ((_a = $(this).val()) === null || _a === void 0 ? void 0 : _a.toString())) !== null && _b !== void 0 ? _b : "";
    ValidateAndSearch();
});
//First page link in pagination
$("#basiccore-failure-lnk-first-page-lg, #basiccore-failure-lnk-first-page").on("click", function (e) {
    ActualPageNumber = 1;
    ValidateAndSearch();
});
//Previous page link in pagination
$("#basiccore-failure-lnk-previous-page-lg, #basiccore-failure-lnk-previous-page").on("click", function (e) {
    ActualPageNumber -= 1;
    ValidateAndSearch();
});
//Next page link in pagination
$("#basiccore-failure-lnk-next-page-lg, #basiccore-failure-lnk-next-page").on("click", function (e) {
    ActualPageNumber += 1;
    ValidateAndSearch();
});
//Last page link in pagination
$("#basiccore-failure-lnk-last-page-lg, #basiccore-failure-lnk-last-page").on("click", function (e) {
    ActualPageNumber = TotalPages;
    ValidateAndSearch();
});
//Table view button
$("#basiccore-failure-table-view-button").on("click", function (e) {
    $("#basiccore-failure-view-toggler").val("Table");
    ViewToggler = "Table";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear table view
    $("#basiccore-failure-body-and-head-table").html("");
    ValidateAndSearch();
});
//List view button
$("#basiccore-failure-list-view-button").on("click", function (e) {
    $("#basiccore-failure-view-toggler").val("List");
    ViewToggler = "List";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear list view
    $("#basiccore-failure-body-list").html("");
    ValidateAndSearch();
});
//Used to list view
function ScrollDownNSearch() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var WindowsTopDistance = (_a = $(window).scrollTop()) !== null && _a !== void 0 ? _a : 0;
    var WindowsBottomDistance = ((_b = $(window).scrollTop()) !== null && _b !== void 0 ? _b : 0) + ((_c = $(window).innerHeight()) !== null && _c !== void 0 ? _c : 0);
    var CardsFooterTopPosition = (_e = (_d = $("#basiccore-failure-search-more-button-in-list").offset()) === null || _d === void 0 ? void 0 : _d.top) !== null && _e !== void 0 ? _e : 0;
    var CardsFooterBottomPosition = ((_g = (_f = $("#basiccore-failure-search-more-button-in-list").offset()) === null || _f === void 0 ? void 0 : _f.top) !== null && _g !== void 0 ? _g : 0) + ((_h = $("#basiccore-failure-search-more-button-in-list").outerHeight()) !== null && _h !== void 0 ? _h : 0);
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
$("#basiccore-failure-export-as-pdf").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    var ExportationType = "";
    var DateTimeNow;
    var Body = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    var Header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };
    if ($("#basiccore-failure-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        var CheckedRows_1 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.failure-table-checkbox-for-row:checked").each(function () {
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
    Rx.from(ajax_1.ajax.post("/api/BasicCore/Failure/1/ExportAsPDF/" + ExportationType, Body, Header)).subscribe({
        next: function (newrow) {
            $("#basiccore-failure-export-message").html("<strong>Exporting as PDF</strong>");
            DateTimeNow = newrow.response;
        },
        complete: function () {
            //Show download button for PDF file
            $("#basiccore-failure-export-message").html("<a class=\"btn btn-icon btn-success\" href=\"/PDFFiles/BasicCore/Failure/Failure_" + DateTimeNow.AjaxForString + ".pdf\" type=\"button\" download>\n                                            <span class=\"btn-inner--icon\"><i class=\"fas fa-file-pdf\"></i></span>\n                                            <span class=\"btn-inner--text\">Download</span>\n                                        </a>");
            //Show OK message
            $("#basiccore-failure-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Conversion completed");
            $("#basiccore-failure-button-ok-message-in-card").show();
        },
        error: function (err) {
            //Show error message
            $("#basiccore-failure-error-message-title").html("Rx.from(ajax.post('/api/BasicCore/Failure/1/ExportAsPDF/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basiccore-failure-error-message-text").html(err);
            $("#basiccore-failure-button-error-message-in-card").show();
        }
    });
});
//Export as Excel button
$("#basiccore-failure-export-as-excel").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    var ExportationType = "";
    var DateTimeNow;
    var Body = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    var Header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };
    if ($("#basiccore-failure-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        var CheckedRows_2 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.failure-table-checkbox-for-row:checked").each(function () {
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
    Rx.from(ajax_1.ajax.post("/api/BasicCore/Failure/1/ExportAsExcel/" + ExportationType, Body, Header)).subscribe({
        next: function (newrow) {
            $("#basiccore-failure-export-message").html("<strong>Exporting as Excel</strong>");
            DateTimeNow = newrow.response;
        },
        complete: function () {
            //Show download button for Excel file
            $("#basiccore-failure-export-message").html("<a class=\"btn btn-icon btn-success\" href=\"/ExcelFiles/BasicCore/Failure/Failure_" + DateTimeNow.AjaxForString + ".xlsx\" type=\"button\" download>\n                                            <span class=\"btn-inner--icon\"><i class=\"fas fa-file-excel\"></i></span>\n                                            <span class=\"btn-inner--text\">Download</span>\n                                        </a>");
            //Show OK message
            $("#basiccore-failure-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Conversion completed");
            $("#basiccore-failure-button-ok-message-in-card").show();
        },
        error: function (err) {
            //Show error message
            $("#basiccore-failure-error-message-title").html("Rx.from(ajax.post('/api/BasicCore/Failure/1/ExportAsExcel/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basiccore-failure-error-message-text").html(err);
            $("#basiccore-failure-button-error-message-in-card").show();
        }
    });
});
//Export as CSV button
$("#basiccore-failure-export-as-csv").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    var ExportationType = "";
    var DateTimeNow;
    var Body = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    var Header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };
    if ($("#basiccore-failure-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        var CheckedRows_3 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.failure-table-checkbox-for-row:checked").each(function () {
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
    Rx.from(ajax_1.ajax.post("/api/BasicCore/Failure/1/ExportAsCSV/" + ExportationType, Body, Header)).subscribe({
        next: function (newrow) {
            $("#basiccore-failure-export-message").html("<strong>Exporting as CSV</strong>");
            DateTimeNow = newrow.response;
        },
        complete: function () {
            //Show download button for CSV file
            $("#basiccore-failure-export-message").html("<a class=\"btn btn-icon btn-success\" href=\"/CSVFiles/BasicCore/Failure/Failure_" + DateTimeNow.AjaxForString + ".csv\" type=\"button\" download>\n                                            <span class=\"btn-inner--icon\"><i class=\"fas fa-file-csv\"></i></span>\n                                            <span class=\"btn-inner--text\">Download</span>\n                                        </a>");
            //Show OK message
            $("#basiccore-failure-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Conversion completed");
            $("#basiccore-failure-button-ok-message-in-card").show();
        },
        error: function (err) {
            //Show error message
            $("#basiccore-failure-error-message-title").html("Rx.from(ajax.post('/api/BasicCore/Failure/1/ExportAsCSV/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basiccore-failure-error-message-text").html(err);
            $("#basiccore-failure-button-error-message-in-card").show();
        }
    });
});
//Export close button in modal
$("#basiccore-failure-export-close-button").on("click", function (e) {
    $("#basiccore-failure-export-message").html("");
});
//Massive action Copy
$("#basiccore-failure-massive-action-copy").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    var CopyType = "";
    var Body = {};
    if ($("#basiccore-failure-copy-rows-all-checkbox").is(":checked")) {
        CopyType = "All";
    }
    else {
        CopyType = "JustChecked";
        var CheckedRows_4 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.failure-table-checkbox-for-row:checked").each(function () {
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
    Failure_TsModel_1.FailureModel.CopyManyOrAll(CopyType, Body).subscribe({
        next: function (newrow) {
        },
        complete: function () {
            ValidateAndSearch();
            //Show OK message
            $("#basiccore-failure-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Rows copied successfully");
            $("#basiccore-failure-button-ok-message-in-card").show();
        },
        error: function (err) {
            //Show error message
            $("#basiccore-failure-error-message-title").html("FailureModel.Copy(CopyType).subscribe(...)");
            $("#basiccore-failure-error-message-text").html(err);
            $("#basiccore-failure-button-error-message-in-card").show();
        }
    });
});
//Massive action Delete
$("#basiccore-failure-massive-action-delete").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    var DeleteType = "";
    var Body = {};
    if ($("#basiccore-failure-copy-rows-all-checkbox").is(":checked")) {
        DeleteType = "All";
    }
    else {
        DeleteType = "JustChecked";
        var CheckedRows_5 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.failure-table-checkbox-for-row:checked").each(function () {
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
    Failure_TsModel_1.FailureModel.DeleteManyOrAll(DeleteType, Body).subscribe({
        next: function (newrow) {
        },
        complete: function () {
            ValidateAndSearch();
            //Show OK message
            $("#basiccore-failure-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Rows deleted successfully");
            $("#basiccore-failure-button-ok-message-in-card").show();
        },
        error: function (err) {
            //Show error message
            $("#basiccore-failure-error-message-title").html("FailureModel.Copy(CopyType).subscribe(...)");
            $("#basiccore-failure-error-message-text").html(err);
            $("#basiccore-failure-button-error-message-in-card").show();
        }
    });
});
//# sourceMappingURL=FailureQuery_jQuery.js.map