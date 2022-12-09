//Import libraries to use
import { SexModel, sexmodelQuery } from "../../Sex/TsModels/Sex_TsModel";
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

//Last modification on: 09/12/2022 19:23:30

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

class SexQuery {
    static SelectAllPagedToHTML(request_sexmodelQuery: sexmodelQuery) {
        //Used for list view
        $(window).off("scroll");

        //Load some part of table
        var TableContent: string = `<thead class="thead-light">
    <tr>
        <th scope="col">
            <div>
                <input id="sex-table-check-all" type="checkbox">
            </div>
        </th>
        <th scope="col">
            <button value="SexId" class="btn btn-outline-secondary btn-sm" type="button">
                SexId
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

        SexModel.SelectAllPaged(request_sexmodelQuery).subscribe(
            {
                next: newrow => {
                    //Only works when there is data available
                    if (newrow.status != 204) {

                        const response_sexQuery = newrow.response as sexmodelQuery;

                        //Set to default values if they are null
                        QueryString = response_sexQuery.QueryString ?? "";
                        ActualPageNumber = response_sexQuery.ActualPageNumber ?? 0;
                        RowsPerPage = response_sexQuery.RowsPerPage ?? 0;
                        SorterColumn = response_sexQuery.SorterColumn ?? "";
                        SortToggler = response_sexQuery.SortToggler ?? false;
                        TotalRows = response_sexQuery.TotalRows ?? 0;
                        TotalPages = response_sexQuery.TotalPages ?? 0;

                        //Query string
                        $("#basicculture-sex-query-string").attr("placeholder", `Search... (${TotalRows} records)`);
                        //Total pages of pagination
                        $("#basicculture-sex-total-pages-lg, #basicculture-sex-total-pages").html(TotalPages.toString());
                        //Actual page number of pagination
                        $("#basicculture-sex-actual-page-number-lg, #basicculture-sex-actual-page-number").html(ActualPageNumber.toString());
                        //If we are at the final of book disable next and last buttons in pagination
                        if (ActualPageNumber === TotalPages) {
                            $("#basicculture-sex-lnk-next-page-lg, #basicculture-sex-lnk-next-page").attr("disabled", "disabled");
                            $("#basicculture-sex-lnk-last-page-lg, #basicculture-sex-lnk-last-page").attr("disabled", "disabled");
                            $("#basicculture-sex-search-more-button-in-list").html("");
                        }
                        else {
                            $("#basicculture-sex-lnk-next-page-lg, #basicculture-sex-lnk-next-page").removeAttr("disabled");
                            $("#basicculture-sex-lnk-last-page-lg, #basicculture-sex-lnk-last-page").removeAttr("disabled");
                            //Scroll arrow for list view
                            $("#basicculture-sex-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                        }
                        //If we are at the begining of the book disable previous and first buttons in pagination
                        if (ActualPageNumber === 1) {
                            $("#basicculture-sex-lnk-previous-page-lg, #basicculture-sex-lnk-previous-page").attr("disabled", "disabled");
                            $("#basicculture-sex-lnk-first-page-lg, #basicculture-sex-lnk-first-page").attr("disabled", "disabled");
                        }
                        else {
                            $("#basicculture-sex-lnk-previous-page-lg, #basicculture-sex-lnk-previous-page").removeAttr("disabled");
                            $("#basicculture-sex-lnk-first-page-lg, #basicculture-sex-lnk-first-page").removeAttr("disabled");
                        }
                        //If book is empty set to default pagination values
                        if (response_sexQuery?.lstSexModel?.length === 0) {
                            $("#basicculture-sex-lnk-previous-page-lg, #basicculture-sex-lnk-previous-page").attr("disabled", "disabled");
                            $("#basicculture-sex-lnk-first-page-lg, #basicculture-sex-lnk-first-page").attr("disabled", "disabled");
                            $("#basicculture-sex-lnk-next-page-lg, #basicculture-sex-lnk-next-page").attr("disabled", "disabled");
                            $("#basicculture-sex-lnk-last-page-lg, #basicculture-sex-lnk-last-page").attr("disabled", "disabled");
                            $("#basicculture-sex-total-pages-lg, #basicculture-sex-total-pages").html("1");
                            $("#basicculture-sex-actual-page-number-lg, #basicculture-sex-actual-page-number").html("1");
                        }
                        //Read data book
                        response_sexQuery?.lstSexModel?.forEach(row => {

                            TableContent += `<tr>
    <!-- Checkbox -->
    <td>
        <div>
            <input class="sex-table-checkbox-for-row" value="${row.SexId}" type="checkbox">
        </div>
    </td>
    <!-- Data -->
    <td class="text-left text-light text-truncate">
        <i class="fas fa-key"></i> ${row.SexId}
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
        <a class="btn btn-icon-only text-primary" href="/BasicCulture/PageSexNonQuery?SexId=${row.SexId}" role="button" data-toggle="tooltip" data-original-title="Edit">
            <i class="fas fa-edit"></i>
        </a>
        <div class="dropdown">
            <button class="btn btn-icon-only text-danger" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-trash"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button class="dropdown-item text-danger basicculture-sex-table-delete-button" value="${row.SexId}" type="button">
                    <i class="fas fa-exclamation-triangle"></i> Yes, delete
                </button>
            </div>
        </div>
        <div class="dropdown">
            <button class="btn btn-sm btn-icon-only text-primary" href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button type="button" class="dropdown-item basicculture-sex-table-copy-button" value="${row.SexId}">
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
                           SexId <i class="fas fa-key"></i> ${row.SexId}
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
                            <div class="basicculture-sex-checkbox-list list-row-unchecked mb-2">
                                <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="check">
                                    <i class="fas fa-circle text-white"></i>
                                </a>
                            </div>
                            <input type="hidden" value="${row.SexId}"/>
                            <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="/BasicCulture/PageSexNonQuery?SexId=${row.SexId}" role="button" data-toggle="tooltip" data-original-title="edit">
                                <i class="fas fa-edit text-primary"></i>
                            </a>
                            <div class="dropup">
                                <a class="icon icon-shape bg-white icon-sm text-primary rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <button value="${row.SexId}" class="dropdown-item text-primary basicculture-sex-list-copy-button" type="button">
                                        <i class="fas fa-copy"></i>&nbsp;Copy
                                    </button>
                                    <button value="${row.SexId}" class="dropdown-item text-danger basicculture-sex-list-delete-button" type="button">
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
                            $("#basicculture-sex-body-and-head-table").html("");
                            $("#basicculture-sex-body-and-head-table").html(TableContent);
                        }
                        else {
                            //Used for list view
                            if (ScrollDownNSearchFlag) {
                                $("#basicculture-sex-body-list").append(ListContent);
                                ScrollDownNSearchFlag = false;
                            }
                            else {
                                //Clear list view
                                $("#basicculture-sex-body-list").html("");
                                $("#basicculture-sex-body-list").html(ListContent);
                            }
                            }
                    }
                    else {
                        //Show error message
                        $("#basicculture-sex-error-message-title").html("No registers found");
                        $("#basicculture-sex-error-message-text").html("The server did not found any register. HTTP code 204");
                        $("#basicculture-sex-button-error-message-in-card").show();
                    }
                },
                complete: () => {
                    //Execute ScrollDownNSearch function when the user scroll the page
                    $(window).on("scroll", ScrollDownNSearch);

                    //Add final content to TableContent
                    TableContent += `</tbody>
                                </table>`;

                    //Check button inside list view
                    $(".basicculture-sex-checkbox-list").on("click", function (e) {
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
                    $("#sex-table-check-all").on("click", function (e) { 
                        //Toggler
                        if ($("tr td div input.sex-table-checkbox-for-row").is(":checked")) {
                            $("tr td div input.sex-table-checkbox-for-row").removeAttr("checked");
                        }
                        else {
                            $("tr td div input.sex-table-checkbox-for-row").attr("checked", "checked");
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
                    $("#basicculture-sex-error-message-title").html("");
                    $("#basicculture-sex-error-message-text").html("");
                    $("#basicculture-sex-button-error-message-in-card").hide();

                    //Delete button in table and list
                    $("div.dropdown-menu button.basicculture-sex-table-delete-button, div.dropdown-menu button.basicculture-sex-list-delete-button").on("click", function (e) {
                        let SexId = $(this).val();
                        SexModel.DeleteBySexId(SexId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#basicculture-sex-button-error-message-in-card").hide();
                                $("#basicculture-sex-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row deleted successfully`);
                                $("#basicculture-sex-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Related to error message
                                $("#basicculture-sex-error-message-title").html("SexModel.DeleteBySexId(SexId).subscribe(...)");
                                $("#basicculture-sex-error-message-text").html(err);
                                $("#basicculture-sex-button-error-message-in-card").show();
                            }
                        });
                    });

                    //Copy button in table and list
                    $("div.dropdown-menu button.basicculture-sex-table-copy-button, div.dropdown-menu button.basicculture-sex-list-copy-button").on("click", function (e) {
                        let SexId = $(this).val();
                        SexModel.CopyBySexId(SexId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#basicculture-sex-button-error-message-in-card").hide();
                                $("#basicculture-sex-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row copied successfully`);
                                $("#basicculture-sex-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Show error message
                                $("#basicculture-sex-error-message-title").html("SexModel.CopyBySexId(SexId).subscribe(...)");
                                $("#basicculture-sex-error-message-text").html(err);
                                $("#basicculture-sex-button-error-message-in-card").show();
                            }
                        });
                    });
                },
                error: err => {
                    //Show error message
                    $("#basicculture-sex-error-message-title").html("SexModel.SelectAllPaged(request_sexmodelQ).subscribe(...)");
                    $("#basicculture-sex-error-message-text").html(err);
                    $("#basicculture-sex-button-error-message-in-card").show();
                }
            });
    }
}

function ValidateAndSearch() {

    //Hide error and OK message button
    $("#basicculture-sex-button-error-message-in-card").hide();
    $("#basicculture-sex-button-ok-message-in-card").hide();

    var _sexmodelQuery: sexmodelQuery = {
        QueryString,
        ActualPageNumber,
        RowsPerPage,
        SorterColumn,
        SortToggler,
        TotalRows,
        TotalPages
    };

    SexQuery.SelectAllPagedToHTML(_sexmodelQuery);
}

//LOAD EVENT
if ($("#basicculture-sex-title-page").html().includes("Query sex")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "SexId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Disable first and previous links in pagination
    $("#basicculture-sex-lnk-first-page-lg, #basicculture-sex-lnk-first-page").attr("disabled", "disabled");
    $("#basicculture-sex-lnk-previous-page-lg, #basicculture-sex-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#basicculture-sex-export-message").html("");
    $("#basicculture-sex-button-error-message-in-card").hide();
    $("#basicculture-sex-button-ok-message-in-card").hide();

    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#basicculture-sex-search-button")).on("click", function () {
    ValidateAndSearch();
});

//Query string
$("#basicculture-sex-query-string").on("change keyup input", function (e) {
    //If undefined, set QueryString to "" value
    QueryString = ($(this).val()?.toString()) ?? "" ;
    ValidateAndSearch();
});

//First page link in pagination
$("#basicculture-sex-lnk-first-page-lg, #basicculture-sex-lnk-first-page").on("click", function (e) {
    ActualPageNumber = 1;
    ValidateAndSearch();
});

//Previous page link in pagination
$("#basicculture-sex-lnk-previous-page-lg, #basicculture-sex-lnk-previous-page").on("click", function (e) {
    ActualPageNumber -= 1;
    ValidateAndSearch();
});

//Next page link in pagination
$("#basicculture-sex-lnk-next-page-lg, #basicculture-sex-lnk-next-page").on("click", function (e) {
    ActualPageNumber += 1;
    ValidateAndSearch();
});

//Last page link in pagination
$("#basicculture-sex-lnk-last-page-lg, #basicculture-sex-lnk-last-page").on("click", function (e) {
    ActualPageNumber = TotalPages;
    ValidateAndSearch();
});

//Table view button
$("#basicculture-sex-table-view-button").on("click", function (e) {
    $("#basicculture-sex-view-toggler").val("Table");
    ViewToggler = "Table";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear table view
    $("#basicculture-sex-body-and-head-table").html("");
    ValidateAndSearch();
});

//List view button
$("#basicculture-sex-list-view-button").on("click", function (e) {
    $("#basicculture-sex-view-toggler").val("List");
    ViewToggler = "List";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear list view
    $("#basicculture-sex-body-list").html("");
    ValidateAndSearch();
});

//Used to list view
function ScrollDownNSearch() {
    let WindowsTopDistance: number = $(window).scrollTop() ?? 0;
    let WindowsBottomDistance: number = ($(window).scrollTop() ?? 0) + ($(window).innerHeight() ?? 0);
    let CardsFooterTopPosition: number = $("#basicculture-sex-search-more-button-in-list").offset()?.top ?? 0;
    let CardsFooterBottomPosition: number = ($("#basicculture-sex-search-more-button-in-list").offset()?.top ?? 0) + ($("#basicculture-sex-search-more-button-in-list").outerHeight() ?? 0);

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
$("#basicculture-sex-export-as-pdf").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#basicculture-sex-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else{
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.sex-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/BasicCulture/Sex/1/ExportAsPDF/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#basicculture-sex-export-message").html("<strong>Exporting as PDF</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for PDF file
            $("#basicculture-sex-export-message").html(`<a class="btn btn-icon btn-success" href="/PDFFiles/BasicCulture/Sex/Sex_${DateTimeNow.AjaxForString}.pdf" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#basicculture-sex-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#basicculture-sex-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basicculture-sex-error-message-title").html("Rx.from(ajax.post('/api/BasicCulture/Sex/1/ExportAsPDF/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basicculture-sex-error-message-text").html(err);
            $("#basicculture-sex-button-error-message-in-card").show();
        }
    });
});

//Export as Excel button
$("#basicculture-sex-export-as-excel").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#basicculture-sex-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.sex-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/BasicCulture/Sex/1/ExportAsExcel/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#basicculture-sex-export-message").html("<strong>Exporting as Excel</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for Excel file
            $("#basicculture-sex-export-message").html(`<a class="btn btn-icon btn-success" href="/ExcelFiles/BasicCulture/Sex/Sex_${DateTimeNow.AjaxForString}.xlsx" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#basicculture-sex-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#basicculture-sex-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basicculture-sex-error-message-title").html("Rx.from(ajax.post('/api/BasicCulture/Sex/1/ExportAsExcel/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basicculture-sex-error-message-text").html(err);
            $("#basicculture-sex-button-error-message-in-card").show();
        }
    });
});

//Export as CSV button
$("#basicculture-sex-export-as-csv").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#basicculture-sex-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.sex-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/BasicCulture/Sex/1/ExportAsCSV/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#basicculture-sex-export-message").html("<strong>Exporting as CSV</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for CSV file
            $("#basicculture-sex-export-message").html(`<a class="btn btn-icon btn-success" href="/CSVFiles/BasicCulture/Sex/Sex_${DateTimeNow.AjaxForString}.csv" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-csv"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#basicculture-sex-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#basicculture-sex-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basicculture-sex-error-message-title").html("Rx.from(ajax.post('/api/BasicCulture/Sex/1/ExportAsCSV/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basicculture-sex-error-message-text").html(err);
            $("#basicculture-sex-button-error-message-in-card").show();
        }
    });
});

//Export close button in modal
$("#basicculture-sex-export-close-button").on("click", function (e) {
    $("#basicculture-sex-export-message").html("");
});

//Massive action Copy
$("#basicculture-sex-massive-action-copy").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let CopyType: string = "";
    let Body: Ajax = {};

    if ($("#basicculture-sex-copy-rows-all-checkbox").is(":checked")) {
        CopyType = "All";
    }
    else {
        CopyType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.sex-table-checkbox-for-row:checked").each(function () {
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

    SexModel.CopyManyOrAll(CopyType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#basicculture-sex-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows copied successfully`);
            $("#basicculture-sex-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basicculture-sex-error-message-title").html("SexModel.Copy(CopyType).subscribe(...)");
            $("#basicculture-sex-error-message-text").html(err);
            $("#basicculture-sex-button-error-message-in-card").show();
        }
    });
});

//Massive action Delete
$("#basicculture-sex-massive-action-delete").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let DeleteType: string = "";
    let Body: Ajax = {};

    if ($("#basicculture-sex-copy-rows-all-checkbox").is(":checked")) {
        DeleteType = "All";
    }
    else {
        DeleteType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.sex-table-checkbox-for-row:checked").each(function () {
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

    SexModel.DeleteManyOrAll(DeleteType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#basicculture-sex-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows deleted successfully`);
            $("#basicculture-sex-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basicculture-sex-error-message-title").html("SexModel.Copy(CopyType).subscribe(...)");
            $("#basicculture-sex-error-message-text").html(err);
            $("#basicculture-sex-button-error-message-in-card").show();
        }
    });
});