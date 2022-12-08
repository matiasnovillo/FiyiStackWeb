//Import libraries to use
import { UserModel, usermodelQuery } from "../../User/TsModels/User_TsModel";
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

//Last modification on: 08/12/2022 10:43:01

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

class UserQuery {
    static SelectAllPagedToHTML(request_usermodelQuery: usermodelQuery) {
        //Used for list view
        $(window).off("scroll");

        //Load some part of table
        var TableContent: string = `<thead class="thead-light">
    <tr>
        <th scope="col">
            <div>
                <input id="user-table-check-all" type="checkbox">
            </div>
        </th>
        <th scope="col">
            <button value="UserId" class="btn btn-outline-secondary btn-sm" type="button">
                UserId
            </button>
        </th>
        <th scope="col">
            <button value="FantasyName" class="btn btn-outline-secondary btn-sm" type="button">
                FantasyName
            </button>
        </th>
        <th scope="col">
            <button value="Email" class="btn btn-outline-secondary btn-sm" type="button">
                Email
            </button>
        </th>
        <th scope="col">
            <button value="Password" class="btn btn-outline-secondary btn-sm" type="button">
                Password
            </button>
        </th>
        <th scope="col">
            <button value="ProfileImageURL" class="btn btn-outline-secondary btn-sm" type="button">
                ProfileImageURL
            </button>
        </th>
        <th scope="col">
            <button value="DateTimeBirth" class="btn btn-outline-secondary btn-sm" type="button">
                DateTimeBirth
            </button>
        </th>
        <th scope="col">
            <button value="VerificationToken" class="btn btn-outline-secondary btn-sm" type="button">
                VerificationToken
            </button>
        </th>
        <th scope="col">
            <button value="CookieToken" class="btn btn-outline-secondary btn-sm" type="button">
                CookieToken
            </button>
        </th>
        <th scope="col">
            <button value="RoleId" class="btn btn-outline-secondary btn-sm" type="button">
                RoleId
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

        UserModel.SelectAllPaged(request_usermodelQuery).subscribe(
            {
                next: newrow => {
                    //Only works when there is data available
                    if (newrow.status != 204) {

                        const response_userQuery = newrow.response as usermodelQuery;

                        //Set to default values if they are null
                        QueryString = response_userQuery.QueryString ?? "";
                        ActualPageNumber = response_userQuery.ActualPageNumber ?? 0;
                        RowsPerPage = response_userQuery.RowsPerPage ?? 0;
                        SorterColumn = response_userQuery.SorterColumn ?? "";
                        SortToggler = response_userQuery.SortToggler ?? false;
                        TotalRows = response_userQuery.TotalRows ?? 0;
                        TotalPages = response_userQuery.TotalPages ?? 0;

                        //Query string
                        $("#cmscore-user-query-string").attr("placeholder", `Search... (${TotalRows} records)`);
                        //Total pages of pagination
                        $("#cmscore-user-total-pages-lg, #cmscore-user-total-pages").html(TotalPages.toString());
                        //Actual page number of pagination
                        $("#cmscore-user-actual-page-number-lg, #cmscore-user-actual-page-number").html(ActualPageNumber.toString());
                        //If we are at the final of book disable next and last buttons in pagination
                        if (ActualPageNumber === TotalPages) {
                            $("#cmscore-user-lnk-next-page-lg, #cmscore-user-lnk-next-page").attr("disabled", "disabled");
                            $("#cmscore-user-lnk-last-page-lg, #cmscore-user-lnk-last-page").attr("disabled", "disabled");
                            $("#cmscore-user-search-more-button-in-list").html("");
                        }
                        else {
                            $("#cmscore-user-lnk-next-page-lg, #cmscore-user-lnk-next-page").removeAttr("disabled");
                            $("#cmscore-user-lnk-last-page-lg, #cmscore-user-lnk-last-page").removeAttr("disabled");
                            //Scroll arrow for list view
                            $("#cmscore-user-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                        }
                        //If we are at the begining of the book disable previous and first buttons in pagination
                        if (ActualPageNumber === 1) {
                            $("#cmscore-user-lnk-previous-page-lg, #cmscore-user-lnk-previous-page").attr("disabled", "disabled");
                            $("#cmscore-user-lnk-first-page-lg, #cmscore-user-lnk-first-page").attr("disabled", "disabled");
                        }
                        else {
                            $("#cmscore-user-lnk-previous-page-lg, #cmscore-user-lnk-previous-page").removeAttr("disabled");
                            $("#cmscore-user-lnk-first-page-lg, #cmscore-user-lnk-first-page").removeAttr("disabled");
                        }
                        //If book is empty set to default pagination values
                        if (response_userQuery?.lstUserModel?.length === 0) {
                            $("#cmscore-user-lnk-previous-page-lg, #cmscore-user-lnk-previous-page").attr("disabled", "disabled");
                            $("#cmscore-user-lnk-first-page-lg, #cmscore-user-lnk-first-page").attr("disabled", "disabled");
                            $("#cmscore-user-lnk-next-page-lg, #cmscore-user-lnk-next-page").attr("disabled", "disabled");
                            $("#cmscore-user-lnk-last-page-lg, #cmscore-user-lnk-last-page").attr("disabled", "disabled");
                            $("#cmscore-user-total-pages-lg, #cmscore-user-total-pages").html("1");
                            $("#cmscore-user-actual-page-number-lg, #cmscore-user-actual-page-number").html("1");
                        }
                        //Read data book
                        response_userQuery?.lstUserModel?.forEach(row => {

                            TableContent += `<tr>
    <!-- Checkbox -->
    <td>
        <div>
            <input class="user-table-checkbox-for-row" value="${row.UserId}" type="checkbox">
        </div>
    </td>
    <!-- Data -->
    <td class="text-left text-light text-truncate">
        <i class="fas fa-key"></i> ${row.UserId}
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-font">
            </i> ${row.FantasyName}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <a href="mailto:${row.Email}">
            <strong>
                <i class="fas fa-at"></i> ${row.Email}
            </strong>
        </a>
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-asterisk"></i> ${row.Password}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <a href="${row.ProfileImageURL}" target="_blank">
            <strong>
                <i class="fas fa-globe"></i> ${row.ProfileImageURL}
            </strong>
        </a>
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-calendar"></i> ${row.DateTimeBirth}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-font">
            </i> ${row.VerificationToken}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-font">
            </i> ${row.CookieToken}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-key"></i> ${row.RoleId}
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
        <a class="btn btn-icon-only text-primary" href="/CMSCore/PageUserNonQuery?UserId=${row.UserId}" role="button" data-toggle="tooltip" data-original-title="Edit">
            <i class="fas fa-edit"></i>
        </a>
        <div class="dropdown">
            <button class="btn btn-icon-only text-danger" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-trash"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button class="dropdown-item text-danger cmscore-user-table-delete-button" value="${row.UserId}" type="button">
                    <i class="fas fa-exclamation-triangle"></i> Yes, delete
                </button>
            </div>
        </div>
        <div class="dropdown">
            <button class="btn btn-sm btn-icon-only text-primary" href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button type="button" class="dropdown-item cmscore-user-table-copy-button" value="${row.UserId}">
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
                           UserId <i class="fas fa-key"></i> ${row.UserId}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           FantasyName <i class="fas fa-font"></i> ${row.FantasyName}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                            <a style="color:#FFFFFF" href="mailto:${row.Email}">
                               Email <i class="fas fa-at"></i> ${row.Email}
                            <a/>
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           Password <i class="fas fa-asterisk"></i> ${row.Password}
                        </span>
                        <br/>
                        <span class="mb-4 text-truncate">
                            <a href="${row.ProfileImageURL}" style="color:#FFFFFF" target="_blank">
                               ProfileImageURL <i class="fas fa-globe"></i> ${row.ProfileImageURL}
                            </a>
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           DateTimeBirth <i class="fas fa-calendar"></i> ${row.DateTimeBirth}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           VerificationToken <i class="fas fa-font"></i> ${row.VerificationToken}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           CookieToken <i class="fas fa-font"></i> ${row.CookieToken}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           RoleId <i class="fas fa-key"></i> ${row.RoleId}
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
                            <div class="cmscore-user-checkbox-list list-row-unchecked mb-2">
                                <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="check">
                                    <i class="fas fa-circle text-white"></i>
                                </a>
                            </div>
                            <input type="hidden" value="${row.UserId}"/>
                            <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="/CMSCore/PageUserNonQuery?UserId=${row.UserId}" role="button" data-toggle="tooltip" data-original-title="edit">
                                <i class="fas fa-edit text-primary"></i>
                            </a>
                            <div class="dropup">
                                <a class="icon icon-shape bg-white icon-sm text-primary rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <button value="${row.UserId}" class="dropdown-item text-primary cmscore-user-list-copy-button" type="button">
                                        <i class="fas fa-copy"></i>&nbsp;Copy
                                    </button>
                                    <button value="${row.UserId}" class="dropdown-item text-danger cmscore-user-list-delete-button" type="button">
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
                            $("#cmscore-user-body-and-head-table").html("");
                            $("#cmscore-user-body-and-head-table").html(TableContent);
                        }
                        else {
                            //Used for list view
                            if (ScrollDownNSearchFlag) {
                                $("#cmscore-user-body-list").append(ListContent);
                                ScrollDownNSearchFlag = false;
                            }
                            else {
                                //Clear list view
                                $("#cmscore-user-body-list").html("");
                                $("#cmscore-user-body-list").html(ListContent);
                            }
                            }
                    }
                    else {
                        //Show error message
                        $("#cmscore-user-error-message-title").html("No registers found");
                        $("#cmscore-user-error-message-text").html("The server did not found any register. HTTP code 204");
                        $("#cmscore-user-button-error-message-in-card").show();
                    }
                },
                complete: () => {
                    //Execute ScrollDownNSearch function when the user scroll the page
                    $(window).on("scroll", ScrollDownNSearch);

                    //Add final content to TableContent
                    TableContent += `</tbody>
                                </table>`;

                    //Check button inside list view
                    $(".cmscore-user-checkbox-list").on("click", function (e) {
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
                    $("#user-table-check-all").on("click", function (e) { 
                        //Toggler
                        if ($("tr td div input.user-table-checkbox-for-row").is(":checked")) {
                            $("tr td div input.user-table-checkbox-for-row").removeAttr("checked");
                        }
                        else {
                            $("tr td div input.user-table-checkbox-for-row").attr("checked", "checked");
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
                    $("#cmscore-user-error-message-title").html("");
                    $("#cmscore-user-error-message-text").html("");
                    $("#cmscore-user-button-error-message-in-card").hide();

                    //Delete button in table and list
                    $("div.dropdown-menu button.cmscore-user-table-delete-button, div.dropdown-menu button.cmscore-user-list-delete-button").on("click", function (e) {
                        let UserId = $(this).val();
                        UserModel.DeleteByUserId(UserId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#cmscore-user-button-error-message-in-card").hide();
                                $("#cmscore-user-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row deleted successfully`);
                                $("#cmscore-user-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Related to error message
                                $("#cmscore-user-error-message-title").html("UserModel.DeleteByUserId(UserId).subscribe(...)");
                                $("#cmscore-user-error-message-text").html(err);
                                $("#cmscore-user-button-error-message-in-card").show();
                            }
                        });
                    });

                    //Copy button in table and list
                    $("div.dropdown-menu button.cmscore-user-table-copy-button, div.dropdown-menu button.cmscore-user-list-copy-button").on("click", function (e) {
                        let UserId = $(this).val();
                        UserModel.CopyByUserId(UserId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#cmscore-user-button-error-message-in-card").hide();
                                $("#cmscore-user-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row copied successfully`);
                                $("#cmscore-user-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Show error message
                                $("#cmscore-user-error-message-title").html("UserModel.CopyByUserId(UserId).subscribe(...)");
                                $("#cmscore-user-error-message-text").html(err);
                                $("#cmscore-user-button-error-message-in-card").show();
                            }
                        });
                    });
                },
                error: err => {
                    //Show error message
                    $("#cmscore-user-error-message-title").html("UserModel.SelectAllPaged(request_usermodelQ).subscribe(...)");
                    $("#cmscore-user-error-message-text").html(err);
                    $("#cmscore-user-button-error-message-in-card").show();
                }
            });
    }
}

function ValidateAndSearch() {

    //Hide error and OK message button
    $("#cmscore-user-button-error-message-in-card").hide();
    $("#cmscore-user-button-ok-message-in-card").hide();

    var _usermodelQuery: usermodelQuery = {
        QueryString,
        ActualPageNumber,
        RowsPerPage,
        SorterColumn,
        SortToggler,
        TotalRows,
        TotalPages
    };

    UserQuery.SelectAllPagedToHTML(_usermodelQuery);
}

//LOAD EVENT
if ($("#cmscore-user-title-page").html().includes("Query user")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "UserId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Disable first and previous links in pagination
    $("#cmscore-user-lnk-first-page-lg, #cmscore-user-lnk-first-page").attr("disabled", "disabled");
    $("#cmscore-user-lnk-previous-page-lg, #cmscore-user-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#cmscore-user-export-message").html("");
    $("#cmscore-user-button-error-message-in-card").hide();
    $("#cmscore-user-button-ok-message-in-card").hide();

    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#cmscore-user-search-button")).on("click", function () {
    ValidateAndSearch();
});

//Query string
$("#cmscore-user-query-string").on("change keyup input", function (e) {
    //If undefined, set QueryString to "" value
    QueryString = ($(this).val()?.toString()) ?? "" ;
    ValidateAndSearch();
});

//First page link in pagination
$("#cmscore-user-lnk-first-page-lg, #cmscore-user-lnk-first-page").on("click", function (e) {
    ActualPageNumber = 1;
    ValidateAndSearch();
});

//Previous page link in pagination
$("#cmscore-user-lnk-previous-page-lg, #cmscore-user-lnk-previous-page").on("click", function (e) {
    ActualPageNumber -= 1;
    ValidateAndSearch();
});

//Next page link in pagination
$("#cmscore-user-lnk-next-page-lg, #cmscore-user-lnk-next-page").on("click", function (e) {
    ActualPageNumber += 1;
    ValidateAndSearch();
});

//Last page link in pagination
$("#cmscore-user-lnk-last-page-lg, #cmscore-user-lnk-last-page").on("click", function (e) {
    ActualPageNumber = TotalPages;
    ValidateAndSearch();
});

//Table view button
$("#cmscore-user-table-view-button").on("click", function (e) {
    $("#cmscore-user-view-toggler").val("Table");
    ViewToggler = "Table";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear table view
    $("#cmscore-user-body-and-head-table").html("");
    ValidateAndSearch();
});

//List view button
$("#cmscore-user-list-view-button").on("click", function (e) {
    $("#cmscore-user-view-toggler").val("List");
    ViewToggler = "List";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear list view
    $("#cmscore-user-body-list").html("");
    ValidateAndSearch();
});

//Used to list view
function ScrollDownNSearch() {
    let WindowsTopDistance: number = $(window).scrollTop() ?? 0;
    let WindowsBottomDistance: number = ($(window).scrollTop() ?? 0) + ($(window).innerHeight() ?? 0);
    let CardsFooterTopPosition: number = $("#cmscore-user-search-more-button-in-list").offset()?.top ?? 0;
    let CardsFooterBottomPosition: number = ($("#cmscore-user-search-more-button-in-list").offset()?.top ?? 0) + ($("#cmscore-user-search-more-button-in-list").outerHeight() ?? 0);

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
$("#cmscore-user-export-as-pdf").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#cmscore-user-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else{
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.user-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/CMSCore/User/1/ExportAsPDF/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#cmscore-user-export-message").html("<strong>Exporting as PDF</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for PDF file
            $("#cmscore-user-export-message").html(`<a class="btn btn-icon btn-success" href="/PDFFiles/CMSCore/User/User_${DateTimeNow.AjaxForString}.pdf" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#cmscore-user-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#cmscore-user-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#cmscore-user-error-message-title").html("Rx.from(ajax.post('/api/CMSCore/User/1/ExportAsPDF/' + ExportationType, Body, Header)).subscribe(...)");
            $("#cmscore-user-error-message-text").html(err);
            $("#cmscore-user-button-error-message-in-card").show();
        }
    });
});

//Export as Excel button
$("#cmscore-user-export-as-excel").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#cmscore-user-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.user-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/CMSCore/User/1/ExportAsExcel/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#cmscore-user-export-message").html("<strong>Exporting as Excel</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for Excel file
            $("#cmscore-user-export-message").html(`<a class="btn btn-icon btn-success" href="/ExcelFiles/CMSCore/User/User_${DateTimeNow.AjaxForString}.xlsx" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#cmscore-user-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#cmscore-user-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#cmscore-user-error-message-title").html("Rx.from(ajax.post('/api/CMSCore/User/1/ExportAsExcel/' + ExportationType, Body, Header)).subscribe(...)");
            $("#cmscore-user-error-message-text").html(err);
            $("#cmscore-user-button-error-message-in-card").show();
        }
    });
});

//Export as CSV button
$("#cmscore-user-export-as-csv").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#cmscore-user-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.user-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/CMSCore/User/1/ExportAsCSV/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#cmscore-user-export-message").html("<strong>Exporting as CSV</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for CSV file
            $("#cmscore-user-export-message").html(`<a class="btn btn-icon btn-success" href="/CSVFiles/CMSCore/User/User_${DateTimeNow.AjaxForString}.csv" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-csv"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#cmscore-user-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#cmscore-user-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#cmscore-user-error-message-title").html("Rx.from(ajax.post('/api/CMSCore/User/1/ExportAsCSV/' + ExportationType, Body, Header)).subscribe(...)");
            $("#cmscore-user-error-message-text").html(err);
            $("#cmscore-user-button-error-message-in-card").show();
        }
    });
});

//Export close button in modal
$("#cmscore-user-export-close-button").on("click", function (e) {
    $("#cmscore-user-export-message").html("");
});

//Massive action Copy
$("#cmscore-user-massive-action-copy").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let CopyType: string = "";
    let Body: Ajax = {};

    if ($("#cmscore-user-copy-rows-all-checkbox").is(":checked")) {
        CopyType = "All";
    }
    else {
        CopyType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.user-table-checkbox-for-row:checked").each(function () {
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

    UserModel.CopyManyOrAll(CopyType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#cmscore-user-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows copied successfully`);
            $("#cmscore-user-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#cmscore-user-error-message-title").html("UserModel.Copy(CopyType).subscribe(...)");
            $("#cmscore-user-error-message-text").html(err);
            $("#cmscore-user-button-error-message-in-card").show();
        }
    });
});

//Massive action Delete
$("#cmscore-user-massive-action-delete").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let DeleteType: string = "";
    let Body: Ajax = {};

    if ($("#cmscore-user-copy-rows-all-checkbox").is(":checked")) {
        DeleteType = "All";
    }
    else {
        DeleteType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.user-table-checkbox-for-row:checked").each(function () {
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

    UserModel.DeleteManyOrAll(DeleteType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#cmscore-user-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows deleted successfully`);
            $("#cmscore-user-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#cmscore-user-error-message-title").html("UserModel.Copy(CopyType).subscribe(...)");
            $("#cmscore-user-error-message-text").html(err);
            $("#cmscore-user-button-error-message-in-card").show();
        }
    });
});