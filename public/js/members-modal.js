$(document).ready(function () {
   
    console.log('hello');
    //Activate modal
    $("#create-event-butt").click(function () {
        $("#ModalGroupForm").modal();
  
    });

    function randomString() {
        console.log("in random function");
        var _options = xtend({
            chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            parts: 1,
            part_size: 4,
    
            getChar: function (pool) {
                var random = Math.floor(Math.random() * pool.length);
                return pool.charAt(random);
                console.log(random);
            }
        });
        //or even this as you are using JQuery
        // $('#randomfield').val(randomstring);
        // console.log(randomString);
        // console.log(randomString());
       
    }

    //create card on create event
    $("#submitEventButt").click(function () {
        console.log("in submit function");
        var eventName = $("#Eventname").val();
         console.log(eventName);
         var val = Math.floor(1000 + Math.random() * 9000);
       console.log(val);
       $(".modal-body").text(val);
        
});
});

