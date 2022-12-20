//Import libraries to use
import { ParameterModel, parametermodelQuery } from "../../Parameter/TsModels/Parameter_TsModel";
import * as $ from "jquery";
import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";

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

//Last modification on: 20/12/2022 18:17:18

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

class ParameterQuery {
    static SelectAllPagedToHTML(request_parametermodelQuery: parametermodelQuery) {
        //Used for list view
        $(window).off("scroll");

        //Load some part of table
        var TableContent: string = `<thead class="thead-light">
    <tr>
        <th scope="col">
            <div>
                <input id="parameter-table-check-all" type="checkbox">
            </div>
        </th>
        <th scope="col">
            <button value="ParameterId" class="btn btn-outline-secondary btn-sm" type="button">
                ParameterId
            </button>
        </th>
        <th scope="col">
            <button value="Name" class="btn btn-outline-secondary btn-sm" type="button">
                Name
            </button>
        </th>
        <th scope="col">
            <button value="Value" class="btn btn-outline-secondary btn-sm" type="button">
                Value
            </button>
        </th>
        <th scope="col">
            <button value="IsPrivate" class="btn btn-outline-secondary btn-sm" type="button">
                IsPrivate
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

        ParameterModel.SelectAllPaged(request_parametermodelQuery).subscribe(
            {
                next: newrow => {
                    //Only works when there is data available
                    if (newrow.status != 204) {

                        const response_parameterQuery = newrow.response as parametermodelQuery;

                        //Set to default values if they are null
                        QueryString = response_parameterQuery.QueryString ?? "";
                        ActualPageNumber = response_parameterQuery.ActualPageNumber ?? 0;
                        RowsPerPage = response_parameterQuery.RowsPerPage ?? 0;
                        SorterColumn = response_parameterQuery.SorterColumn ?? "";
                        SortToggler = response_parameterQuery.SortToggler ?? false;
                        TotalRows = response_parameterQuery.TotalRows ?? 0;
                        TotalPages = response_parameterQuery.TotalPages ?? 0;

                        //Query string
                        $("#basiccore-parameter-query-string").attr("placeholder", `Search... (${TotalRows} records)`);
                        //Total pages of pagination
                        $("#basiccore-parameter-total-pages-lg, #basiccore-parameter-total-pages").html(TotalPages.toString());
                        //Actual page number of pagination
                        $("#basiccore-parameter-actual-page-number-lg, #basiccore-parameter-actual-page-number").html(ActualPageNumber.toString());
                        //If we are at the final of book disable next and last buttons in pagination
                        if (ActualPageNumber === TotalPages) {
                            $("#basiccore-parameter-lnk-next-page-lg, #basiccore-parameter-lnk-next-page").attr("disabled", "disabled");
                            $("#basiccore-parameter-lnk-last-page-lg, #basiccore-parameter-lnk-last-page").attr("disabled", "disabled");
                            $("#basiccore-parameter-search-more-button-in-list").html("");
                        }
                        else {
                            $("#basiccore-parameter-lnk-next-page-lg, #basiccore-parameter-lnk-next-page").removeAttr("disabled");
                            $("#basiccore-parameter-lnk-last-page-lg, #basiccore-parameter-lnk-last-page").removeAttr("disabled");
                            //Scroll arrow for list view
                            $("#basiccore-parameter-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                        }
                        //If we are at the begining of the book disable previous and first buttons in pagination
                        if (ActualPageNumber === 1) {
                            $("#basiccore-parameter-lnk-previous-page-lg, #basiccore-parameter-lnk-previous-page").attr("disabled", "disabled");
                            $("#basiccore-parameter-lnk-first-page-lg, #basiccore-parameter-lnk-first-page").attr("disabled", "disabled");
                        }
                        else {
                            $("#basiccore-parameter-lnk-previous-page-lg, #basiccore-parameter-lnk-previous-page").removeAttr("disabled");
                            $("#basiccore-parameter-lnk-first-page-lg, #basiccore-parameter-lnk-first-page").removeAttr("disabled");
                        }
                        //If book is empty set to default pagination values
                        if (response_parameterQuery?.lstParameterModel?.length === 0) {
                            $("#basiccore-parameter-lnk-previous-page-lg, #basiccore-parameter-lnk-previous-page").attr("disabled", "disabled");
                            $("#basiccore-parameter-lnk-first-page-lg, #basiccore-parameter-lnk-first-page").attr("disabled", "disabled");
                            $("#basiccore-parameter-lnk-next-page-lg, #basiccore-parameter-lnk-next-page").attr("disabled", "disabled");
                            $("#basiccore-parameter-lnk-last-page-lg, #basiccore-parameter-lnk-last-page").attr("disabled", "disabled");
                            $("#basiccore-parameter-total-pages-lg, #basiccore-parameter-total-pages").html("1");
                            $("#basiccore-parameter-actual-page-number-lg, #basiccore-parameter-actual-page-number").html("1");
                        }
                        //Read data book
                        response_parameterQuery?.lstParameterModel?.forEach(row => {

                            TableContent += `<tr>
    <!-- Checkbox -->
    <td>
        <div>
            <input class="parameter-table-checkbox-for-row" value="${row.ParameterId}" type="checkbox">
        </div>
    </td>
    <!-- Data -->
    <td class="text-left text-light text-truncate">
        <i class="fas fa-key"></i> ${row.ParameterId}
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-font">
            </i> ${row.Name}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <i class="fas fa-font"></i> ${row.Value}
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-toggle-on"></i> ${row.IsPrivate == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
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
        <a class="btn btn-icon-only text-primary" href="/BasicCore/PageParameterNonQuery?ParameterId=${row.ParameterId}" role="button" data-toggle="tooltip" data-original-title="Edit">
            <i class="fas fa-edit"></i>
        </a>
        <div class="dropdown">
            <button class="btn btn-icon-only text-danger" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-trash"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button class="dropdown-item text-danger basiccore-parameter-table-delete-button" value="${row.ParameterId}" type="button">
                    <i class="fas fa-exclamation-triangle"></i> Yes, delete
                </button>
            </div>
        </div>
        <div class="dropdown">
            <button class="btn btn-sm btn-icon-only text-primary" href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button type="button" class="dropdown-item basiccore-parameter-table-copy-button" value="${row.ParameterId}">
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
                           ParameterId <i class="fas fa-key"></i> ${row.ParameterId}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           Name <i class="fas fa-font"></i> ${row.Name}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           Value <i class="fas fa-font"></i> ${row.Value}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           IsPrivate <i class="fas fa-toggle-on"></i> ${row.IsPrivate == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
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
                            <div class="basiccore-parameter-checkbox-list list-row-unchecked mb-2">
                                <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="check">
                                    <i class="fas fa-circle text-white"></i>
                                </a>
                            </div>
                            <input type="hidden" value="${row.ParameterId}"/>
                            <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="/BasicCore/PageParameterNonQuery?ParameterId=${row.ParameterId}" role="button" data-toggle="tooltip" data-original-title="edit">
                                <i class="fas fa-edit text-primary"></i>
                            </a>
                            <div class="dropup">
                                <a class="icon icon-shape bg-white icon-sm text-primary rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <button value="${row.ParameterId}" class="dropdown-item text-primary basiccore-parameter-list-copy-button" type="button">
                                        <i class="fas fa-copy"></i>&nbsp;Copy
                                    </button>
                                    <button value="${row.ParameterId}" class="dropdown-item text-danger basiccore-parameter-list-delete-button" type="button">
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
                            $("#basiccore-parameter-body-and-head-table").html("");
                            $("#basiccore-parameter-body-and-head-table").html(TableContent);
                        }
                        else {
                            //Used for list view
                            if (ScrollDownNSearchFlag) {
                                $("#basiccore-parameter-body-list").append(ListContent);
                                ScrollDownNSearchFlag = false;
                            }
                            else {
                                //Clear list view
                                $("#basiccore-parameter-body-list").html("");
                                $("#basiccore-parameter-body-list").html(ListContent);
                            }
                            }
                    }
                    else {
                        //Show error message
                        $("#basiccore-parameter-error-message-title").html("No registers found");
                        $("#basiccore-parameter-error-message-text").html("The server did not found any register. HTTP code 204");
                        $("#basiccore-parameter-button-error-message-in-card").show();
                    }
                },
                complete: () => {
                    //Execute ScrollDownNSearch function when the user scroll the page
                    $(window).on("scroll", ScrollDownNSearch);

                    //Add final content to TableContent
                    TableContent += `</tbody>
                                </table>`;

                    //Check button inside list view
                    $(".basiccore-parameter-checkbox-list").on("click", function (e) {
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
                    $("#parameter-table-check-all").on("click", function (e) { 
                        //Toggler
                        if ($("tr td div input.parameter-table-checkbox-for-row").is(":checked")) {
                            $("tr td div input.parameter-table-checkbox-for-row").removeAttr("checked");
                        }
                        else {
                            $("tr td div input.parameter-table-checkbox-for-row").attr("checked", "checked");
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
                    $("#basiccore-parameter-error-message-title").html("");
                    $("#basiccore-parameter-error-message-text").html("");
                    $("#basiccore-parameter-button-error-message-in-card").hide();

                    //Delete button in table and list
                    $("div.dropdown-menu button.basiccore-parameter-table-delete-button, div.dropdown-menu button.basiccore-parameter-list-delete-button").on("click", function (e) {
                        let ParameterId = $(this).val();
                        ParameterModel.DeleteByParameterId(ParameterId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#basiccore-parameter-button-error-message-in-card").hide();
                                $("#basiccore-parameter-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row deleted successfully`);
                                $("#basiccore-parameter-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Related to error message
                                $("#basiccore-parameter-error-message-title").html("ParameterModel.DeleteByParameterId(ParameterId).subscribe(...)");
                                $("#basiccore-parameter-error-message-text").html(err);
                                $("#basiccore-parameter-button-error-message-in-card").show();
                            }
                        });
                    });

                    //Copy button in table and list
                    $("div.dropdown-menu button.basiccore-parameter-table-copy-button, div.dropdown-menu button.basiccore-parameter-list-copy-button").on("click", function (e) {
                        let ParameterId = $(this).val();
                        ParameterModel.CopyByParameterId(ParameterId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#basiccore-parameter-button-error-message-in-card").hide();
                                $("#basiccore-parameter-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row copied successfully`);
                                $("#basiccore-parameter-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Show error message
                                $("#basiccore-parameter-error-message-title").html("ParameterModel.CopyByParameterId(ParameterId).subscribe(...)");
                                $("#basiccore-parameter-error-message-text").html(err);
                                $("#basiccore-parameter-button-error-message-in-card").show();
                            }
                        });
                    });
                },
                error: err => {
                    //Show error message
                    $("#basiccore-parameter-error-message-title").html("ParameterModel.SelectAllPaged(request_parametermodelQ).subscribe(...)");
                    $("#basiccore-parameter-error-message-text").html(err);
                    $("#basiccore-parameter-button-error-message-in-card").show();
                }
            });
    }
}

function ValidateAndSearch() {

    //Hide error and OK message button
    $("#basiccore-parameter-button-error-message-in-card").hide();
    $("#basiccore-parameter-button-ok-message-in-card").hide();

    var _parametermodelQuery: parametermodelQuery = {
        QueryString,
        ActualPageNumber,
        RowsPerPage,
        SorterColumn,
        SortToggler,
        TotalRows,
        TotalPages
    };

    ParameterQuery.SelectAllPagedToHTML(_parametermodelQuery);
}

//LOAD EVENT
if ($("#basiccore-parameter-title-page").html().includes("Query parameter")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "ParameterId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Disable first and previous links in pagination
    $("#basiccore-parameter-lnk-first-page-lg, #basiccore-parameter-lnk-first-page").attr("disabled", "disabled");
    $("#basiccore-parameter-lnk-previous-page-lg, #basiccore-parameter-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#basiccore-parameter-export-message").html("");
    $("#basiccore-parameter-button-error-message-in-card").hide();
    $("#basiccore-parameter-button-ok-message-in-card").hide();

    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#basiccore-parameter-search-button")).on("click", function () {
    ValidateAndSearch();
});

//Query string
$("#basiccore-parameter-query-string").on("change keyup input", function (e) {
    //If undefined, set QueryString to "" value
    QueryString = ($(this).val()?.toString()) ?? "" ;
    ValidateAndSearch();
});

//First page link in pagination
$("#basiccore-parameter-lnk-first-page-lg, #basiccore-parameter-lnk-first-page").on("click", function (e) {
    ActualPageNumber = 1;
    ValidateAndSearch();
});

//Previous page link in pagination
$("#basiccore-parameter-lnk-previous-page-lg, #basiccore-parameter-lnk-previous-page").on("click", function (e) {
    ActualPageNumber -= 1;
    ValidateAndSearch();
});

//Next page link in pagination
$("#basiccore-parameter-lnk-next-page-lg, #basiccore-parameter-lnk-next-page").on("click", function (e) {
    ActualPageNumber += 1;
    ValidateAndSearch();
});

//Last page link in pagination
$("#basiccore-parameter-lnk-last-page-lg, #basiccore-parameter-lnk-last-page").on("click", function (e) {
    ActualPageNumber = TotalPages;
    ValidateAndSearch();
});

//Table view button
$("#basiccore-parameter-table-view-button").on("click", function (e) {
    $("#basiccore-parameter-view-toggler").val("Table");
    ViewToggler = "Table";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear table view
    $("#basiccore-parameter-body-and-head-table").html("");
    ValidateAndSearch();
});

//List view button
$("#basiccore-parameter-list-view-button").on("click", function (e) {
    $("#basiccore-parameter-view-toggler").val("List");
    ViewToggler = "List";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear list view
    $("#basiccore-parameter-body-list").html("");
    ValidateAndSearch();
});

//Used to list view
function ScrollDownNSearch() {
    let WindowsTopDistance: number = $(window).scrollTop() ?? 0;
    let WindowsBottomDistance: number = ($(window).scrollTop() ?? 0) + ($(window).innerHeight() ?? 0);
    let CardsFooterTopPosition: number = $("#basiccore-parameter-search-more-button-in-list").offset()?.top ?? 0;
    let CardsFooterBottomPosition: number = ($("#basiccore-parameter-search-more-button-in-list").offset()?.top ?? 0) + ($("#basiccore-parameter-search-more-button-in-list").outerHeight() ?? 0);

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
$("#basiccore-parameter-export-as-pdf").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#basiccore-parameter-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else{
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.parameter-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/BasicCore/Parameter/1/ExportAsPDF/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#basiccore-parameter-export-message").html("<strong>Exporting as PDF</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for PDF file
            $("#basiccore-parameter-export-message").html(`<a class="btn btn-icon btn-success" href="/PDFFiles/BasicCore/Parameter/Parameter_${DateTimeNow.AjaxForString}.pdf" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#basiccore-parameter-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#basiccore-parameter-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basiccore-parameter-error-message-title").html("Rx.from(ajax.post('/api/BasicCore/Parameter/1/ExportAsPDF/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basiccore-parameter-error-message-text").html(err);
            $("#basiccore-parameter-button-error-message-in-card").show();
        }
    });
});

//Export as Excel button
$("#basiccore-parameter-export-as-excel").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#basiccore-parameter-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.parameter-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/BasicCore/Parameter/1/ExportAsExcel/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#basiccore-parameter-export-message").html("<strong>Exporting as Excel</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for Excel file
            $("#basiccore-parameter-export-message").html(`<a class="btn btn-icon btn-success" href="/ExcelFiles/BasicCore/Parameter/Parameter_${DateTimeNow.AjaxForString}.xlsx" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#basiccore-parameter-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#basiccore-parameter-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basiccore-parameter-error-message-title").html("Rx.from(ajax.post('/api/BasicCore/Parameter/1/ExportAsExcel/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basiccore-parameter-error-message-text").html(err);
            $("#basiccore-parameter-button-error-message-in-card").show();
        }
    });
});

//Export as CSV button
$("#basiccore-parameter-export-as-csv").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#basiccore-parameter-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.parameter-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/BasicCore/Parameter/1/ExportAsCSV/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#basiccore-parameter-export-message").html("<strong>Exporting as CSV</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for CSV file
            $("#basiccore-parameter-export-message").html(`<a class="btn btn-icon btn-success" href="/CSVFiles/BasicCore/Parameter/Parameter_${DateTimeNow.AjaxForString}.csv" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-csv"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#basiccore-parameter-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#basiccore-parameter-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basiccore-parameter-error-message-title").html("Rx.from(ajax.post('/api/BasicCore/Parameter/1/ExportAsCSV/' + ExportationType, Body, Header)).subscribe(...)");
            $("#basiccore-parameter-error-message-text").html(err);
            $("#basiccore-parameter-button-error-message-in-card").show();
        }
    });
});

//Export close button in modal
$("#basiccore-parameter-export-close-button").on("click", function (e) {
    $("#basiccore-parameter-export-message").html("");
});

//Massive action Copy
$("#basiccore-parameter-massive-action-copy").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let CopyType: string = "";
    let Body: Ajax = {};

    if ($("#basiccore-parameter-copy-rows-all-checkbox").is(":checked")) {
        CopyType = "All";
    }
    else {
        CopyType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.parameter-table-checkbox-for-row:checked").each(function () {
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

    ParameterModel.CopyManyOrAll(CopyType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#basiccore-parameter-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows copied successfully`);
            $("#basiccore-parameter-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basiccore-parameter-error-message-title").html("ParameterModel.Copy(CopyType).subscribe(...)");
            $("#basiccore-parameter-error-message-text").html(err);
            $("#basiccore-parameter-button-error-message-in-card").show();
        }
    });
});

//Massive action Delete
$("#basiccore-parameter-massive-action-delete").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let DeleteType: string = "";
    let Body: Ajax = {};

    if ($("#basiccore-parameter-copy-rows-all-checkbox").is(":checked")) {
        DeleteType = "All";
    }
    else {
        DeleteType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.parameter-table-checkbox-for-row:checked").each(function () {
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

    ParameterModel.DeleteManyOrAll(DeleteType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#basiccore-parameter-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows deleted successfully`);
            $("#basiccore-parameter-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basiccore-parameter-error-message-title").html("ParameterModel.Copy(CopyType).subscribe(...)");
            $("#basiccore-parameter-error-message-text").html(err);
            $("#basiccore-parameter-button-error-message-in-card").show();
        }
    });
});