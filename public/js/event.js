$(document).ready(function () {
   
   
    //create card on create event
    $("#submitEventButt").click(function () {
        console.log("in submit function");
        var eventName = $("#event-name").val();
         console.log(eventName);
         var val = Math.floor(1000 + Math.random() * 9000);
       console.log(val);
       $(".modal-body").text(val);
        
});
});

