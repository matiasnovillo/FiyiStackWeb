

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

//Last modification on: 08/12/2022 7:45:13

$(document).ready(function () {
    //This fix an style error in Quill
    $("span.ql-picker-label svg[viewBox]").css("width", "20px");
});

//Used for file input


//Create a formdata object
var formData = new FormData();
$("#basiccore-failure-insert-or-update-button").on("click", function (e) {
    //Stop stuff happening
    e.stopPropagation();
    e.preventDefault();

    //Add or edit value
    formData.append("basiccore-failure-title-page", $("#basiccore-failure-title-page").html());
    formData.append("basiccore-failure-failureid-input", $("#basiccore-failure-failureid-input").val());

    formData.append("basiccore-failure-httpcode-input", $("#basiccore-failure-httpcode-input").val());
    formData.append("basiccore-failure-emergencylevel-input", $("#basiccore-failure-emergencylevel-input").val());
    formData.append("basiccore-failure-message-input", $("#basiccore-failure-message-input").val());
    formData.append("basiccore-failure-stacktrace-input", $("#basiccore-failure-stacktrace-input").val());
    formData.append("basiccore-failure-source-input", $("#basiccore-failure-source-input").val());
    formData.append("basiccore-failure-comment-input", $("#basiccore-failure-comment-input").val());
    formData.append("basiccore-failure-usercreationid-input", $("#basiccore-failure-usercreationid-input").val());
    formData.append("basiccore-failure-userlastmodificationid-input", $("#basiccore-failure-userlastmodificationid-input").val());
    

    //Setup request
    var xmlHttpRequest = new XMLHttpRequest();
    //Set event listeners
    xmlHttpRequest.upload.addEventListener("loadstart", function (e) {
        //Show success button and success message modal
        $("#basiccore-failure-insert-or-update-message").addClass("btn-secondary");
        $("#basiccore-failure-insert-or-update-message").removeClass("btn-success");
        $("#basiccore-failure-insert-or-update-message").removeClass("btn-error");
        $("#basiccore-failure-insert-or-update-message").removeAttr("data-toggle");
        $("#basiccore-failure-insert-or-update-message").removeAttr("data-target");
        $("#basiccore-failure-insert-or-update-message").html(`Sending data. Please, wait`);
    });
    xmlHttpRequest.upload.addEventListener("progress", function (e) {
        // While sending and loading data.
    });
    xmlHttpRequest.upload.addEventListener("load", function (e) {
        // When the request has successfully completed.
    });
    xmlHttpRequest.upload.addEventListener("loadend", function (e) {
        // When the request has completed (either in success or failure).
    });
    xmlHttpRequest.upload.addEventListener("error", function (e) {
        // When the request has failed.
    });
    xmlHttpRequest.upload.addEventListener("abort", function (e) {
        // When the request has been aborted. 
    });
    xmlHttpRequest.upload.addEventListener("timeout", function (e) {
        // When the author specified timeout has passed before the request could complete
    });
    xmlHttpRequest.onload = function () {
        console.log(xmlHttpRequest);
        if (xmlHttpRequest.status >= 400) {
            //Show error button and error message modal
            $("#basiccore-failure-insert-or-update-message").addClass("btn-danger");
            $("#basiccore-failure-insert-or-update-message").removeClass("btn-success");
            $("#basiccore-failure-insert-or-update-message").removeClass("btn-secondary");
            $("#basiccore-failure-insert-or-update-message").attr("data-toggle", "modal");
            $("#basiccore-failure-insert-or-update-message").attr("data-target", "#basiccore-failure-error-message-modal");
            $("#basiccore-failure-insert-or-update-message").html(`<i class="fas fa-exclamation-triangle"></i> 
                                                                There was an error while sending the data`);
            $("#basiccore-failure-error-message-title").html("There was an error while sending the data");
            $("#basiccore-failure-error-message-text").html(xmlHttpRequest.response);
            console.log("Error:" + xmlHttpRequest.response);
        }
        else {
            //Show success button
            $("#basiccore-failure-insert-or-update-message").addClass("btn-success");
            $("#basiccore-failure-insert-or-update-message").removeClass("btn-error");
            $("#basiccore-failure-insert-or-update-message").removeClass("btn-secondary");
            $("#basiccore-failure-insert-or-update-message").removeAttr("data-toggle");
            $("#basiccore-failure-insert-or-update-message").removeAttr("data-target");
            $("#basiccore-failure-insert-or-update-message").html(`<i class="fas fa-check"></i>
                                                                Data sent successfully`);
        }
    };
    //Open connection
    xmlHttpRequest.open("POST", "/api/Testing/Test/1/InsertOrUpdateAsync", true);
    //Send request
    xmlHttpRequest.send(formData);
});