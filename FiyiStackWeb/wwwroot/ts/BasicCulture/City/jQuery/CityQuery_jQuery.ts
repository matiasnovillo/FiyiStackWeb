//Import libraries to use
import { CityModel, citymodelQuery } from "../../City/TsModels/City_TsModel";
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

//Last modification on: 20/12/2022 18:25:58

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

class CityQuery {
    static SelectAllPagedToHTML(request_citymodelQuery: citymodelQuery) {
        //Used for list view
        $(window).off("scroll");

        //Load some part of table
        var TableContent: string = `<thead class="thead-light">
    <tr>
        <th scope="col">
            <div>
                <input id="city-table-check-all" type="checkbox">
            </div>
        </th>
        <th scope="col">
            <button value="CityId" class="btn btn-outline-secondary btn-sm" type="button">
                CityId
            </button>
        </th>
        <th scope="col">
            <button value="Name" class="btn btn-outline-secondary btn-sm" type="button">
                Name
            </button>
        </th>
        <th scope="col">
            <button value="GeographicalCoordinates" class="btn btn-outline-secondary btn-sm" type="button">
                GeographicalCoordinates
            </button>
        </th>
        <th scope="col">
            <button value="Code" class="btn btn-outline-secondary btn-sm" type="button">
                Code
            </button>
        </th>
        <th scope="col">
            <button value="ProvinceId" class="btn btn-outline-secondary btn-sm" type="button">
                ProvinceId
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

        CityModel.SelectAllPaged(request_citymodelQuery).subscribe(
            {
                next: newrow => {
                    //Only works when there is data available
                    if (newrow.status != 204) {

                        const response_cityQuery = newrow.response as citymodelQuery;

                        //Set to default values if they are null
                        QueryString = response_cityQuery.QueryString ?? "";
                        ActualPageNumber = response_cityQuery.ActualPageNumber ?? 0;
                        RowsPerPage = response_cityQuery.RowsPerPage ?? 0;
                        SorterColumn = response_cityQuery.SorterColumn ?? "";
                        SortToggler = response_cityQuery.SortToggler ?? false;
                        TotalRows = response_cityQuery.TotalRows ?? 0;
                        TotalPages = response_cityQuery.TotalPages ?? 0;

                        //Query string
                        $("#basicculture-city-query-string").attr("placeholder", `Search... (${TotalRows} records)`);
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
                        if (response_cityQuery?.lstCityModel?.length === 0) {
                            $("#basicculture-city-lnk-previous-page-lg, #basicculture-city-lnk-previous-page").attr("disabled", "disabled");
                            $("#basicculture-city-lnk-first-page-lg, #basicculture-city-lnk-first-page").attr("disabled", "disabled");
                            $("#basicculture-city-lnk-next-page-lg, #basicculture-city-lnk-next-page").attr("disabled", "disabled");
                            $("#basicculture-city-lnk-last-page-lg, #basicculture-city-lnk-last-page").attr("disabled", "disabled");
                            $("#basicculture-city-total-pages-lg, #basicculture-city-total-pages").html("1");
                            $("#basicculture-city-actual-page-number-lg, #basicculture-city-actual-page-number").html("1");
                        }
                        //Read data book
                        response_cityQuery?.lstCityModel?.forEach(row => {

                            TableContent += `<tr>
    <!-- Checkbox -->
    <td>
        <div>
            <input class="city-table-checkbox-for-row" value="${row.CityId}" type="checkbox">
        </div>
    </td>
    <!-- Data -->
    <td class="text-left text-light text-truncate">
        <i class="fas fa-key"></i> ${row.CityId}
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-font">
            </i> ${row.Name}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-font">
            </i> ${row.GeographicalCoordinates}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-font">
            </i> ${row.Code}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-key"></i> ${row.ProvinceId}
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
        <a class="btn btn-icon-only text-primary" href="/BasicCulture/PageCityNonQuery?CityId=${row.CityId}" role="button" data-toggle="tooltip" data-original-title="Edit">
            <i class="fas fa-edit"></i>
        </a>
        <div class="dropdown">
            <button class="btn btn-icon-only text-danger" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-trash"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button class="dropdown-item text-danger basicculture-city-table-delete-button" value="${row.CityId}" type="button">
                    <i class="fas fa-exclamation-triangle"></i> Yes, delete
                </button>
            </div>
        </div>
        <div class="dropdown">
            <button class="btn btn-sm btn-icon-only text-primary" href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button type="button" class="dropdown-item basicculture-city-table-copy-button" value="${row.CityId}">
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
                           CityId <i class="fas fa-key"></i> ${row.CityId}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           Name <i class="fas fa-font"></i> ${row.Name}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           GeographicalCoordinates <i class="fas fa-font"></i> ${row.GeographicalCoordinates}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           Code <i class="fas fa-font"></i> ${row.Code}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           ProvinceId <i class="fas fa-key"></i> ${row.ProvinceId}
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
                            <div class="basicculture-city-checkbox-list list-row-unchecked mb-2">
                                <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="check">
                                    <i class="fas fa-circle text-white"></i>
                                </a>
                            </div>
                            <input type="hidden" value="${row.CityId}"/>
                            <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="/BasicCulture/PageCityNonQuery?CityId=${row.CityId}" role="button" data-toggle="tooltip" data-original-title="edit">
                                <i class="fas fa-edit text-primary"></i>
                            </a>
                            <div class="dropup">
                                <a class="icon icon-shape bg-white icon-sm text-primary rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <button value="${row.CityId}" class="dropdown-item text-primary basicculture-city-list-copy-button" type="button">
                                        <i class="fas fa-copy"></i>&nbsp;Copy
                                    </button>
                                    <button value="${row.CityId}" class="dropdown-item text-danger basicculture-city-list-delete-button" type="button">
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
                complete: () => {
                    //Execute ScrollDownNSearch function when the user scroll the page
                    $(window).on("scroll", ScrollDownNSearch);

                    //Add final content to TableContent
                    TableContent += `</tbody>
                                </table>`;

                    //Check button inside list view
                    $(".basicculture-city-checkbox-list").on("click", function (e) {
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
                        let CityId = $(this).val();
                        CityModel.DeleteByCityId(CityId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#basicculture-city-button-error-message-in-card").hide();
                                $("#basicculture-city-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row deleted successfully`);
                                $("#basicculture-city-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Related to error message
                                $("#basicculture-city-error-message-title").html("CityModel.DeleteByCityId(CityId).subscribe(...)");
                                $("#basicculture-city-error-message-text").html(err);
                                $("#basicculture-city-button-error-message-in-card").show();
                            }
                        });
                    });

                    //Copy button in table and list
                    $("div.dropdown-menu button.basicculture-city-table-copy-button, div.dropdown-menu button.basicculture-city-list-copy-button").on("click", function (e) {
                        let CityId = $(this).val();
                        CityModel.CopyByCityId(CityId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#basicculture-city-button-error-message-in-card").hide();
                                $("#basicculture-city-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row copied successfully`);
                                $("#basicculture-city-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Show error message
                                $("#basicculture-city-error-message-title").html("CityModel.CopyByCityId(CityId).subscribe(...)");
                                $("#basicculture-city-error-message-text").html(err);
                                $("#basicculture-city-button-error-message-in-card").show();
                            }
                        });
                    });
                },
                error: err => {
                    //Show error message
                    $("#basicculture-city-error-message-title").html("CityModel.SelectAllPaged(request_citymodelQ).subscribe(...)");
                    $("#basicculture-city-error-message-text").html(err);
                    $("#basicculture-city-button-error-message-in-card").show();
                }
            });
    }
}

function ValidateAndSearch() {

    //Hide error and OK message button
    $("#basicculture-city-button-error-message-in-card").hide();
    $("#basicculture-city-button-ok-message-in-card").hide();

    var _citymodelQuery: citymodelQuery = {
        QueryString,
        ActualPageNumber,
        RowsPerPage,
        SorterColumn,
        SortToggler,
        TotalRows,
        TotalPages
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
    //If undefined, set QueryString to "" value
    QueryString = ($(this).val()?.toString()) ?? "" ;
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
    let WindowsTopDistance: number = $(window).scrollTop() ?? 0;
    let WindowsBottomDistance: number = ($(window).scrollTop() ?? 0) + ($(window).innerHeight() ?? 0);
    let CardsFooterTopPosition: number = $("#basicculture-city-search-more-button-in-list").offset()?.top ?? 0;
    let CardsFooterBottomPosition: number = ($("#basicculture-city-search-more-button-in-list").offset()?.top ?? 0) + ($("#basicculture-city-search-more-button-in-list").outerHeight() ?? 0);

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
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#basicculture-city-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else{
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.city-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/BasicCulture/City/1/ExportAsPDF/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#basicculture-city-export-message").html("<strong>Exporting as PDF</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for PDF file
            $("#basicculture-city-export-message").html(`<a class="btn btn-icon btn-success" href="/PDFFiles/BasicCulture/City/City_${DateTimeNow.AjaxForString}.pdf" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#basicculture-city-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#basicculture-city-button-ok-message-in-card").show();
        },
        error: err => {
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
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#basicculture-city-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.city-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/BasicCulture/City/1/ExportAsExcel/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#basicculture-city-export-message").html("<strong>Exporting as Excel</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for Excel file
            $("#basicculture-city-export-message").html(`<a class="btn btn-icon btn-success" href="/ExcelFiles/BasicCulture/City/City_${DateTimeNow.AjaxForString}.xlsx" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#basicculture-city-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#basicculture-city-button-ok-message-in-card").show();
        },
        error: err => {
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
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#basicculture-city-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.city-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/BasicCulture/City/1/ExportAsCSV/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#basicculture-city-export-message").html("<strong>Exporting as CSV</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for CSV file
            $("#basicculture-city-export-message").html(`<a class="btn btn-icon btn-success" href="/CSVFiles/BasicCulture/City/City_${DateTimeNow.AjaxForString}.csv" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-csv"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#basicculture-city-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#basicculture-city-button-ok-message-in-card").show();
        },
        error: err => {
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
    let CopyType: string = "";
    let Body: Ajax = {};

    if ($("#basicculture-city-copy-rows-all-checkbox").is(":checked")) {
        CopyType = "All";
    }
    else {
        CopyType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.city-table-checkbox-for-row:checked").each(function () {
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

    CityModel.CopyManyOrAll(CopyType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#basicculture-city-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows copied successfully`);
            $("#basicculture-city-button-ok-message-in-card").show();
        },
        error: err => {
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
    let DeleteType: string = "";
    let Body: Ajax = {};

    if ($("#basicculture-city-copy-rows-all-checkbox").is(":checked")) {
        DeleteType = "All";
    }
    else {
        DeleteType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.city-table-checkbox-for-row:checked").each(function () {
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

    CityModel.DeleteManyOrAll(DeleteType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#basicculture-city-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows deleted successfully`);
            $("#basicculture-city-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#basicculture-city-error-message-title").html("CityModel.Copy(CopyType).subscribe(...)");
            $("#basicculture-city-error-message-text").html(err);
            $("#basicculture-city-button-error-message-in-card").show();
        }
    });
});