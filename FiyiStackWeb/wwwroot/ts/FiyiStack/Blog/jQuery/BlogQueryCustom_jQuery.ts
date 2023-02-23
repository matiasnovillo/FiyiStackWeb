//Import libraries to use
import { BlogModel, blogmodelQuery } from "../../Blog/TsModels/Blog_TsModel";
import * as $ from "jquery";
import { format } from "timeago.js";

//Set default values
let LastTopDistance: number = 0;
let QueryString: string = "";
let ActualPageNumber: number = 1;
let RowsPerPage: number = 2000;
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
                  <img src="/img/FiyiStack/Me.jpg" class="avatar">
                </a>
                <div class="mx-3">
                  <a href="javascript:;" class="text-dark font-weight-600 text-sm">Matias Novillo</a>
                  <small class="d-block text-muted">${format(Date.parse(row.DateTimeLastModification))}</small>
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
                  <img alt="Image placeholder" class="media-comment-avatar rounded-circle" src="/img/CMSCore/User.png">
                  <div class="media-body">
                    <div class="media-comment-text">
                      <h6 class="h5 mt-0">${row2.FantasyName}</h6>
                      <p class="text-sm lh-160">${row2.Comment}</p>
                      <div class="icon-actions">
                          <p class="text-muted">${format(Date.parse(row2.DateTimeCreation))}</p>
                      </div>
                    </div>
                  </div>
                </div>` }).join("")}
                <div class="media align-items-center mt-5">
                  <div class="media-body">
                    <form>
                        <div class="row">
                            <div class="col text-right">
                                <textarea class="form-control mt-4"
                                placeholder="Write your comment"
                                rows="3"
                                resize="none"
                                maxlength="8000">
                                </textarea>
                                <button class="btn btn-sm mt-2 mr-0 btn-primary btn-post-comment" type="button">Post comment</button>
                                <input type="hidden" value="${row.BlogId}"></input>
                                </br>
                                <p class="text-danger mt-2 message-post-comment"></p>
                            </div>
                        </div>
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
                    }
                },
                complete: () => {
                    //Execute ScrollDownNSearch function when the user scroll the page
                    $(window).on("scroll", ScrollDownNSearch);

                    //Post comment button
                    $(".btn-post-comment").on("click", function (e) {

                        //Button -> Input -> Break -> Message
                        let Message = $(this).next().next().next();

                        if ($(this).prev().val() == "") {
                            Message.html(`<strong><i class='fas fa-exclamation-triangle'></i> 
                                                    Write a comment
                                            </strong>`);
                            return;
                        }

                        let formData = new FormData();

                        let BlogId = $(this).next().val()?.toString();
                        if (BlogId === undefined) {
                            BlogId = "";
                        }
                        formData.append("BlogId", BlogId);

                        let Comment = $(this).prev().val()?.toString();
                        if (Comment === undefined) {
                            Comment = "";
                        }
                        formData.append("Comment", Comment);


                        //Setup request
                        var xmlHttpRequest = new XMLHttpRequest();
                        xmlHttpRequest.onload = function () {
                            if (xmlHttpRequest.status >= 400) {
                                Message.html(`<strong><i class='fas fa-exclamation-triangle'></i> 
                                                    An error has occurred, try again
                                            </strong>`);
                            }
                            else {
                                if (xmlHttpRequest.response == "You have to login first") {
                                    Message.html(`<strong><i class='fas fa-exclamation-triangle'></i> 
                                                    You have to login first
                                            </strong>`);
                                }
                                else {
                                    ValidateAndSearch();
                                }
                                
                            }
                        };
                        //Open connection
                        xmlHttpRequest.open("POST", "/api/FiyiStack/CommentForBlog/1/PostComment", true);
                        //Send request
                        xmlHttpRequest.send(formData);
                    });

                },
                error: err => {
                }
            });
    }
}

function ValidateAndSearch() {


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
    SorterColumn = "DateTimeCreation";
    SortToggler = true;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";

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