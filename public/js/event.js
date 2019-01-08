$(document).ready(function () {

    $("#submitEventButt").click(function () {

        event.preventDefault();

        var uniqueCode = Math.floor(1000 + Math.random() * 9000);
        var eventName = $("#event-name").val();
        var eventDate = $("#event-date").val();
        var eventTime = $("#event-time").val();
        var eventLocation = $("#event-location").val();
        var eventDirections = $("#event-directions").val();

        var newEvent = {
            eventName,
            eventDate,
            eventTime,
            eventLocation,
            eventDirections,
            uniqueCode
        };

        //Create modal card on create event
        $(".modal-body").text(uniqueCode);
        $("#exampleModal").modal("show");

        // console.log(newEvent);

        $.post("/api/event", newEvent, function (data, status) {
            // console.log("Data: " + data + "\nStatus: " + status);
        });
    });
});