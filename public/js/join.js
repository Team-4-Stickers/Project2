$(document).ready(function () {

    $("#join-event").on("click", function () {
        event.preventDefault();
        var codeInput = $("#code-input").val();

        // /api/posts/:uniqueCode
        $.get("/api/posts/" + codeInput, function (data) {

            let yourEvent = $("<p>").html(`Event: "${data.eventName}" on ${data.eventDate} ${data.eventTime} at ${data.eventLocation}`);
            let yourMessage = $("<p>").html(`Directions: "${data.eventDirections}`);

            $(".search-results").append(yourEvent);
            $(".search-results").append(yourMessage);
        });
    });
});

