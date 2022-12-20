

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

$(document).ready(function () {
    fiyistackblogbodyquill.root.innerHTML = $("#fiyistack-blog-body-hidden-value").val();
});

let fiyistackblogbodytoolbaroptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['link', 'blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    ['image', 'video'],
    ['clean']                                         // remove formatting button
];
let fiyistackblogbodyquill = new Quill('#fiyistack-blog-body-input', {
    modules: {
        toolbar: fiyistackblogbodytoolbaroptions
    },
    theme: 'snow'
});

//Used for file input
let fiyistackblogbackgroundimageinput;
let fiyistackblogbackgroundimageboolfileadded;
$("#fiyistack-blog-backgroundimage-input").on("change", function (e) {
    fiyistackblogbackgroundimageinput = $(this).get(0).files;
    fiyistackblogbackgroundimageboolfileadded = true;
    formData.append("fiyistack-blog-backgroundimage-input", fiyistackblogbackgroundimageinput[0], fiyistackblogbackgroundimageinput[0].name);
});

//Create a formdata object
var formData = new FormData();
$("#fiyistack-blog-insert-or-update-button").on("click", function (e) {
    //Stop stuff happening
    e.stopPropagation();
    e.preventDefault();

    //Add or edit value
    formData.append("fiyistack-blog-title-page", $("#fiyistack-blog-title-page").html());
    formData.append("fiyistack-blog-blogid-input", $("#fiyistack-blog-blogid-input").val());

    formData.append("fiyistack-blog-title-input", $("#fiyistack-blog-title-input").val());
    formData.append("fiyistack-blog-body-input", fiyistackblogbodyquill.root.innerHTML);
    if (!fiyistackblogbackgroundimageboolfileadded) {
        formData.append("fiyistack-blog-backgroundimage-input", $("#fiyistack-blog-backgroundimage-readonly").val());
    }

    //Setup request
    var xmlHttpRequest = new XMLHttpRequest();
    //Set event listeners
    xmlHttpRequest.upload.addEventListener("loadstart", function (e) {
        //Show success button and success message modal
        $("#fiyistack-blog-insert-or-update-message").addClass("btn-secondary");
        $("#fiyistack-blog-insert-or-update-message").removeClass("btn-success");
        $("#fiyistack-blog-insert-or-update-message").removeClass("btn-error");
        $("#fiyistack-blog-insert-or-update-message").removeAttr("data-toggle");
        $("#fiyistack-blog-insert-or-update-message").removeAttr("data-target");
        $("#fiyistack-blog-insert-or-update-message").html(`Sending data. Please, wait`);
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
            $("#fiyistack-blog-insert-or-update-message").addClass("btn-danger");
            $("#fiyistack-blog-insert-or-update-message").removeClass("btn-success");
            $("#fiyistack-blog-insert-or-update-message").removeClass("btn-secondary");
            $("#fiyistack-blog-insert-or-update-message").attr("data-toggle", "modal");
            $("#fiyistack-blog-insert-or-update-message").attr("data-target", "#fiyistack-blog-error-message-modal");
            $("#fiyistack-blog-insert-or-update-message").html(`<i class="fas fa-exclamation-triangle"></i> 
                                                                There was an error while sending the data`);
            $("#fiyistack-blog-error-message-title").html("There was an error while sending the data");
            $("#fiyistack-blog-error-message-text").html(xmlHttpRequest.response);
            console.log("Error:" + xmlHttpRequest.response);
        }
        else {
            //Show success button
            $("#fiyistack-blog-insert-or-update-message").addClass("btn-success");
            $("#fiyistack-blog-insert-or-update-message").removeClass("btn-error");
            $("#fiyistack-blog-insert-or-update-message").removeClass("btn-secondary");
            $("#fiyistack-blog-insert-or-update-message").removeAttr("data-toggle");
            $("#fiyistack-blog-insert-or-update-message").removeAttr("data-target");
            $("#fiyistack-blog-insert-or-update-message").html(`<i class="fas fa-check"></i>
                                                                Data sent successfully`);
        }
    };
    //Open connection
    xmlHttpRequest.open("POST", "/api/FiyiStack/Blog/1/InsertOrUpdateAsync", true);
    //Send request
    xmlHttpRequest.send(formData);
});