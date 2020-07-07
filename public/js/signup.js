$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
// const notificationInput = $("input#notification-input");

  $(".navbar-toggler").click(function() {
    $(".collapse.navbar-collapse").toggleClass("show");
    $(".navbar-toggler").toggleClass("collapsed");
    $(".navbar-expand-lg").toggleClass("expanded");
  });
  $( window ).resize(function() {
    if($(".collapse.navbar-collapse").hasClass("show")){
      $(".navbar-toggler").click();
    }
  });

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      notification: $("input[name=notification]:checked").val()


    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.notification);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, notification) {
    $.post("/api/signup", {
      email: email,
      password: password,
      notification: notification
    })
      .then(() => {
        window.location.replace("");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
// .catch(handleLoginErr);
  }

  function handleLoginErr() {
    $("#alert .msg").text("Email already exists please log in");
    $("#alert").fadeIn(500);
  }
});
