$(document).ready(function () {

    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var firstNameInput = $("input#first-name-input");
    var lastNameInput = $("input#last-name-input");
    var source;

    //Grab the source of the avatar and send it to the database
    $(".avatar").on("click", function () {
        source = $(this).attr("src");
        // console.log(source);
        var avatar = $(this);
        var avatars = [$("#avatar1"), $("#avatar2"), $("#avatar3"), $("#avatar4"), $("#avatar5"), $("#avatar6")];

        for (i = 0; i < avatars.length; i++) {
            if (avatars[i].hasClass("avatar-selected")) {
                avatars[i].removeClass("avatar-selected");
            };
        };

        avatar.addClass("avatar-selected");

    });


    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function (event) {
        event.preventDefault();

        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            first_name: firstNameInput.val().trim(),
            last_name: lastNameInput.val().trim(),
            avatar_source: source
        };

        if (!userData.email || !userData.password || !userData.first_name || !userData.last_name || !userData.avatar_source) {
            return alert("Please, complete the form!");
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password, userData.first_name, userData.last_name, userData.avatar_source);
        emailInput.val("");
        passwordInput.val("");
        firstNameInput.val("");
        lastNameInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, first_name, last_name, avatar_source) {
        $.post("/api/signup", {
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            avatar_source: source
        }).then(function (data) {
            window.location.replace(data);
            // If there's an error, handle it by throwing up a bootstrap alert
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
