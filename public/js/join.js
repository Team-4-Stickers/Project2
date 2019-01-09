$(document).ready(function () {

    $("#join-event").on("click", function () {
        event.preventDefault();
        var codeInput = $("#code-input").val();

        // /api/posts/:uniqueCode
        $.get("/api/posts/" + codeInput, function (data) {
            // console.log(data);
        });
    });
});