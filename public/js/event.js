$(document).ready(function () {

    $("#submitEventButt").click(function () {

        event.preventDefault();

        var uniqueCode = Math.floor(1000 + Math.random() * 9000);
        var eventName = $("input#event-name").val();
        var eventDate = $("input#event-date").val();
        var eventTime = $("input#event-time").val();
        var eventLocation = $("input#event-location").val();
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

        //Copy code to clipboard
        $("#copy-btn").attr("data-clipboard-text", uniqueCode);

        var clipboard = new ClipboardJS('.btn');

        clipboard.on('success', function (e) {
            console.log(e);
        });
        clipboard.on('error', function (e) {
            console.log(e);
        });

        console.log(newEvent);

        $.post("/api/event", newEvent, function (data, status) {

        });

        $("input#event-name").val("");
        $("input#event-date").val("");
        $("input#event-time").val("");
        $("input#event-location").val("");
        $("#event-directions").val("");

    });
});