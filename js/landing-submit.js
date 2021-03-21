$( "#email-form-wrapper" ).submit(function( event ) {
  var email = $("#email-input").val();
  console.log(email)
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://mokx4n2aq5.execute-api.us-east-1.amazonaws.com/dev/process_emails", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    "table":"Emails",
    "column":"Email",
    "email": email
  }));
  $("#email-input").blur();
  $("#email-input").addClass( "animated zoomOutRight bg-transparent" );
  setTimeout(() => {
    $("#email-input").val("")
    $("#email-input").hide();
    $("#email-form-submit").html("Thank you for subscribing!")
    $("#email-form").addClass("email-form-post-submit")
    $("#email-form-submit").addClass("email-form-post-submit")
  }, 1000);

});
