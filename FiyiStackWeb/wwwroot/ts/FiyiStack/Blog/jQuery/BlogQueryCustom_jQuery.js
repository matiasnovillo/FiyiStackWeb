"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import libraries to use
var Blog_TsModel_1 = require("../../Blog/TsModels/Blog_TsModel");
var $ = require("jquery");
//Set default values
var LastTopDistance = 0;
var QueryString = "";
var ActualPageNumber = 1;
var RowsPerPage = 2000;
var SorterColumn = "";
var SortToggler = false;
var TotalPages = 0;
var TotalRows = 0;
var ViewToggler = "List";
var ScrollDownNSearchFlag = false;
var BlogQuery = /** @class */ (function () {
    function BlogQuery() {
    }
    BlogQuery.SelectAllPagedToHTML = function (request_blogmodelQuery) {
        //Used for list view
        $(window).off("scroll");
        var ListContent = "";
        Blog_TsModel_1.BlogModel.SelectAllPaged(request_blogmodelQuery).subscribe({
            next: function (newrow) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                //Only works when there is data available
                if (newrow.status != 204) {
                    var response_blogQuery = newrow.response;
                    //Set to default values if they are null
                    QueryString = (_a = response_blogQuery.QueryString) !== null && _a !== void 0 ? _a : "";
                    ActualPageNumber = (_b = response_blogQuery.ActualPageNumber) !== null && _b !== void 0 ? _b : 0;
                    RowsPerPage = (_c = response_blogQuery.RowsPerPage) !== null && _c !== void 0 ? _c : 0;
                    SorterColumn = (_d = response_blogQuery.SorterColumn) !== null && _d !== void 0 ? _d : "";
                    SortToggler = (_e = response_blogQuery.SortToggler) !== null && _e !== void 0 ? _e : false;
                    TotalRows = (_f = response_blogQuery.TotalRows) !== null && _f !== void 0 ? _f : 0;
                    TotalPages = (_g = response_blogQuery.TotalPages) !== null && _g !== void 0 ? _g : 0;
                    //Query string
                    $("#fiyistack-blog-query-string").attr("placeholder", "Search... (" + TotalRows + " posts)");
                    //If we are at the final of book disable next and last buttons in pagination
                    if (ActualPageNumber === TotalPages) {
                        $("#fiyistack-blog-search-more-button-in-list").html("");
                    }
                    else {
                        //Scroll arrow for list view
                        $("#fiyistack-blog-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                    }
                    //Read data book
                    (_h = response_blogQuery === null || response_blogQuery === void 0 ? void 0 : response_blogQuery.lstBlogModel) === null || _h === void 0 ? void 0 : _h.forEach(function (row) {
                        var _a;
                        ListContent += "<section class=\"section section-blog-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h5 class=\"h3 mb-0\">" + row.Title + "</h5>\n            </div>\n            <div class=\"card-header d-flex align-items-center\">\n              <div class=\"d-flex align-items-center\">\n                <a href=\"javascript:;\">\n                  <img src=\"/img/FiyiStack/Me.jpeg\" class=\"avatar\">\n                </a>\n                <div class=\"mx-3\">\n                  <a href=\"javascript:;\" class=\"text-dark font-weight-600 text-sm\">Matias Novillo</a>\n                  <small class=\"d-block text-muted\">" + row.DateTimeLastModification + "</small>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <p class=\"mb-4\">\n                " + row.Body + "\n              </p>\n              <img alt=\"Image placeholder\" src=\"" + row.BackgroundImage + "\" class=\"img-fluid rounded mb-4\">\n              <!-- Comments -->\n              <div class=\"mb-1\">\n                " + ((_a = row.lstCommentForBlogModel) === null || _a === void 0 ? void 0 : _a.map(function (row2) {
                            return "<div class=\"media media-comment\">\n                  <img alt=\"Image placeholder\" class=\"media-comment-avatar rounded-circle\" src=\"/img/CMSCore/User.png\">\n                  <div class=\"media-body\">\n                    <div class=\"media-comment-text\">\n                      <h6 class=\"h5 mt-0\">" + row2.FantasyName + "</h6>\n                      <p class=\"text-sm lh-160\">" + row2.Comment + "</p>\n                      <div class=\"icon-actions\">\n                          <p class=\"text-muted\">Posted on: " + row2.DateTimeCreation + "</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>";
                        }).join("")) + "\n                <div class=\"media align-items-center mt-5\">\n                  <div class=\"media-body\">\n                    <form>\n                        <div class=\"row\">\n                            <div class=\"col text-right\">\n                                <textarea class=\"form-control mt-4\"\n                                placeholder=\"Write your comment\"\n                                rows=\"3\"\n                                resize=\"none\"\n                                maxlength=\"8000\">\n                                </textarea>\n                                <button class=\"btn btn-sm mt-2 mr-0 btn-primary btn-post-comment\" type=\"button\">Post comment</button>\n                                <input type=\"hidden\" value=\"" + row.BlogId + "\"></input>\n                                </br>\n                                <p class=\"text-danger mt-2 message-post-comment\"></p>\n                            </div>\n                        </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>";
                    });
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
            complete: function () {
                //Execute ScrollDownNSearch function when the user scroll the page
                $(window).on("scroll", ScrollDownNSearch);
                //Post comment button
                $(".btn-post-comment").on("click", function (e) {
                    var _a, _b;
                    //Button -> Input -> Break -> Message
                    var Message = $(this).next().next().next();
                    if ($(this).prev().val() == "") {
                        Message.html("<strong><i class='fas fa-exclamation-triangle'></i> \n                                                    Write a comment\n                                            </strong>");
                        return;
                    }
                    var formData = new FormData();
                    var BlogId = (_a = $(this).next().val()) === null || _a === void 0 ? void 0 : _a.toString();
                    if (BlogId === undefined) {
                        BlogId = "";
                    }
                    formData.append("BlogId", BlogId);
                    var Comment = (_b = $(this).prev().val()) === null || _b === void 0 ? void 0 : _b.toString();
                    if (Comment === undefined) {
                        Comment = "";
                    }
                    formData.append("Comment", Comment);
                    //Setup request
                    var xmlHttpRequest = new XMLHttpRequest();
                    xmlHttpRequest.onload = function () {
                        if (xmlHttpRequest.status >= 400) {
                            Message.html("<strong><i class='fas fa-exclamation-triangle'></i> \n                                                    An error has occurred, try again\n                                            </strong>");
                        }
                        else {
                            if (xmlHttpRequest.response == "You have to login first") {
                                Message.html("<strong><i class='fas fa-exclamation-triangle'></i> \n                                                    You have to login first\n                                            </strong>");
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
            error: function (err) {
            }
        });
    };
    return BlogQuery;
}());
function ValidateAndSearch() {
    var _blogmodelQuery = {
        QueryString: QueryString,
        ActualPageNumber: ActualPageNumber,
        RowsPerPage: RowsPerPage,
        SorterColumn: SorterColumn,
        SortToggler: SortToggler,
        TotalRows: TotalRows,
        TotalPages: TotalPages
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
    var _a, _b;
    //If undefined, set QueryString to "" value
    QueryString = (_b = ((_a = $(this).val()) === null || _a === void 0 ? void 0 : _a.toString())) !== null && _b !== void 0 ? _b : "";
    ValidateAndSearch();
});
//Used to list view
function ScrollDownNSearch() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var WindowsTopDistance = (_a = $(window).scrollTop()) !== null && _a !== void 0 ? _a : 0;
    var WindowsBottomDistance = ((_b = $(window).scrollTop()) !== null && _b !== void 0 ? _b : 0) + ((_c = $(window).innerHeight()) !== null && _c !== void 0 ? _c : 0);
    var CardsFooterTopPosition = (_e = (_d = $("#fiyistack-blog-search-more-button-in-list").offset()) === null || _d === void 0 ? void 0 : _d.top) !== null && _e !== void 0 ? _e : 0;
    var CardsFooterBottomPosition = ((_g = (_f = $("#fiyistack-blog-search-more-button-in-list").offset()) === null || _f === void 0 ? void 0 : _f.top) !== null && _g !== void 0 ? _g : 0) + ((_h = $("#fiyistack-blog-search-more-button-in-list").outerHeight()) !== null && _h !== void 0 ? _h : 0);
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
//# sourceMappingURL=BlogQueryCustom_jQuery.js.map