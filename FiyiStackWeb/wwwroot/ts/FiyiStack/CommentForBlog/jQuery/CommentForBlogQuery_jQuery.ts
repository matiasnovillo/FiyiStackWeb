//Import libraries to use
import { CommentForBlogModel, commentforblogmodelQuery } from "../../CommentForBlog/TsModels/CommentForBlog_TsModel";
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

//Last modification on: 16/12/2022 10:50:17

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

class CommentForBlogQuery {
    static SelectAllPagedToHTML(request_commentforblogmodelQuery: commentforblogmodelQuery) {
        //Used for list view
        $(window).off("scroll");

        //Load some part of table
        var TableContent: string = `<thead class="thead-light">
    <tr>
        <th scope="col">
            <div>
                <input id="commentforblog-table-check-all" type="checkbox">
            </div>
        </th>
        <th scope="col">
            <button value="CommentForBlogId" class="btn btn-outline-secondary btn-sm" type="button">
                CommentForBlogId
            </button>
        </th>
        <th scope="col">
            <button value="Active" class="btn btn-outline-secondary btn-sm" type="button">
                Active
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
            <button value="Comment" class="btn btn-outline-secondary btn-sm" type="button">
                Comment
            </button>
        </th>
        <th scope="col">
            <button value="BlogId" class="btn btn-outline-secondary btn-sm" type="button">
                BlogId
            </button>
        </th>
        
        <th scope="col"></th>
    </tr>
</thead>
<tbody>`;

        var ListContent: string = ``;

        CommentForBlogModel.SelectAllPaged(request_commentforblogmodelQuery).subscribe(
            {
                next: newrow => {
                    //Only works when there is data available
                    if (newrow.status != 204) {

                        const response_commentforblogQuery = newrow.response as commentforblogmodelQuery;

                        //Set to default values if they are null
                        QueryString = response_commentforblogQuery.QueryString ?? "";
                        ActualPageNumber = response_commentforblogQuery.ActualPageNumber ?? 0;
                        RowsPerPage = response_commentforblogQuery.RowsPerPage ?? 0;
                        SorterColumn = response_commentforblogQuery.SorterColumn ?? "";
                        SortToggler = response_commentforblogQuery.SortToggler ?? false;
                        TotalRows = response_commentforblogQuery.TotalRows ?? 0;
                        TotalPages = response_commentforblogQuery.TotalPages ?? 0;

                        //Query string
                        $("#fiyistack-commentforblog-query-string").attr("placeholder", `Search... (${TotalRows} records)`);
                        //Total pages of pagination
                        $("#fiyistack-commentforblog-total-pages-lg, #fiyistack-commentforblog-total-pages").html(TotalPages.toString());
                        //Actual page number of pagination
                        $("#fiyistack-commentforblog-actual-page-number-lg, #fiyistack-commentforblog-actual-page-number").html(ActualPageNumber.toString());
                        //If we are at the final of book disable next and last buttons in pagination
                        if (ActualPageNumber === TotalPages) {
                            $("#fiyistack-commentforblog-lnk-next-page-lg, #fiyistack-commentforblog-lnk-next-page").attr("disabled", "disabled");
                            $("#fiyistack-commentforblog-lnk-last-page-lg, #fiyistack-commentforblog-lnk-last-page").attr("disabled", "disabled");
                            $("#fiyistack-commentforblog-search-more-button-in-list").html("");
                        }
                        else {
                            $("#fiyistack-commentforblog-lnk-next-page-lg, #fiyistack-commentforblog-lnk-next-page").removeAttr("disabled");
                            $("#fiyistack-commentforblog-lnk-last-page-lg, #fiyistack-commentforblog-lnk-last-page").removeAttr("disabled");
                            //Scroll arrow for list view
                            $("#fiyistack-commentforblog-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                        }
                        //If we are at the begining of the book disable previous and first buttons in pagination
                        if (ActualPageNumber === 1) {
                            $("#fiyistack-commentforblog-lnk-previous-page-lg, #fiyistack-commentforblog-lnk-previous-page").attr("disabled", "disabled");
                            $("#fiyistack-commentforblog-lnk-first-page-lg, #fiyistack-commentforblog-lnk-first-page").attr("disabled", "disabled");
                        }
                        else {
                            $("#fiyistack-commentforblog-lnk-previous-page-lg, #fiyistack-commentforblog-lnk-previous-page").removeAttr("disabled");
                            $("#fiyistack-commentforblog-lnk-first-page-lg, #fiyistack-commentforblog-lnk-first-page").removeAttr("disabled");
                        }
                        //If book is empty set to default pagination values
                        if (response_commentforblogQuery?.lstCommentForBlogModel?.length === 0) {
                            $("#fiyistack-commentforblog-lnk-previous-page-lg, #fiyistack-commentforblog-lnk-previous-page").attr("disabled", "disabled");
                            $("#fiyistack-commentforblog-lnk-first-page-lg, #fiyistack-commentforblog-lnk-first-page").attr("disabled", "disabled");
                            $("#fiyistack-commentforblog-lnk-next-page-lg, #fiyistack-commentforblog-lnk-next-page").attr("disabled", "disabled");
                            $("#fiyistack-commentforblog-lnk-last-page-lg, #fiyistack-commentforblog-lnk-last-page").attr("disabled", "disabled");
                            $("#fiyistack-commentforblog-total-pages-lg, #fiyistack-commentforblog-total-pages").html("1");
                            $("#fiyistack-commentforblog-actual-page-number-lg, #fiyistack-commentforblog-actual-page-number").html("1");
                        }
                        //Read data book
                        response_commentforblogQuery?.lstCommentForBlogModel?.forEach(row => {

                            TableContent += `<tr>
    <!-- Checkbox -->
    <td>
        <div>
            <input class="commentforblog-table-checkbox-for-row" value="${row.CommentForBlogId}" type="checkbox">
        </div>
    </td>
    <!-- Data -->
    <td class="text-left text-light text-truncate">
        <i class="fas fa-key"></i> ${row.CommentForBlogId}
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-toggle-on"></i> ${row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
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
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-key"></i> ${row.UserCreationId}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-key"></i> ${row.UserLastModificationId}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong><i class="fas fa-font">
            </i> ${row.Comment}
        </strong>
    </td>
    <td class="text-left text-truncate">
        <strong>
            <i class="fas fa-key"></i> ${row.BlogId}
        </strong>
    </td>
    
    <!-- Actions -->
    <td class="text-right">
        <a class="btn btn-icon-only text-primary" href="/FiyiStack/PageCommentForBlogNonQuery?CommentForBlogId=${row.CommentForBlogId}" role="button" data-toggle="tooltip" data-original-title="Edit">
            <i class="fas fa-edit"></i>
        </a>
        <div class="dropdown">
            <button class="btn btn-icon-only text-danger" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-trash"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button class="dropdown-item text-danger fiyistack-commentforblog-table-delete-button" value="${row.CommentForBlogId}" type="button">
                    <i class="fas fa-exclamation-triangle"></i> Yes, delete
                </button>
            </div>
        </div>
        <div class="dropdown">
            <button class="btn btn-sm btn-icon-only text-primary" href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button type="button" class="dropdown-item fiyistack-commentforblog-table-copy-button" value="${row.CommentForBlogId}">
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
                           CommentForBlogId <i class="fas fa-key"></i> ${row.CommentForBlogId}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           Active <i class="fas fa-toggle-on"></i> ${row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
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
                        <span class="text-white mb-4 text-truncate">
                           UserCreationId <i class="fas fa-key"></i> ${row.UserCreationId}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           UserLastModificationId <i class="fas fa-key"></i> ${row.UserLastModificationId}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           Comment <i class="fas fa-font"></i> ${row.Comment}
                        </span>
                        <br/>
                        <span class="text-white mb-4 text-truncate">
                           BlogId <i class="fas fa-key"></i> ${row.BlogId}
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
                            <div class="fiyistack-commentforblog-checkbox-list list-row-unchecked mb-2">
                                <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="check">
                                    <i class="fas fa-circle text-white"></i>
                                </a>
                            </div>
                            <input type="hidden" value="${row.CommentForBlogId}"/>
                            <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="/FiyiStack/PageCommentForBlogNonQuery?CommentForBlogId=${row.CommentForBlogId}" role="button" data-toggle="tooltip" data-original-title="edit">
                                <i class="fas fa-edit text-primary"></i>
                            </a>
                            <div class="dropup">
                                <a class="icon icon-shape bg-white icon-sm text-primary rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <button value="${row.CommentForBlogId}" class="dropdown-item text-primary fiyistack-commentforblog-list-copy-button" type="button">
                                        <i class="fas fa-copy"></i>&nbsp;Copy
                                    </button>
                                    <button value="${row.CommentForBlogId}" class="dropdown-item text-danger fiyistack-commentforblog-list-delete-button" type="button">
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
                            $("#fiyistack-commentforblog-body-and-head-table").html("");
                            $("#fiyistack-commentforblog-body-and-head-table").html(TableContent);
                        }
                        else {
                            //Used for list view
                            if (ScrollDownNSearchFlag) {
                                $("#fiyistack-commentforblog-body-list").append(ListContent);
                                ScrollDownNSearchFlag = false;
                            }
                            else {
                                //Clear list view
                                $("#fiyistack-commentforblog-body-list").html("");
                                $("#fiyistack-commentforblog-body-list").html(ListContent);
                            }
                            }
                    }
                    else {
                        //Show error message
                        $("#fiyistack-commentforblog-error-message-title").html("No registers found");
                        $("#fiyistack-commentforblog-error-message-text").html("The server did not found any register. HTTP code 204");
                        $("#fiyistack-commentforblog-button-error-message-in-card").show();
                    }
                },
                complete: () => {
                    //Execute ScrollDownNSearch function when the user scroll the page
                    $(window).on("scroll", ScrollDownNSearch);

                    //Add final content to TableContent
                    TableContent += `</tbody>
                                </table>`;

                    //Check button inside list view
                    $(".fiyistack-commentforblog-checkbox-list").on("click", function (e) {
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
                    $("#commentforblog-table-check-all").on("click", function (e) { 
                        //Toggler
                        if ($("tr td div input.commentforblog-table-checkbox-for-row").is(":checked")) {
                            $("tr td div input.commentforblog-table-checkbox-for-row").removeAttr("checked");
                        }
                        else {
                            $("tr td div input.commentforblog-table-checkbox-for-row").attr("checked", "checked");
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
                    $("#fiyistack-commentforblog-error-message-title").html("");
                    $("#fiyistack-commentforblog-error-message-text").html("");
                    $("#fiyistack-commentforblog-button-error-message-in-card").hide();

                    //Delete button in table and list
                    $("div.dropdown-menu button.fiyistack-commentforblog-table-delete-button, div.dropdown-menu button.fiyistack-commentforblog-list-delete-button").on("click", function (e) {
                        let CommentForBlogId = $(this).val();
                        CommentForBlogModel.DeleteByCommentForBlogId(CommentForBlogId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#fiyistack-commentforblog-button-error-message-in-card").hide();
                                $("#fiyistack-commentforblog-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row deleted successfully`);
                                $("#fiyistack-commentforblog-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Related to error message
                                $("#fiyistack-commentforblog-error-message-title").html("CommentForBlogModel.DeleteByCommentForBlogId(CommentForBlogId).subscribe(...)");
                                $("#fiyistack-commentforblog-error-message-text").html(err);
                                $("#fiyistack-commentforblog-button-error-message-in-card").show();
                            }
                        });
                    });

                    //Copy button in table and list
                    $("div.dropdown-menu button.fiyistack-commentforblog-table-copy-button, div.dropdown-menu button.fiyistack-commentforblog-list-copy-button").on("click", function (e) {
                        let CommentForBlogId = $(this).val();
                        CommentForBlogModel.CopyByCommentForBlogId(CommentForBlogId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#fiyistack-commentforblog-button-error-message-in-card").hide();
                                $("#fiyistack-commentforblog-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row copied successfully`);
                                $("#fiyistack-commentforblog-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Show error message
                                $("#fiyistack-commentforblog-error-message-title").html("CommentForBlogModel.CopyByCommentForBlogId(CommentForBlogId).subscribe(...)");
                                $("#fiyistack-commentforblog-error-message-text").html(err);
                                $("#fiyistack-commentforblog-button-error-message-in-card").show();
                            }
                        });
                    });
                },
                error: err => {
                    //Show error message
                    $("#fiyistack-commentforblog-error-message-title").html("CommentForBlogModel.SelectAllPaged(request_commentforblogmodelQ).subscribe(...)");
                    $("#fiyistack-commentforblog-error-message-text").html(err);
                    $("#fiyistack-commentforblog-button-error-message-in-card").show();
                }
            });
    }
}

function ValidateAndSearch() {

    //Hide error and OK message button
    $("#fiyistack-commentforblog-button-error-message-in-card").hide();
    $("#fiyistack-commentforblog-button-ok-message-in-card").hide();

    var _commentforblogmodelQuery: commentforblogmodelQuery = {
        QueryString,
        ActualPageNumber,
        RowsPerPage,
        SorterColumn,
        SortToggler,
        TotalRows,
        TotalPages
    };

    CommentForBlogQuery.SelectAllPagedToHTML(_commentforblogmodelQuery);
}

//LOAD EVENT
if ($("#fiyistack-commentforblog-title-page").html().includes("Query commentforblog")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "CommentForBlogId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Disable first and previous links in pagination
    $("#fiyistack-commentforblog-lnk-first-page-lg, #fiyistack-commentforblog-lnk-first-page").attr("disabled", "disabled");
    $("#fiyistack-commentforblog-lnk-previous-page-lg, #fiyistack-commentforblog-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#fiyistack-commentforblog-export-message").html("");
    $("#fiyistack-commentforblog-button-error-message-in-card").hide();
    $("#fiyistack-commentforblog-button-ok-message-in-card").hide();

    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#fiyistack-commentforblog-search-button")).on("click", function () {
    ValidateAndSearch();
});

//Query string
$("#fiyistack-commentforblog-query-string").on("change keyup input", function (e) {
    //If undefined, set QueryString to "" value
    QueryString = ($(this).val()?.toString()) ?? "" ;
    ValidateAndSearch();
});

//First page link in pagination
$("#fiyistack-commentforblog-lnk-first-page-lg, #fiyistack-commentforblog-lnk-first-page").on("click", function (e) {
    ActualPageNumber = 1;
    ValidateAndSearch();
});

//Previous page link in pagination
$("#fiyistack-commentforblog-lnk-previous-page-lg, #fiyistack-commentforblog-lnk-previous-page").on("click", function (e) {
    ActualPageNumber -= 1;
    ValidateAndSearch();
});

//Next page link in pagination
$("#fiyistack-commentforblog-lnk-next-page-lg, #fiyistack-commentforblog-lnk-next-page").on("click", function (e) {
    ActualPageNumber += 1;
    ValidateAndSearch();
});

//Last page link in pagination
$("#fiyistack-commentforblog-lnk-last-page-lg, #fiyistack-commentforblog-lnk-last-page").on("click", function (e) {
    ActualPageNumber = TotalPages;
    ValidateAndSearch();
});

//Table view button
$("#fiyistack-commentforblog-table-view-button").on("click", function (e) {
    $("#fiyistack-commentforblog-view-toggler").val("Table");
    ViewToggler = "Table";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear table view
    $("#fiyistack-commentforblog-body-and-head-table").html("");
    ValidateAndSearch();
});

//List view button
$("#fiyistack-commentforblog-list-view-button").on("click", function (e) {
    $("#fiyistack-commentforblog-view-toggler").val("List");
    ViewToggler = "List";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear list view
    $("#fiyistack-commentforblog-body-list").html("");
    ValidateAndSearch();
});

//Used to list view
function ScrollDownNSearch() {
    let WindowsTopDistance: number = $(window).scrollTop() ?? 0;
    let WindowsBottomDistance: number = ($(window).scrollTop() ?? 0) + ($(window).innerHeight() ?? 0);
    let CardsFooterTopPosition: number = $("#fiyistack-commentforblog-search-more-button-in-list").offset()?.top ?? 0;
    let CardsFooterBottomPosition: number = ($("#fiyistack-commentforblog-search-more-button-in-list").offset()?.top ?? 0) + ($("#fiyistack-commentforblog-search-more-button-in-list").outerHeight() ?? 0);

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
$("#fiyistack-commentforblog-export-as-pdf").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#fiyistack-commentforblog-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else{
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.commentforblog-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/FiyiStack/CommentForBlog/1/ExportAsPDF/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#fiyistack-commentforblog-export-message").html("<strong>Exporting as PDF</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for PDF file
            $("#fiyistack-commentforblog-export-message").html(`<a class="btn btn-icon btn-success" href="/PDFFiles/FiyiStack/CommentForBlog/CommentForBlog_${DateTimeNow.AjaxForString}.pdf" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#fiyistack-commentforblog-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#fiyistack-commentforblog-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#fiyistack-commentforblog-error-message-title").html("Rx.from(ajax.post('/api/FiyiStack/CommentForBlog/1/ExportAsPDF/' + ExportationType, Body, Header)).subscribe(...)");
            $("#fiyistack-commentforblog-error-message-text").html(err);
            $("#fiyistack-commentforblog-button-error-message-in-card").show();
        }
    });
});

//Export as Excel button
$("#fiyistack-commentforblog-export-as-excel").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#fiyistack-commentforblog-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.commentforblog-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/FiyiStack/CommentForBlog/1/ExportAsExcel/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#fiyistack-commentforblog-export-message").html("<strong>Exporting as Excel</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for Excel file
            $("#fiyistack-commentforblog-export-message").html(`<a class="btn btn-icon btn-success" href="/ExcelFiles/FiyiStack/CommentForBlog/CommentForBlog_${DateTimeNow.AjaxForString}.xlsx" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#fiyistack-commentforblog-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#fiyistack-commentforblog-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#fiyistack-commentforblog-error-message-title").html("Rx.from(ajax.post('/api/FiyiStack/CommentForBlog/1/ExportAsExcel/' + ExportationType, Body, Header)).subscribe(...)");
            $("#fiyistack-commentforblog-error-message-text").html(err);
            $("#fiyistack-commentforblog-button-error-message-in-card").show();
        }
    });
});

//Export as CSV button
$("#fiyistack-commentforblog-export-as-csv").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#fiyistack-commentforblog-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.commentforblog-table-checkbox-for-row:checked").each(function () {
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

    Rx.from(ajax.post("/api/FiyiStack/CommentForBlog/1/ExportAsCSV/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#fiyistack-commentforblog-export-message").html("<strong>Exporting as CSV</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //Show download button for CSV file
            $("#fiyistack-commentforblog-export-message").html(`<a class="btn btn-icon btn-success" href="/CSVFiles/FiyiStack/CommentForBlog/CommentForBlog_${DateTimeNow.AjaxForString}.csv" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-csv"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

            //Show OK message
            $("#fiyistack-commentforblog-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Conversion completed`);
            $("#fiyistack-commentforblog-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#fiyistack-commentforblog-error-message-title").html("Rx.from(ajax.post('/api/FiyiStack/CommentForBlog/1/ExportAsCSV/' + ExportationType, Body, Header)).subscribe(...)");
            $("#fiyistack-commentforblog-error-message-text").html(err);
            $("#fiyistack-commentforblog-button-error-message-in-card").show();
        }
    });
});

//Export close button in modal
$("#fiyistack-commentforblog-export-close-button").on("click", function (e) {
    $("#fiyistack-commentforblog-export-message").html("");
});

//Massive action Copy
$("#fiyistack-commentforblog-massive-action-copy").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let CopyType: string = "";
    let Body: Ajax = {};

    if ($("#fiyistack-commentforblog-copy-rows-all-checkbox").is(":checked")) {
        CopyType = "All";
    }
    else {
        CopyType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.commentforblog-table-checkbox-for-row:checked").each(function () {
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

    CommentForBlogModel.CopyManyOrAll(CopyType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#fiyistack-commentforblog-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows copied successfully`);
            $("#fiyistack-commentforblog-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#fiyistack-commentforblog-error-message-title").html("CommentForBlogModel.Copy(CopyType).subscribe(...)");
            $("#fiyistack-commentforblog-error-message-text").html(err);
            $("#fiyistack-commentforblog-button-error-message-in-card").show();
        }
    });
});

//Massive action Delete
$("#fiyistack-commentforblog-massive-action-delete").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let DeleteType: string = "";
    let Body: Ajax = {};

    if ($("#fiyistack-commentforblog-copy-rows-all-checkbox").is(":checked")) {
        DeleteType = "All";
    }
    else {
        DeleteType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.commentforblog-table-checkbox-for-row:checked").each(function () {
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

    CommentForBlogModel.DeleteManyOrAll(DeleteType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            ValidateAndSearch();

            //Show OK message
            $("#fiyistack-commentforblog-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Rows deleted successfully`);
            $("#fiyistack-commentforblog-button-ok-message-in-card").show();
        },
        error: err => {
            //Show error message
            $("#fiyistack-commentforblog-error-message-title").html("CommentForBlogModel.Copy(CopyType).subscribe(...)");
            $("#fiyistack-commentforblog-error-message-text").html(err);
            $("#fiyistack-commentforblog-button-error-message-in-card").show();
        }
    });
});