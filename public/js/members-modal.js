$(document).ready(function () {

    //Activate modal
    $("#create-event-butt").click(function () {
        $("#ModalGroupForm").modal();
    });

    //create card on create event
    $("#submitEventButt").click(function () {
        var eventName = $("#eventName").val();
        console.log(eventName);
    });

});