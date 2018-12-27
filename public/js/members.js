$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    $.get("/api/user_data").then(function (data) {
        // We probably don't need to display the e-mail...
        $(".member-name").text(data.email);
    });
    //Activate modal
    $("#create-group-butt").click(function () {
        $("#ModalGroupForm").modal();
    });
});
