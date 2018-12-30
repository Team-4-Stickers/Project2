$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    $.get("/api/user_data").then(function (data) {

        console.log(data);

        $(".member-name").text(data.first_name);

        if (data.avatar_source == null) {
            $(".avatar").attr("src", "./images/sloth_avatar.png");
        } else {
            $(".avatar").attr("src", data.avatar_source);
        }
    });
    //Activate modal
    $("#create-event-butt").click(function () {
        $("#ModalGroupForm").modal();
    });
    //random code generator should go here i think, but it breaks when it is

    //create card on create event
    $("#submitEventButt").click(function () {
        var eventName = $("#eventName").val();
        console.log(eventName);
    });
});