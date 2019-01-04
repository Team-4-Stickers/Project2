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

});

$(".event-view").on("click", function (event) {
var id = $(this).data("id");

// Send the GET request.
$.ajax("/api/events/" + id, {
    type: "GET"
}).then(
    function () {
        console.log("viewing event", id);
        // Reload the page to get the updated list
        location.reload();
    }
);
});
});