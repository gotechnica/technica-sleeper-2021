$("#thank-you").hide()
$( "#submit-inquiry-button" ).click(function( event ) {
  var email = $("#sponsor-email-input").val();
  var name = $("#name-input").val();
  var company = $("#company-input").val();
  var message = $("#inquiry-input").val();
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://mokx4n2aq5.execute-api.us-east-1.amazonaws.com/dev/index", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    email, name, company, message
  }));
  $("#thank-you").show()
  $("#inquiry-wrapper").hide()
});
