$(document).ready(function () {

    $("#join-event").on("click", function () {
        event.preventDefault();
        var codeInput = $("#code-input").val();
        console.log(codeInput);

        // /api/posts/:uniqueCode
        $.get("/api/join/" + codeInput, function (data) {

            let yourEvent = $("<p>").html(`Event: "${data.eventName}" Date: ${data.eventDate} Time: ${data.eventTime} Location: ${data.eventLocation}`);
            yourEvent.attr("data-id", data.id);
            yourEvent.addClass("event-added");
            // console.log(data.id);
            let yourMessage = $("<p>").html(`Directions: "${data.eventDirections}`);

            $(".search-results").append(yourEvent);
            $(".search-results").append(yourMessage);
            console.log(yourEvent);

            var id = $(".event-added").attr("data-id");

            console.log(id);

            var addedEvent = {
                eventStatus: true
            };

            // Send the PUT request.
            $.ajax("/api/eventadded/" + id, {
                type: "PUT",
                data: addedEvent
            }).then(
                function () {
                    // Reload the page to get the updated list
                    location.reload();
                });
        });

    });
});

