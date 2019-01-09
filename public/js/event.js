$(document).ready(function () {

    $("#submitEventButt").click(function () {

        event.preventDefault();

        var uniqueCode = Math.floor(1000 + Math.random() * 9000);
        var eventName = $("input#event-name").val();
        var eventDate = $("input#event-date").val();
        var eventTime = $("input#event-time").val();
        var eventLocation = $("input#event-location").val();
        var eventDirections = $("input#event-directions").val();

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

        console.log(newEvent);

        $.post("/api/event", newEvent, function (data, status) {
            // console.log("Data: " + data + "\nStatus: " + status);
        });
    });
});