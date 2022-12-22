$(document).ready(function () {
    $("#message").hide();
});

//Create a formdata object
var formData = new FormData();

$("#send-message").on("click", function (e) {
    formData.append("name", $("#name").val());
    formData.append("surname", $("#surname").val());
    formData.append("email", $("#email").val());
    formData.append("textarea-message", $("#textarea-message").val());

    $("#message").show();

    //Setup request
    var xmlHttpRequest = new XMLHttpRequest();
    //Set event listeners
    xmlHttpRequest.upload.addEventListener("loadstart", function (e) {
        $("#message").addClass("btn-white");
        $("#message").removeClass("btn-danger");
        $("#message").removeClass("btn-success");
        $("#message").html(`Sending email. Please, wait...`);
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
            //Show danger button
            $("#message").addClass("btn-danger");
            $("#message").removeClass("btn-white");
            $("#message").removeClass("btn-success");
            $("#message").html(`<i class="fas fa-exclamation-triangle"></i> 
                                    There was an error while trying to send message. Try again.`);
            console.log("Error:" + xmlHttpRequest.response);
        }
        else {
            if (xmlHttpRequest.response == "Message sent successfully") {
                //Show success button
                $("#message").addClass("btn-success");
                $("#message").removeClass("btn-white");
                $("#message").removeClass("btn-danger");
                $("#message").html(`<i class="fas fa-check"></i>
                                    Message sent successfully`);
            }
            else {
                //Show danger button
                $("#message").addClass("btn-danger");
                $("#message").removeClass("btn-white");
                $("#message").removeClass("btn-success");
                $("#message").html(`<i class="fas fa-exclamation-triangle"></i> 
                                    The message could not be sent. Try again.`);
                console.log("Error:" + xmlHttpRequest.response);
            }
        }
    };
    //Open connection
    xmlHttpRequest.open("POST", "/api/FiyiStack/1/ContactMe", false);
    //Send request
    xmlHttpRequest.send(formData);
});