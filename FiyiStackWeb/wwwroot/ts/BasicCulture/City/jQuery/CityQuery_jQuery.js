"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import libraries to use
var City_TsModel_1 = require("../../City/TsModels/City_TsModel");
var $ = require("jquery");
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
//Stack: 10
//Last modification on: 21/12/2022 9:41:41
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
var CityQuery = /** @class */ (function () {
    function CityQuery() {
    }
    CityQuery.SelectAllPagedToHTML = function (request_citymodelQuery) {
        //Used for list view
        $(window).off("scroll");
        //Load some part of table
        var TableContent = "<thead class=\"thead-light\">\n    <tr>\n        <th scope=\"col\">\n            <div>\n                <input id=\"city-table-check-all\" type=\"checkbox\">\n            </div>\n        </th>\n        <th scope=\"col\">\n            <button value=\"CityId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                CityId\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Name\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Name\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"GeographicalCoordinates\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                GeographicalCoordinates\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Code\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Code\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"ProvinceId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                ProvinceId\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Active\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Active\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserCreationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                UserCreationId\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserLastModificationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                UserLastModificationId\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeCreation\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                DateTimeCreation\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeLastModification\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                DateTimeLastModification\n            </button>\n        </th>\n        \n        <th scope=\"col\"></th>\n    </tr>\n</thead>\n<tbody>";
        var ListContent = "";
        City_TsModel_1.CityModel.SelectAllPaged(request_citymodelQuery).subscribe({
            next: function (newrow) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                //Only works when there is data available
                if (newrow.status != 204) {
                    var response_cityQuery = newrow.response;
                    //Set to default values if they are null
                    QueryString = (_a = response_cityQuery.QueryString) !== null && _a !== void 0 ? _a : "";
                    ActualPageNumber = (_b = response_cityQuery.ActualPageNumber) !== null && _b !== void 0 ? _b : 0;
                    RowsPerPage = (_c = response_cityQuery.RowsPerPage) !== null && _c !== void 0 ? _c : 0;
                    SorterColumn = (_d = response_cityQuery.SorterColumn) !== null && _d !== void 0 ? _d : "";
                    SortToggler = (_e = response_cityQuery.SortToggler) !== null && _e !== void 0 ? _e : false;
                    TotalRows = (_f = response_cityQuery.TotalRows) !== null && _f !== void 0 ? _f : 0;
                    TotalPages = (_g = response_cityQuery.TotalPages) !== null && _g !== void 0 ? _g : 0;
                    //Query string
                    $("#basicculture-city-query-string").attr("placeholder", "Search... (" + TotalRows + " records)");
                    //Total pages of pagination
                    $("#basicculture-city-total-pages-lg, #basicculture-city-total-pages").html(TotalPages.toString());
                    //Actual page number of pagination
                    $("#basicculture-city-actual-page-number-lg, #basicculture-city-actual-page-number").html(ActualPageNumber.toString());
                    //If we are at the final of book disable next and last buttons in pagination
                    if (ActualPageNumber === TotalPages) {
                        $("#basicculture-city-lnk-next-page-lg, #basicculture-city-lnk-next-page").attr("disabled", "disabled");
                        $("#basicculture-city-lnk-last-page-lg, #basicculture-city-lnk-last-page").attr("disabled", "disabled");
                        $("#basicculture-city-search-more-button-in-list").html("");
                    }
                    else {
                        $("#basicculture-city-lnk-next-page-lg, #basicculture-city-lnk-next-page").removeAttr("disabled");
                        $("#basicculture-city-lnk-last-page-lg, #basicculture-city-lnk-last-page").removeAttr("disabled");
                        //Scroll arrow for list view
                        $("#basicculture-city-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                    }
                    //If we are at the begining of the book disable previous and first buttons in pagination
                    if (ActualPageNumber === 1) {
                        $("#basicculture-city-lnk-previous-page-lg, #basicculture-city-lnk-previous-page").attr("disabled", "disabled");
                        $("#basicculture-city-lnk-first-page-lg, #basicculture-city-lnk-first-page").attr("disabled", "disabled");
                    }
                    else {
                        $("#basicculture-city-lnk-previous-page-lg, #basicculture-city-lnk-previous-page").removeAttr("disabled");
                        $("#basicculture-city-lnk-first-page-lg, #basicculture-city-lnk-first-page").removeAttr("disabled");
                    }
                    //If book is empty set to default pagination values
                    if (((_h = response_cityQuery === null || response_cityQuery === void 0 ? void 0 : response_cityQuery.lstCityModel) === null || _h === void 0 ? void 0 : _h.length) === 0) {
                        $("#basicculture-city-lnk-previous-page-lg, #basicculture-city-lnk-previous-page").attr("disabled", "disabled");
                        $("#basicculture-city-lnk-first-page-lg, #basicculture-city-lnk-first-page").attr("disabled", "disabled");
                        $("#basicculture-city-lnk-next-page-lg, #basicculture-city-lnk-next-page").attr("disabled", "disabled");
                        $("#basicculture-city-lnk-last-page-lg, #basicculture-city-lnk-last-page").attr("disabled", "disabled");
                        $("#basicculture-city-total-pages-lg, #basicculture-city-total-pages").html("1");
                        $("#basicculture-city-actual-page-number-lg, #basicculture-city-actual-page-number").html("1");
                    }
                    //Read data book
                    (_j = response_cityQuery === null || response_cityQuery === void 0 ? void 0 : response_cityQuery.lstCityModel) === null || _j === void 0 ? void 0 : _j.forEach(function (row) {
                        TableContent += "<tr>\n    <!-- Checkbox -->\n    <td>\n        <div>\n            <input class=\"city-table-checkbox-for-row\" value=\"" + row.CityId + "\" type=\"checkbox\">\n        </div>\n    </td>\n    <!-- Data -->\n    <td class=\"text-left text-light\">\n        <i class=\"fas fa-key\"></i> " + row.CityId + "\n    </td>\n    <td class=\"text-left\">\n        <strong><i class=\"fas fa-font\">\n            </i> " + row.Name + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong><i class=\"fas fa-font\">\n            </i> " + row.GeographicalCoordinates + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong><i class=\"fas fa-font\">\n            </i> " + row.Code + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> " + row.ProvinceId + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-toggle-on\"></i> " + (row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>") + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong><i class=\"fas fa-divide\">\n            </i> " + row.UserCreationId + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong><i class=\"fas fa-divide\">\n            </i> " + row.UserLastModificationId + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> " + row.DateTimeCreation + "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> " + row.DateTimeLastModification + "\n        </strong>\n    </td>\n    \n    <!-- Actions -->\n    <td class=\"text-right\">\n        <a class=\"btn btn-icon-only text-primary\" href=\"/BasicCulture/PageCityNonQuery?CityId=" + row.CityId + "\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\n            <i class=\"fas fa-edit\"></i>\n        </a>\n        <div class=\"dropdown\">\n            <button class=\"btn btn-icon-only text-danger\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-trash\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                <button class=\"dropdown-item text-danger basicculture-city-table-delete-button\" value=\"" + row.CityId + "\" type=\"button\">\n                    <i class=\"fas fa-exclamation-triangle\"></i> Yes, delete\n                </button>\n            </div>\n        </div>\n        <div class=\"dropdown\">\n            <button class=\"btn btn-sm btn-icon-only text-primary\" href=\"#\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-ellipsis-v\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                <button type=\"button\" class=\"dropdown-item basicculture-city-table-copy-button\" value=\"" + row.CityId + "\">\n                    <i class=\"fas fa-copy text-primary\"></i>&nbsp;Copy\n                </button>\n            </div>\n        </div>\n    </td>\n</tr>";
                        ListContent += "<div class=\"row mx-2\">\n    <div class=\"col-sm\">\n        <div class=\"card bg-gradient-primary mb-2\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col text-truncate\">\n                        <span class=\"text-white text-light mb-4\">\n                           CityId <i class=\"fas fa-key\"></i> " + row.CityId + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Name <i class=\"fas fa-font\"></i> " + row.Name + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           GeographicalCoordinates <i class=\"fas fa-font\"></i> " + row.GeographicalCoordinates + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Code <i class=\"fas fa-font\"></i> " + row.Code + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           ProvinceId <i class=\"fas fa-key\"></i> " + row.ProvinceId + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Active <i class=\"fas fa-toggle-on\"></i> " + (row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>") + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                            UserCreationId <i class=\"fas fa-divide\"></i> " + row.UserCreationId + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                            UserLastModificationId <i class=\"fas fa-divide\"></i> " + row.UserLastModificationId + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           DateTimeCreation <i class=\"fas fa-calendar\"></i> " + row.DateTimeCreation + "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           DateTimeLastModification <i class=\"fas fa-calendar\"></i> " + row.DateTimeLastModification + "\n                        </span>\n                        <br/>\n                        \n                    </div>\n                    <div class=\"col-auto\">\n                    </div>\n                </div>\n                <!-- Actions -->\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"justify-content-end text-right mt-2\">\n                            <div class=\"basicculture-city-checkbox-list list-row-unchecked mb-2\">\n                                <a class=\"icon icon-shape bg-white icon-sm rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"check\">\n                                    <i class=\"fas fa-circle text-white\"></i>\n                                </a>\n                            </div>\n                            <input type=\"hidden\" value=\"" + row.CityId + "\"/>\n                            <a class=\"icon icon-shape bg-white icon-sm rounded-circle shadow\" href=\"/BasicCulture/PageCityNonQuery?CityId=" + row.CityId + "\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"edit\">\n                                <i class=\"fas fa-edit text-primary\"></i>\n                            </a>\n                            <div class=\"dropup\">\n                                <a class=\"icon icon-shape bg-white icon-sm text-primary rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    <i class=\"fas fa-ellipsis-v\"></i>\n                                </a>\n                                <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                                    <button value=\"" + row.CityId + "\" class=\"dropdown-item text-primary basicculture-city-list-copy-button\" type=\"button\">\n                                        <i class=\"fas fa-copy\"></i>&nbsp;Copy\n                                    </button>\n                                    <button value=\"" + row.CityId + "\" class=\"dropdown-item text-danger basicculture-city-list-delete-button\" type=\"button\">\n                                        <i class=\"fas fa-trash\"></i>&nbsp;Delete\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
                    });
                    //If view table is activated, clear table view, if not, clear list view
                    if (ViewToggler === "Table") {
                        $("#basicculture-city-body-and-head-table").html("");
                        $("#basicculture-city-body-and-head-table").html(TableContent);
                    }
                    else {
                        //Used for list view
                        if (ScrollDownNSearchFlag) {
                            $("#basicculture-city-body-list").append(ListContent);
                            ScrollDownNSearchFlag = false;
                        }
                        else {
                            //Clear list view
                            $("#basicculture-city-body-list").html("");
                            $("#basicculture-city-body-list").html(ListContent);
                        }
                    }
                }
                else {
                    //Show error message
                    $("#basicculture-city-error-message-title").html("No registers found");
                    $("#basicculture-city-error-message-text").html("The server did not found any register. HTTP code 204");
                    $("#basicculture-city-button-error-message-in-card").show();
                }
            },
            complete: function () {
                //Execute ScrollDownNSearch function when the user scroll the page
                $(window).on("scroll", ScrollDownNSearch);
                //Add final content to TableContent
                TableContent += "</tbody>\n                                </table>";
                //Check button inside list view
                $(".basicculture-city-checkbox-list").on("click", function (e) {
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
                $("#city-table-check-all").on("click", function (e) {
                    //Toggler
                    if ($("tr td div input.city-table-checkbox-for-row").is(":checked")) {
                        $("tr td div input.city-table-checkbox-for-row").removeAttr("checked");
                    }
                    else {
                        $("tr td div input.city-table-checkbox-for-row").attr("checked", "checked");
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
                $("#basicculture-city-error-message-title").html("");
                $("#basicculture-city-error-message-text").html("");
                $("#basicculture-city-button-error-message-in-card").hide();
                //Delete button in table and list
                $("div.dropdown-menu button.basicculture-city-table-delete-button, div.dropdown-menu button.basicculture-city-list-delete-button").on("click", function (e) {
                    var CityId = $(this).val();
                    City_TsModel_1.CityModel.DeleteByCityId(CityId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            ValidateAndSearch();
                            //Show OK message
                            $("#basicculture-city-button-error-message-in-card").hide();
                            $("#basicculture-city-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Row deleted successfully");
                            $("#basicculture-city-button-ok-message-in-card").show();
                        },
                        error: function (err) {
                            //Related to error message
                            $("#basicculture-city-error-message-title").html("CityModel.DeleteByCityId(CityId).subscribe(...)");
                            $("#basicculture-city-error-message-text").html(err);
                            $("#basicculture-city-button-error-message-in-card").show();
                        }
                    });
                });
                //Copy button in table and list
                $("div.dropdown-menu button.basicculture-city-table-copy-button, div.dropdown-menu button.basicculture-city-list-copy-button").on("click", function (e) {
                    var CityId = $(this).val();
                    City_TsModel_1.CityModel.CopyByCityId(CityId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            ValidateAndSearch();
                            //Show OK message
                            $("#basicculture-city-button-error-message-in-card").hide();
                            $("#basicculture-city-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Row copied successfully");
                            $("#basicculture-city-button-ok-message-in-card").show();
                        },
                        error: function (err) {
                            //Show error message
                            $("#basicculture-city-error-message-title").html("CityModel.CopyByCityId(CityId).subscribe(...)");
                            $("#basicculture-city-error-message-text").html(err);
                            $("#basicculture-city-button-error-message-in-card").show();
                        }
                    });
                });
            },
            error: function (err) {
                //Show error message
                $("#basicculture-city-error-message-title").html("CityModel.SelectAllPaged(request_citymodelQ).subscribe(...)");
                $("#basicculture-city-error-message-text").html(err);
                $("#basicculture-city-button-error-message-in-card").show();
            }
        });
    };
    return CityQuery;
}());
function ValidateAndSearch() {
    //Hide error and OK message button
    $("#basicculture-city-button-error-message-in-card").hide();
    $("#basicculture-city-button-ok-message-in-card").hide();
    var _citymodelQuery = {
        QueryString: QueryString,
        ActualPageNumber: ActualPageNumber,
        RowsPerPage: RowsPerPage,
        SorterColumn: SorterColumn,
        SortToggler: SortToggler,
        TotalRows: TotalRows,
        TotalPages: TotalPages
    };
    CityQuery.SelectAllPagedToHTML(_citymodelQuery);
}
//LOAD EVENT
if ($("#basicculture-city-title-page").html().includes("Query city")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "CityId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Disable first and previous links in pagination
    $("#basicculture-city-lnk-first-page-lg, #basicculture-city-lnk-first-page").attr("disabled", "disabled");
    $("#basicculture-city-lnk-previous-page-lg, #basicculture-city-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#basicculture-city-export-message").html("");
    $("#basicculture-city-button-error-message-in-card").hide();
    $("#basicculture-city-button-ok-message-in-card").hide();
    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#basicculture-city-search-button")).on("click", function () {
    ValidateAndSearch();
});
//Query string
$("#basicculture-city-query-string").on("change keyup input", function (e) {
    var _a, _b;
    //If undefined, set QueryString to "" value
    QueryString = (_b = ((_a = $(this).val()) === null || _a === void 0 ? void 0 : _a.toString())) !== null && _b !== void 0 ? _b : "";
    ValidateAndSearch();
});
//First page link in pagination
$("#basicculture-city-lnk-first-page-lg, #basicculture-city-lnk-first-page").on("click", function (e) {
    ActualPageNumber = 1;
    ValidateAndSearch();
});
//Previous page link in pagination
$("#basicculture-city-lnk-previous-page-lg, #basicculture-city-lnk-previous-page").on("click", function (e) {
    ActualPageNumber -= 1;
    ValidateAndSearch();
});
//Next page link in pagination
$("#basicculture-city-lnk-next-page-lg, #basicculture-city-lnk-next-page").on("click", function (e) {
    ActualPageNumber += 1;
    ValidateAndSearch();
});
//Last page link in pagination
$("#basicculture-city-lnk-last-page-lg, #basicculture-city-lnk-last-page").on("click", function (e) {
    ActualPageNumber = TotalPages;
    ValidateAndSearch();
});
//Table view button
$("#basicculture-city-table-view-button").on("click", function (e) {
    $("#basicculture-city-view-toggler").val("Table");
    ViewToggler = "Table";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear table view
    $("#basicculture-city-body-and-head-table").html("");
    ValidateAndSearch();
});
//List view button
$("#basicculture-city-list-view-button").on("click", function (e) {
    $("#basicculture-city-view-toggler").val("List");
    ViewToggler = "List";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear list view
    $("#basicculture-city-body-list").html("");
    ValidateAndSearch();
});
//Used to list view
function ScrollDownNSearch() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var WindowsTopDistance = (_a = $(window).scrollTop()) !== null && _a !== void 0 ? _a : 0;
    var WindowsBottomDistance = ((_b = $(window).scrollTop()) !== null && _b !== void 0 ? _b : 0) + ((_c = $(window).innerHeight()) !== null && _c !== void 0 ? _c : 0);
    var CardsFooterTopPosition = (_e = (_d = $("#basicculture-city-search-more-button-in-list").offset()) === null || _d === void 0 ? void 0 : _d.top) !== null && _e !== void 0 ? _e : 0;
    var CardsFooterBottomPosition = ((_g = (_f = $("#basicculture-city-search-more-button-in-list").offset()) === null || _f === void 0 ? void 0 : _f.top) !== null && _g !== void 0 ? _g : 0) + ((_h = $("#basicculture-city-search-more-button-in-list").outerHeight()) !== null && _h !== void 0 ? _h : 0);
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
$("#basicculture-city-export-as-pdf").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    var ExportationType = "";
    var DateTimeNow;
    var Body = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    var Header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };
    if ($("#basicculture-city-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        var CheckedRows_1 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.city-table-checkbox-for-row:checked").each(function () {
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
    Rx.from(ajax_1.ajax.post("/api/BasicCulture/City/1/ExportAsPDF/" + ExportationType, Body, Header)).subscribe({
        next: function (newrow) {
            $("#basicculture-city-export-message").html("<strong>Exporting as PDF</strong>");
            DateTimeNow = newrow.response;
        },
        complete: function () {
            //Show download button for PDF file
            $("#basicculture-city-export-message").html("<a class=\"btn btn-icon btn-success\" href=\"/PDFFiles/BasicCulture/City/City_" + DateTimeNow.AjaxForString + ".pdf\" type=\"button\" download>\n                                            <span class=\"btn-inner--icon\"><i class=\"fas fa-file-pdf\"></i></span>\n                                            <span class=\"btn-inner--text\">Download</span>\n                                        </a>");
            //Show OK message
            $("#basicculture-city-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Conversion completed");
            $("#basicculture-city-button-ok-message-in-card").show();
        },
        error: function (err) {
            //Show error message
            $("#basicculture-city-error-message-title").html("Rx.from(ajax.post('/api/BasicCulture/City/1/ExportAsPDF/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basicculture-city-error-message-text").html(err);
            $("#basicculture-city-button-error-message-in-card").show();
        }
    });
});
//Export as Excel button
$("#basicculture-city-export-as-excel").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    var ExportationType = "";
    var DateTimeNow;
    var Body = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    var Header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };
    if ($("#basicculture-city-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        var CheckedRows_2 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.city-table-checkbox-for-row:checked").each(function () {
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
    Rx.from(ajax_1.ajax.post("/api/BasicCulture/City/1/ExportAsExcel/" + ExportationType, Body, Header)).subscribe({
        next: function (newrow) {
            $("#basicculture-city-export-message").html("<strong>Exporting as Excel</strong>");
            DateTimeNow = newrow.response;
        },
        complete: function () {
            //Show download button for Excel file
            $("#basicculture-city-export-message").html("<a class=\"btn btn-icon btn-success\" href=\"/ExcelFiles/BasicCulture/City/City_" + DateTimeNow.AjaxForString + ".xlsx\" type=\"button\" download>\n                                            <span class=\"btn-inner--icon\"><i class=\"fas fa-file-excel\"></i></span>\n                                            <span class=\"btn-inner--text\">Download</span>\n                                        </a>");
            //Show OK message
            $("#basicculture-city-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Conversion completed");
            $("#basicculture-city-button-ok-message-in-card").show();
        },
        error: function (err) {
            //Show error message
            $("#basicculture-city-error-message-title").html("Rx.from(ajax.post('/api/BasicCulture/City/1/ExportAsExcel/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basicculture-city-error-message-text").html(err);
            $("#basicculture-city-button-error-message-in-card").show();
        }
    });
});
//Export as CSV button
$("#basicculture-city-export-as-csv").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    var ExportationType = "";
    var DateTimeNow;
    var Body = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    var Header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };
    if ($("#basicculture-city-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        var CheckedRows_3 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.city-table-checkbox-for-row:checked").each(function () {
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
    Rx.from(ajax_1.ajax.post("/api/BasicCulture/City/1/ExportAsCSV/" + ExportationType, Body, Header)).subscribe({
        next: function (newrow) {
            $("#basicculture-city-export-message").html("<strong>Exporting as CSV</strong>");
            DateTimeNow = newrow.response;
        },
        complete: function () {
            //Show download button for CSV file
            $("#basicculture-city-export-message").html("<a class=\"btn btn-icon btn-success\" href=\"/CSVFiles/BasicCulture/City/City_" + DateTimeNow.AjaxForString + ".csv\" type=\"button\" download>\n                                            <span class=\"btn-inner--icon\"><i class=\"fas fa-file-csv\"></i></span>\n                                            <span class=\"btn-inner--text\">Download</span>\n                                        </a>");
            //Show OK message
            $("#basicculture-city-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Conversion completed");
            $("#basicculture-city-button-ok-message-in-card").show();
        },
        error: function (err) {
            //Show error message
            $("#basicculture-city-error-message-title").html("Rx.from(ajax.post('/api/BasicCulture/City/1/ExportAsCSV/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basicculture-city-error-message-text").html(err);
            $("#basicculture-city-button-error-message-in-card").show();
        }
    });
});
//Export close button in modal
$("#basicculture-city-export-close-button").on("click", function (e) {
    $("#basicculture-city-export-message").html("");
});
//Massive action Copy
$("#basicculture-city-massive-action-copy").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    var CopyType = "";
    var Body = {};
    if ($("#basicculture-city-copy-rows-all-checkbox").is(":checked")) {
        CopyType = "All";
    }
    else {
        CopyType = "JustChecked";
        var CheckedRows_4 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.city-table-checkbox-for-row:checked").each(function () {
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
    City_TsModel_1.CityModel.CopyManyOrAll(CopyType, Body).subscribe({
        next: function (newrow) {
        },
        complete: function () {
            ValidateAndSearch();
            //Show OK message
            $("#basicculture-city-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Rows copied successfully");
            $("#basicculture-city-button-ok-message-in-card").show();
        },
        error: function (err) {
            //Show error message
            $("#basicculture-city-error-message-title").html("CityModel.Copy(CopyType).subscribe(...)");
            $("#basicculture-city-error-message-text").html(err);
            $("#basicculture-city-button-error-message-in-card").show();
        }
    });
});
//Massive action Delete
$("#basicculture-city-massive-action-delete").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    var DeleteType = "";
    var Body = {};
    if ($("#basicculture-city-copy-rows-all-checkbox").is(":checked")) {
        DeleteType = "All";
    }
    else {
        DeleteType = "JustChecked";
        var CheckedRows_5 = new Array();
        if (ViewToggler == "Table") {
            $("tr td div input.city-table-checkbox-for-row:checked").each(function () {
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
    City_TsModel_1.CityModel.DeleteManyOrAll(DeleteType, Body).subscribe({
        next: function (newrow) {
        },
        complete: function () {
            ValidateAndSearch();
            //Show OK message
            $("#basicculture-city-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Rows deleted successfully");
            $("#basicculture-city-button-ok-message-in-card").show();
        },
        error: function (err) {
            //Show error message
            $("#basicculture-city-error-message-title").html("CityModel.Copy(CopyType).subscribe(...)");
            $("#basicculture-city-error-message-text").html(err);
            $("#basicculture-city-button-error-message-in-card").show();
        }
    });
});
//# sourceMappingURL=CityQuery_jQuery.js.map