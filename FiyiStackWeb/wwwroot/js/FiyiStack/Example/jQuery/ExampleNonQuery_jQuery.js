

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

//Last modification on: 23/12/2022 15:53:55

$(document).ready(function () {
fiyistackexampletexteditorquill.root.innerHTML = $("#fiyistack-example-texteditor-hidden-value").val();
    
});

//Used for Quill Editor
let fiyistackexampletexteditortoolbaroptions = [
    ["bold", "italic", "underline", "strike"],        // toggled buttons
    ["link", "blockquote", "code-block"],

    [{ "header": 1 }, { "header": 2 }],               // custom button values
    [{ "list": "ordered" }, { "list": "bullet" }],
    [{ "script": "sub" }, { "script": "super" }],      // superscript/subscript
    [{ "indent": "-1" }, { "indent": "+1" }],          // outdent/indent
    [{ "direction": "rtl" }],                         // text direction
    ["image", "video"],
    ["clean"]                                         // remove formatting button
];
let fiyistackexampletexteditorquill = new Quill("#fiyistack-example-texteditor-input", {
    modules: {
        toolbar: fiyistackexampletexteditortoolbaroptions
    },
    theme: "snow"
});


//Used for file input
let fiyistackexampletextfileinput;
let fiyistackexampletextfileboolfileadded;
$("#fiyistack-example-textfile-input").on("change", function (e) {
    fiyistackexampletextfileinput = $(this).get(0).files;
    fiyistackexampletextfileboolfileadded = true;
    formData.append("fiyistack-example-textfile-input", fiyistackexampletextfileinput[0], fiyistackexampletextfileinput[0].name);
});



//Create a formdata object
var formData = new FormData();
$("#fiyistack-example-insert-or-update-button").on("click", function (e) {
    //Stop stuff happening
    e.stopPropagation();
    e.preventDefault();

    //Add or edit value
    formData.append("fiyistack-example-title-page", $("#fiyistack-example-title-page").html());
    formData.append("fiyistack-example-exampleid-input", $("#fiyistack-example-exampleid-input").val());

    formData.append("fiyistack-example-boolean-input", $("#fiyistack-example-boolean-input").is(":checked"));
    formData.append("fiyistack-example-datetime-input", $("#fiyistack-example-datetime-input").val());
    formData.append("fiyistack-example-decimal-input", $("#fiyistack-example-decimal-input").val());
    formData.append("fiyistack-example-foreignkey1-input", $("#fiyistack-example-foreignkey1-input").val());
    formData.append("fiyistack-example-foreignkey2-input", $(".fiyistack-example-foreignkey2-a.active").next().val());
    formData.append("fiyistack-example-integer-input", $("#fiyistack-example-integer-input").val());
    formData.append("fiyistack-example-textbasic-input", $("#fiyistack-example-textbasic-input").val());
    formData.append("fiyistack-example-textemail-input", $("#fiyistack-example-textemail-input").val());
    if (!fiyistackexampletextfileboolfileadded) {
    formData.append("fiyistack-example-textfile-input", $("#fiyistack-example-textfile-readonly").val());
}
formData.append("fiyistack-example-texthexcolour-input", $("#fiyistack-example-texthexcolour-input").val());
    formData.append("fiyistack-example-textpassword-input", $("#fiyistack-example-textpassword-input").val());
    formData.append("fiyistack-example-textphonenumber-input", $("#fiyistack-example-textphonenumber-input").val());
    formData.append("fiyistack-example-texttag-input", $("#fiyistack-example-texttag-input").val());
    formData.append("fiyistack-example-textarea-input", $("#fiyistack-example-textarea-input").val());
    formData.append("fiyistack-example-texteditor-input", fiyistackexampletexteditorquill.root.innerHTML);
    formData.append("fiyistack-example-texturl-input", $("#fiyistack-example-texturl-input").val());
    

    //Setup request
    var xmlHttpRequest = new XMLHttpRequest();
    //Set event listeners
    xmlHttpRequest.upload.addEventListener("loadstart", function (e) {
        //Show success button and success message modal
        $("#fiyistack-example-insert-or-update-message").addClass("btn-secondary");
        $("#fiyistack-example-insert-or-update-message").removeClass("btn-success");
        $("#fiyistack-example-insert-or-update-message").removeClass("btn-error");
        $("#fiyistack-example-insert-or-update-message").removeAttr("data-toggle");
        $("#fiyistack-example-insert-or-update-message").removeAttr("data-target");
        $("#fiyistack-example-insert-or-update-message").html(`Sending data. Please, wait`);
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
            $("#fiyistack-example-insert-or-update-message").addClass("btn-danger");
            $("#fiyistack-example-insert-or-update-message").removeClass("btn-success");
            $("#fiyistack-example-insert-or-update-message").removeClass("btn-secondary");
            $("#fiyistack-example-insert-or-update-message").attr("data-toggle", "modal");
            $("#fiyistack-example-insert-or-update-message").attr("data-target", "#fiyistack-example-error-message-modal");
            $("#fiyistack-example-insert-or-update-message").html(`<i class="fas fa-exclamation-triangle"></i> 
                                                                There was an error while sending the data`);
            $("#fiyistack-example-error-message-title").html("There was an error while sending the data");
            $("#fiyistack-example-error-message-text").html(xmlHttpRequest.response);
            console.log("Error:" + xmlHttpRequest.response);
        }
        else {
            //Show success button
            $("#fiyistack-example-insert-or-update-message").addClass("btn-success");
            $("#fiyistack-example-insert-or-update-message").removeClass("btn-error");
            $("#fiyistack-example-insert-or-update-message").removeClass("btn-secondary");
            $("#fiyistack-example-insert-or-update-message").removeAttr("data-toggle");
            $("#fiyistack-example-insert-or-update-message").removeAttr("data-target");
            $("#fiyistack-example-insert-or-update-message").html(`<i class="fas fa-check"></i>
                                                                Data sent successfully`);
        }
    };
    //Open connection
    xmlHttpRequest.open("POST", "/api/FiyiStack/Example/1/InsertOrUpdateAsync", true);
    //Send request
    xmlHttpRequest.send(formData);
});