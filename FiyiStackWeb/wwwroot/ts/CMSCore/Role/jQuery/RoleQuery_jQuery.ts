//Import libraries to use
import { RoleModel, rolemodelQuery } from "../../Role/TsModels/Role_TsModel";
import * as $ from "jquery";
import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";

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

//Last modification on: 09/12/2022 19:22:49

//Set default values
let LastTopDistance: number = 0;
let QueryString: string = "";
let ActualPageNumber: number = 1;
let RowsPerPage: number = 50;
let SorterColumn: string | undefined = "";
let SortToggler: boolean = false;
let TotalPages: number = 0;
let TotalRows: number = 0;
let ViewToggler: string = "List";
let ScrollDownNSearchFlag: boolean = false;

class RoleQuery {
    static SelectAllPagedToHTML(request_rolemodelQuery: rolemodelQuery) {
        //Used for list view
        $(window).off("scroll");

        //Load some part of table
        var TableContent: string = `<thead class="thead-light">
    <tr>
        <th scope="col">
            <div>
                <input id="role-table-check-all" type="checkbox">
            </div>
        </th>
        <th scope="col">
            <button value="RoleId" class="btn btn-outline-secondary btn-sm" type="button">
                RoleId
            </button>
        </th>
        <th scope="col">
            <button value="Name" class="btn btn-outline-secondary btn-sm" type="button">
                Name
            </button>
        </th>
        <th scope="col">
            <button value="Active" class="btn btn-outline-secondary btn-sm" type="button">
                Active
            </button>
        </th>
        <th scope="col">
            <button value="UserCreationId" class="btn btn-outline-secondary btn-sm" type="button">
                UserCreationId
            </button>
        </th>
        <th scope="col">
            <button value="UserLastModificationId" class="btn btn-outline-secondary btn-sm" type="button">
                UserLastModificationId
            </button>
        </th>
        <th scope="col">
            <button value="DateTimeCreation" class="btn btn-outline-secondary btn-sm" type="button">
                DateTimeCreation
            </button>
        </th>
        <th scope="col">
            <button value="DateTimeLastModification" class="btn btn-outline-secondary btn-sm" type="button">
                DateTimeLastModification
            </button>
        </th>
        
        <th scope="col"></th>
    </tr>
</thead>
<tbody>`;

        var ListContent: string = ``;

        RoleModel.SelectAllPaged(request_rolemodelQuery).subscribe(
            {
                next: newrow => {
                    //Only works when there is data available
                    if (newrow.status != 204) {

                        const response_roleQuery = newrow.response as rolemodelQuery;

                        //Set to default values if they are null
                        QueryString = response_roleQuery.QueryString ?? "";
                        ActualPageNumber = response_roleQuery.ActualPageNumber ?? 0;
                        RowsPerPage = response_roleQuery.RowsPerPage ?? 0;
                        SorterColumn = response_roleQuery.SorterColumn ?? "";
                        SortToggler = response_roleQuery.SortToggler ?? false;
                        TotalRows = response_roleQuery.TotalRows ?? 0;
                        TotalPages = response_roleQuery.TotalPages ?? 0;

                        //Query string
                        $("#cmscore-role-query-string").attr("placeholder", `Search... (${TotalRows} records)`);
                        //Total pages of pagination
                        $("#cmscore-role-total-pages-lg, #cmscore-role-total-pages").html(TotalPages.toString());
                        //Actual page number of pagination
                        $("#cmscore-role-actual-page-number-lg, #cmscore-role-actual-page-number").html(ActualPageNumber.toString());
                        //If we are at the final of book disable next and last buttons in pagination
                        if (ActualPageNumber === TotalPages) {
                            $("#cmscore-role-lnk-next-page-lg, #cmscore-role-lnk-next-page").attr("disabled", "disabled");
                            $("#cmscore-role-lnk-last-page-lg, #cmscore-role-lnk-last-page").attr("disabled", "disabled");
                            $("#cmscore-role-search-more-button-in-list").html("");
                        }
                        else {
                            $("#cmscore-role-lnk-next-page-lg, #cmscore-role-lnk-next-page").removeAttr("disabled");
                            $("#cmscore-role-lnk-last-page-lg, #cmscore-role-lnk-last-page").removeAttr("disabled");
                            //Scroll arrow for list view
                            $("#cmscore-role-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                        }
                        //If we are at the begining of the book disable previous and first buttons in pagination
                        if (ActualPageNumber === 1) {
                            $("#cmscore-role-lnk-previous-page-lg, #cmscore-role-lnk-previous-page").attr("disabled", "disabled");
                            $("#cmscore-role-lnk-first-page-lg, #cmscore-role-lnk-first-page").attr("disabled", "disabled");
                        }
                        else {
                            $("#cmscore-role-lnk-previous-page-lg, #cmscore-role-lnk-previous-page").removeAttr("disabled");
                            $("#cmscore-role-lnk-first-page-lg, #cmscore-role-lnk-first-page").removeAttr("disabled");
                        }
                        //If book is empty set to default pagination values
                        if (response_roleQuery?.lstRoleModel?.length === 0) {
                            $("#cmscore-role-lnk-previous-page-lg, #cmscore-role-lnk-previous-page").attr("disabled", "disabled");
                            $("#cmscore-role-lnk-first-page-lg, #cmscore-role-lnk-first-page").attr("disabled", "disabled");
                            $("#cmscore-role-lnk-next-page-lg, #cmscore-role-lnk-next-page").attr("disabled", "disabled");
                            $("#cmscore-role-lnk-last-page-lg, #cmscore-role-lnk-last-page").attr("disabled", "disabled");
                            $("#cmscore-role-total-pages-lg, #cmscore-role-total-pages").html("1");
                            $("#cmscore-role-actual-page-number-lg, #cmscore-role-actual-page-number").html("1");
                        }
                        //Read data book
                        response_roleQuery?.lstRoleModel?.forEach(row => {

                            TableContent += `<tr>
    <!-- Checkbox -->
    <td>
        <div>
            <input class="role-table-checkbox-for-row" value="${row.RoleId}" type="checkbox">
        </div>
    </td>
    <!-- Data -->
    <td class="text-left text-light text-truncate">
        <i class="fas fa-key"></i> ${row.RoleId}
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-font">
            </i> ${row.Name}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-toggle-on"></i> ${row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-divide">
            </i> ${row.UserCreationId}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-divide">
            </i> ${row.UserLastModificationId}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-calendar"></i> ${row.DateTimeCreation}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-calendar"></i> ${row.DateTimeLastModification}
        </strong>
    </td>
    
    <!-- Actions -->
    <td class="text-right">
        <a class="btn btn-icon-only text-primary" href="/CMSCore/PageRoleNonQuery?RoleId=${row.RoleId}" role="button" data-toggle="tooltip" data-original-title="Edit">
            <i class="fas fa-edit"></i>
        </a>
        <div class="dropdown">
            <button class="btn btn-icon-only text-danger" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-trash"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button class="dropdown-item text-danger cmscore-role-table-delete-button" value="${row.RoleId}" type="button">
                    <i class="fas fa-exclamation-triangle"></i> Yes, delete
                </button>
            </div>
        </div>
        <div class="dropdown">
            <button class="btn btn-sm btn-icon-only text-primary" href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button type="button" class="dropdown-item cmscore-role-table-copy-button" value="${row.RoleId}">
                    <i class="fas fa-copy text-primary"></i>&nbsp;Copy
                </button>
            </div>
        </div>
    </td>
</tr>`;

                            ListContent += `<div class="row mx-2">
    <div class="col-sm">
        <div class="card bg-gradient-primary mb-2">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <span class="text-white text-light mb-4 text-truncate">
                           RoleId <i class="fas fa-key"></i> ${row.RoleId}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           Name <i class="fas fa-font"></i> ${row.Name}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           Active <i class="fas fa-toggle-on"></i> ${row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                            UserCreationId <i class="fas fa-divide"></i> ${row.UserCreationId}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                            UserLastModificationId <i class="fas fa-divide"></i> ${row.UserLastModificationId}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           DateTimeCreation <i class="fas fa-calendar"></i> ${row.DateTimeCreation}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           DateTimeLastModification <i class="fas fa-calendar"></i> ${row.DateTimeLastModification}
                        </span>
                        <br/>
                        
                    </div>
                    <div class="col-auto">
                    </div>
                </div>
                <!-- Actions -->
                <div class="row">
                    <div class="col">
                        <div class="justify-content-end text-right mt-2">
                            <div class="cmscore-role-checkbox-list list-row-unchecked mb-2">
                                <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="check">
                                    <i class="fas fa-circle text-white"></i>
                                </a>
                            </div>
                            <input type="hidden" value="${row.RoleId}"/>
                            <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="/CMSCore/PageRoleNonQuery?RoleId=${row.RoleId}" role="button" data-toggle="tooltip" data-original-title="edit">
                                <i class="fas fa-edit text-primary"></i>
                            </a>
                            <div class="dropup">
                                <a class="icon icon-shape bg-white icon-sm text-primary rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <button value="${row.RoleId}" class="dropdown-item text-primary cmscore-role-list-copy-button" type="button">
                                        <i class="fas fa-copy"></i>&nbsp;Copy
                                    </button>
                                    <button value="${row.RoleId}" class="dropdown-item text-danger cmscore-role-list-delete-button" type="button">
                                        <i class="fas fa-trash"></i>&nbsp;Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
                        })

                        //If view table is activated, clear table view, if not, clear list view
                        if (ViewToggler === "Table") {
                            $("#cmscore-role-body-and-head-table").html("");
                            $("#cmscore-role-body-and-head-table").html(TableContent);
                        }
                        else {
                            //Used for list view
                            if (ScrollDownNSearchFlag) {
                                $("#cmscore-role-body-list").append(ListContent);
                                ScrollDownNSearchFlag = false;
                            }
                            else {
                                //Clear list view
                                $("#cmscore-role-body-list").html("");
                                $("#cmscore-role-body-list").html(ListContent);
                            }
                            }
                    }
                    else {
                        //Show error message
                        $("#cmscore-role-error-message-title").html("No registers found");
                        $("#cmscore-role-error-message-text").html("The server did not found any register. HTTP code 204");
                        $("#cmscore-role-button-error-message-in-card").show();
                    }
                },
                complete: () => {
                    //Execute ScrollDownNSearch function when the user scroll the page
                    $(window).on("scroll", ScrollDownNSearch);

                    //Add final content to TableContent
                    TableContent += `</tbody>
                                </table>`;

                    //Check button inside list view
                    $(".cmscore-role-checkbox-list").on("click", function (e) {
                        //Toggler
                        if ($(this).hasClass("list-row-checked")) {
                            $(this).html(`<a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="check">
                                                            <i class="fas fa-circle text-white"></i>
                                                        </a>`);
                            $(this).removeClass("list-row-checked").addClass("list-row-unchecked");
                        }
                        else {
                            $(this).html(`<a class="icon icon-shape bg-white icon-sm text-primary rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="check">
                                                            <i class="fas fa-check"></i>
                                                        </a>`);
                            $(this).removeClass("list-row-unchecked").addClass("list-row-checked");
                        }
                    });

                    //Check all button inside table
                    $("#role-table-check-all").on("click", function (e) { 
                        //Toggler
                        if ($("tr td div input.role-table-checkbox-for-row").is(":checked")) {
                            $("tr td div input.role-table-checkbox-for-row").removeAttr("checked");
                        }
                        else {
                            $("tr td div input.role-table-checkbox-for-row").attr("checked", "checked");
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
                    $("#cmscore-role-error-message-title").html("");
                    $("#cmscore-role-error-message-text").html("");
                    $("#cmscore-role-button-error-message-in-card").hide();

                    //Delete button in table and list
                    $("div.dropdown-menu button.cmscore-role-table-delete-button, div.dropdown-menu button.cmscore-role-list-delete-button").on("click", function (e) {
                        let RoleId = $(this).val();
                        RoleModel.DeleteByRoleId(RoleId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#cmscore-role-button-error-message-in-card").hide();
                                $("#cmscore-role-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row deleted successfully`);
                                $("#cmscore-role-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Related to error message
                                $("#cmscore-role-error-message-title").html("RoleModel.DeleteByRoleId(RoleId).subscribe(...)");
                                $("#cmscore-role-error-message-text").html(err);
                                $("#cmscore-role-button-error-message-in-card").show();
                            }
                        });
                    });

                    //Copy button in table and list
                    $("div.dropdown-menu button.cmscore-role-table-copy-button, div.dropdown-menu button.cmscore-role-list-copy-button").on("click", function (e) {
                        let RoleId = $(this).val();
                        RoleModel.CopyByRoleId(RoleId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#cmscore-role-button-error-message-in-card").hide();
                                $("#cmscore-role-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row copied successfully`);
                                $("#cmscore-role-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Show error message
                                $("#cmscore-role-error-message-title").html("RoleModel.CopyByRoleId(RoleId).subscribe(...)");
                                $("#cmscore-role-error-message-text").html(err);
                                $("#cmscore-role-button-error-message-in-card").show();
                            }
                        });
                    });
                },
                error: err => {
                    //Show error message
                    $("#cmscore-role-error-message-title").html("RoleModel.SelectAllPaged(request_rolemodelQ).subscribe(...)");
                    $("#cmscore-role-error-message-text").html(err);
                    $("#cmscore-role-button-error-message-in-card").show();
                }
            });
    }
}

function ValidateAndSearch() {

    //Hide error and OK message button
    $("#cmscore-role-button-error-message-in-card").hide();
    $("#cmscore-role-button-ok-message-in-card").hide();

    var _rolemodelQuery: rolemodelQuery = {
        QueryString,
        ActualPageNumber,
        RowsPerPage,
        SorterColumn,
        SortToggler,
        TotalRows,
        TotalPages
    };

    RoleQuery.SelectAllPagedToHTML(_rolemodelQuery);
}

//LOAD EVENT
if ($("#cmscore-role-title-page").html().includes("Query role")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "RoleId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Disable first and previous links in pagination
    $("#cmscore-role-lnk-first-page-lg, #cmscore-role-lnk-first-page").attr("disabled", "disabled");
    $("#cmscore-role-lnk-previous-page-lg, #cmscore-role-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#cmscore-role-export-message").html("");
    $("#cmscore-role-button-error-message-in-card").hide();
    $("#cmscore-role-button-ok-message-in-card").hide();

    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#cmscore-role-search-button")).on("click", function () {
    ValidateAndSearch();
});

//Query string
$("#cmscore-role-query-string").on("change keyup input", function (e) {
    //If undefined, set QueryString to "" value
    QueryString = ($(this).val()?.toString()) ?? "" ;
    ValidateAndSearch();
});

//First page link in pagination
$("#cmscore-role-lnk-first-page-lg, #cmscore-role-lnk-first-page").on("click", function (e) {
    ActualPageNumber = 1;
    ValidateAndSearch();
});

//Previous page link in pagination
$("#cmscore-role-lnk-previous-page-lg, #cmscore-role-lnk-previous-page").on("click", function (e) {
    ActualPageNumber -= 1;
    ValidateAndSearch();
});

//Next page link in pagination
$("#cmscore-role-lnk-next-page-lg, #cmscore-role-lnk-next-page").on("click", function (e) {
    ActualPageNumber += 1;
    ValidateAndSearch();
});

//Last page link in pagination
$("#cmscore-role-lnk-last-page-lg, #cmscore-role-lnk-last-page").on("click", function (e) {
    ActualPageNumber = TotalPages;
    ValidateAndSearch();
});

//Table view button
$("#cmscore-role-table-view-button").on("click", function (e) {
    $("#cmscore-role-view-toggler").val("Table");
    ViewToggler = "Table";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear table view
    $("#cmscore-role-body-and-head-table").html("");
    ValidateAndSearch();
});

//List view button
$("#cmscore-role-list-view-button").on("click", function (e) {
    $("#cmscore-role-view-toggler").val("List");
    ViewToggler = "List";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear list view
    $("#cmscore-role-body-list").html("");
    ValidateAndSearch();
});

//Used to list view
function ScrollDownNSearch() {
    let WindowsTopDistance: number = $(window).scrollTop() ?? 0;
    let WindowsBottomDistance: number = ($(window).scrollTop() ?? 0) + ($(window).innerHeight() ?? 0);
    let CardsFooterTopPosition: number = $("#cmscore-role-search-more-button-in-list").offset()?.top ?? 0;
    let CardsFooterBottomPosition: number = ($("#cmscore-role-search-more-button-in-list").offset()?.top ?? 0) + ($("#cmscore-role-search-more-button-in-list").outerHeight() ?? 0);

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
$("#cmscore-role-export-as-pdf").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#cmscore-role-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else{
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.role-table-checkbox-for-row:checked").each(function () {
                CheckedRows.push($(this).val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows.push($(this).next().val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
    }

    Rx.from(ajax.post("/api/CMSCore/Role/1/ExportAsPDF/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#cmscore-role-export-message").html("<strong>Exporting as PDF</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for PDF file
            $("#cmscore-role-export-message").html(`<a class="btn btn-icon btn-success" href="/PDFFiles/CMSCore/Role/Role_${DateTimeNow.AjaxForString}.pdf" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#cmscore-role-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#cmscore-role-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#cmscore-role-error-message-title").html("Rx.from(ajax.post('/api/CMSCore/Role/1/ExportAsPDF/' + ExportationType, Body, Header)).subscribe(...)");
            $("#cmscore-role-error-message-text").html(err);
            $("#cmscore-role-button-error-message-in-card").show();
        }
    });
});

//Export as Excel button
$("#cmscore-role-export-as-excel").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#cmscore-role-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.role-table-checkbox-for-row:checked").each(function () {
                CheckedRows.push($(this).val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows.push($(this).next().val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
    }

    Rx.from(ajax.post("/api/CMSCore/Role/1/ExportAsExcel/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#cmscore-role-export-message").html("<strong>Exporting as Excel</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for Excel file
            $("#cmscore-role-export-message").html(`<a class="btn btn-icon btn-success" href="/ExcelFiles/CMSCore/Role/Role_${DateTimeNow.AjaxForString}.xlsx" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#cmscore-role-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#cmscore-role-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#cmscore-role-error-message-title").html("Rx.from(ajax.post('/api/CMSCore/Role/1/ExportAsExcel/' + ExportationType, Body, Header)).subscribe(...)");
            $("#cmscore-role-error-message-text").html(err);
            $("#cmscore-role-button-error-message-in-card").show();
        }
    });
});

//Export as CSV button
$("#cmscore-role-export-as-csv").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#cmscore-role-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.role-table-checkbox-for-row:checked").each(function () {
                CheckedRows.push($(this).val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows.push($(this).next().val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
    }

    Rx.from(ajax.post("/api/CMSCore/Role/1/ExportAsCSV/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#cmscore-role-export-message").html("<strong>Exporting as CSV</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for CSV file
            $("#cmscore-role-export-message").html(`<a class="btn btn-icon btn-success" href="/CSVFiles/CMSCore/Role/Role_${DateTimeNow.AjaxForString}.csv" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-csv"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#cmscore-role-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#cmscore-role-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#cmscore-role-error-message-title").html("Rx.from(ajax.post('/api/CMSCore/Role/1/ExportAsCSV/' + ExportationType, Body, Header)).subscribe(...)");
            $("#cmscore-role-error-message-text").html(err);
            $("#cmscore-role-button-error-message-in-card").show();
        }
    });
});

//Export close button in modal
$("#cmscore-role-export-close-button").on("click", function (e) {
    $("#cmscore-role-export-message").html("");
});

//Massive action Copy
$("#cmscore-role-massive-action-copy").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let CopyType: string = "";
    let Body: Ajax = {};

    if ($("#cmscore-role-copy-rows-all-checkbox").is(":checked")) {
        CopyType = "All";
    }
    else {
        CopyType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.role-table-checkbox-for-row:checked").each(function () {
                CheckedRows.push($(this).val());
            });
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows.push($(this).next().val());
            });
        }
        Body = {
            AjaxForString: CheckedRows.toString()
        };
    }

    RoleModel.CopyManyOrAll(CopyType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#cmscore-role-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows copied successfully`);
            $("#cmscore-role-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#cmscore-role-error-message-title").html("RoleModel.Copy(CopyType).subscribe(...)");
            $("#cmscore-role-error-message-text").html(err);
            $("#cmscore-role-button-error-message-in-card").show();
        }
    });
});

//Massive action Delete
$("#cmscore-role-massive-action-delete").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let DeleteType: string = "";
    let Body: Ajax = {};

    if ($("#cmscore-role-copy-rows-all-checkbox").is(":checked")) {
        DeleteType = "All";
    }
    else {
        DeleteType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.role-table-checkbox-for-row:checked").each(function () {
                CheckedRows.push($(this).val());
            });
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows.push($(this).next().val());
            });
        }
        Body = {
            AjaxForString: CheckedRows.toString()
        };
    }

    RoleModel.DeleteManyOrAll(DeleteType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#cmscore-role-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows deleted successfully`);
            $("#cmscore-role-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#cmscore-role-error-message-title").html("RoleModel.Copy(CopyType).subscribe(...)");
            $("#cmscore-role-error-message-text").html(err);
            $("#cmscore-role-button-error-message-in-card").show();
        }
    });
});