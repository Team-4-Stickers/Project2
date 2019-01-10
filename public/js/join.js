$(document).ready(function () {

    $("#join-event").on("click", function () {
        event.preventDefault();
        var codeInput = $("#code-input").val();

        // /api/posts/:uniqueCode
        $.get("/api/posts/:unqiueCode", function (data) {
            db.Event.findOne({
                where: {
                  eventName: event
                }
              }).then(function (dbEvent) {
                console.log(dbEvent);
                res.json(dbEvent);
              });
            });
    
});});