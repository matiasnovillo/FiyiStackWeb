//Import libraries to use
import { BlogModel, blogmodelQuery } from "../../Blog/TsModels/Blog_TsModel";
import * as $ from "jquery";
import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";
import { CommentForBlogModel } from "../../CommentForBlog/TsModels/CommentForBlog_TsModel";

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

//Last modification on: 16/12/2022 10:50:10

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

class BlogQuery {
    static SelectAllPagedToHTML(request_blogmodelQuery: blogmodelQuery) {
        //Used for list view
        $(window).off("scroll");

        var ListContent: string = ``;

        BlogModel.SelectAllPaged(request_blogmodelQuery).subscribe(
            {
                next: newrow => {
                    //Only works when there is data available
                    if (newrow.status != 204) {

                        const response_blogQuery = newrow.response as blogmodelQuery;

                        //Set to default values if they are null
                        QueryString = response_blogQuery.QueryString ?? "";
                        ActualPageNumber = response_blogQuery.ActualPageNumber ?? 0;
                        RowsPerPage = response_blogQuery.RowsPerPage ?? 0;
                        SorterColumn = response_blogQuery.SorterColumn ?? "";
                        SortToggler = response_blogQuery.SortToggler ?? false;
                        TotalRows = response_blogQuery.TotalRows ?? 0;
                        TotalPages = response_blogQuery.TotalPages ?? 0;

                        //Query string
                        $("#fiyistack-blog-query-string").attr("placeholder", `Search... (${TotalRows} posts)`);
                        //If we are at the final of book disable next and last buttons in pagination
                        if (ActualPageNumber === TotalPages) {
                            $("#fiyistack-blog-search-more-button-in-list").html("");
                        }
                        else {
                            //Scroll arrow for list view
                            $("#fiyistack-blog-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                        }
                        //Read data book
                        response_blogQuery?.lstBlogModel?.forEach(row => {

                            ListContent += `<section class="section section-blog-info">
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="card">
            <div class="card-header">
              <h5 class="h3 mb-0">${row.Title}</h5>
            </div>
            <div class="card-header d-flex align-items-center">
              <div class="d-flex align-items-center">
                <a href="javascript:;">
                  <img src="/img/Me.jpeg" class="avatar">
                </a>
                <div class="mx-3">
                  <a href="javascript:;" class="text-dark font-weight-600 text-sm">Matias Novillo</a>
                  <small class="d-block text-muted">${row.DateTimeLastModification}</small>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-4">
                ${row.Body}
              </p>
              <img alt="Image placeholder" src="${row.BackgroundImage}" class="img-fluid rounded mb-4">
              <!-- Comments -->
              <div class="mb-1">
                ${row.lstCommentForBlogModel?.map(row2 => {

                    return `<div class="media media-comment">
                  <img alt="Image placeholder" class="media-comment-avatar rounded-circle" src="/img/User.png">
                  <div class="media-body">
                    <div class="media-comment-text">
                      <h6 class="h5 mt-0">${row2.FantasyName}</h6>
                      <p class="text-sm lh-160">${row2.Comment}</p>
                    </div>
                  </div>
                </div>` }).join("")}
                <div class="media align-items-center mt-5">
                  <img alt="Image placeholder" class="avatar rounded-circle mb-4" src="/img/User.png">
                  <div class="media-body">
                    <form>
                      <input class="form-control" placeholder="Write your comment" type="text"></input>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
                        })

                        //If view table is activated, clear table view, if not, clear list view
                        if (ViewToggler === "Table") {
                            //Table view is not activated
                        }
                        else {
                            //Used for list view
                            if (ScrollDownNSearchFlag) {
                                $("#fiyistack-blog-body-list").append(ListContent);
                                ScrollDownNSearchFlag = false;
                            }
                            else {
                                //Clear list view
                                $("#fiyistack-blog-body-list").html("");
                                $("#fiyistack-blog-body-list").html(ListContent);
                            }
                            }
                    }
                    else {
                        //Show error message
                        $("#fiyistack-blog-error-message-title").html("No registers found");
                        $("#fiyistack-blog-error-message-text").html("The server did not found any register. HTTP code 204");
                        $("#fiyistack-blog-button-error-message-in-card").show();
                    }
                },
                complete: () => {
                    //Execute ScrollDownNSearch function when the user scroll the page
                    $(window).on("scroll", ScrollDownNSearch);

                    //Check button inside list view
                    $(".fiyistack-blog-checkbox-list").on("click", function (e) {
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
                    $("#blog-table-check-all").on("click", function (e) { 
                        //Toggler
                        if ($("tr td div input.blog-table-checkbox-for-row").is(":checked")) {
                            $("tr td div input.blog-table-checkbox-for-row").removeAttr("checked");
                        }
                        else {
                            $("tr td div input.blog-table-checkbox-for-row").attr("checked", "checked");
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
                    $("#fiyistack-blog-error-message-title").html("");
                    $("#fiyistack-blog-error-message-text").html("");
                    $("#fiyistack-blog-button-error-message-in-card").hide();

                    //Delete button in table and list
                    $("div.dropdown-menu button.fiyistack-blog-table-delete-button, div.dropdown-menu button.fiyistack-blog-list-delete-button").on("click", function (e) {
                        let BlogId = $(this).val();
                        BlogModel.DeleteByBlogId(BlogId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#fiyistack-blog-button-error-message-in-card").hide();
                                $("#fiyistack-blog-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row deleted successfully`);
                                $("#fiyistack-blog-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Related to error message
                                $("#fiyistack-blog-error-message-title").html("BlogModel.DeleteByBlogId(BlogId).subscribe(...)");
                                $("#fiyistack-blog-error-message-text").html(err);
                                $("#fiyistack-blog-button-error-message-in-card").show();
                            }
                        });
                    });

                    //Copy button in table and list
                    $("div.dropdown-menu button.fiyistack-blog-table-copy-button, div.dropdown-menu button.fiyistack-blog-list-copy-button").on("click", function (e) {
                        let BlogId = $(this).val();
                        BlogModel.CopyByBlogId(BlogId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                ValidateAndSearch();

                                //Show OK message
                                $("#fiyistack-blog-button-error-message-in-card").hide();
                                $("#fiyistack-blog-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row copied successfully`);
                                $("#fiyistack-blog-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Show error message
                                $("#fiyistack-blog-error-message-title").html("BlogModel.CopyByBlogId(BlogId).subscribe(...)");
                                $("#fiyistack-blog-error-message-text").html(err);
                                $("#fiyistack-blog-button-error-message-in-card").show();
                            }
                        });
                    });
                },
                error: err => {
                    //Show error message
                    $("#fiyistack-blog-error-message-title").html("BlogModel.SelectAllPaged(request_blogmodelQ).subscribe(...)");
                    $("#fiyistack-blog-error-message-text").html(err);
                    $("#fiyistack-blog-button-error-message-in-card").show();
                }
            });
    }
}

function ValidateAndSearch() {

    //Hide error and OK message button
    $("#fiyistack-blog-button-error-message-in-card").hide();
    $("#fiyistack-blog-button-ok-message-in-card").hide();

    var _blogmodelQuery: blogmodelQuery = {
        QueryString,
        ActualPageNumber,
        RowsPerPage,
        SorterColumn,
        SortToggler,
        TotalRows,
        TotalPages
    };

    BlogQuery.SelectAllPagedToHTML(_blogmodelQuery);
}

//LOAD EVENT
if ($("#fiyistack-blog-title-page").html().includes("The FiyiStack blog")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "BlogId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Hide messages
    $("#fiyistack-blog-button-error-message-in-card").hide();
    $("#fiyistack-blog-button-ok-message-in-card").hide();

    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#fiyistack-blog-search-button")).on("click", function () {
    ValidateAndSearch();
});

//Query string
$("#fiyistack-blog-query-string").on("change keyup input", function (e) {
    //If undefined, set QueryString to "" value
    QueryString = ($(this).val()?.toString()) ?? "" ;
    ValidateAndSearch();
});

//Used to list view
function ScrollDownNSearch() {
    let WindowsTopDistance: number = $(window).scrollTop() ?? 0;
    let WindowsBottomDistance: number = ($(window).scrollTop() ?? 0) + ($(window).innerHeight() ?? 0);
    let CardsFooterTopPosition: number = $("#fiyistack-blog-search-more-button-in-list").offset()?.top ?? 0;
    let CardsFooterBottomPosition: number = ($("#fiyistack-blog-search-more-button-in-list").offset()?.top ?? 0) + ($("#fiyistack-blog-search-more-button-in-list").outerHeight() ?? 0);

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