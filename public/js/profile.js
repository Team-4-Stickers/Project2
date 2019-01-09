$(document).ready(function () {
    $("#submitGiftButt").click(function () {

        event.preventDefault();

        var giftName = $("input#gift-name").val();
        var priceRange = $("#gift-price").val();
        var giftLink = $("input#gift-link").val();
        var giftComment = $("#gift-comment").val();
        // var giftEvent = $("option#gift-event").val();

        var newGift = {
            giftName,
            priceRange,
            giftLink,
            giftComment
        };
        console.log(newGift);

        $.post("/api/gift", newGift, function (data, status) {
            // console.log("Data: " + data + "\nStatus: " + status);
        });
    });

});